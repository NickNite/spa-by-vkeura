import React from 'react';
import styles from './Messages.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import MesagesFormContainer from './MessagesForm';


const Messages = (props) => {


    let newDialogData = props.dialogList.map((item, index) => {
        return <Dialog key={index} name={item.name} link={item.link} avatar={item.avatar} />
    });

    let newMessData = props.messageList.map((text, index) => {
        return <Message key={index} mess={text.item} />
    });


    const addNewMessage = (values) => {
        props.createNewMessage(values.newMessage);
    };
    return (
        <div className={styles.messages}>
            <div className={styles.dialodsItem}>
                {newDialogData}
            </div>
            <div className={styles.messagesItem}>
                <div className={styles.redactNewMess}>
                    {newMessData}
                </div>
                <MesagesFormContainer onSubmit={addNewMessage} />
            </div>
        </div>

    )
};

export default Messages;