import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '91d99155-0a12-4a98-9006-bb452c7fea31'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const Api = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    isFollowerUsers(id, method) {
        if (method === 'delete') {
            return instance.delete(`follow/${id}`).then(response => {
                return response.data
            })
        } else if (method === 'post') {
            return instance.post(`follow/${id}`).then(response => {
                return response
            })
        }
    },

    getProfile(userId) {
        return instance.get('profile/' + userId).then(response => {
            return response.data
        })
    },

    getAuthMe() {
        return instance.get('auth/me').then(response => {
            return response.data
        })
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },

    updateStatus(status) {
        return instance.put('profile/status', {status: status})
    }
}

