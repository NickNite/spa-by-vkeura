import React from 'react';
import styles from './myInputs.module.css';
import cn from 'classnames';

//Кастомные инпуты для формы (Custom inputs for form)
export const Textarea = ({ input, meta, ...props }) => {
    return (
        <div className={styles.textarea}>
            <textarea  {...input} {...props} />
        </div >
    )
};


export const InputField = ({ input, meta, ...props }) => {
    let isError = meta.error && meta.touched;
    return (
        <div className={cn(styles.formControl, (isError ? styles.error : ''))}>
            <input  {...input} {...props} />
            {isError && <span>{meta.error}</span>}
        </div>
    )
};
