import React from 'react';
import styles from './Messages.module.css';
import { reduxForm, Field, reset } from 'redux-form';
import { Textarea } from '../CommonFile/Utils/CustomForm/myInputs';
import { requiredSymbol } from '../CommonFile/Utils/FormControl/FormValidator';


//Форма для отправки сообщений (Message Submission Form)
const messagesForm = (props) => {
    return (
        <form className={styles.newMess} onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newMessage"} type={"text"} placeholder={"add new message"} validate={requiredSymbol} />
            <button>Send Message</button>
        </form>
    )
};
//Функция для очистки инпута после отправки сообщения (Function to clear input after sending message)
const afterSubmit = (result, dispatch) =>
    dispatch(reset('messages'));

const MesagesFormContainer = reduxForm({ form: "messages", onSubmitSuccess: afterSubmit })(messagesForm); //Оборачиваем форму в контейнерную redux-form (Wrap the form in a container redux-form)

export default MesagesFormContainer;

