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
        return instance.get(`users?page=${item1}&count=${item2}`) //Запрашиваем список пользователей (Request a list of users)
            .then(response => response.data)
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`) //Отписываемся от пользователя (Unsubscribe from user)
            .then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`, {})//Подписываемся на пользователя  (Subscribe to the user)
            .then(response => response.data)
    },
};


//ProfilePage
export const profileApi = {
    showProfile(userId) {
        return instance.get(`profile/${userId}`) //Запрашиваем профиль (Request a profile)
    },
    getProfileStatus(userId) {
        return instance.get(`profile/status/${userId}`)//Запрашиваем статус пользователя  (Request user status)
    },
    setProfileStatus(status) {
        return instance.put(`profile/status`, { status })//Меняем статус (тому кто авторизирован)    Change the status (to those who are authorized)
    },
    savePhoto(photo) {
        let formData = new FormData();
        formData.append('file', photo);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })//Меняем аватар пользователя (Change user avatar)
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile) // Меняем данные в профиле (Change profile data)
    },
};


//My profile (login)
export const authApi = {
    showMyProfile() {
        return instance.get(`auth/me`)
            .then(response => response.data) //Запрашиваем профиль авторизированного пользователя (Request an authorized user profile)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha }) //Логинимся (Login)
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`) //Вылогиниваемся  (Log out)
            .then(response => response.data)
    },
    getCaptcha() {                     //Показываем капчу (Show captcha)
        return instance.get(`security/get-captcha-url`)
            .then(response => response.data)
    }
};





