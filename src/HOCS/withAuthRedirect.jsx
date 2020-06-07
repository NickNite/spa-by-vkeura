import React from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';



let mapStateToProps = state => {
    return {
        isAuth: state.authData.isAuth
    }
};

export const withAuthRedirect = (Component) => {

    let createNewComponent = (props) => {
        if (!props.isAuth) return <Redirect to='/login' />
        return <Component  {...props} />
    };

    let ConectedNewComponent = connect(mapStateToProps)(createNewComponent);

    return ConectedNewComponent;
};