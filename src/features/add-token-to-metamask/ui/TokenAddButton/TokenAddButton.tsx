import { FC, useState } from "react";
import classNames from "classnames";

import styles from "./TokenAddButton.module.scss";
import { TokenAddButtonStore } from "../../model";
import { observer } from "mobx-react-lite";
import { TOKEN_SYMBOLS } from "../../../../entities";
import { Button, ButtonProps } from "../../../../shared/ui";
import { useRootStore } from "../../../../app/use-root-store";

export interface TokenAddButtonProps extends ButtonProps {
  className?: string;
  text: string;
  tokenSymbol: TOKEN_SYMBOLS;
}

/**
 * Использовать только если есть window.ethereum.
 * Например, установлено расширение metamask
 */

export const TokenAddButton: FC<TokenAddButtonProps> = observer(
  ({ className, tokenSymbol, text, ...otherProps }) => {

    const {currentNetwork} = useRootStore()

    const [{ addToken }] = useState(
      () => new TokenAddButtonStore(tokenSymbol, window.ethereum, currentNetwork.id)
    );

    return (
      <Button
        onClick={addToken}
        className={classNames(styles.tokenAddButton, className)}
        {...otherProps}
      >
        {text}
      </Button>
    );
  }
);
