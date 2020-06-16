import React from 'react';
import { updatePosts } from '../../../Redux/profilePageReducer';
import MyPosts from './MyPosts'
import { connect } from 'react-redux';

//Компонента на стадии разработки (Component under development)!!!!!!!


//Компонента отображающая посты пользователя (Component displaying user posts)
class MyPostContainer extends React.Component {
    addNewPost(values) {
        this.props.updatePosts(values.newPost);
    };
    render() {
        return <MyPosts profile={this.props.profile} newPostsData={this.props.newPostsData} isOwner={this.props.isOwner} newTextOnPost={this.props.newTextOnPost} onSubmit={this.addNewPost.bind(this)} />
    }
}


let mapStateToProps = state => {
    return {
        newPostsData: state.profilePage.postsData,
        newTextOnPost: state.profilePage.newTextOnPost,
        profile: state.profilePage.profileDate,
    }
};

let newDispatchToProps = {
    updatePosts,
};


export default connect(mapStateToProps, newDispatchToProps)(MyPostContainer);