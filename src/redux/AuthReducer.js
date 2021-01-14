import {Api} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'myProject/auth/SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

let authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}

export let setUserData = (id, login, email, isAuth) => ({type: SET_USER_DATA, data: {id, login, email, isAuth}})

export let getMe = () => async (dispatch) => {
    let response = await Api.getAuthMe()
    if (response.resultCode === 0) {
        let {id, login, email} = response.data
        dispatch(setUserData(id, login, email, true))
    }
}

export let login = (email, password, rememberMe) => async (dispatch) => {
    let response = await Api.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getMe())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some erroe"
        let action = stopSubmit("login", {_error: message});
        dispatch(action)
    }
}

export let logout = () => async (dispatch) => {
    let response = await Api.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}

export default authReducer;
