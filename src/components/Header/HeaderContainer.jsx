import Header from "./Header";
import {connect} from "react-redux";
import React from "react";
import {getMe, setUserData} from "../../redux/AuthReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getMe()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setUserData, getMe})(HeaderContainer)
