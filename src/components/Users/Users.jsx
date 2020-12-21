import React, {Component} from 'react';
import NoPhoto from './../../assets/img/NoPhoto.png'
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.pageActive}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        {u.photos.small ? <img src={u.photos.small} alt="Аватар"/> :
                            <img src={NoPhoto} alt="Загрушка"/>}
                    </NavLink>
                    {u.name}
                    {u.status}
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "91d99155-0a12-4a98-9006-bb452c7fea31"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unFollowUser(u.id)
                                    }
                                })

                        }}> Отписаться </button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "91d99155-0a12-4a98-9006-bb452c7fea31"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.followUser(u.id)
                                    }
                                })
                        }}> Подписаться </button>
                    }
                </div>
            </div>)
        }
    </div>
}

export default Users;