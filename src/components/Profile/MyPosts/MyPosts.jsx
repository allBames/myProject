import React, {Component} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

class MyPosts extends Component {

    render() {
        console.log("ХОЙ")
        let postsElements = this.props.postsData.map(post => <Post message={post.message} like={post.like}/>)

        return (
            <div className={s.posts}>
                <div>
                    {postsElements}
                </div>
            </div>
        );
    }
}

export default MyPosts;