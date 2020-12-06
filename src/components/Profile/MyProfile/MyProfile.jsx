import s from './MyProfile.module.css';

function MyProfile() {
    return (
            <div className={s.myProfile}>
                <div>MyAvatar</div>
                <div>MyName</div>
            </div>
    );
}

export default MyProfile;