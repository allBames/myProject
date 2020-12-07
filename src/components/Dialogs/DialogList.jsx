import React, { Component } from 'react';
import s from './DialogList.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Message";

function DialogList(props) {

    let newMessageElement = React.createRef()
    let newMessage = () => alert(newMessageElement.current.value)

    let dialogsElements = props.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.messagesData.map(message => <Message message={message.message}/>);

    return (
        <div className={s.dialogList}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.newMessage}>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={newMessage}>Отправить</button>
            </div>

        </div>
    );
}

export default DialogList;