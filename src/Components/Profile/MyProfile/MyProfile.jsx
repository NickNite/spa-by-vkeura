import React, { useState } from 'react';
import styles from './MyProfile.module.css';
import Preloader from '../../CommonFile/Preloader/Preloader';
import userNoPhoto from '../../../Decor/Image/userNoPhoto.png'
import MyProfileStatus from './MyProfileStatus';
import { ProfileInfo, ProfileInfoReduxForm } from './ProfileInfoEdit';
import MyFriends from '../Friends/FriendsContainer';





const MyProfile = ({ saveProfile, profile, ...props }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    };

    const changePhoto = event => {
        if (event.target.files.length) {
            props.savePhoto(event.target.files[0])
        }
    };
    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    };
    return (
        <div className={styles.myProfile}>
            <div className={styles.left}>
                <div className={styles.photos}>
                    <img src={!profile.photos.large ? userNoPhoto : profile.photos.small} />
                    {props.isOwner &&
                        <div className={styles.inputBlock}>
                            <input type={"file"} onChange={changePhoto} name="file" id="file" className={styles.inputHidden} />
                            <label for="file" className={styles.inputButton}>Change photo</label>
                        </div>
                    }
                </div>
                <div className={styles.friends}>
                    <MyFriends />
                </div>
            </div>
            <div className={styles.userInfo}>
                {editMode
                    ? <ProfileInfoReduxForm initialValues={profile} onSubmit={onSubmit} editModeToggle={() => { setEditMode(false) }} profile={profile} isOwner={props.isOwner} />
                    : <ProfileInfo status={props.status} setProfileStatus={props.setProfileStatus} editModeToggle={() => { setEditMode(true) }} profile={profile} isOwner={props.isOwner} />}
            </div>
        </div>
    )
}


export default MyProfile;