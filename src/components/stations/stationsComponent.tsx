import React from 'react'
import styles from 'components/stations/stationsStyles.module.scss'
import Preloader from 'library/common/commonComponents/preloader/preloader'
import StationComponent from 'components/stations/station/stationComponent'
import StationItem from 'library/common/commonComponents/stationItem/stationItem'
import NetworkError from 'library/common/commonComponents/networkError/networkError'
import { IStation } from 'components/stations/stationsTypes'
import { INetwork } from 'components/networks/networksTypes'

interface InputProps {
    stations: IStation[];
    activeNetwork: INetwork;
    favoriteStations: IStation[];
    isRequesting: boolean;
    stationsError: any;
    addStationToFavorites: (value: IStation) => void;
    removeStationFromFavorites: (value: string) => void
}

const StationsComponent = ({
    stations,
    activeNetwork,
    favoriteStations,
    isRequesting,
    stationsError,
    addStationToFavorites,
    removeStationFromFavorites
}: InputProps) => {

    const SetStationInFavorites = (val: IStation) => {
        favoriteStations.map(val => val.id).indexOf(val.id) !== -1
            ? removeStationFromFavorites(val.id)
            : addStationToFavorites(val)
    }

    return (
        <div>
            <div className={styles.stationsListHeader}>Stations List</div>
            <div className={styles.stationsListWrapper} style={{ height: favoriteStations.length > 0 ? '341px' : '574px' }}>
                {stationsError && <NetworkError />}
                {isRequesting && <Preloader />}
                <div style={{ visibility: isRequesting ? 'hidden' : 'visible' }}>
                    {stations === null
                        ? <Preloader />
                        : stations.length === 0
                            ? <div>{`No data from ${activeNetwork.company} Network`}</div>
                            : <div className={styles.stationsListHeaderItem}>
                                <StationItem
                                    name={'Location'}
                                    freeBikes={'Free Bikes'}
                                    emptySlots={'Empty Slots'}
                                />
                            </div>
                    }
                    {stations && stations.map((val) => {
                        return (
                            <StationComponent
                                setStationInFavorites={SetStationInFavorites}
                                favoriteStations={favoriteStations}
                                key={val.id}
                                station={val} />
                        )
                    })}
                </div>
            </div>

            {favoriteStations.length > 0 && <div>
                <div className={styles.stationsListHeader}>Favorite Stations List</div>
                <div className={styles.favoriteStationsListWrapper}>
                    <div className={styles.stationsListHeaderItem}>
                        <StationItem
                            name={'Location'}
                            freeBikes={'Free Bikes'}
                            emptySlots={'Empty Slots'}
                        />
                    </div>
                    {favoriteStations && favoriteStations.map((val) => {
                        return (
                            <StationComponent
                                setStationInFavorites={SetStationInFavorites}
                                favoriteStations={favoriteStations}
                                key={val.id}
                                station={val} />
                        )
                    })}
                </div>
            </div>
            }
        </div>
    )
}

export default StationsComponent