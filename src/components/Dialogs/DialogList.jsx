import s from './DialogList.module.css';
import Dialog from "./Dialog";
import Message from "./Message";

function DialogList() {

    let dialogsData = [
        {id: 1, name: 'Иван'},
        {id: 2, name: 'Антон'},
        {id: 3, name: 'Анна'},
        {id: 4, name: 'Ксения'},
        {id: 5, name: 'Никита'}
    ]

    let messagesData = [
        {id: 1, message: 'Новое сообщение1'},
        {id: 2, message: 'Новое сообщение2'},
        {id: 3, message: 'Новое сообщение3'},
        {id: 4, message: 'Новое сообщение4'}
    ]

    let dialogsElements = dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);
    let messagesElements = messagesData.map(message => <Message message={message.message}/>);

    return (
        <div className={s.dialogList}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    );
}

export default DialogList;