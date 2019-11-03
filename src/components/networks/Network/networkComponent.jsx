import React from 'react'
import styles from 'components/networks/Network/networkComponentStyles.module.scss'
import InFavorite from 'library/common/commonComponents/inFavorite/inFavorite'
import NetworkItem from 'library/common/commonComponents/networkItem/networkItem'
const NetworkComponent = ({
    network,
    activeNetwork,
    favoriteNetworks,
    getStations,
    setNetworkInFavorites
}) => {
    return (
        <div className={styles.networkComponentWrapper}>
            <NetworkItem
                activeNetwork={activeNetwork}
                network={network}
                networkCompany={network.company ? network.company[0] : 'No Data'}
                networkId={network.id ? network.id : 'No-Data'}
                getStations={getStations} />
            <InFavorite
                callback={setNetworkInFavorites}
                inFavoriteArr={favoriteNetworks}
                argument={network}
            />
        </div>
    )
}

export default NetworkComponent