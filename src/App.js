import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import DialogListContainer from "./components/Dialogs/DialogListContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import React from "react";
import Login from "./components/Login/Login";
import Target from "./components/Target/Target";
import {connect} from "react-redux";
import {initializeApp} from "./redux/AppReducer";
import Preloader from "./components/common/preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        else {
            return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar friendsData={this.props.store.getState().sidebar.friends}/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={() => <DialogListContainer/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/setting' render={() => <Setting/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/target' render={() => <Target/>}/>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
        initialized: state.app.initialized
})

export default withRouter(connect(mapStateToProps, {initializeApp})(App))
