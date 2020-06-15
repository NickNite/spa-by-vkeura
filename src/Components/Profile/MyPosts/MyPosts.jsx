import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { MyPostForm } from './MyPostsForm';



const MyPosts = props => {

    if (!props.profile) {
        return ''
    };

    let newPostsData = props.newPostsData.map((item, index) => {
        return <Post profile={props.profile} key={index} message={item.message} likeCount={item.like} />
    });

    return (
        <div>
            {props.isOwner && <div>
                <div className={styles.newPost}>
                    <MyPostForm onSubmit={props.onSubmit} />
                </div>
                <div >
                    {newPostsData}
                </div>
            </div>}
        </div >
    )

};


export default MyPosts;