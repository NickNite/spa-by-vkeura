import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../Redux/authReducer';




class HeaderContainer extends React.Component {

    render() {
        return (
            <Header userLogin={this.props.userLogin} isAuth={this.props.isAuth} logout={this.props.logout} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userLogin: state.authData.data.login,
        isAuth: state.authData.isAuth
    }
}

export default connect(mapStateToProps, { logout })(HeaderContainer);