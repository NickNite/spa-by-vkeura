import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className={styles.header}>
            <img src='https://paloma365.kz/wp-content/uploads/2019/05/mega-logo-100x100.png' />
            <div className={styles.login}>
                {props.isAuth ?
                    <div><span>{props.userLogin}</span><button onClick={props.logout}>LogOut</button></div>
                    : <NavLink to='/login'>Login</NavLink>}
            </div>

        </div>
    )
}

export default Header;