import React, {Component} from 'react';
import s from './MyPosts.module.css';
import PostContainer from "./Post/Post";

class MyPosts extends Component {

    render() {

        let postsElements = this.props.postsData.map(post =>
            <PostContainer message = {post.message}
                  like = {post.like}
            userID={this.props.profile}/>)

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