import React, { useState } from 'react';
import styles from './MyProfile.module.css';
import Preloader from '../../CommonFile/Preloader/Preloader';
import userNoPhoto from '../../../Decor/Image/userNoPhoto.png'
import MyProfileStatus from './MyProfileStatus';
import { ProfileInfo, ProfileInfoReduxForm } from './ProfileInfoEdit';
import MyFriends from '../Friends/FriendsContainer';


//Компонента с информацией о пользователях (User Information Component)
const MyProfile = ({ saveProfile, profile, ...props }) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    };

    const changePhoto = event => {              //Изменение аватара пользователя (Change user avatar)
        if (event.target.files.length) {
            props.savePhoto(event.target.files[0])
        }
    };
    const onSubmit = (formData) => {            //Отправка формы с данными о пользователе (Submitting a form with user data)
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    };
    return (
        <div className={styles.myProfile}>
            <div className={styles.left}>
                <div className={styles.photos}>
                    <img src={!profile.photos.large ? userNoPhoto : profile.photos.large} />
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
                    ? <ProfileInfoReduxForm initialValues={profile} onSubmit={onSubmit} editModeToggle={() => { setEditMode(false) }}
                        profile={profile} isOwner={props.isOwner} />
                    //Если editMode включен то показываем форму для заполнения данных, если нет показываем информацию о пользователе
                    //(If editMode is enabled, then show the form to fill in the data, if not, show user information)
                    : <ProfileInfo isOwner={props.isOwner} status={props.status} setProfileStatus={props.setProfileStatus}
                        editModeToggle={() => { setEditMode(true) }} profile={profile} isOwner={props.isOwner} />}
            </div>
        </div>
    )
}


export default MyProfile;