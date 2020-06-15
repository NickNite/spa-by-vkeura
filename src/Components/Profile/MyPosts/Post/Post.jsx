import React from 'react';
import styles from './Post.module.css';
import like from '../../../../Decor/Image/Like.png'


const Post = props => {

    return (
        <div className={styles.post}>
            <div className={styles.image}>
                <img src={props.profile.photos.small} />
            </div>
            <div className={styles.text}><p>{props.message}</p></div>
            <div className={styles.like}>
                <img src={like} alt="" />
                <span>{props.likeCount}</span>
            </div>
        </div>
    )
};

export default Post;