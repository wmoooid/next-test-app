'use client';

import * as Form from '@radix-ui/react-form';

import styles from './new-task-form.module.css';

export default function NewTaskForm() {
    return (
        <div className={styles.wrapper}>
            <Form.Root className={styles.form_root}>
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
