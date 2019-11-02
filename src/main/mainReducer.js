import { combineReducers } from "redux"
import networksReducer from "../components/networks/networksReducer"
import stationsReducer from "../components/stations/stationsReducer"

const mainReducer = combineReducers({
    networksData: networksReducer,
    stationsData: stationsReducer
})

export default mainReducer
