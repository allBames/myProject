import s from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
            <header className={s.header}>
                <div className={s.login}>
                    <img src='https://bm.img.com.ua/isport/orig/c/26/842d4d1323d6e3deba791ff8254ec26c.jpg' alt=''/>
                    <div className={s.loginBlock}>
                        { props.isAuth
                            ? <div>{props.login} - <button onClick={props.logout}>logout</button></div>
                            : <NavLink to={'/Login'}>Login</NavLink> }
                    </div>
                </div>
                <div className={s.wallpaper}>
                    <img src='http://winallos.com/uploads/posts/2014-12/1418954998_volna-siyanie-oboy-zvezdy.jpg' alt=''/>
                </div>

            </header>
    );
}

export default Header;