import s from './Friend.module.css';

function Friend(props) {
    return (
        <div className={s.friendsPreview}>
            <div className={s.friend}>
                <div>
                    <img src={props.avatar}/>
                </div>
                <div>
                    <p>{props.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Friend;