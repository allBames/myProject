import React from 'react';
import {addPostActionCreator} from "../../../../redux/ProfileReducer";
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
        addPost: (newPostBody) => {
            dispatch(addPostActionCreator(newPostBody))
        }
    }
}

let NewPostsContainer = connect(mapStateToProps, mapDispatchToProps) (NewPosts)

export default NewPostsContainer