import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import styles from './task-manager.module.css';

export default function TaskManager() {
    return (
        <section className={styles.section}>
            <NewTaskForm />
            <TaskList />
        </section>
    );
}
