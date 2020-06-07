import React from 'react';
import preloaderTest from '../../../Decor/Preloader/preloaderTest.svg';
import styles from './Preloader.module.css';


const Preloader = (props) => {
    return <div className={styles.preloader}><img src={preloaderTest} /></div>
};

export default Preloader;