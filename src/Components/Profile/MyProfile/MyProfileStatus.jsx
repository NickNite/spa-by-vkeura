import React, { useState, useEffect } from 'react';
import styles from './MyProfile.module.css';


//Компонента изменения статуса пользователя (User Status Change Component)
const MyProfileStatus = props => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    let activeEditMode = () => {
        setEditMode(true)
    };

    let deActivetedEditMode = () => {
        setEditMode(false);
        props.setProfileStatus(status)
    };

    let onChanged = (event) => {
        setStatus(event.target.value)
    };

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    return (
        <div className={styles.statusMain}>
            {props.isOwner ? editMode
                ? <div className={styles.inputParent}>
                    <input className={styles.input} autoFocus={true} onChange={onChanged} onBlur={deActivetedEditMode} type="text" value={status} />
                </div>
                : <div className={styles.status}>
                    <p onClick={activeEditMode}>{props.status || 'Add Status'}</p>
                </div>
                : <div className={styles.statusGuest}>
                    <p>{props.status}</p></div>
            }
        </div>
    )
};


export default MyProfileStatus;