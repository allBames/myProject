import MyProfile from "./MyProfile/MyProfile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import NewPostsContainer from "./MyPosts/NewPost/NewPostsContainer";
import React from "react";

function Profile(props) {

    return (
        <div>
            <MyProfile profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <NewPostsContainer/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;