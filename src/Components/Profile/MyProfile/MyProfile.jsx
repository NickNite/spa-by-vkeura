import React from 'react';
import styles from './MyProfile.module.css';
import Preloader from '../../CommonFile/Preloader/Preloader';
import userNoPhoto from '../../../Decor/Image/userNoPhoto.png'
import MyProfileStatus from './MyProfileStatus';



const MyProfile = props => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={styles.myProfile}>
            <img src={!props.profile.photos.small ? userNoPhoto : props.profile.photos.small} />
            <div className={styles.text}>
                <h1>{props.profile.fullName}</h1>
                <MyProfileStatus status={props.status} setProfileStatus={props.setProfileStatus} />
                <p><b>Date birth :</b> 28 february</p>
                <p><b>City:</b> Los-Angeles</p>
                <p><b>Education:</b> Standford</p>
                <p><b>Web-Site:</b> {props.profile.contacts.twitter}</p>
            </div>
        </div>
    )
}

export default MyProfile;