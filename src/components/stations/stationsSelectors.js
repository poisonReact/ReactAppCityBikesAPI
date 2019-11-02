import { createSelector } from 'reselect'

export const getStations = (state) => {
    return state.stationsData.stations
}

export const getStationsError = (state) => {
    return state.stationsData.error
}

export const getStationsIsRequesting = (state) => {
    return state.stationsData.isRequesting
}

export const getFavoriteStations = (state) => {
    return state.stationsData.favoriteStations
}

export const getStationsFreeBikes = createSelector(
    [getStations],
    (stations) => {
        if (stations) {
            const totalFreeBikes = stations.map(val => +val.free_bikes).reduce((a, b) => a + b, 0)
            return totalFreeBikes
        }
    })
