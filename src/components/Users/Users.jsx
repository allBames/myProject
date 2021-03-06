import React, {Component} from 'react';
import NoPhoto from './../../assets/img/NoPhoto.png'
import s from './Users.module.css'
import {NavLink} from "react-router-dom";


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
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unFollow(u.id)
                        }}> Отписаться </button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id)
                        }}> Подписаться </button>
                    }
                </div>
            </div>)
        }
    </div>
}

export default Users;