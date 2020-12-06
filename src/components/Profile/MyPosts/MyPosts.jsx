import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {

    let postsData = [
        {id: 1, message: 'Первый пост', like: 100},
        {id: 2, message: 'Второй пост', like: 200},
    ]

    let postsElements = postsData.map( post => <Post message={post.message} like={post.like}/>)

    return (
        <div className={s.posts}>
            { postsElements }
        </div>
    );
}

export default MyPosts;