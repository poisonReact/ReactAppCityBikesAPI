import { takeLatest, call, put, select } from 'redux-saga/effects'
import { requestNetworksSuccess, requestNetworksError } from 'components/networks/networksActions'
import { networksAPI } from 'library/api/api'
import types from 'components/networks/networksConstants'
import { requestStations } from 'components/stations/stationsActions'
import { getRandomNetwork } from 'components/networks/networksSelectors'


function* getNetworks() {
    try {
        const { data } = yield call(networksAPI.getNetworks)
        yield put(requestNetworksSuccess(data.networks))
        let randomNetwork = yield select(getRandomNetwork)
        yield put(requestStations(randomNetwork))
    } catch (error) {
        console.log(error)
        yield put(requestNetworksError(error))
    }
}

export function* getNetworksSaga() {
    yield takeLatest(types.REQUEST_NETWORKS, getNetworks)
}

