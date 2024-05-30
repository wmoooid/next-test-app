'use client';

import * as Form from '@radix-ui/react-form';

import styles from './login-form.module.css';

export default function LoginForm() {
    const handleSubmit = () => {};
    return (
        <div className={styles.wrapper}>
            <strong className={styles.heading}>Авторизация</strong>
            <Form.Root onSubmit={handleSubmit} className={styles.form_root}>
                <Form.Field className={styles.form_field} name='Email'>
                    <div className={styles.input_header}>
                        <Form.Label className={styles.input_label}>Email</Form.Label>
                        <Form.Message className={styles.message_error} match='valueMissing'>
                            Введите Email
                        </Form.Message>
                        <Form.Message className={styles.message_error} match='typeMismatch'>
                            Введите корректный email
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <input placeholder='Введите Email' name='email' className={styles.input} type='email' required />
                    </Form.Control>
                </Form.Field>

                <Form.Field className={styles.form_field} name='Пароль'>
                    <div className={styles.input_header}>
                        <Form.Label className={styles.input_label}>Пароль</Form.Label>
                        <Form.Message className={styles.message_error} match='valueMissing'>
                            Введите пароль
                        </Form.Message>
                        <Form.Message className={styles.message_error} match='typeMismatch'>
                            Введите корректный email
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <input placeholder='Введите пароль' name='password' className={styles.input} type='password' required />
                    </Form.Control>
                </Form.Field>

                <Form.Submit asChild>
                    <button className='button button_accent' style={{ marginTop: '1rem' }}>
                        Создать
                    </button>
                </Form.Submit>
            </Form.Root>
        </div>
    );
}
