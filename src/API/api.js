import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'e6f3cf39-a372-4d79-816b-42398343f2f1'
    }
})

export const userApi = {
    //UsersPage
    showUsers(item1, item2) {
        return instance.get(`users?page=${item1}&count=${item2}`) //запрашиваем список пользователей
            .then(response => response.data)
        debugger
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`) //отписываемся от пользователя
            .then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`, {})//подписываемся на пользователя
            .then(response => response.data)
    },
};


//ProfilePage
export const profileApi = {
    showProfile(userId) {
        return instance.get(`profile/${userId}`) //запрашиваем профиль
    },
    getProfileStatus(userId) {
        return instance.get(`/profile/status/${userId}`)//запрашиваем статус пользователя
    },
    setProfileStatus(status) {
        return instance.put(`/profile/status`, { status })//меняем статус (тому кто авторизирован)
    }
};


//My profile (login)
export const authApi = {
    showMyProfile() {
        return instance.get(`auth/me`)
            .then(response => response.data) //запрашиваем профиль авторизированного пользователя

    },
    login(email, password, rememberMe = false) {
        return instance.post(`/auth/login`, { email, password, rememberMe }) //логинимся
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`) //вылогиниваемся 
            .then(response => response.data)
    },
};





