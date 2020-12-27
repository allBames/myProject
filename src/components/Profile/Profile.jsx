import s from './Profile.module.css';
import MyProfile from "./MyProfile/MyProfile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import NewPostsContainer from "./MyPosts/NewPost/NewPostsContainer";
import {Redirect} from "react-router-dom";
import React from "react";

function Profile(props) {

    if(props.isAuth === false) {
        return <Redirect to={"./login"}/>
    }

    return (
        <div>
            <div className={s.picture}>
                <img src={'https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg'}/>
            </div>
            <MyProfile profile={props.profile}/>
            <NewPostsContainer/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;