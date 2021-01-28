import MyProfile from "./MyProfile/MyProfile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import NewPostsContainer from "./MyPosts/NewPost/NewPostsContainer";
import React from "react";

function Profile(props) {

    return (
        <div>
            <MyProfile savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <NewPostsContainer/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;