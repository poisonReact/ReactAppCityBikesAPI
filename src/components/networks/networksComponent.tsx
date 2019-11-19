import React from 'react'
import styles from 'components/networks/networksStyles.module.scss'
import Preloader from 'library/common/commonComponents/preloader/preloader'
import NetworkComponent from 'components/networks/Network/networkComponent'
import NetworkError from 'library/common/commonComponents/networkError/networkError'
import { INetwork } from 'components/networks/networksTypes'

interface InputProps {
    isRequesting: boolean;
    networks: INetwork[];
    activeNetwork: INetwork;
    favoriteNetworks: INetwork[];
    networksError: any;
    addNetworkToFavorites: (value: INetwork) => void;
    removeNetworkFromFavorites: (value: string) => void;
    requestStations: (value: INetwork) => void
}

const NetworksComponent = ({
    isRequesting,
    networks,
    activeNetwork,
    favoriteNetworks,
    networksError,
    addNetworkToFavorites,
    removeNetworkFromFavorites,
    requestStations
}: InputProps) => {

    const SetNetworkInFavorites = (val: INetwork) => {
        favoriteNetworks.map(val => val.id).indexOf(val.id) !== -1
            ? removeNetworkFromFavorites(val.id)
            : addNetworkToFavorites(val)
    }

    return (
        <div>
            {networksError && <NetworkError />}
            <div className={styles.networksListHeader}>Networks List</div>
            <div className={styles.networksListWrapper}
                style={{ height: favoriteNetworks.length > 0 ? '341px' : '574px' }}>
                {isRequesting && <Preloader />}
                <div style={{ visibility: isRequesting ? 'hidden' : 'visible' }}>
                    {networks && networks.map((val) => {
                        return (
                            <NetworkComponent
                                activeNetwork={activeNetwork}
                                network={val}
                                key={val.id}
                                favoriteNetworks={favoriteNetworks}
                                getStations={requestStations}
                                setNetworkInFavorites={SetNetworkInFavorites}
                            />
                        )
                    })}
                </div>
            </div>

            {favoriteNetworks.length > 0 && <div>
                <div>
                    <div className={styles.networksListHeader}>Favorite Networks List</div>
                    <div className={styles.favoriteNetworksListWrapper}>
                        <div>
                            {favoriteNetworks && favoriteNetworks.map((val) => {
                                return (
                                    <NetworkComponent
                                        activeNetwork={activeNetwork}
                                        network={val}
                                        key={val.id}
                                        favoriteNetworks={favoriteNetworks}
                                        getStations={requestStations}
                                        setNetworkInFavorites={SetNetworkInFavorites}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default NetworksComponent