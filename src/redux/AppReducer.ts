import {getMe} from "./AuthReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

let appReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

type initializedSuccessActionType = {
    type: typeof SET_INITIALIZED
}
export let initializedSuccess = (): initializedSuccessActionType => ({type: SET_INITIALIZED})

export let initializeApp = () => async (dispatch: any) => {
    let dispatchResult = dispatch(getMe())
    dispatchResult.then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer;
