import Header from "./Header";
import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import {setUserData} from "../../redux/AuthReducer";
import {Api} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        Api.getAuthMe().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                this.props.setUserData(id, login, email);
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setUserData})(HeaderContainer)
