import { takeLatest, call, put, select } from 'redux-saga/effects'
import { requestNetworksSuccess, requestNetworksError } from "./networksActions"
import { networksAPI } from "../../library/api/api"
import types from "./networksConstants"
import { requestStations } from '../stations/stationsActions'
import { getRandomNetwork } from './networksSelectors'


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

