import {combineReducers, createStore} from "redux";
import dialogReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./SidebarReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";

let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store

export default store;