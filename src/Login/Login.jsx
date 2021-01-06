import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" name={'login'} component={'input'}/>
            </div>
            <Field component={'button'} name={'buttonLogin'}>Login</Field>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


let login = () => {
    return <div>
        <h1>
            Логин
        </h1>
        <LoginReduxForm onSubmit={(formData)=>{}}/>
    </div>
}

export default login