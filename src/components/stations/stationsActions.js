import types from 'components/stations/stationsConstants'

export const requestStations = (payload) => {
    return {
        type: types.REQUEST_STATIONS,
        payload
    }
}

export const requestStationsError = (payload) => {
    return {
        type: types.REQUEST_STATIONS_ERROR,
        payload
    }
}

export const requestStationsSuccess = (payload) => {
    return {
        type: types.REQUEST_STATIONS_SUCCESS,
        payload
    }
}

export const addStationToFavorites = (payload) => {
    return {
        type: types.ADD_STATION_TO_FAVORITES,
        payload
    }
}

export const removeStationFromFavorites = (payload) => {
    return {
        type: types.REMOVE_STATION_FROM_FAVORITES,
        payload
    }
}

