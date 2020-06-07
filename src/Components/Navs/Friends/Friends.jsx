import React from 'react';
import styles from './Friends.module.css';


const Friends = (props) => {

    let myFriends = props.friends.map((item, index) => {
        return <div key={index} className={styles.friend}><img className={styles.avatar} src={item.avatar} />{item.name}</div>
    })
    return (
        <div className={styles.friends}>
            <h2>Friends</h2>
            <div className={styles.friendsBlock}>
                {myFriends}
            </div>
        </div>
    )
}

export default Friends;