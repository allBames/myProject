import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/ProfileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Api} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '13281'
        Api.getProfile(userId).then(data => {
            this.props.setUserProfile(data)
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUserProfile}) (withRouter(ProfileContainer));