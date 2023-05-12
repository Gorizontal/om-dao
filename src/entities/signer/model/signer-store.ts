import { makeAutoObservable } from "mobx";
import { watchSigner, FetchSignerResult} from "@wagmi/core";
import { JsonRpcSigner } from "@ethersproject/providers";
import { Chain } from "wagmi";

export class SignerStore {
  private _signer: FetchSignerResult<JsonRpcSigner> = null;

  private _isInitialized = false;
  constructor(network: Chain) {
    makeAutoObservable(this);
    this.init(network);
  }

  protected init = (network: Chain) => {
    try {
      watchSigner({ chainId: network.id }, this.onChangeSigner);
    } catch (e) {
      console.log(e);
    } finally {
      this._isInitialized = true;
    }
  };

  private onChangeSigner = (data: FetchSignerResult<JsonRpcSigner>) => {
    this._signer = data;
  };

  get signer(): JsonRpcSigner {
    if (!this._signer) {
      throw Error("Signer не существует");
    }

    return this._signer;
  }

  get hasSigner(): boolean {
    return !!this._signer;
  }
}
