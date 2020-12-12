import React, {Component} from 'react';
import {addMessageActionCreator, changeMessageActionCreator} from "../../redux/DialogReducer";
import DialogList from "./DialogList";
import {connect} from "react-redux";


// function DialogListContainer(props) {
//
//     let newMessage = () => {
//         props.dispatch(addMessageActionCreator())
//     }
//
//     let changeNewMessage = (text) => {
//         props.dispatch(changeMessageActionCreator(text))
//     }
//
//     return (
//         <DialogList addMessageActionCreator={newMessage}
//                     changeMessageActionCreator={changeNewMessage}
//                     newTextMessage={props.state.newTextMessage}
//                     dialogsData={props.state.dialogsData}
//                     messagesData={props.state.messagesData}/>
//     );
// }

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