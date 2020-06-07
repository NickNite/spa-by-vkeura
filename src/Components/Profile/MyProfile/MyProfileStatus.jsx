import React, { useState, useEffect } from 'react';
import styles from './MyProfile.module.css';



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
            {!editMode ?
                <div className={styles.status}>
                    <p onClick={activeEditMode}>{props.status || 'Add Status'}</p>
                </div>
                :
                <div className={styles.inputParent}>
                    <input className={styles.input} autoFocus={true} onChange={onChanged} onBlur={deActivetedEditMode} type="text" value={status} />
                </div>
            }
        </div>
    )
}


export default MyProfileStatus;