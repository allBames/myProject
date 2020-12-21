import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/ProfileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '13281'
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId, {
            withCredentials: true,
            headers: {
                "API-KEY": "91d99155-0a12-4a98-9006-bb452c7fea31"
            }
        }).then(response => {
            this.props.setUserProfile(response.data)
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