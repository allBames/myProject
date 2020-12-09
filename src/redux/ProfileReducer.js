const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    postsData: [
        {id: 1, message: 'Первый пост', like: 100},
        {id: 2, message: 'Второй пост', like: 200}
    ],
    newPostMessage: ['Привет, мир!!!']
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostMessage,
                like: 0
            };
            state.postsData.push(newPost)
            state.newPostMessage = ''
            return state;
        case UPDATE_NEW_POST:
            state.newPostMessage = (action.newText)
            return state;
        default:
            return state;
    }
}

export let addPostActionCreator = () => ({type: ADD_POST})
export let changePostActionCreator = (text) => ({type: UPDATE_NEW_POST, newText: text})

export default profileReducer;