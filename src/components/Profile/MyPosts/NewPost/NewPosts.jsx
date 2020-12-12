import React, { Component } from 'react';
import s from './NewPosts.module.css';

function NewPosts(props) {
    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let changePost = () => {
        let text = newPostElement.current.value
        props.changePost(text)
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