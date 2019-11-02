import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import styles from 'components/stations/stationsStyles.module.scss'
import { getStations, getStationsIsRequesting, getFavoriteStations } from 'components/stations/stationsSelectors'
import Preloader from 'library/common/commonComponents/preloader/preloader'
import StationComponent from 'components/stations/station/stationComponent'
import { addStationToFavorites, removeStationFromFavorites } from 'components/stations/stationsActions'
import StationItem from 'library/common/commonComponents/stationItem/stationItem'
import { getActiveNetwork } from 'components/networks/networksSelectors'

const StationsContainer = ({
  stations,
  activeNetwork,
  favoriteStations,
  isRequesting,
  addStationToFavorites,
  removeStationFromFavorites }) => {

  const SetStationInFavorites = (val) => {
    favoriteStations.map(val => val.id).indexOf(val.id) !== -1
      ? removeStationFromFavorites(val.id)
      : addStationToFavorites(val)
  }

  return (
    <div  >
      <div className={styles.stationsListHeader}>Stations List</div>
      <div className={styles.stationsListWrapper} style={{ height: favoriteStations.length > 0 ? '341px' : '574px' }}>
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

const mapStateToProps = (state) => ({
  stations: getStations(state),
  favoriteStations: getFavoriteStations(state),
  isRequesting: getStationsIsRequesting(state),
  activeNetwork: getActiveNetwork(state)
})

export default compose(
  connect(mapStateToProps, { addStationToFavorites, removeStationFromFavorites })
)(StationsContainer)