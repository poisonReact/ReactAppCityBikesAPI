import { createSelector } from 'reselect'

export const getNetworks = (state) => {
    return state.networksData.networksArr
}

export const getFavoriteNetworks = (state) => {
    return state.networksData.favoriteNetworks
}

export const getActiveNetwork = (state) => {
    return state.networksData.activeNetwork
}

export const getNetworksError = (state) => {
    return state.networksData.error
}

export const getNetworksIsRequesting = (state) => {
    return state.networksData.isRequesting
}

export const getRandomNetwork = createSelector(
    [getNetworks],
    (networks) => {
        if (networks) {
            let random = Math.random() * (networks.length + 1)
            return networks[Math.floor(random)]
        }
    })


