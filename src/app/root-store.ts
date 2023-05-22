import { makeAutoObservable } from "mobx";
import { SignerStore } from "../entities/signer";
import { JsonRpcSigner, Provider } from "@ethersproject/providers";
import { ProviderStore } from "../entities/provider";
import {  configureChains, createConfig, Config, PublicClient } from "wagmi";
import {polygon, polygonMumbai, mainnet, goerli, bsc, bscTestnet, Chain} from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { isProd, WALLET_CONNECT_PROJECT_ID } from "../shared/config";
import { Client } from "viem";
import { Signer } from "ethers";


export class RootStore {
    private _signerStore: SignerStore | undefined;
    private _providerStore: ProviderStore | undefined;
    private _wagmiClient: Config | undefined;
    private _ethereumClient: EthereumClient | undefined;
    private _isAppInitialized: boolean = false;
    private _refCode: string | undefined;
    private _currentNetwork: Chain = isProd() ? mainnet : goerli;

    constructor() {
        makeAutoObservable(this);
        this.init();
    }

    protected init = () => {
        this._isAppInitialized = false;
        try {
            this.createClients();
            this.initStores();
            this.checkRefCode();
        } catch (e) {
            console.log(e);
        } finally {
            this._isAppInitialized = true;
        }
    };

    protected initStores = () => {
        const {publicClient} = this.wagmiClient;
        this._signerStore = new SignerStore(this._currentNetwork);
        this._providerStore = new ProviderStore(publicClient, this._currentNetwork);
    };

    protected createClients = () => {

        const { publicClient } = configureChains([mainnet, polygon], [
            w3mProvider({ projectId: WALLET_CONNECT_PROJECT_ID }),
        ]);

        const wagmiClient = createConfig({
            autoConnect: true,
            connectors: w3mConnectors({ projectId: WALLET_CONNECT_PROJECT_ID , version: 1, chains: [this._currentNetwork ]}),
            publicClient,
        });
        const ethereumClient = new EthereumClient(
            wagmiClient,
            [this._currentNetwork]
        );

        this._wagmiClient = wagmiClient as Config;
        this._ethereumClient = ethereumClient;
    };

 

    public checkRefCode = () => {
        const refCode = localStorage.getItem("refCode");

        if (refCode) {
            this._refCode = refCode;
        }
    };

    public updateRefCode = (newRefCode: string | undefined) => {
        if (newRefCode) {
            localStorage.setItem("refCode", newRefCode);
        } else {
            localStorage.removeItem("refCode");
        }
        this._refCode = newRefCode;
    };


    public changeNetwork = (network: Chain): void => {
        this._currentNetwork = network;
        this.init()
    }

    public get refCode(): string | undefined {
        return this._refCode;
    }

    public get signerStore(): SignerStore {
        if (!this._signerStore) {
            throw Error("SignerStore не существует");
        }

        return this._signerStore;
    }

    public get providerStore(): ProviderStore {
        if (!this._providerStore) {
            throw Error("ProviderStore не существует");
        }
        return this._providerStore;
    }

    public get ethereumClient(): EthereumClient {
        if (!this._ethereumClient) {
            throw Error("EthereumClient не существует");
        }

        return this._ethereumClient;
    }

    public get wagmiClient(): Config {
        if (!this._wagmiClient) {
            throw Error("WagmiClient не существует");
        }

        return this._wagmiClient;
    }

    public get signerOrProvider(): PublicClient | undefined  {
        if (this.signerStore.hasSigner) {
            return this.signerStore.signer;
        }

        if (this.providerStore.hasProvider) {
            return this.providerStore.provider;
        }

        console.log("undefined");
        return undefined;
    }

    public get isAppInitialized(): boolean {
        return this._isAppInitialized && this.providerStore.hasProvider;
    }

    public get currentNetwork(): Chain {
        return this._currentNetwork
    }

}
