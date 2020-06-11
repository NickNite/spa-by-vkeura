import React from 'react';
import styles from './MyProfile.module.css';
import Preloader from '../../CommonFile/Preloader/Preloader';
import userNoPhoto from '../../../Decor/Image/userNoPhoto.png'
import MyProfileStatus from './MyProfileStatus';




const MyProfile = props => {
    if (!props.profile) {
        return <Preloader />
    };

    const changePhoto = event => {
        if (event.target.files.length) {
            props.savePhoto(event.target.files[0])
        }
    }

    return (
        <div className={styles.myProfile}>
            <div className={styles.photos}>
                <img src={!props.profile.photos.large ? userNoPhoto : props.profile.photos.small} />
                {props.isOwner &&
                    <div className={styles.inputBlock}>
                        <input type={"file"} onChange={changePhoto} name="file" id="file" className={styles.inputHidden} />
                        <label for="file" className={styles.inputButton}>Change photo</label>
                    </div>
                }
            </div>
            <div className={styles.text}>
                <div className={styles.userName}>
                    <h1>{props.profile.fullName}</h1>
                    <MyProfileStatus status={props.status} setProfileStatus={props.setProfileStatus} />
                </div>
                <div className={styles.profileInfo}>
                    <p><h4>Date birth :</h4> <span>28 february</span></p>
                    <p><h4>City:</h4> <span>Los-Angeles</span></p>
                    <p><h4>Education:</h4> <span>Standford</span></p>
                    <p><h4>Web-Site:</h4> <span>{props.profile.contacts.twitter}</span></p>
                </div>
            </div>
        </div>
    )
}

export default MyProfile;