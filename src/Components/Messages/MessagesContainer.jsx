import React from 'react';
import { createNewMessage } from '../../Redux/messagePageReducer';
import Messages from './Messages';
import styles from './Messages.module.css';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../HOCS/withAuthRedirect';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../CommonFile/Utils/CustomForm/myInputs';
import { requiredSymbol } from '../CommonFile/Utils/FormControl/FormValidator';


let mapStateToProps = (state) => {
    return {
        dialogList: state.messagePage.dialogData,
        messageList: state.messagePage.messData,
        newTextOnMessage: state.messagePage.newTextOnMessage,
    }
};


let newDispatchToProps = {
    createNewMessage,
};


const messagesForm = (props) => {
    return (
        <form className={styles.newMess} onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newMessage"} type={"text"} placeholder={"add new message"} validate={requiredSymbol} />
            <button>Send Message</button>
        </form>
    )
};
export const MesagesFormContainer = reduxForm({ form: "messages" })(messagesForm);

export default compose(
    connect(mapStateToProps, newDispatchToProps),
    withAuthRedirect
)(Messages);