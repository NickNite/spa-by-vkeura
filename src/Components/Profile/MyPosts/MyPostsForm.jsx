import React from 'react';
import styles from './MyPosts.module.css';
import { reduxForm, Field, reset } from 'redux-form';
import { requiredSymbol } from '../../CommonFile/Utils/FormControl/FormValidator';
import { Textarea } from '../../CommonFile/Utils/CustomForm/myInputs';


const myPostForm = props => {

    return (
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newPost"} className={styles.inpText} validate={[requiredSymbol]} placeholder='add new post' />
            <button className={styles.button} >Send</button>
        </form>
    )
};

const afterSubmit = (result, dispatch) =>
    dispatch(reset('myPost'));


export const MyPostForm = reduxForm({ form: 'myPost', onSubmitSuccess: afterSubmit })(myPostForm);


