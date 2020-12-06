import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import MyProfile from "./MyProfile/MyProfile";
import NewPosts from "./MyPosts/NewPost/NewPosts";

function Profile() {

    return (
            <div>
                <div className={s.picture}>
                    <img src={'https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg'}/>
                </div>
                <MyProfile />
                <NewPosts />
                <MyPosts />
            </div>
    );
}

export default Profile;