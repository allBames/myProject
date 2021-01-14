import Navigation from "./Navigation/Navigation";
import s from './Navbar.module.css'
import Friends from "./Friends/Friends";

function Navbar(props) {
    return (
        <nav className={s.nav}>
            <Navigation/>
            {/*<Friends friendsData={props.friendsData}/>*/}
        </nav>
    );
}

export default Navbar;