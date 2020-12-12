import React, { Component } from 'react';
import {addPostActionCreator, changePostActionCreator} from "../../../../redux/ProfileReducer";
import {connect} from "react-redux";
import NewPosts from "./NewPosts";

// function NewPostsContainer() {

//     let addPost = () => {
//         props.dispatch(addPostActionCreator())
//     }
//
//     let changePost = (text) => {
//         props.dispatch(changePostActionCreator(text))
//     }
//
//     return <NewPosts addPostActionCreator={addPost} changePostActionCreator={changePost} newPostMessage={props.newPostMessage}/>
//}

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        profilePage: state.profilePage,
        newPostMessage: state.profilePage.newPostMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        changePost: (text) => {
            dispatch(changePostActionCreator(text))
        }
    }
}

let NewPostsContainer = connect(mapStateToProps, mapDispatchToProps) (NewPosts)

export default NewPostsContainer