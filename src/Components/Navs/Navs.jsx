import React from 'react';
import styles from './Navs.module.css';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav className={styles.sidebar}>
            <ul>
                <li><NavLink activeClassName={styles.active} to='/profile'>Profile</NavLink></li>
                <li><NavLink activeClassName={styles.active} to='/messages'>Messages</NavLink></li>
                <li><NavLink activeClassName={styles.active} to='/news'>News</NavLink></li>
                <li><NavLink activeClassName={styles.active} to='/music'>Music</NavLink></li>
                <li><NavLink activeClassName={styles.active} to='/findusers'>Find Users</NavLink></li>
                <li className={styles.lastLi}><NavLink activeClassName={styles.active} to='/setting'>Setting</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;