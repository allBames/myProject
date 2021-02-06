import React from 'react';
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => ({
        postsData: state.profilePage.postsData,
        profile: state.profilePage.profile
    })


let MyPostsContainer = connect(mapStateToProps, {}) (MyPosts)

export default MyPostsContainer