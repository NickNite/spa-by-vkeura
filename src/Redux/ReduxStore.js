import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profilePageReducer from "./profilePageReducer";
import messagePageReducer from "./messagePageReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagePage: messagePageReducer,
    findUsersPage: usersReducer,
    authData: authReducer,
    app: appReducer,
    form: formReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;   //Подключаем плагины в браузере для приложения (We connect plug-ins in the browser for application)
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;
export default store;