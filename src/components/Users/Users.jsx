import React, {Component} from 'react';
import * as axios from "axios";
import NoPhoto from './../../assets/img/NoPhoto.png'


class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <div>
                            {
                                u.photos.small
                                    ? <img src={u.photos.small} alt="Аватар"/>
                                    : <img src={NoPhoto} alt="Загрушка"/>
                            }
                            {u.name}
                            {u.status}
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}> Отписаться </button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}> Подписаться </button>
                            }
                        </div>
                    </div>)
                }
            </div>
        );
    }
}

export default Users;