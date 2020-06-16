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
        let promise = dispatch(getMyProfile());// Возвращаем результат диспатча с авторизацией (We return the result of the dispatch with authorization)
        promise.then(() => {
            dispatch(isInicialized())// После получение ответа со стороны сервера запускаем АС  для инициализации (After receiving a response from the server, we start the speaker system to initialize)
        })
    }


export default appReducer;