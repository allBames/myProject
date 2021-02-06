import s from './Navigation.module.css';
import {NavLink} from "react-router-dom";

function Navigation() {

    return (
        <div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to='/profile'>Мой профиль</NavLink>
            </div>
            <hr/>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to='/dialogs'>Мои диалоги</NavLink>
            </div>
            <hr/>

            <div className={s.item}>
                <NavLink activeClassName={s.active} to='/music'>Моя музыка</NavLink>
            </div>
            <hr/>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to='/frends'>Мои друзья</NavLink>
            </div>
            <hr/>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to='/photos'>Мои фото</NavLink>
            </div>
            <hr/>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to='/videos'>Мои видео</NavLink>
            </div>
            <hr/>


        </div>
    );
}

export default Navigation;