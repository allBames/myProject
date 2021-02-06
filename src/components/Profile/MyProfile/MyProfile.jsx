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
                <label>
                    <img src={props.profile.photos.large || NoPhoto } alt="фото"/>
                    { props.isOwner && <input type="file" onChange={ onMainPhotoSelected } hidden/>}
                </label>
                <div className={s.profileInfo}>
                    <div>
                        <div>{props.profile.fullName}</div>
                        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    </div>
                    <div>

                    </div>
                </div>

            </div>
    );
}

export default MyProfile;