export type FriendType = {
    id: number
    name: string
    avatar: string
}

export type InitialStateType = {
    friends: Array<FriendType>
}

let initialState: InitialStateType = {
    friends:
        [
            {
                id: 1,
                name: 'Аня',
                avatar: 'https://i.pinimg.com/originals/cf/67/b2/cf67b21b83d577a1b5a223a468f8754d.jpg'
            },
            {
                id: 2,
                name: 'Ваня',
                avatar: 'https://i.pinimg.com/originals/cf/67/b2/cf67b21b83d577a1b5a223a468f8754d.jpg'
            },
            {
                id: 3,
                name: 'Миша',
                avatar: 'https://i.pinimg.com/originals/cf/67/b2/cf67b21b83d577a1b5a223a468f8754d.jpg'
            }
        ]
}

let sidebarReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default: return state;
    }
}

export default sidebarReducer;