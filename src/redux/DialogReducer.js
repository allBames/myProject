const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let dialogReducer = (state, action) =>{

    if (action.type === ADD_MESSAGE) {
        let newMessage = {
            id: 5,
            message: state.newTextMessage
        };
        state.messagesData.push(newMessage)
        state.newTextMessage = ''
    } else if (action.type === UPDATE_NEW_MESSAGE) {
        state.newTextMessage = (action.newText)
    }
}

export let addMessageActionCreator = () => ({type: ADD_MESSAGE})
export let changeMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newText: text})


export default dialogReducer;