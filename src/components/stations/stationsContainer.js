import { connect } from 'react-redux'
import { compose } from 'redux'
import { getStations, getStationsIsRequesting, getFavoriteStations, getStationsError } from 'components/stations/stationsSelectors'
import { addStationToFavorites, removeStationFromFavorites } from 'components/stations/stationsActions'
import { getActiveNetwork } from 'components/networks/networksSelectors'
import StationsComponent from 'components/stations/stationsComponent'

const mapStateToProps = (state) => ({
    stations: getStations(state),
    favoriteStations: getFavoriteStations(state),
    isRequesting: getStationsIsRequesting(state),
    activeNetwork: getActiveNetwork(state),
    stationsError: getStationsError(state)
})

export default compose(
    connect(mapStateToProps, { addStationToFavorites, removeStationFromFavorites })
)(StationsComponent)