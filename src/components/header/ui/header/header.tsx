import { LOGOUT_ROUTE } from '@/shared/constants/routes';
import { getSession } from '@/shared/lib/session/actions';

import styles from './header.module.css';

export async function Header() {
    const { isLoggedIn } = await getSession();

    return (
        <header>
            <div className='container'>
                <div className={styles.wrapper}>
                    <div className={styles.logo_wrapper}>
                        <span className={styles.logo_text}>Next task app</span>
                    </div>

                    {isLoggedIn && (
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href={LOGOUT_ROUTE} className='button button_accent'>
                                Выйти
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
