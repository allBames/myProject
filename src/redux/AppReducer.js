import {getMe} from "./AuthReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: false

}

let appReducer = (state = initialState, action) => {

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

export let initializedSuccess = () => ({type: SET_INITIALIZED})
export let initializeApp = () => (dispatch) => {
    let dispatchResult = dispatch(getMe())
    dispatchResult.then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer;
