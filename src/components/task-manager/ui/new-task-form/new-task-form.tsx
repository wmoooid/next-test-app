'use client';

import * as Dialog from '@radix-ui/react-dialog';
import * as Form from '@radix-ui/react-form';
import { Cross2Icon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createTask } from '../../model/tasks-slice';
import styles from './new-task-form.module.css';

function NewTaskForm({ onSubmit }: { onSubmit: () => void }) {
    const dispatch = useDispatch();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get('task-name') as string;
        const email = formData.get('task-email') as string;
        const text = formData.get('task-text') as string;

        if (name && text && email) dispatch(createTask({ name, text, email }));

        onSubmit();
    };

    return (
        <div className={styles.wrapper}>
            <Form.Root onSubmit={handleSubmit} className={styles.form_root}>
                <strong className={styles.heading}>Создать новую задачу</strong>

                <Form.Field className={styles.form_field} name='task-name'>
                    <Form.Message className={styles.message_error} match='tooShort'>
                        Название должно быть длиннее 3 символов
                    </Form.Message>
                    <Form.Control asChild>
                        <input placeholder='Название' name='task-name' className={styles.input} type='text' required minLength={3} />
                    </Form.Control>
                </Form.Field>

                <Form.Field className={styles.form_field} name='task-email'>
                    <Form.Message className={styles.message_error} match='valueMissing'>
                        Введите Email
                    </Form.Message>
                    <Form.Message className={styles.message_error} match='typeMismatch'>
                        Введите корректный Email
                    </Form.Message>
                    <Form.Control asChild>
                        <input placeholder='Email' name='task-email' className={styles.input} type='email' required />
                    </Form.Control>
                </Form.Field>

                <Form.Field className={styles.form_field} name='task-email'>
                    <Form.Control asChild>
                        <textarea rows={5} placeholder='Начните писать...' name='task-text' className={styles.input} />
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

export default function NewTaskDialog() {
    const [open, setOpen] = useState(false);

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <button style={{ flexGrow: 1 }} className='button button_accent'>
                    Создать задачу
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={styles.dialog_overlay} />
                <Dialog.Content className={styles.dialog_content}>
                    <NewTaskForm onSubmit={() => setOpen(false)} />
                    <Dialog.Close asChild>
                        <button className={styles.dialog_close} aria-label='Close'>
                            <Cross2Icon style={{ width: '1.25rem', height: '1.25rem' }} />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
