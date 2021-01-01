import s from './Profile.module.css';
import MyProfile from "./MyProfile/MyProfile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import NewPostsContainer from "./MyPosts/NewPost/NewPostsContainer";
import {Redirect} from "react-router-dom";
import React from "react";

function Profile(props) {

    return (
        <div>
            <MyProfile profile={props.profile}/>
            <NewPostsContainer/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;