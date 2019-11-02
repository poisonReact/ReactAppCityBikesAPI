import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'http://api.citybik.es/v2/'
})

export const networksAPI = {
    async getNetworks() {
        try {
            let result = await instance.get(`networks?fields=id,company`)
            return result
        } catch (error) {
            return Promise.reject(new Error(400));
        }
    },

    async getNetworkProps(id) {
        try {
            let result = await instance.get(`networks/${id}`)
            return result
        } catch (error) {
            return Promise.reject(new Error(400));
        }
    }
}
