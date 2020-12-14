import React, {Component} from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followUserAC, setUsersAC, unFollowUserAC} from "../../redux/UsersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
             dispatch(followUserAC(userId))
        },
        unfollow: (userId) => {
             dispatch(unFollowUserAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

let usersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default usersContainer;