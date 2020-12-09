import {combineReducers, createStore} from "redux";
import dialogReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./SidebarReducer";

let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;