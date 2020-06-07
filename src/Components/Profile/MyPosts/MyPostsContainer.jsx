import React from 'react';
import styles from './MyPosts.module.css';
import { updatePosts } from '../../../Redux/profilePageReducer';
import MyPosts from './MyPosts'
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { requiredSymbol } from '../../CommonFile/Utils/FormControl/FormValidator';
import { Textarea } from '../../CommonFile/Utils/CustomForm/myInputs';

let mapStateToProps = state => {
    return {
        newPostsData: state.profilePage.postsData,
        newTextOnPost: state.profilePage.newTextOnPost
    }
}

let newDispatchToProps = {
    updatePosts
}


const myPostForm = props => {
    return (
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newPost"} className={styles.inpText} validate={[requiredSymbol]} placeholder='your news...' />
            <button className={styles.button}>Send</button>
        </form>
    )
};
export const MyPostFormContainer = reduxForm({ form: 'myPost' })(myPostForm);

export default connect(mapStateToProps, newDispatchToProps)(MyPosts);;