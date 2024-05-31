import { SessionOptions } from 'iron-session';

export type SessionData = {
    email?: string;
    password?: string;
    isAdmin?: boolean;
    isLoggedIn: boolean;
};

export const defaultSession: SessionData = {
    isLoggedIn: false
};

export const sessionOptions: SessionOptions = {
    password: process.env.AUTH_SECRET!,
    cookieName: 'session',
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'
    }
};

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
