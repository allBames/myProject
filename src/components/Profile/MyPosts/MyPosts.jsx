import React, {Component} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts(props) {

    let postsElements = props.postsData.map( post => <Post message={post.message} like={post.like}/>)

    return (
        <div className={s.posts}>
            <div>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;