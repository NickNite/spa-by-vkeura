import React from 'react';
import styles from './Messages.module.css';
import { reduxForm, Field, reset } from 'redux-form';
import { Textarea } from '../CommonFile/Utils/CustomForm/myInputs';
import { requiredSymbol } from '../CommonFile/Utils/FormControl/FormValidator';



const messagesForm = (props) => {
    return (
        <form className={styles.newMess} onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newMessage"} type={"text"} placeholder={"add new message"} validate={requiredSymbol} />
            <button>Send Message</button>
        </form>
    )
};
const afterSubmit = (result, dispatch) =>
    dispatch(reset('messages'));

const MesagesFormContainer = reduxForm({ form: "messages", onSubmitSuccess: afterSubmit })(messagesForm);

export default MesagesFormContainer;

