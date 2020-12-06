import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to='/profile'>Мой профиль</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to='/dialogs'>Диалоги</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to='/news'>Новости</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to='/music'>Музыка</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to='/setting'>Настройки</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;