import React from 'react'
import styles from 'components/networks/Network/networkComponentStyles.module.scss'
import InFavoriteNetwork from 'library/common/commonComponents/inFavorite/inFavoriteNetwork'
import NetworkItem from 'library/common/commonComponents/networkItem/networkItem'
import { INetwork } from 'components/networks/networksTypes'

interface InputProps {
    network: INetwork;
    activeNetwork: INetwork;
    favoriteNetworks: INetwork[];
    getStations: (value: INetwork) => void;
    setNetworkInFavorites: (value: INetwork) => void
}

const NetworkComponent = ({
    network,
    activeNetwork,
    favoriteNetworks,
    getStations,
    setNetworkInFavorites
}: InputProps) => {
    return (
        <div className={styles.networkComponentWrapper}>
            <NetworkItem
                activeNetwork={activeNetwork}
                network={network}
                networkCompany={network.company ? network.company[0] : 'No Data'}
                networkId={network.id ? network.id : 'No-Data'}
                getStations={getStations} />
            <InFavoriteNetwork
                callback={setNetworkInFavorites}
                inFavoriteArr={favoriteNetworks}
                argument={network}
            />
        </div>
    )
}

export default NetworkComponent