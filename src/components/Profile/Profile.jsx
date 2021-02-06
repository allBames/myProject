import MyProfile from "./MyProfile/MyProfile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import NewPostsContainer from "./MyPosts/NewPost/NewPostsContainer";
import React from "react";
import s from "./Profile.module.css"
import {NavLink} from "react-router-dom";

function Profile(props) {

    return (
        <div>
            <div className={s.nav}>
                <div className={s.navCon}>
                    <div className={s.item}>
                        <NavLink activeClassName={s.active} to='/users'>Люди <hr className={s.hrProfile}/></NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink activeClassName={s.active} to='/news'>Новости
                            <hr className={s.hrProfile}/>
                        </NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink activeClassName={s.active} to='/setting'>Настройки
                            <hr className={s.hrProfile}/>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div>
                <div className={s.profileInfo}>
                    <MyProfile savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile}
                               status={props.status} updateStatus={props.updateStatus}/>
                </div>
                <div className={s.profilePosts}>
                    <NewPostsContainer/>
                    <MyPostsContainer/>
                </div>
            </div>
        </div>
    );
}

export default Profile;