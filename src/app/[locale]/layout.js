import { Figtree } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import './globals.css';
import Header from '../../components/Layout/Header/Header';
import Footer from '@/components/Layout/Footer/Footer';
const figtree = Figtree({ subsets: ['latin'] });
import { CookiesProvider } from 'next-client-cookies/server';
import Alert from "@/components/Shared/Alert/Alert"
export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${figtree.className} flex min-h-screen flex-col justify-between text-charcoal`}
      >
        <CookiesProvider>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <Alert />
            {children}
            <Footer locale={locale} />
          </NextIntlClientProvider>
        </CookiesProvider>
      </body>
    </html>
  );
}
