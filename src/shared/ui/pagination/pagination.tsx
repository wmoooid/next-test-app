'use client';

import styles from './pagination.module.css';

type UIPaginationProps = {
    pageCount: number;
    currentPage: number;
    onClick: (page: number) => void;
};

export default function UIPagination({ pageCount, currentPage, onClick }: UIPaginationProps) {
    if (pageCount === 1) return null;

    return (
        <nav className={styles.wrapper}>
            <ul className={styles.list}>
                {[...Array(pageCount)].map((_, index) => (
                    <li key={index} className={`${styles.item} ${currentPage === index ? styles.active : ''}`} onClick={() => onClick(index)}>
                        {index + 1}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
