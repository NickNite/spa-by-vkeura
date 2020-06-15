import React from 'react';
import styles from './Profile.module.css';
import MyProfile from './MyProfile/MyProfile';
import MyPostContainer from './MyPosts/MyPostContainer';


const Profile = props => {
    return (
        <div className={styles.content}>
            <div className={styles.mainImage}>
                <img src='https://html5css.ru/howto/img_snow_wide.jpg' />
            </div>
            <MyProfile saveProfile={props.saveProfile} savePhoto={props.savePhoto} profile={props.profile} isOwner={props.isOwner} status={props.status} setProfileStatus={props.setProfileStatus} />
            <MyPostContainer isOwner={props.isOwner} />
        </div>
    )
};

export default Profile;