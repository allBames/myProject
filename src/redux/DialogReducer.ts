const ADD_MESSAGE = 'myProject/dialogsPage/ADD-MESSAGE';

export type messageDataType = {
    id: number
    message: string
}

export type dialogDataType = {
    id: number
    name: string
}

export type initialStateType = {
    dialogsData: Array<dialogDataType>
    messagesData: Array<messageDataType>
    newMessageBody: any
}

let initialState: initialStateType = {
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

let dialogReducer = (state = initialState, action: any): initialStateType => {

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

type addMessageActionType = {
    type: typeof ADD_MESSAGE
    newMessageBody: string
}
export let addMessage = (newMessageBody: string): addMessageActionType => ({type: ADD_MESSAGE, newMessageBody})

export default dialogReducer;