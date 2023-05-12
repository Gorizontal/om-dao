import { makeAutoObservable } from "mobx";
import {polygon, polygonMumbai, mainnet, goerli, bsc, bscTestnet, Chain} from 'wagmi/chains'
import { isProd } from "../../../shared/config";

export class SelectNetworkStore {

    private _networkList: Chain[] = isProd() ? [mainnet, polygon, bsc] : [goerli, polygonMumbai, bscTestnet]

    private _activeNetwork: Chain = this._networkList[0];
    private _activeFlag: boolean = false;

    constructor(){
        makeAutoObservable(this);
    }

    updateActiveNetwork = (network: Chain)=>{
        this._activeNetwork = network;
    }

    updateActiveFlag = (boolean?: boolean) => {
        this._activeFlag = boolean ? boolean : !this._activeFlag;
    }

    public get netwokList(){
        return this._networkList;
    }
    
    public get activeNetwork(){
        return this._activeNetwork;
    }

    public get activeFlag() {
        return this._activeFlag;
    }
}