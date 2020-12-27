import React, {Component} from 'react';
import s from './DialogList.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Message";
import {Redirect} from "react-router-dom";

function DialogList(props) {

    let newMessageElement = React.createRef()

    let newMessage = () => {
        props.newMessage()
    }

    let changeNewMessage = () => {
        let text = newMessageElement.current.value
        props.changeNewMessage(text)
    }

    let dialogsElements = props.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.messagesData.map(message => <Message message={message.message}/>);

    if(props.isAuth === false) {
        return <Redirect to={"./login"}/>
    }

    return (
        <div className={s.dialogList}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.newMessage}>
                <textarea onChange={changeNewMessage} value={props.newTextMessage} ref={newMessageElement}/>
                <button onClick={newMessage}>Отправить</button>
            </div>

        </div>
    );
}

export default DialogList;