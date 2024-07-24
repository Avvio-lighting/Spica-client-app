import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'de', 'fr', 'es'],
  defaultLocale: 'en',
});

export const config = {
  matcher: [
    '/', // Root
    '/(de|en|fr|es)/:path*', // Any path under the locales

    '/about', // Static page
    '/(de|en|fr|es)/about', // About page under any locale
    '/search', // Static page
    '/(de|en|fr|es)/search', // About page under any locale
    '/search/:id*', // Dynamic product pages
    '/(de|en|fr|es)/search/:id*', // Dynamic product pages under any locale

    '/contacts', // Static page
    '/contacts/message', // Static page
    '/(de|en|fr|es)/contacts', // Contact page under any locale
    '/(de|en|fr|es)/contacts/message', // Contact page under any locale

    '/products/:id*', // Dynamic product pages
    '/(de|en|fr|es)/products/:id*', // Dynamic product pages under any locale

    '/projects', // projects listing page
    '/projects/:id*', // Dynamic projects pages
    '/(de|en|fr|es)/projects', // projects under any locale
    '/(de|en|fr|es)/projects/:id*', // Dynamic projects pages under any locale

    '/blog', // blog listing page
    '/blog/:id*', // Dynamic blog pages
    '/(de|en|fr|es)/blog', // blog under any locale
    '/(de|en|fr|es)/blog/:id*', // Dynamic blog pages under any locale

    '/categories', // blog listing page
    '/categories/:id*', // Dynamic blog pages
    '/(de|en|fr|es)/categories', // blog under any locale
    '/(de|en|fr|es)/categories/:id*', // Dynamic blog pages under any locale
  ],
};
