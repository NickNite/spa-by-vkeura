import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile, getStatus, setProfileStatus } from '../../Redux/profilePageReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../HOCS/withAuthRedirect';
import { compose } from 'redux';


class ProfilePage extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.logUserId;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    };


    render() {
        return <Profile profile={this.props.profile} isAuth={this.props.isAuth} status={this.props.profileStatus} setProfileStatus={this.props.setProfileStatus} />
    };
};

let mapStateToProps = state => {
    return {
        profile: state.profilePage.profileDate,
        profileStatus: state.profilePage.profileStatus,
        logUserId: state.authData.data.id,
        isAuth: state.authData.isAuth
    }
};


let newDispatchToProps = {
    getProfile,
    getStatus,
    setProfileStatus
};


export default compose(
    connect(mapStateToProps, newDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfilePage);