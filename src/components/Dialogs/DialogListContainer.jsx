import React, {Component} from 'react';
import {addMessageActionCreator, changeMessageActionCreator} from "../../redux/DialogReducer";
import DialogList from "./DialogList";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newTextMessage: state.dialogsPage.newTextMessage,
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        newMessage: () => {
            dispatch(addMessageActionCreator())
        },
        changeNewMessage: (text) => {
            dispatch(changeMessageActionCreator(text))
        }
    }
}


let DialogListContainer = connect(mapStateToProps, mapDispatchToProps)(DialogList)

export default DialogListContainer;