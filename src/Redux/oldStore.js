import profilePageReducer from "./profilePageReducer";
import messagePageReducer from "./messagePageReducer";

// Использовался в учебных целях, оставил как наглядный пример для визуализации стора (Used for educational purposes, left as a good example for visualizing the store)


let store = {
    _state: {
        profilePage: {
            postsData: [
                { message: 'Hello wold', like: '5' },
                { message: 'Bye World', like: '10' },
                { message: 'My name is', like: '6' }
            ],
            newTextOnPost: 'qwe',
        },
        messagePage: {
            dialogData: [
                { name: 'Dmitry', link: '/messages/dmtr', avatar: 'https://download-cs.net/steam/avatars/3412.jpg' },
                { name: 'Alex', link: '/messages/alex', avatar: 'https://www.meme-arsenal.com/memes/8abad17ae081384956a7084acfb2f8e4.jpg' },
                { name: 'Bill', link: '/messages/bill', avatar: 'https://sun9-15.userapi.com/c633518/v633518587/b58/Tw8WkcsRNzs.jpg?ava=1' },
                { name: 'Olga', link: '/messages/olga', avatar: 'https://i.pinimg.com/originals/9a/da/3b/9ada3bc305a1f45eab527f60da172d53.png' },
                { name: 'Jimmy', link: '/messages/jimm', avatar: 'https://avatars.mds.yandex.net/get-pdb/1769690/6c633567-4879-4074-a72d-af50c2a62a12/s375' }
            ],
            messData: [
                { item: 'Hello world' },
                { item: 'What is your name?' },
                { item: 'How old are you?' }
            ],
            newTextOnMessage: '',
        },
    },


    _CallRenderApp() {
        console.log('qwe')
    },
    subscribe(observe) {
        this._CallRenderApp = observe;
    },

    getState() {
        return this._state;
    },


    dispatch(action) {

        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.messagePage = messagePageReducer(this._state.messagePage, action);
        this._CallRenderApp();
    },

};


window.state = store;
export default store;
