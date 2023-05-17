import React, { FC, useState } from 'react'
import { Button } from '../../../shared/ui'
import { observer } from 'mobx-react-lite'
import { SelectNetworkStore } from "../model";
import { useRootStore } from '../../../app/use-root-store';
import { Chain } from 'wagmi';

import { Web3NetworkSwitch, useWeb3Modal } from '@web3modal/react'



export const NetworkButton: FC = observer(() => {

    const [store] = useState(
        () => new SelectNetworkStore()
      );   

    const {changeNetwork} = useRootStore();

    const {updateActiveNetwork, netwokList, activeNetwork, activeFlag, updateActiveFlag } = store  

    const onClickActive = ()=> {
        updateActiveFlag()
    }

    const handleNetwork = (network: Chain) => {
        updateActiveNetwork(network)
        changeNetwork(network)
        updateActiveFlag(false)
    }

    const { isOpen, open, close } = useWeb3Modal();

    return (
            <div>
                <Button onClick={onClickActive}>
                    {activeNetwork.name}
                </Button>
                <Web3NetworkSwitch/>
                { activeFlag && (
                    <div className='absolute flex flex-col'>
                        {netwokList.map((network)=>{
                            return (
                                <button key={network.name} onClick={()=>{handleNetwork(network)}}>{network.name}</button>
                            )})}
                    </div>
                 )}
            </div>       
    )
})

