import React from 'react';
import styles from './NotFound.module.css';
//Компонента ошибки для неверного URL адресса (Error Component for Invalid URL Address)
const NotFound = (props) => {
    return (
        <div className={styles.main}>
            <h1>404 NOT FOUND</h1>
        </div>

    )
};

export default NotFound;