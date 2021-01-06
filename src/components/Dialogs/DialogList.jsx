import React from 'react';
import s from './DialogList.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

function DialogList(props) {

    let addNewMessage = (values) => {
        props.newMessage(values.newMessageBody)
    }

    let dialogsElements = props.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.messagesData.map(message => <Message message={message.message}/>);

    if (props.isAuth === false) {
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
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
}

const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.newMessage}>
                <Field component={'textarea'} name={'newMessageBody'} pleaseholder={'Введите сообщение'}/>
                <button>Отправить</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(addMessageForm)

export default DialogList;