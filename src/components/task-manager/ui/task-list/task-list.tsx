'use client';

import { CheckIcon, Pencil2Icon } from '@radix-ui/react-icons';
import { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Task } from '@/components/task-manager/model/types';
import { RootState } from '@/shared/lib/redux/config/store';
import UICheckbox from '@/shared/ui/checkbox/checkbox';

import { editTask } from '../../model/tasks-slice';
import styles from './task-list.module.css';

export default function TaskList({ taskList }: { taskList: Task[] }) {
    if (!taskList) return null;

    return (
        <ul className={styles.list}>
            {taskList.map((task) => (
                <TaskItem key={task.id} {...task} />
            ))}
        </ul>
    );
}

const TaskItem = memo(({ id, name, text, email, isCompleted, isFiltered }: Task) => {
    const { isAdmin } = useSelector((state: RootState) => state.userInfo);

    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newTaskText, setNewTaskText] = useState(text);

    const handleToggle = () => {
        if (!isEditing) return;
        dispatch(editTask({ id, isCompleted: !isCompleted }));
    };

    const handleEditingClick = () => {
        setIsEditing((prev) => !prev);

        if (isEditing) dispatch(editTask({ id, text: newTaskText }));
    };

    if (isFiltered) return null;

    return (
        <li className={styles.item} data-completed={isCompleted}>
            <div className={styles.item_main}>
                <div className={styles.item_header} onClick={handleToggle}>
                    <UICheckbox isChecked={isCompleted} />
                    <strong className={styles.item_heading}>{name}</strong>
                </div>
                {isEditing ? <textarea className={styles.input_text} value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)}></textarea> : <p className={styles.item_text}>{text}</p>}
                <small className={styles.item_creator}>{email}</small>
            </div>
            {isAdmin && (
                <button onClick={handleEditingClick} className='button button_accent'>
                    {isEditing ? <CheckIcon /> : <Pencil2Icon />}
                </button>
            )}
        </li>
    );
});
