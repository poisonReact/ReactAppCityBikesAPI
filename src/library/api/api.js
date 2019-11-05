import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'http://api.citybik.es/v2/'
})

export const networksAPI = {
    async getNetworks() {
        try {
            return instance.get(`networks?fields=id,company`)
        } catch (error) {
            return Promise.reject(error);
        }
    },

    async getNetworkProps(id) {
        try {
            return instance.get(`networks/${id}`)
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
