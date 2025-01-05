'use server';

import {cookies} from 'next/headers';
import {Locale, defaultLocale} from '@/i18n/config';

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = 'APP_LOCALE';

export async function getUserLocale() {
    //TODO: Add a way to load locale from settings or user profile;
    const cookie = await cookies().get(COOKIE_NAME).value;
  return cookie || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
    //TODO: Add a way to save locale to settings or user profile;
  cookies().set(COOKIE_NAME, locale);
}