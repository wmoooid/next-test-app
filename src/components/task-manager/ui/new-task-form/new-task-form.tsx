'use client';

import * as Form from '@radix-ui/react-form';
import { useDispatch } from 'react-redux';

import { createTask } from '../../model/tasks-slice';
import styles from './new-task-form.module.css';

export default function NewTaskForm() {
    const dispatch = useDispatch();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get('task-name') as string;
        const text = formData.get('task-text') as string;

        if (name && text) dispatch(createTask({ name, text }));
    };

    return (
        <div className={styles.wrapper}>
            <Form.Root onSubmit={handleSubmit} className={styles.form_root}>
                <Form.Field className={styles.form_field} name='new-task'>
                    <div className={styles.input_header}>
                        <Form.Label className={styles.input_label}>Create new task</Form.Label>
                        <Form.Message className={styles.message_error} match='valueMissing'>
                            Please enter all fields
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <input placeholder='Title' name='task-name' className={styles.input} type='text' required />
                    </Form.Control>
                    <Form.Control asChild>
                        <textarea placeholder='Enter task text...' name='task-text' className={styles.input} required />
                    </Form.Control>
                </Form.Field>

                <Form.Submit asChild>
                    <button className='button button_accent' style={{ marginTop: 10 }}>
                        Create
                    </button>
                </Form.Submit>
            </Form.Root>
        </div>
    );
}
