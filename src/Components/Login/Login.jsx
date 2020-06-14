import React from 'react';
import styles from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import { InputField } from '../CommonFile/Utils/CustomForm/myInputs';
import { requiredSymbol } from '../CommonFile/Utils/FormControl/FormValidator';



const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.form}>
            <div className={styles.inputCont}>
                <div className={styles.inputs}>
                    <span>Login:</span>
                    <Field component={InputField} name={"email"} placeholder="login" validate={[requiredSymbol, props.maxLengthLogin, props.minLengthLogin]} />
                </div>
                <div className={styles.inputs + " " + styles.password} >
                    <span>Password:</span>
                    <Field component={InputField} type="password" name={"password"} placeholder="password" validate={[requiredSymbol, props.maxLengthPass, props.minLengthPass]} />
                </div>
            </div>
            <div className={styles.checkbox}><Field component={"input"} name={"rememberMe"} type={"checkbox"} />  remember me</div>
            {props.captchaUrl && <img className={styles.captcha} src={props.captchaUrl} />}
            {props.captchaUrl && <Field className={styles.captchaInput} component={InputField} name={"captcha"} placeholder="symbols from image" validate={[]} />}
            {props.error && <div className='error'>{props.error}</div>}
            <input name={"button"} type={"submit"} className={styles.button} value="Login in" />
        </form>
    )
};

export const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm); //оборачиваем нужную форму 
