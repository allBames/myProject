import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import DialogList from "./components/Dialogs/DialogList";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friendsData={props.state.navbar.friends}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogList
                    dialogsData={props.state.dialogsPage.dialogsData}
                    messagesData={props.state.dialogsPage.messagesData}
                    addMessage={props.addMessage}
                    updateNewMessage={props.updateNewMessage}
                    newTextMessage={props.state.dialogsPage.newTextMessage}/>
                }/>
                <Route path='/profile' render={() => <Profile
                    postsData={props.state.profilePage.postsData}
                    newPostMessage={props.state.profilePage.newPostMessage}
                    addPost={props.addPost}
                    addNewMessage={props.addNewMessage}/>
                }/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/setting' render={() => <Setting/>}/>
            </div>
        </div>
    );
}

export default App;
