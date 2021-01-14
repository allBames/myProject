let initialState = {
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

let sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default sidebarReducer;