import { redirect } from 'next/navigation';

import LoginForm from '@/components/login-form';
import { login } from '@/lib/session/actions';
import { getSession } from '@/lib/session/actions';

export default async function LoginPage() {
    const session = await getSession();

    if (session.isLoggedIn) {
        redirect('/');
    }

    return (
        <section style={{ flexGrow: 1, display: 'grid', placeItems: 'center', paddingBottom: '4rem' }}>
            <LoginForm action={login} />
        </section>
    );
}
