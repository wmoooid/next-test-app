'use server';

import { getIronSession } from 'iron-session';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { SessionData } from './lib';
import { defaultSession, sessionOptions } from './lib';

export async function getSession() {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);

    if (!session.isLoggedIn) {
        session.isLoggedIn = defaultSession.isLoggedIn;
    }

    return session;
}

export async function login(formData: FormData) {
    const session = await getSession();
    const userList = JSON.parse(process.env.USERLIST as string);

    const email = (formData.get('email') as string) ?? 'No email';
    const password = (formData.get('password') as string) ?? 'No password';

    const user = userList.find((user: SessionData) => user.email === email && user.password === password);

    if (user) {
        session.email = user.email;
        session.isAdmin = user.isAdmin;
        session.isLoggedIn = true;
        await session.save();
        revalidatePath('/');
        redirect('/');
    } else {
        redirect('/login?error=wrondCredentials');
    }
}
