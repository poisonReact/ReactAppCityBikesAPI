import React from 'react'
import styles from 'components/stations/station/stationComponentStyles.module.scss'
import InFavorite from 'library/common/commonComponents/inFavorite/inFavorite'
import StationItem from 'library/common/commonComponents/stationItem/stationItem'
const StationComponent = ({ station, favoriteStations, setStationInFavorites }) => {
    return (
        <div className={styles.stationComponentWrapper}>
            <StationItem
                name={station.name}
                freeBikes={station.free_bikes}
                emptySlots={station.empty_slots}
            />

            <InFavorite
                callback={setStationInFavorites}
                inFavoriteArr={favoriteStations}
                argument={station}
            />
        </div>
    )
}

export default StationComponent