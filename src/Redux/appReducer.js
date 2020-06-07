import { getMyProfile } from "./authReducer";


const SET_INICIALIZED = 'src/Redux/SET-INICIALIZED';


let inicialState = {
    initialized: false,
};

const appReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SET_INICIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
};


//Action creator
export const isInicialized = () => {
    return { type: SET_INICIALIZED, }
};


// thunk
export const inicializedApp = () =>
    (dispatch) => {
        let promise = dispatch(getMyProfile());// возвращаем результат диспатча с авторизацией
        promise.then(() => {
            dispatch(isInicialized())// после получение ответа со стороны сервера запускаем АС  для инициализации
        })
    }


export default appReducer;