import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import React from "react";
import Login from "./components/Login/Login";
import Target from "./components/Target/Target";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/AppReducer";
import Preloader from "./components/common/preloader/Preloader";
import {compose} from "redux";
import store from "./redux/ReduxStore";
import HeaderContainer from "./components/Header/HeaderContainer";


const DialogListContainer = React.lazy(() => import("./components/Dialogs/DialogListContainer"))
const UsersContainer = React.lazy(() => import( "./components/Users/UsersContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))

class App extends React.Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert("Ой, что-то пошло не так!")
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        else {
            return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Switch>
                            <Route exact path={'/'}
                                render={ () => <Redirect to={"/profile"}/> }/>
                            <Route path='/dialogs' render={() => {
                                return <React.Suspense fallback={<div>Loading...</div>}>
                                    <DialogListContainer/>
                                </React.Suspense>
                            }}/>
                            <Route path='/profile/:userId?' render={() => {
                                return <React.Suspense fallback={<div>Loading...</div>}>
                                    <ProfileContainer/>
                                </React.Suspense>
                            }}/>
                            <Route path='/users' render={() => {
                                return <React.Suspense fallback={<div>Loading...</div>}>
                                    <UsersContainer/>
                                </React.Suspense>
                            }}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/setting' render={() => <Setting/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                            <Route path='/target' render={() => <Target/>}/>
                            <Route path='*' render={() => <div>404</div>}/>
                        </Switch>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

let MainApp = (props) => {
    return <BrowserRouter> {/*basename={process.env.PUBLIC_URL}*/}
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp

