import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile, getStatus, setProfileStatus, savePhoto, saveProfile } from '../../Redux/profilePageReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../HOCS/withAuthRedirect';
import { compose } from 'redux';

//Контейнерная компонента для страницы профиля пользователя (Container component for user profile page)
class ProfilePage extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;   //Проверка пользователя для корректного отображения страницы его профиля (User verification for the correct display of his profile page)
        if (!userId) {
            userId = this.props.logUserId;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    };

    componentDidMount() {
        this.refreshProfile(); // Обновление профиля при переходе на страницу (Profile update when going to page)
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId != prevProps.match.params.userId) { // Обновления профиля при изменении пользователя (Profile Updates on User Change)
            this.refreshProfile();
        }
    };

    render() {
        return <Profile saveProfile={this.props.saveProfile} savePhoto={this.props.savePhoto} isOwner={!this.props.match.params.userId} profile={this.props.profile} isAuth={this.props.isAuth} status={this.props.profileStatus} setProfileStatus={this.props.setProfileStatus} />
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
    setProfileStatus,
    savePhoto,
    saveProfile
};


export default compose(
    connect(mapStateToProps, newDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfilePage);