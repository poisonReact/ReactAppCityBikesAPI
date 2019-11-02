import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import styles from './networksStyles.module.scss'
import { addNetworkToFavorites, removeNetworkFromFavorites } from './networksActions'
import { getNetworks, getFavoriteNetworks, getNetworksIsRequesting, getActiveNetwork } from './networksSelectors'
import Preloader from '../../library/common/commonComponents/preloader/preloader'
import NetworkComponent from './Network/networkComponent'
import { requestStations } from '../stations/stationsActions'

const NetworksContainer = ({
  isRequesting,
  networks,
  activeNetwork,
  favoriteNetworks,
  addNetworkToFavorites,
  removeNetworkFromFavorites,
  requestStations
}) => {

  const SetNetworkInFavorites = (val) => {
    favoriteNetworks.map(val => val.id).indexOf(val.id) !== -1
      ? removeNetworkFromFavorites(val.id)
      : addNetworkToFavorites(val)
  }

  return (
    <div>
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

const mapStateToProps = (state) => ({
  networks: getNetworks(state),
  favoriteNetworks: getFavoriteNetworks(state),
  isRequesting: getNetworksIsRequesting(state),
  activeNetwork: getActiveNetwork(state)
})

export default compose(
  connect(mapStateToProps, { addNetworkToFavorites, removeNetworkFromFavorites, requestStations })
)(NetworksContainer)