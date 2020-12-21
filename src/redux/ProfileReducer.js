const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    postsData: [
        {id: 1, message: 'Первый пост', like: 100},
        {id: 2, message: 'Второй пост', like: 200}
    ],
    newPostMessage: ['Привет, мир!!!'],
    profile: null
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
           let newPost = {
                id: 5,
                message: state.newPostMessage,
                like: 0
            }
            return {...state,
                postsData: [...state.postsData, newPost],
                newPostMessage: ''
            }
        }
        case UPDATE_NEW_POST: {
            return  {...state,
                newPostMessage: (action.newText)
            }
        }
        case SET_USER_PROFILE: {
            return  {...state,
               profile: (action.profile)
            }
        }
        default:
            return state;
    }
}

export let addPostActionCreator = () => ({type: ADD_POST})
export let changePostActionCreator = (text) => ({type: UPDATE_NEW_POST, newText: text})
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;