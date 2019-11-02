import { takeLatest, call, put } from 'redux-saga/effects'
import { requestStationsSuccess, requestStationsError } from 'components/stations/stationsActions'
import { networksAPI } from 'library/api/api'
import { setNetworkActive } from 'components/networks/networksActions'
import types from 'components/stations/stationsConstants'

function* getStations(action) {
    yield put(setNetworkActive(action.payload))
    try {
        const { data } = yield call(networksAPI.getNetworkProps, action.payload.id)
        yield put(requestStationsSuccess(data.network.stations))
    } catch (error) {
        console.log(error)
        yield put(requestStationsError(error))
    }
}

export function* getStationsSaga() {
    yield takeLatest(types.REQUEST_STATIONS, getStations)
}


