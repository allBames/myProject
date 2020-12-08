let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Первый пост', like: 100},
                {id: 2, message: 'Второй пост', like: 200}
            ],
            newPostMessage: ['Привет, мир!!!']
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
            ],
            newTextMessage: ['']
        },
        navbar: {
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
    },
    getState() {
        return this._state
    },
    rerender(){
        console.log('123')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostMessage,
            like: 0
        };
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostMessage = ''
        this.rerender(this._state);

    },
    addNewMessage(newText) {
        this._state.profilePage.newPostMessage = (newText)
        this.rerender(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newTextMessage
        };
        this._state.dialogsPage.messagesData.push(newMessage)
        this._state.dialogsPage.newTextMessage = ''
        this.rerender(this._state)
    },
    updateNewMessage(newText) {
        this._state.dialogsPage.newTextMessage = (newText)
        this.rerender(this._state)
    },
    subscribe(observer) {
        this.rerender = observer

    }
}

window.store = store;
export default store;