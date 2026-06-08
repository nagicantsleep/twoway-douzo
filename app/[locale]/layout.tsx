import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'common.metadata' });

  /** Build hreflang alternates dynamically from routing config */
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `/${l}`;
  }

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(',').map((s: string) => s.trim()),
    metadataBase: new URL('https://wdyziweidoushu666.com'),
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: `https://wdyziweidoushu666.com/${locale}`,
      siteName: t('siteName'),
      locale: locale === 'zh' ? 'zh_CN' : 'vi_VN',
      type: 'website',
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
      other: {
        'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || '808FFC6023A2C359B375DD860FEDA856',
        'baidu-site-verification': process.env.NEXT_PUBLIC_BAIDU_VERIFICATION || '',
        '360-site-verification': process.env.NEXT_PUBLIC_360_VERIFICATION || '',
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
