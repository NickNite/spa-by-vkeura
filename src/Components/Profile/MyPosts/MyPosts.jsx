import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { MyPostFormContainer } from './MyPostsContainer';


const MyPosts = props => {
    let newPostsData = props.newPostsData.map((item, index) => {
        return <Post key={index} message={item.message} likeCount={item.like} />
    });

    let addNewPost = (values) => {
        props.updatePosts(values.newPost);
    };

    return (
        <div>
            <h2>My posts</h2>
            <MyPostFormContainer onSubmit={addNewPost} />
            <div className={styles.faq}>
                {newPostsData}
            </div>
        </div>
    )

};


export default MyPosts;