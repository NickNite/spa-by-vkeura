import profilePageReducer, { updatePosts, deletePosts, getProfile } from './profilePageReducer';


let state = {
    postsData: [
        { id: 1, message: 'Hello wold', like: '5' },
        { id: 2, message: 'Bye World', like: '10' },
        { id: 3, message: 'My name is', like: '6' }
    ],
    profileDate: null,
    profileStatus: '',
};

test('test create new post', () => {
    let addPost = updatePosts('test text');
    let newState = profilePageReducer(state, addPost);
    expect(newState.postsData.length).toBe(4)
});

test('test delete post', () => {
    let deletePost = deletePosts(2);
    let newState = profilePageReducer(state, deletePost);
    expect(newState.postsData.length).toBe(2)
});
