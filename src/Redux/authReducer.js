import { authApi } from "../API/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'src/Redux/SET-USER-DATA';
const SET_CAPTCHA_URL = 'src/Redux/SET-CAPTCHA-URL';


let inicialState = {
    data: {
        id: null,
        login: null,
        email: null,
    },
    isAuth: false,
    messages: [],
    captchaUrl: null,
};

const authReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: action.payload,
                isAuth: action.auth
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state;
    }
};


//Action creator
export const setUserData = ({ id, login, email }, auth) => { return { type: SET_USER_DATA, payload: { id, login, email }, auth } };
export const setCaptchaUrlSuccess = (captchaUrl) => { return { type: SET_CAPTCHA_URL, captchaUrl } };



// thunk
export const getMyProfile = () => async (dispatch) => {      // Показываем данные пользователя (Showing user data)
    const data = await authApi.showMyProfile();
    if (data.resultCode === 0) {
        let { id, login, email } = data.data
        dispatch(setUserData({ id, login, email }, true))
    }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {// Авторизируемся на сайте (Log in to the site)
    const data = await authApi.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
        debugger
        dispatch(getMyProfile())
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptcha())
        }
        let message = data.messages.length > 0 ? data.messages : 'Some error';
        dispatch(stopSubmit('login', { _error: message }))
    }
};

export const logout = () => async (dispatch) => {// Вылогиниваемся из профиля (Log out of profile)
    const data = await authApi.logout()
    if (data.resultCode === 0) {
        dispatch(setUserData({ userId: null, login: null, email: null }, false))
    }
};

export const getCaptcha = () => async (dispatch) => {                   // Показываем капчу (Show captcha)
    const data = await authApi.getCaptcha();
    dispatch(setCaptchaUrlSuccess(data.url))
};



export default authReducer;