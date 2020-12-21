import s from './Profile.module.css';
import MyProfile from "./MyProfile/MyProfile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import NewPostsContainer from "./MyPosts/NewPost/NewPostsContainer";

function Profile(props) {
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