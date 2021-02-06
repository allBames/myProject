import React from 'react';
import {addPost} from "../../../../redux/ProfileReducer";
import {connect} from "react-redux";
import NewPosts from "./NewPosts";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        profilePage: state.profilePage,
        newPostMessage: state.profilePage.newPostMessage,
        userID: state.auth.id,
    }
}

let NewPostsContainer = connect( mapStateToProps, {addPost} ) (NewPosts)

export default NewPostsContainer