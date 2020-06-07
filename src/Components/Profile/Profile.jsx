import React from 'react';
import styles from './Profile.module.css';
import MyProfile from './MyProfile/MyProfile';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = props => {
    return (
        <div className={styles.content}>
            <div className={styles.mainImage}>
                <img src='https://html5css.ru/howto/img_snow_wide.jpg' />
            </div>
            <MyProfile profile={props.profile} status={props.status} setProfileStatus={props.setProfileStatus} />
            <MyPostsContainer />
        </div>
    )
};

export default Profile;