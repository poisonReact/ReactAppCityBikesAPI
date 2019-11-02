import { all, fork } from 'redux-saga/effects'
import { getNetworksSaga } from 'components/networks/networksSaga.js'
import { getStationsSaga } from 'components/stations/stationsSaga.js'

export default function* mainSaga() {
    yield all([
        fork(getNetworksSaga),
        fork(getStationsSaga)
    ])
}