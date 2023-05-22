import { makeAutoObservable } from "mobx";
import { PublicClient, watchPublicClient } from "@wagmi/core";
import { Chain } from "wagmi";

export class ProviderStore {
  private _provider: null | PublicClient = null;


  private _isInitialized = false;
  constructor(defaultProvider: PublicClient, network: Chain) {
    makeAutoObservable(this);
    this._provider = defaultProvider;
    this.init(network);
  }

  protected init = (network: Chain) => {
    try {
      watchPublicClient({ chainId: network.id }, this.onChangeProvider);
    } catch (e) {
      console.log(e);
    } finally {
      this._isInitialized = true;
    }
  };

  private onChangeProvider = (data: PublicClient) => {
    this._provider = data;
  };

  get provider(): PublicClient {
    if (!this._provider) {
      throw Error("Provider не существует");
    }

    return this._provider;
  }

  get hasProvider(): boolean {
    return !!this._provider;
  }


}
