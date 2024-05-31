'use client';

import { PinBottomIcon, PinTopIcon } from '@radix-ui/react-icons';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/lib/redux/config/store';
import UIToggle from '@/shared/ui/toggle/toggle';

import { setFilter } from '../../model/filter-slice';
import styles from './task-filter.module.css';

export default function TaskSearch() {
    const { query, sort, completed } = useSelector((state: RootState) => state.filterList);
    const dispatch = useDispatch();

    return (
        <div className={styles.wrapper}>
            <input value={query} onChange={(e) => dispatch(setFilter({ query: e.target.value }))} className={styles.input} type='text' placeholder='Поиск по задачам' />
            <div onClick={() => dispatch(setFilter({ sort: !sort }))}>
                <UIToggle isPressed={sort}>{sort ? <PinTopIcon /> : <PinBottomIcon />}</UIToggle>
            </div>
            <div onClick={() => dispatch(setFilter({ completed: !completed }))}>
                <UIToggle isPressed={completed} withHighlight>
                    Выполненные
                </UIToggle>
            </div>
        </div>
    );
}
