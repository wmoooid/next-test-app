import UIToggle from '@/shared/ui/toggle/toggle';

import { Task } from '../../types/task-types';
import styles from './task-list.module.css';

const MOCK_TASK_LIST: Array<Task> = [
    {
        id: '1',
        name: 'Помыть кота',
        creator: 'foo@bar.com',
        text: 'Срочно помыть кота, пока не стало слишком поздно',
        isCompleted: false
    },
    {
        id: '2',
        name: 'Поесть',
        creator: 'foo@bar.com',
        text: 'Купить еды, приготовить и поесть',
        isCompleted: true
    },
    {
        id: '3',
        name: 'Поспать',
        creator: 'foo@bar.com',
        text: 'Спать очень важно',
        isCompleted: false
    }
];

export default function TaskList() {
    return (
        <ul className={styles.list}>
            {MOCK_TASK_LIST.map((task) => (
                <TaskItem key={task.id} {...task} />
            ))}
        </ul>
    );
}

function TaskItem({ name, text, creator, isCompleted }: Task) {
    return (
        <li className={styles.item} data-completed={isCompleted}>
            <div className={styles.item_text}>
                <strong className={styles.item_heading}>{name}</strong>
                <p className={styles.item_text}>{text}</p>
                <small className={styles.item_creator}>{creator}</small>
            </div>
            <UIToggle isChecked={isCompleted} />
        </li>
    );
}
