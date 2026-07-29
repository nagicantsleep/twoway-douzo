/**
 * /library/[book] — 单部古籍目录页
 */

import { Link } from '@/i18n/navigation';
import { notFound } from 'next/navigation';
import {
  ALL_BOOKS,
  getBookBySlug,
  localizeBookChrome,
  localizeChapterChrome,
} from '@/lib/classics';
import { routing } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export async function generateStaticParams() {
  return routing.locales.flatMap(locale =>
    ALL_BOOKS.map(b => ({ locale, book: b.slug }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; book: string }> }) {
  const { locale, book: slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return {};
  const t = await getTranslations({ locale, namespace: 'library' });
  const chrome = localizeBookChrome(book, locale);
  return {
    title: t('book.bookHeader', { title: chrome.title }) + ' · ' + chrome.dynasty + ' · ' + t('seo.title'),
    description: chrome.intro,
  };
}

export default async function BookPage({ params }: { params: Promise<{ locale: string; book: string }> }) {
  const { locale, book: slug } = await params;
  const t = await getTranslations({ locale, namespace: 'library' });
  const book = getBookBySlug(slug);
  if (!book) notFound();
  const chrome = localizeBookChrome(book, locale);

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh' }}>
      <div className="px-6 py-4 flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(184,146,42,0.15)', background: 'var(--bg-page)' }}>
        <Link href="/library" style={{ fontSize: '12px', color: 'var(--ac)', letterSpacing: '0.3em', textDecoration: 'none' }}>
          {t('nav.backToLibrary')}
        </Link>
        <div style={{ fontSize: '12px', color: 'var(--tx-3)', letterSpacing: '0.2em' }}>
          {t('book.bookHeader', { title: chrome.title })}
        </div>
        <Link href="/" style={{ fontSize: '12px', color: 'var(--ac)', letterSpacing: '0.2em', textDecoration: 'none' }}>
          {t('nav.home')}
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div style={{ fontSize: '11px', color: 'var(--tx-3)', letterSpacing: '0.3em', marginBottom: '8px' }}>
            {t('book.dynastyAuthor', { dynasty: chrome.dynasty, author: chrome.author })}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: 'var(--tx-0)', letterSpacing: '0.15em', marginBottom: '14px' }}>
            {t('book.bookHeader', { title: chrome.title })}
          </h1>
          <p style={{ fontSize: '13px', color: 'var(--tx-2)', lineHeight: 1.8, maxWidth: '500px', margin: '0 auto' }}>
            {chrome.intro}
          </p>
        </div>

        <div style={{ background: 'var(--bg-card)', borderRadius: '14px', border: '1px solid rgba(184,146,42,0.2)', overflow: 'hidden' }}>
          <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(184,146,42,0.15)', fontSize: '11px', color: 'var(--tx-3)', letterSpacing: '0.3em' }}>
            {t('book.chaptersLabel')}
          </div>
          {book.chapters.map((chapter, i) => {
            const ch = localizeChapterChrome(book.slug, i, chapter, locale);
            return (
              <Link
                key={i}
                href={`/library/${book.slug}/${i}`}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '14px',
                  padding: '14px 20px',
                  borderBottom: i === book.chapters.length - 1 ? 'none' : '1px dashed rgba(184,146,42,0.15)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'background 0.15s',
                }}
                className="hover:bg-amber-50"
              >
                <div style={{ fontSize: '12px', color: 'var(--ac)', fontWeight: 600, minWidth: '40px', letterSpacing: '0.1em' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '15px', color: 'var(--tx-0)', fontWeight: 500, letterSpacing: '0.08em', marginBottom: '2px' }}>
                    {ch.title}
                  </div>
                  {ch.subtitle && (
                    <div style={{ fontSize: '11px', color: 'var(--tx-3)' }}>
                      {ch.subtitle}
                    </div>
                  )}
                </div>
                <div style={{ fontSize: '10px', color: 'var(--tx-3)', letterSpacing: '0.1em' }}>
                  {t('book.paragraphCount', { count: chapter.paragraphs.length })}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--ac)' }}>→</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
