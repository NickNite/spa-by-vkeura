import { userApi } from "../API/api";
import { userIsFollowed } from "../Components/CommonFile/Utils/userIsFollowedHelper";

let SET_FOLLOW = 'src/Redux/SET-FOLLOW';
let SET_UNFOLLOW = 'src/Redux/SET-UNFOLLOW';
let SET_USERS = 'src/Redux/SET-USERS';
let SET_ACTIVE_PAGE = 'src/Redux/SET-ACTIVE-PAGE';
let SET_TOTAL_USERS = 'src/Redux/SET-TOTAL-USERS';
let TOGGLE_FETCHING = 'src/Redux/TOGGLE-FETCHING';
let TOGGLE_DISABLED = 'src/Redux/TOGGLE-DISABLED';

let inicialState = {
    users: [],
    pageSize: 50,
    totalUserCount: 0,
    activePage: 1,
    isFetching: false,
    isFollowed: [],
};

const usersReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SET_FOLLOW:
            return {
                ...state,
                users: userIsFollowed(state.users, action.userId, "id", { followed: true })
            };
        case SET_UNFOLLOW:
            return {
                ...state,
                users: userIsFollowed(state.users, action.userId, "id", { followed: false })
            };
        case SET_USERS:
            return { ...state, users: action.users };
        case SET_ACTIVE_PAGE:
            return { ...state, activePage: action.newPage };
        case SET_TOTAL_USERS:
            return { ...state, totalUserCount: action.newTotalCount };
        case TOGGLE_FETCHING:
            return { ...state, isFetching: action.newFetching };
        case TOGGLE_DISABLED:
            return {
                ...state, isFollowed: action.disabled ?
                    [...state.isFollowed, action.userId]
                    : state.isFollowed.filter(id => id != action.userId)
            };
        default:
            return state;
    }
};


//ActionCreator
export const setFollow = (userId) => { return { type: SET_FOLLOW, userId } };
export const setUnFollow = (userId) => { return { type: SET_UNFOLLOW, userId } };
export const setUsers = (users) => { return { type: SET_USERS, users } };
export const setPage = (newPage) => { return { type: SET_ACTIVE_PAGE, newPage } };
export const setTotalUsers = (newTotalCount) => { return { type: SET_TOTAL_USERS, newTotalCount } };
export const setToggleFitching = (newFetching) => { return { type: TOGGLE_FETCHING, newFetching } };
export const setToggleDisabled = (disabled, userId) => { return { type: TOGGLE_DISABLED, disabled, userId } };


const isFollowedFlow = async (dispatch, userId, apiMethod, followed) => { //Функция для подписки, отписки (Function for subscribing, unsubscribing)
    dispatch(setToggleDisabled(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(followed(userId))
    }
    dispatch(setToggleDisabled(false, userId));
};


//thunk
export const requestUsers = (page, pageSize) => {    //Показываем пользователей (We show users)
    return async (dispatch) => {
        dispatch(setToggleFitching(true));
        dispatch(setPage(page));
        let data = await userApi.showUsers(page, pageSize);
        dispatch(setUsers(data.items));
        dispatch(setTotalUsers(data.totalCount));
        dispatch(setToggleFitching(false));
    }
};

export const unFollowUser = (id) => {    //Отписываемся от пользователя (Unsubscribe from user)
    return async (dispatch) => {
        isFollowedFlow(dispatch, id, userApi.unFollow.bind(userApi), setUnFollow)
    }
};
export const followUser = (id) => {      //Подписываемся на пользователя (Subscribe to the user)
    return async (dispatch) => {
        isFollowedFlow(dispatch, id, userApi.follow.bind(userApi), setFollow)
    }
};



export default usersReducer;