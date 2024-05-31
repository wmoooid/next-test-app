import { redirect } from 'next/navigation';

import LoginForm from '@/components/login-form';
import { BASE_ROUTE } from '@/shared/constants/routes';
import { login } from '@/shared/lib/session/actions';
import { getSession } from '@/shared/lib/session/actions';

export default async function LoginPage() {
    const session = await getSession();

    if (session.isLoggedIn) {
        redirect(BASE_ROUTE);
    }

    return (
        <section style={{ flexGrow: 1, display: 'grid', placeItems: 'center', paddingBottom: '4rem' }}>
            <LoginForm action={login} />
        </section>
    );
}
