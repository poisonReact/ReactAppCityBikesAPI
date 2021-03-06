import types from "components/stations/stationsConstants"

const initialState = {
    isRequesting: false,
    favoriteStations: [],
    error: null,
    stations: null
}

const stationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REQUEST_STATIONS:
            return {
                ...state,
                isRequesting: true,
            }
        case types.REQUEST_STATIONS_ERROR:
            return {
                ...state,
                isRequesting: false,
                error: action.payload
            }
        case types.REQUEST_STATIONS_SUCCESS:
            return {
                ...state,
                isRequesting: false,
                stations: action.payload
            }
        case types.ADD_STATION_TO_FAVORITES:
            return {
                ...state,
                favoriteStations: [...state.favoriteStations, action.payload]
            }
        case types.REMOVE_STATION_FROM_FAVORITES:
            return {
                ...state,
                favoriteStations: state.favoriteStations.filter(val => val.id !== action.payload)
            }
        default:
            return state
    }
}

export default stationsReducer
