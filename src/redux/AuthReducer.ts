import {Api} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'myProject/auth/SET_USER_DATA';

export type initialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean | null
}

let initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

let authReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
}

type setUserDataActionPayloadType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
type setUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: setUserDataActionPayloadType
}
export let setUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean): setUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {id, login, email, isAuth}
})

export let getMe = () => async (dispatch: any) => {
    let response = await Api.getAuthMe()
    if (response.resultCode === 0) {
        let {id, login, email} = response.data
        dispatch(setUserData(id, login, email, true))
    }
}

export let login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    let response = await Api.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getMe())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some erroe"
        let action = stopSubmit("login", {_error: message});
        dispatch(action)
    }
}

export let logout = () => async (dispatch: any) => {
    let response = await Api.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}

export default authReducer;
