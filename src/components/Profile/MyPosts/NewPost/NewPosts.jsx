import React, { Component } from 'react';
import s from './NewPosts.module.css';

function NewPosts() {
    let newPostElement = React.createRef()
    let newPost = () => alert(newPostElement.current.value)
    return (
            <div className={s.newPost}>
                Новый пост:
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ newPost }>Отправить</button>
                </div>
            </div>
    );
}

export default NewPosts;