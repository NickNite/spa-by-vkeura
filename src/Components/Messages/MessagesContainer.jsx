import React from 'react';
import { createNewMessage } from '../../Redux/messagePageReducer';
import Messages from './Messages';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../HOCS/withAuthRedirect';
import { compose } from 'redux';


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


export default compose(
    connect(mapStateToProps, newDispatchToProps),
    withAuthRedirect
)(Messages);