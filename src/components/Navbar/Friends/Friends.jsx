import s from './Friends.module.css';
import Friend from "./Friend/Friend";

function Friends(props) {
    let friendsElements = props.friendsData.map(friend => <Friend name={friend.name} avatar={friend.avatar}/>);
    return (
        <div className={s.friends}>
            <div className={s.title}>
                <hr/>
                Друзья:
            </div>
            { friendsElements }
            <hr/>
        </div>
    );
}

export default Friends;