import s from './MyProfile.module.css';
import React from "react";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

function MyProfile(props) {
    if (!props.profile) {
        return <Preloader />
    }
    return (
            <div className={s.myProfile}>
                <div><img src={props.profile.photos.large} alt="фото"/></div>
                <div>{props.profile.fullName}</div>
                <ProfileStatus status={"Мой первый проект"}/>
            </div>
    );
}

export default MyProfile;