import { NewTaskDialog } from '@/components/task-manager';

import styles from './header.module.css';

export function Header() {
    return (
        <header>
            <div className='container'>
                <div className={styles.wrapper}>
                    <div className={styles.logo_wrapper}>
                        <span className={styles.logo_text}>Next task app</span>
                    </div>

                    <NewTaskDialog />
                </div>
            </div>
        </header>
    );
}
