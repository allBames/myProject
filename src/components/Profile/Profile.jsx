import s from './Profile.module.css';
import MyProfile from "./MyProfile/MyProfile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import NewPostsContainer from "./MyPosts/NewPost/NewPostsContainer";

function Profile() {
    return (
        <div>
            <div className={s.picture}>
                <img src={'https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg'}/>
            </div>
            <MyProfile/>
            <NewPostsContainer/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;