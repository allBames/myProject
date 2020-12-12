import React, { Component } from 'react';
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer