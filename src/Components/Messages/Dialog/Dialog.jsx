import React from 'react';
import styles from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    return (
        <div className={styles.dialog}>
            <img src={props.avatar} />
            <NavLink activeClassName={styles.active} to={props.link}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;