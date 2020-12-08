import React, { Component } from 'react';
import s from './NewPosts.module.css';

function NewPosts(props) {
    debugger
    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }

    let changePost = () => {
        let text = newPostElement.current.value
        props.dispatch({type: 'UPDATE-NEW-POST', newText: text})
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