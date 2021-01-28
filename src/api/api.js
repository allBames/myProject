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

    follow(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response
        })
    },

    unfollow(id) {

        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        })
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
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },

    logout() {
        return instance.delete(`auth/login`)
    },

    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

