import React from 'react';
import userNoPhoto from '../../Decor/Image/userNoPhoto.png';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';

let User = ({ users, isFollowed, unFollowUser, followUser, ...props }) => {
    return (
        <div className={styles.user} >
            <div className={styles.left}>
                <NavLink to={'/profile/' + users.id}>
                    <img src={users.photos.small != null ? users.photos.small : userNoPhoto} />
                </NavLink>
                <div>
                    {users.followed ?
                        <button disabled={isFollowed.some(id => id === users.id)} onClick={() => { unFollowUser(users.id) }} >Unfollow</button>
                        : <button disabled={isFollowed.some(id => id === users.id)} onClick={() => { followUser(users.id) }}>Follow</button>}
                </div>
            </div>
            <div className={styles.right}>
                <div id={styles.name}>
                    <h2>{users.name}</h2>
                    <p>{users.status}</p>
                </div>
                <div id={styles.country}>
                    <h2>{'item.location.country + ', ''}</h2>
                    <h2>{'item.location.city'}</h2>
                </div>
            </div>
        </div>
    )
}

export default User;