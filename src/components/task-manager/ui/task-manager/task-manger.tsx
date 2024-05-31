'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/shared/lib/redux/config/store';
import UIPagination from '@/shared/ui/pagination/pagination';

import { Task } from '../../model/types';
import NewTaskDialog from '../new-task-form/new-task-form';
import TaskFilter from '../task-filter/task-filter';
import TaskList from '../task-list/task-list';
import styles from './task-manager.module.css';

export default function TaskManager() {
    const { taskList } = useSelector((state: RootState) => state.taskList);
    const [currentPage, setCurrentPage] = useState(0);

    const paginatedTaskList = taskList
        .filter((task) => !task.isFiltered)
        .reduce((acc: Task[][], task, index) => {
            if (index % 3 === 0) {
                acc.push([task]);
            } else {
                acc[acc.length - 1].push(task);
            }

            return acc;
        }, []);

    const onPaginationClick = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <section className={styles.section}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <TaskFilter />
                <NewTaskDialog />
            </div>
            <TaskList taskList={paginatedTaskList[currentPage]} />
            <UIPagination pageCount={paginatedTaskList.length} currentPage={currentPage} onClick={onPaginationClick} />
        </section>
    );
}
