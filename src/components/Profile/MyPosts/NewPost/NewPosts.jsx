import React from 'react';
import s from './NewPosts.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControl/FormsControl";

const maxLength10 = maxLengthCreator(10)

function NewPosts(props) {

    let addPost = (values) => {
        props.addPost(values.newPostBody, props.userID)
    }

    return (
        <AddNewPostFormFormRedux onSubmit={addPost}/>
    )
}

export const addNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.newPost}>
                <div>
                    <Field className={s.ta} component={Textarea} name={'newPostBody'}
                           validate={[required, maxLength10]}/>
                </div>
                <div>
                    <button className={s.button}>Добавить пост</button>
                </div>
            </div>
        </form>
    )
}

export const AddNewPostFormFormRedux = reduxForm({form: 'newPost'})(addNewPostForm)

export default NewPosts;