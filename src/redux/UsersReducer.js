import {Api} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'myProject/usersPage/FOLLOW';
const UNFOLLOW = 'myProject/usersPage/UNFOLLOW'
const SETUSERS = 'myProject/usersPage/SETUSERS'
const SET_CURRENT_PAGE = 'myProject/usersPage/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'myProject/usersPage/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'myProject/usersPage/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'myProject/usersPage/TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [
        // {
        //     id: 1,
        //     name: 'Аня',
        //     avatar: 'https://i.pinimg.com/originals/cf/67/b2/cf67b21b83d577a1b5a223a468f8754d.jpg',
        //     status: 'ХАЙ БОБИКИ',
        //     followed: false,
        //     location: {
        //         country: 'Россия', city: 'Екатеринбург'
        //     }
        // },
    ],
    pageSize: 10,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

let usersReducer = (state = initialState, action) => {
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
                ...state, users: action.users
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

export let followUser = (userId) => ({type: FOLLOW, userId})
export let unFollowUser = (userId) => ({type: UNFOLLOW, userId})
export let setUsers = (users) => ({type: SETUSERS, users})
export let setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
export let setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export let toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export let toggleIsFollowingProgress = (followingInProgress, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
})
export const getUsers = (currentPage, pageSize) => {

    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))

        let response = await Api.getUsers(currentPage, pageSize)
        dispatch(setUsers(response.items))
        dispatch(setTotalUsersCount(response.totalCount))
        dispatch(toggleIsFetching(false))
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, AC) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    let response = await apiMethod(userId)

    if (response.resultCode === 0) {
        dispatch(AC(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}

export const unFollow = (userId) => {
    return async (dispatch) => {
        let apiMethod = Api.unfollow.bind(Api)
        followUnfollowFlow(dispatch, userId, apiMethod, unFollowUser)
    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        let apiMethod = Api.follow.bind(Api)
        followUnfollowFlow(dispatch, userId, apiMethod, followUser)
    }
}

export default usersReducer;