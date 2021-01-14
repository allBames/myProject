import React, {Component} from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    followUser, getUsers,
    setCurrentPage, toggleIsFollowingProgress, unFollow, unFollowUser,
} from "../../redux/UsersReducer";
import Preloader from "../common/preloader/Preloader";
import {Api} from "../../api/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                followUser={this.props.followUser}
                unFollowUser={this.props.unFollowUser}
                onPageChanged={this.onPageChanged}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    setCurrentPage,
    unFollowUser,
    followUser,
    toggleIsFollowingProgress,
    getUsers,
    follow,
    unFollow
})(UsersContainer)