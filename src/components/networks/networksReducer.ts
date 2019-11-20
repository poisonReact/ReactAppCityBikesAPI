import types from 'components/networks/networksConstants'
import { ActionTypes, INetwork } from 'components/networks/networksTypes'

interface IInitialState {
    isRequesting: boolean;
    error: any;
    networksArr: INetwork[] | null;
    favoriteNetworks: INetwork[];
    activeNetwork: INetwork | null
}

export const initialState: IInitialState = {
    isRequesting: false,
    error: null,
    networksArr: null,
    favoriteNetworks: [],
    activeNetwork: null
}

const networkReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case types.SET_NETWORK_ACTIVE:
            return {
                ...state,
                activeNetwork: action.payload
            }
        case types.REQUEST_NETWORKS:
            return {
                ...state,
                isRequesting: true
            }
        case types.REQUEST_NETWORKS_ERROR:
            return {
                ...state,
                isRequesting: false,
                error: action.payload
            }
        case types.REQUEST_NETWORKS_SUCCESS:
            return {
                ...state,
                isRequesting: false,
                networksArr: action.payload
            }
        case types.ADD_NETWORK_TO_FAVORITES:
            return {
                ...state,
                favoriteNetworks: [...state.favoriteNetworks, action.payload]
            }
        case types.REMOVE_NETWORK_FROM_FAVORITES:
            return {
                ...state,
                favoriteNetworks: state.favoriteNetworks.filter(val => val.id !== action.payload)
            }
        default:
            return state
    }
}



export default networkReducer
