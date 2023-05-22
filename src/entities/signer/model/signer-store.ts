import { makeAutoObservable } from "mobx";
import { PublicClient, watchPublicClient } from "@wagmi/core";
import { JsonRpcSigner } from "@ethersproject/providers";
import { Chain } from "wagmi";

export class SignerStore {
  private _signer: null | PublicClient = null;

  private _isInitialized = false;
  constructor(network: Chain) {
    makeAutoObservable(this);
    this.init(network);
  }

  protected init = (network: Chain) => {
    try {
      watchPublicClient({ chainId: network.id }, this.onChangeSigner);
    } catch (e) {
      console.log(e);
    } finally {
      this._isInitialized = true;
    }
  };

  private onChangeSigner = (data: PublicClient | null) => {
    this._signer = data;
  };

  get signer(): PublicClient {
    if (!this._signer) {
      throw Error("Signer не существует");
    }

    return this._signer;
  }

  get hasSigner(): boolean {
    return !!this._signer;
  }
}
