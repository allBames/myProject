import React, { Component } from 'react';
import s from './NewPosts.module.css';
import {addPostActionCreator, changePostActionCreator} from "../../../../redux/ProfileReducer";

function NewPosts(props) {
    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let changePost = () => {
        let text = newPostElement.current.value
        props.dispatch(changePostActionCreator(text))
    }

    return (
            <div className={s.newPost}>
                Новый пост:
                <div>
                    <textarea onChange={changePost} value={props.newPostMessage} ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={ addPost }>Отправить</button>
                </div>
            </div>
    );
}

export default NewPosts;