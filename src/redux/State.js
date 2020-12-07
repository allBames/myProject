let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Первый пост', like: 100},
            {id: 2, message: 'Второй пост', like: 200}
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Иван'},
            {id: 2, name: 'Антон'},
            {id: 3, name: 'Анна'},
            {id: 4, name: 'Ксения'},
            {id: 5, name: 'Никита'}
        ],
        messagesData: [
            {id: 1, message: 'Новое сообщение1'},
            {id: 2, message: 'Новое сообщение2'},
            {id: 3, message: 'Новое сообщение3'},
            {id: 4, message: 'Новое сообщение4'}
        ]
    },
    navbar: {
        friends:
            [
            {id: 1, name: 'Аня', avatar: 'https://i.pinimg.com/originals/cf/67/b2/cf67b21b83d577a1b5a223a468f8754d.jpg'},
            {id: 2, name: 'Ваня', avatar: 'https://i.pinimg.com/originals/cf/67/b2/cf67b21b83d577a1b5a223a468f8754d.jpg'},
            {id: 3, name: 'Миша', avatar: 'https://i.pinimg.com/originals/cf/67/b2/cf67b21b83d577a1b5a223a468f8754d.jpg'}
        ]

    }
}

export default state;