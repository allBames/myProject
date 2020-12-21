import s from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
            <header className={s.header}>
                <img src='https://cdn.worldvectorlogo.com/logos/tiktok-logo-2--1.svg'></img>
                <div className={s.loginBlock}>
                    { props.isAuth ? props.login : <NavLink to={'/Login'}>Login</NavLink> }
                </div>
            </header>
    );
}

export default Header;