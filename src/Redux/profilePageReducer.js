import { profileApi } from '../API/api';


let ADD_POST = 'src/Redux/ADD-POST';
let SET_USER_PROFILE = 'src/Redux/SET-USER-PROFILE';
let GET_PROFILE_STATUS = 'src/Redux/GET-PROFILE-STATUS';
let DELETE_POST = 'src/Redux/DELETE-POST';

let inicialState = {
    postsData: [
        { id: 1, message: 'Hello wold', like: '5' },
        { id: 2, message: 'Bye World', like: '10' },
        { id: 3, message: 'My name is', like: '6' }
    ],
    newTextOnPost: 'qwe',
    profileDate: null,
    profileStatus: '',
};

const profilePageReducer = (state = inicialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let addNewPost = {
                message: action.newPost,
                like: 0
            };
            return { ...state, postsData: [...state.postsData, addNewPost] };
        case SET_USER_PROFILE:
            return { ...state, profileDate: action.profile };
        case GET_PROFILE_STATUS:
            return { ...state, profileStatus: action.status };
        case DELETE_POST:
            return { ...state, postsData: state.postsData.filter(item => item.id != action.userId) };
        default:
            return state;
    }
};

//Action Creator
export const updatePosts = (newPost) => { return { type: ADD_POST, newPost } };
export const setUserProfile = (profile) => { return { type: SET_USER_PROFILE, profile } };
export const getUserStatus = (status) => { return { type: GET_PROFILE_STATUS, status } };
export const deletePosts = (userId) => { return { type: DELETE_POST, userId } };


//thunk
export const getProfile = (userId) => {
    return (dispatch) => {
        profileApi.showProfile(userId).then(response => { //показываем пользователя
            dispatch(setUserProfile(response.data));
        })
    }
};
export const getStatus = (userId) => {
    return (dispatch) => {
        profileApi.getProfileStatus(userId).then(response => { //показываем статус пользователя
            dispatch(getUserStatus(response.data));
        })
    }
};
export const setProfileStatus = (status) => {
    return (dispatch) => {
        profileApi.setProfileStatus(status).then(response => { //меняем статус
            if (response.data.resultCode === 0) {
                dispatch(getUserStatus(status))
            };
        })
    }
};

export default profilePageReducer;