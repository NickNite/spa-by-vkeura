import { authApi } from "../API/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'src/Redux/SET-USER-DATA';


let inicialState = {
    data: {
        id: null,
        login: null,
        email: null,
    },
    isAuth: false,
    messages: [],
};

const authReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: action.payload,
                isAuth: action.auth
            }
        default:
            return state;
    }
};


//Action creator
export const setUserData = ({ id, login, email }, auth) => { return { type: SET_USER_DATA, payload: { id, login, email }, auth } };



// thunk
export const getMyProfile = () => (dispatch) => { // показываем данные пользователя
    return authApi.showMyProfile().then(data => {
        if (data.resultCode === 0) {
            let { id, login, email } = data.data
            dispatch(setUserData({ id, login, email }, true))
        }
    })
};
export const login = (email, password, rememberMe) => (dispatch) => {// авторизируемся на сайте
    authApi.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getMyProfile())
        } else {
            let message = data.messages.length > 0 ? data.messages : 'Some error';
            dispatch(stopSubmit('login', { _error: message }))
        }
    })
};

export const logout = () => (dispatch) => {// вылогиниваемся из профиля
    authApi.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserData({ userId: null, login: null, email: null }, false))
        }
    })
};



export default authReducer;