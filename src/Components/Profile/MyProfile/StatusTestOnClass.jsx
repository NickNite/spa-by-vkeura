import React from 'react';
import styles from './MyProfile.module.css';

//Test on class component


class MyProfileStatus extends React.Component {
    state = {
        editMode: false,
        statusText: this.props.status,
    };
    createNewStatus() {
        this.setState({
            editMode: true
        })
    };
    addNewStatus() {
        this.setState({
            editMode: false,
        });
        this.props.setProfileStatus(this.state.statusText)
    };
    changedStatus(event) {
        this.setState({
            statusText: event.target.value
        })
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                statusText: this.props.status
            })
        }
    };

    render() {
        return (
            <div className={styles.statusMain}>
                {!this.state.editMode ?
                    <div className={styles.status}>
                        <p onClick={this.createNewStatus.bind(this)}>{this.props.status || 'Add Status'}</p>
                    </div>
                    :
                    <div className={styles.inputParent}>
                        <input className={styles.input} autoFocus={true} onChange={this.changedStatus.bind(this)} onBlur={this.addNewStatus.bind(this)} type="text" value={this.state.statusText} />
                    </div>
                }
            </div>
        )
    }
}

export default MyProfileStatus;