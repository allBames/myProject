import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import DialogListContainer from "./components/Dialogs/DialogListContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friendsData={props.store.getState().sidebar.friends}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogListContainer/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/setting' render={() => <Setting/>}/>
            </div>
        </div>
    );
}

export default App;
