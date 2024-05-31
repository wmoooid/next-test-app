import LoginForm from '@/components/login-form';
import { login } from '@/lib/session/actions';

export default async function LoginPage() {
    return (
        <section style={{ flexGrow: 1, display: 'grid', placeItems: 'center', paddingBottom: '4rem' }}>
            <LoginForm action={login} />
        </section>
    );
}
