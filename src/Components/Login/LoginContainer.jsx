import React from 'react';
import styles from './Login.module.css';
import { maxLengthField, minLengthField } from '../CommonFile/Utils/FormControl/FormValidator';
import { connect } from 'react-redux';
import { login } from '../../Redux/authReducer';
import { Redirect } from 'react-router-dom';
import { LoginReduxForm } from './Login';

let maxLengthLogin = maxLengthField(30);
let minLengthLogin = minLengthField(5);
//Устанавливаем валидацию по количеству символов для инпутов логина и пароля (Set validation by the number of characters for input login and password)
let maxLengthPass = maxLengthField(15);
let minLengthPass = minLengthField(4);


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha) //Функция для отправки формы (Function to submit the form)
    };
    if (props.isAuth) return <Redirect to='/profile' /> // Проверка на авторизацию (Authorization Check)
    return (
        <div className={styles.main}>
            <div className={styles.text}>
                <h2>Welcome</h2>
            </div >
            {/* Форма для заполнения логина, пароля и если нужно капча (Form to fill in login, password and if necessary captcha) */}
            <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit} maxLengthLogin={maxLengthLogin} minLengthLogin={minLengthLogin}
                maxLengthPass={maxLengthPass} minLengthPass={minLengthPass} />
        </div >
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.authData.isAuth,
        captchaUrl: state.authData.captchaUrl
    }

}


export default connect(mapStateToProps, { login })(Login);