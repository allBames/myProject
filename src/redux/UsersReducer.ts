import {Api} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import { UsersType} from "../types/types";

const FOLLOW = 'myProject/usersPage/FOLLOW';
const UNFOLLOW = 'myProject/usersPage/UNFOLLOW'
const SETUSERS = 'myProject/usersPage/SETUSERS'
const SET_CURRENT_PAGE = 'myProject/usersPage/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'myProject/usersPage/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'myProject/usersPage/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'myProject/usersPage/TOGGLE_IS_FOLLOWING_PROGRESS'

export type InitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number> // массив id пользователей
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

let usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        }
        case SETUSERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.pageNumber}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }

}
type FollowUserActionType = {
    type: typeof FOLLOW
    userId: number
}
export let followUser = (userId: number): FollowUserActionType => ({type: FOLLOW, userId})

type UnFollowUserActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export let unFollowUser = (userId: number): UnFollowUserActionType => ({type: UNFOLLOW, userId})

type SetUsersActionType = {
    type: typeof SETUSERS
    users: UsersType
    userID: number
}
export let setUsers = (users: UsersType, userID: number): SetUsersActionType => ({type: SETUSERS, users, userID})

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    pageNumber: number
}
export let setCurrentPage = (pageNumber: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, pageNumber})

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalCount: number
}
export let setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalCount})

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export let toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})

type ToggleIsFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    followingInProgress: boolean
    userId: number
}
export let toggleIsFollowingProgress = (followingInProgress: boolean, userId: number): ToggleIsFollowingProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
})

export const getUsers = (currentPage: number, pageSize: number, userID: number = 0) => {

    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))

        let response = await Api.getUsers(currentPage, pageSize)
        dispatch(setUsers(response.items, userID))
        dispatch(setTotalUsersCount(response.totalCount))
        dispatch(toggleIsFetching(false))
    }
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, AC: any) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    let response = await apiMethod(userId)

    if (response.resultCode === 0) {
        dispatch(AC(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}

export const unFollow = (userId: number) => {
    return async (dispatch: any) => {
        let apiMethod = Api.unfollow.bind(Api)
        followUnfollowFlow(dispatch, userId, apiMethod, unFollowUser)
    }
}

export const follow = (userId: number) => {
    return async (dispatch: any) => {
        let apiMethod = Api.follow.bind(Api)
        followUnfollowFlow(dispatch, userId, apiMethod, followUser)
    }
}

export default usersReducer;