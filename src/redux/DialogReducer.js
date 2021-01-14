const ADD_MESSAGE = 'myProject/dialogsPage/ADD-MESSAGE';

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
    newMessageBody: ['']
}

let dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: action.newMessageBody
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
            }
        }
        default:
            return state;
    }
}

export let addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})

export default dialogReducer;