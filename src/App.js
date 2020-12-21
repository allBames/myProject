import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import DialogListContainer from "./components/Dialogs/DialogListContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import React from "react";

function App(props) {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar friendsData={props.store.getState().sidebar.friends}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogListContainer/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/setting' render={() => <Setting/>}/>
            </div>
        </div>
    );
}

export default App;
