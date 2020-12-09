const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Иван'},
        {id: 2, name: 'Антон'},
        {id: 3, name: 'Анна'},
        {id: 4, name: 'Ксения'},
        {id: 5, name: 'Никита'}
    ],
    messagesData: [
        {id: 1, message: 'Новое сообщение1'},
        {id: 2, message: 'Новое сообщение2'},
        {id: 3, message: 'Новое сообщение3'},
        {id: 4, message: 'Новое сообщение4'}
    ],
    newTextMessage: ['']
}

let dialogReducer = (state = initialState, action) =>{

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newTextMessage
            };
            state.messagesData.push(newMessage)
            state.newTextMessage = ''
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newTextMessage = (action.newText)
            return state;
        default:
            return state;
    }
}

export let addMessageActionCreator = () => ({type: ADD_MESSAGE})
export let changeMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newText: text})


export default dialogReducer;