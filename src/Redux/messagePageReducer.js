let CREATE_NEW_MESSAGE = 'src/Redux/CREATE-NEW-MESSAGE';
let DELETE_MESSAGE = 'src/Redux/DELETE-MESSAGE';

let inicialState = {
    dialogData: [
        { name: 'Dmitry', link: '/messages/dmtr', avatar: 'https://download-cs.net/steam/avatars/3412.jpg' },
        { name: 'Alex', link: '/messages/alex', avatar: 'https://www.meme-arsenal.com/memes/8abad17ae081384956a7084acfb2f8e4.jpg' },
        { name: 'Bill', link: '/messages/bill', avatar: 'https://sun9-15.userapi.com/c633518/v633518587/b58/Tw8WkcsRNzs.jpg?ava=1' },
        { name: 'Olga', link: '/messages/olga', avatar: 'https://i.pinimg.com/originals/9a/da/3b/9ada3bc305a1f45eab527f60da172d53.png' },
        { name: 'Jimmy', link: '/messages/jimm', avatar: 'https://avatars.mds.yandex.net/get-pdb/1769690/6c633567-4879-4074-a72d-af50c2a62a12/s375' }
    ],
    messData: [
        { id: 1, item: 'Hello world' },
        { id: 2, item: 'What is your name?' },
        { id: 3, item: 'How old are you?' }
    ],
};

const messagePageReducer = (state = inicialState, action) => {
    switch (action.type) {
        case CREATE_NEW_MESSAGE:
            let addMessage = action.newMessage;
            return {
                ...state,
                messData: [...state.messData, { id: 4, item: addMessage }],
            };
        case DELETE_MESSAGE:
            return { ...state, messData: state.messData.filter(item => item.id != action.messageId) }
        default:
            return state;
    }
};

//Action Creator
export const createNewMessage = (newMessage) => {
    return { type: CREATE_NEW_MESSAGE, newMessage }
};
export const deleteMessages = (messageId) => {
    return { type: DELETE_MESSAGE, messageId }
};



export default messagePageReducer;