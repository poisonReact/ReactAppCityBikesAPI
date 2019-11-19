import { connect } from 'react-redux'
import { compose } from 'redux'
import { addNetworkToFavorites, removeNetworkFromFavorites } from 'components/networks/networksActions'
import { getNetworks, getFavoriteNetworks, getNetworksIsRequesting, getActiveNetwork, getNetworksError } from 'components/networks/networksSelectors'
import { requestStations } from 'components/stations/stationsActions'
import networksComponent from 'components/networks/networksComponent'

const mapStateToProps = (state) => ({
    networks: getNetworks(state),
    favoriteNetworks: getFavoriteNetworks(state),
    isRequesting: getNetworksIsRequesting(state),
    activeNetwork: getActiveNetwork(state),
    networksError: getNetworksError(state)
})

export default compose(
    connect(mapStateToProps, { addNetworkToFavorites, removeNetworkFromFavorites, requestStations })
)(networksComponent)