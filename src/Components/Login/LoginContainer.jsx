import React from 'react';
import styles from './Login.module.css';
import { maxLengthField, minLengthField } from '../CommonFile/Utils/FormControl/FormValidator';
import { connect } from 'react-redux';
import { login } from '../../Redux/authReducer';
import { Redirect } from 'react-router-dom';
import { LoginReduxForm } from './Login';

let maxLengthLogin = maxLengthField(30);
let minLengthLogin = minLengthField(5);

let maxLengthPass = maxLengthField(15);
let minLengthPass = minLengthField(8);


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth) return <Redirect to='/profile' />
    return (
        <div className={styles.main}>
            <h2>Welcome to my Social Network</h2>
            <LoginReduxForm onSubmit={onSubmit} maxLengthLogin={maxLengthLogin} minLengthLogin={minLengthLogin} maxLengthPass={maxLengthPass} minLengthPass={minLengthPass} />
        </div>
    )

};

const mapStateToProps = (state) => {
    return {
        isAuth: state.authData.isAuth
    }

}


export default connect(mapStateToProps, { login })(Login);