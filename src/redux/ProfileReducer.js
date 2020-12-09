const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostMessage,
            like: 0
        };
        state.postsData.push(newPost)
        state.newPostMessage = ''
    } else if (action.type === UPDATE_NEW_POST) {
        state.newPostMessage = (action.newText)
    }
}

export let addPostActionCreator = () => ({type: ADD_POST})
export let changePostActionCreator = (text) => ({type: UPDATE_NEW_POST, newText: text})

export default profileReducer;