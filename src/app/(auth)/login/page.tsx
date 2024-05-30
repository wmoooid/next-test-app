import LoginForm from '@/components/login-form';

export default function LoginPage() {
    return (
        <section style={{ flexGrow: 1, display: 'grid', placeItems: 'center', paddingBottom: '4rem' }}>
            <LoginForm />
        </section>
    );
}
