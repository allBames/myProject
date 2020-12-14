const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'

let initialState = {
    users:
        [
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

        ]
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
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}

export let followUserAC = (userId) => ({type: FOLLOW, userId})
export let unFollowUserAC = (userId) => ({type: UNFOLLOW, userId})
export let setUsersAC = (users) => ({type: SETUSERS, users})

export default usersReducer;