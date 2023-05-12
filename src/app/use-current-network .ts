import { useRootStore } from "./use-root-store";
import { Chain } from "wagmi";

export const useCurrentNetwork = (): Chain => {
    const {currentNetwork} = useRootStore();
    return currentNetwork
};
