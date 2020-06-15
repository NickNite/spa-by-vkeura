import React from 'react';
import styles from './MyProfile.module.css';
import { reduxForm, Field } from 'redux-form';
import { InputField, Textarea } from '../../CommonFile/Utils/CustomForm/myInputs';
import MyProfileStatus from './MyProfileStatus';

const Contacts = ({ itemName, itemValue }) => {
    return <div><i>{itemName}:</i><span>{itemValue}</span></div>
};

export const ProfileInfo = ({ profile, ...props }) => {
    return (
        <div className={styles.text}>
            <div className={styles.userName}>
                <h1>{profile.fullName}</h1>
                <MyProfileStatus isOwner={props.isOwner} status={props.status} setProfileStatus={props.setProfileStatus} />
            </div>
            <div className={styles.profileInfo}>
                {props.isOwner && <button onClick={props.editModeToggle}>Edit</button>}
                <div><b>Looking for a job :</b> <span>{profile.lookingForAJob ? 'Yes' : 'No'}</span></div>
                {profile.lookingForAJob ? <div><b>My Skills:</b> <span>{profile.lookingForAJobDescription}</span></div> : ''}
                <div><b>About me:</b> <span>{profile.aboutMe}</span></div>
                <p><b>Contacts:</b> <span>{Object.keys(profile.contacts).map((item, index) => {
                    return <Contacts key={index} itemName={item} itemValue={profile.contacts[item]} />
                })}</span></p>
            </div>
        </div>
    )
};

const ProfileInfoForm = ({ handleSubmit, profile, ...props }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.editForm}>
                <div className={styles.userName}>
                    <div><b>Full name:</b> <Field component={InputField} type="text" name={"fullName"} placeholder="My Name" /></div>
                </div>
                <div className={styles.profileEdit}>
                    <button>Save</button>
                    {props.error && <div className='error'>{props.error}</div>}
                    <div><b>Looking for a job :</b><Field className={styles.checkbox} component={InputField} name={"lookingForAJob"} type="checkbox" /></div>
                    <div><b>My Skills:</b> <Field component={Textarea} type="text" name={"lookingForAJobDescription"} placeholder="skills..." /></div>
                    <div><b>About me:</b> <Field component={Textarea} type="text" name={"aboutMe"} placeholder="I..." /></div>
                    <p><b>Contacts:</b> <span>{Object.keys(profile.contacts).map((item, index) => {
                        return <div className={styles.contacts}>
                            <i>{item}:</i> <Field component={InputField} type="text" name={"contacts." + item} placeholder={item} />
                        </div>
                    })}</span></p>
                </div>
            </div>
        </form>
    )
};

export const ProfileInfoReduxForm = reduxForm({ form: "profileInfo" })(ProfileInfoForm);