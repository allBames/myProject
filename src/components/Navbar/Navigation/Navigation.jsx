import s from './Navigation.module.css';
import {NavLink} from "react-router-dom";

function Navigation(props) {

    return (
        <div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to='/profile'>Мой профиль</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to='/dialogs'>Диалоги</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to='/users'>Люди</NavLink>
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
            <div className={s.item}>
                <NavLink activeClassName={s.active} to='/target'>Цели</NavLink>
            </div>
        </div>
    );
}

export default Navigation;