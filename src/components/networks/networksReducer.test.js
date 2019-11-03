import types from 'components/networks/networksConstants'
import networksReducer, { initialState } from 'components/networks/networksReducer'

describe('networksReducer test', () => {
    it('REQUEST_NETWORKS', () => {
        const action = {
            type: types.REQUEST_NETWORKS
        }

        expect(networksReducer(initialState, action)).toEqual({
            ...initialState,
            isRequesting: true
        })
    })

    it('REQUEST_NETWORKS_ERROR', () => {
        const action = {
            type: types.REQUEST_NETWORKS_ERROR,
            payload: ['error']
        }

        expect(networksReducer({ ...initialState, isRequesting: true }, action)).toEqual({
            ...initialState,
            isRequesting: false,
            error: action.payload
        })
    })

    it('REQUEST_NETWORKS_SUCCESS', () => {
        const action = {
            type: types.REQUEST_NETWORKS_SUCCESS,
            payload: [{ data: 'data1' }, { data: 'data2' }]
        }

        expect(networksReducer({ ...initialState, isRequesting: true }, action)).toEqual({
            ...initialState,
            isRequesting: false,
            networksArr: action.payload
        })
    })

    it('SET_NETWORK_ACTIVE', () => {
        const action = {
            type: types.SET_NETWORK_ACTIVE,
            payload: [{ data: 'data' }]
        }

        expect(networksReducer(initialState, action)).toEqual({
            ...initialState,
            activeNetwork: action.payload
        })
    })

    it('ADD_NETWORK_TO_FAVORITES', () => {
        const action = {
            type: types.ADD_NETWORK_TO_FAVORITES,
            payload: { data: 'data' }
        }

        expect(networksReducer(initialState, action)).toEqual({
            ...initialState,
            favoriteNetworks: [...initialState.favoriteNetworks, action.payload]
        })
    })

    it('REMOVE_NETWORK_FROM_FAVORITES', () => {
        const action = {
            type: types.REMOVE_NETWORK_FROM_FAVORITES,
            payload: 'some-id'
        }

        expect(networksReducer({
            ...initialState,
            favoriteNetworks: [{ company: ['some company'], id: 'some-id' }]
        }, action)).toEqual({
            ...initialState,
            favoriteNetworks: initialState.favoriteNetworks.filter(val => val.id !== action.payload)
        })
    })
})
