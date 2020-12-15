const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

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
            // {
            //     id: 2,
            //     name: 'Ваня',
            //     avatar: 'https://i.pinimg.com/originals/cf/67/b2/cf67b21b83d577a1b5a223a468f8754d.jpg',
            //     status: 'ХАЙ БОБИКИ',
            //     followed: true,
            //     location: {
            //         country: 'Россия', city: 'Екатеринбург'
            //     }
            // },
            // {
            //     id: 3,
            //     name: 'Миша',
            //     avatar: 'https://i.pinimg.com/originals/cf/67/b2/cf67b21b83d577a1b5a223a468f8754d.jpg',
            //     status: 'ХАЙ БОБИКИ',
            //     followed: true,
            //     location: {
            //             country: 'Россия', city: 'Екатеринбург'
            //     }
            // },

        ],
    pageSize: 10,
    totalUsersCount: 100,
    currentPage: 1


}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SETUSERS: {
            return {
                ...state, users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.pageNumber }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount }
        }
        default:
            return state;
    }
}

export let followUserAC = (userId) => ({type: FOLLOW, userId})
export let unFollowUserAC = (userId) => ({type: UNFOLLOW, userId})
export let setUsersAC = (users) => ({type: SETUSERS, users})
export let setCurrentPageAC = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
export let setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})

export default usersReducer;