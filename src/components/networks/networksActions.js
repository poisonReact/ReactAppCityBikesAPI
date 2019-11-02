import types from 'components/networks/networksConstants'

export const requestNetworks = () => {
    return {
        type: types.REQUEST_NETWORKS
    }
}

export const requestNetworksError = (payload) => {
    return {
        type: types.REQUEST_NETWORKS_ERROR,
        payload
    }
}

export const requestNetworksSuccess = (payload) => {
    return {
        type: types.REQUEST_NETWORKS_SUCCESS,
        payload
    }
}


export const setNetworkActive = (payload) => {
    return {
        type: types.SET_NETWORK_ACTIVE,
        payload
    }
}


export const addNetworkToFavorites = (payload) => {
    return {
        type: types.ADD_NETWORK_TO_FAVORITES,
        payload
    }
}

export const removeNetworkFromFavorites = (payload) => {
    return {
        type: types.REMOVE_NETWORK_FROM_FAVORITES,
        payload
    }
}