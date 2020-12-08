import React, { Component } from 'react';
import s from './NewPosts.module.css';

function NewPosts(props) {

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
    }

    return (
            <div className={s.newPost}>
                Новый пост:
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Отправить</button>
                </div>
            </div>
    );
}

export default NewPosts;