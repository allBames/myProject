import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";
import React from "react";
import {connect} from "react-redux";
import {login, logout} from "../../redux/AuthReducer";
import {Redirect} from "react-router-dom";
import s from "./../common/FormsControl/FormsControl.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return <div>
        <form onSubmit={handleSubmit}>
            <div>
                <Field type="text" name={'email'} component={Input} pleaseholder={'Email'}
                       validate={[required]}/>
            </div>
            <div>
                <Field type="password" name={'password'} component={Input} pleaseholder={'Пароль'}
                       validate={[required]}/>
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component={Input}/>
            </div>
            {error && <div className={s.formSummaryError}>
                {error}
            </div> }
            <Field component={'button'} name={'buttonLogin'}>Login</Field>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Логин</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login)