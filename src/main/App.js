import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import styles from 'main/main.module.scss'
import NetworksContainer from 'components/networks/networksContainer'
import StationsContainer from 'components/stations/stationsContainer'
import InfoBar from 'components/infoBar/infoBar'
import { requestNetworks } from 'components/networks/networksActions'
import { getActiveNetwork } from 'components/networks/networksSelectors'
import { getStationsFreeBikes } from 'components/stations/stationsSelectors'


const App = ({ requestNetworks, freeBikes, activeNetwork }) => {
  useEffect(() => {
    requestNetworks()
  }, [requestNetworks])

  return (
    <div>
      <InfoBar
        activeNetwork={activeNetwork}
        freeBikes={freeBikes}
      />
      <div className={styles.mainScreen}>
        <NetworksContainer />
        <StationsContainer />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  activeNetwork: getActiveNetwork(state),
  freeBikes: getStationsFreeBikes(state)
})

export default compose(
  connect(mapStateToProps, { requestNetworks })
)(App)
