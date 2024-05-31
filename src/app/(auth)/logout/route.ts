import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { SESSION_COOKIE_NAME } from '@/shared/constants/auth-consts';
import { BASE_ROUTE } from '@/shared/constants/routes';

export async function GET() {
    cookies().set(SESSION_COOKIE_NAME, '');
    redirect(BASE_ROUTE);
}
