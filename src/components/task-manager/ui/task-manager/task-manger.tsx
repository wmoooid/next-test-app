import TaskFilter from '../task-filter/task-filter';
import TaskList from '../task-list/task-list';
import styles from './task-manager.module.css';

export default function TaskManager() {
    return (
        <section className={styles.section}>
            <TaskFilter />
            <TaskList />
        </section>
    );
}
