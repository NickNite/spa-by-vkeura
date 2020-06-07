import React from 'react';
import styles from './Post.module.css';


const Post = props => {
    return (
        <div className={styles.post}>
            <img src='https://www.meme-arsenal.com/memes/bf0296e8bfa92558d0ca180289194068.jpg' />
            <div className={styles.text}>{props.message}</div>
            <span className={styles.like}>Like {props.likeCount}</span>
        </div>
    )
};

export default Post;