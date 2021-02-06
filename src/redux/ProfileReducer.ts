import {Api} from "../api/api";
import {PhotosType, PostDataType, ProfileType } from "../types/types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

export type InitialStateType = {
    postsData: Array<PostDataType>
    newPostBody: any
    profile: ProfileType | null
    status: string
    newPostText: string
}

let initialState: InitialStateType = {
    postsData: [
        {id: 1, message: 'Первый пост', like: 100, userID: 1},
        {id: 2, message: 'Второй пост', like: 200, userID: 2}
    ],
    newPostBody: ['Привет, мир!!!'],
    profile: null,
    status: '',
    newPostText: ''
}

let profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostBody,
                like: 0,
                userID: action.userID
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: (action.profile)
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: (action.status)
            }
        }
        case SAVE_PHOTO_SUCCESS:
            return { ...state, profile: {...state.profile, photos: action.photos } as ProfileType }

        default:
            return state;
    }
}

type AddPostActionType = {
    type: typeof ADD_POST
    newPostBody: string
    userID: number
}
export let addPost = (newPostBody: string, userID: number): AddPostActionType => ({type: ADD_POST, newPostBody, userID})

type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export let setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status})

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export let setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})

type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export let savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})


export let getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await Api.getProfile(userId)
        dispatch(setUserProfile(response))
}
export let getStatus = (userId: number) => async (dispatch: any) => {
    let response = await Api.getStatus(userId)
        dispatch(setStatus(response.data))
}

export let updateStatus = (status: string) => async (dispatch: any) => {
   let response = await Api.updateStatus(status)
        if (response.resultCode === 0) {
            dispatch(setStatus(response.data))
        }
}

export let savePhoto = (file: any) => async (dispatch: any) => {
    let response = await Api.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
}

export default profileReducer;
