import s from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
            <header className={s.header}>
                <img src='https://cdn.worldvectorlogo.com/logos/tiktok-logo-2--1.svg'></img>
                <div className={s.loginBlock}>
                    { props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>logout</button></div>
                        : <NavLink to={'/Login'}>Login</NavLink> }
                </div>
            </header>
    );
}

export default Header;