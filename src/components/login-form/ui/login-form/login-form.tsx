'use client';

import * as Form from '@radix-ui/react-form';
import { useSearchParams } from 'next/navigation';

import styles from './login-form.module.css';

export default function LoginForm({ action }: { action: (formData: FormData) => Promise<void> }) {
    const searchParams = useSearchParams();
    const wrongCredentials = searchParams.get('error') === 'wrondCredentials';

    return (
        <div className={styles.wrapper}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', justifyContent: 'space-between' }}>
                <strong className={styles.heading}>Авторизация</strong>
                {wrongCredentials && <span className={styles.message_error}>Неверный логин или пароль</span>}
            </div>
            <Form.Root action={action} className={styles.form_root}>
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
                        Войти
                    </button>
                </Form.Submit>
            </Form.Root>
        </div>
    );
}
