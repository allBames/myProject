import s from './MyProfile.module.css';
import React from "react";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import NoPhoto from "../../../assets/img/NoPhoto.png"

function MyProfile(props) {
    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
            <div className={s.myProfile}>
                <div><img src={props.profile.photos.large || NoPhoto } alt="фото"/></div>
                { props.isOwner && <input type="file" onChange={ onMainPhotoSelected }/> }
                <div>{props.profile.fullName}</div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
    );
}

export default MyProfile;