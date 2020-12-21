import React, { Component } from 'react';
import {addPostActionCreator, changePostActionCreator} from "../../../../redux/ProfileReducer";
import {connect} from "react-redux";
import NewPosts from "./NewPosts";

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