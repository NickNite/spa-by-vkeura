import React from 'react';
import userNoPhoto from '../../Decor/Image/userNoPhoto.png';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';

let User = ({ users, isFollowed, unFollowUser, followUser, ...props }) => {
    return (
        <div className={styles.user}>
            {/* Показывает аватар пользователей (Shows user avatar)*/}
            <div className={styles.left}>
                <NavLink to={'/profile/' + users.id}>
                    <img src={users.photos.small != null ? users.photos.small : userNoPhoto} />
                </NavLink>
            </div>
            {/* Показывает данные: имя и статус у пользователей (Shows data: name and status of users) */}
            <div className={styles.right}>
                <div id={styles.name}>
                    <h2>{users.name}</h2>
                    <p>{users.status}</p>
                </div>
                <div>
                    {users.followed ?
                        <button disabled={isFollowed.some(id => id === users.id)} onClick={() => { unFollowUser(users.id) }} >Unfollow</button> //Кнопки подписки, отписки (Subscribe, unsubscribe buttons)
                        : <button disabled={isFollowed.some(id => id === users.id)} onClick={() => { followUser(users.id) }}>Follow</button>}
                </div>
            </div>
        </div>
    )
}

export default User;