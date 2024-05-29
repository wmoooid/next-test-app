'use client';

import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Task } from '@/components/task-manager/model/task-types';
import { RootState } from '@/lib/config/store';
import UIToggle from '@/shared/ui/toggle/toggle';

import { editTask } from '../../model/tasks-slice';
import styles from './task-list.module.css';

export default function TaskList() {
    const { taskList } = useSelector((state: RootState) => state.taskList);

    return (
        <ul className={styles.list}>
            {taskList.map((task) => (
                <TaskItem key={task.id} {...task} />
            ))}
        </ul>
    );
}

const TaskItem = memo(({ id, name, text, creator, isCompleted }: Task) => {
    const dispatch = useDispatch();
    const handleToggle = () => dispatch(editTask({ id, isCompleted: !isCompleted }));

    return (
        <li className={styles.item} data-completed={isCompleted}>
            <div className={styles.item_text}>
                <strong className={styles.item_heading}>{name}</strong>
                <p className={styles.item_text}>{text}</p>
                <small className={styles.item_creator}>{creator}</small>
            </div>
            <div onClick={handleToggle}>
                <UIToggle isChecked={isCompleted} />
            </div>
        </li>
    );
});
