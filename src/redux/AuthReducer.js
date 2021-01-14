import {Api} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

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
export let getMe = () => (dispatch) => {
    return Api.getAuthMe().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data
            dispatch(setUserData(id, login, email, true))
        }
    })
}

export let login = (email, password, rememberMe) => (dispatch) => {
    Api.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getMe())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some erroe"
            let action = stopSubmit("login", {_error: message});
            dispatch(action)
        }
    })
}

export let logout = () => (dispatch) => {
    Api.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    })
}

export default authReducer;
