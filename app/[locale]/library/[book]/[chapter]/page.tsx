/**
 * /library/[book]/[chapter] — chapter reading page
 *
 * Chrome (nav / labels / SEO) is bilingual via next-intl.
 * Classic body text (paragraphs / translation / niNote) stays Chinese source text.
 */

import { Link } from '@/i18n/navigation';
import { notFound } from 'next/navigation';
import { ALL_BOOKS, getChapter } from '@/lib/classics';
import { routing } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

type Props = { params: Promise<{ locale: string; book: string; chapter: string }> };

export async function generateStaticParams() {
  return routing.locales.flatMap(locale =>
    ALL_BOOKS.flatMap(b =>
      b.chapters.map((_, i) => ({ locale, book: b.slug, chapter: String(i) }))
    )
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, book: bookSlug, chapter: chIdx } = await params;
  const result = getChapter(bookSlug, parseInt(chIdx));
  if (!result) return {};
  const t = await getTranslations({ locale, namespace: 'library' });
  return {
    title: t('chapter.seoTitle', {
      chapter: result.chapter.title,
      book: result.book.title,
    }),
    description:
      result.chapter.subtitle ||
      t('chapter.seoDescription', {
        book: result.book.title,
        chapter: result.chapter.title,
      }),
  };
}

export default async function ChapterPage({ params }: Props) {
  const { locale, book: bookSlug, chapter: chIdx } = await params;
  const result = getChapter(bookSlug, parseInt(chIdx));
  if (!result) notFound();

  const t = await getTranslations({ locale, namespace: 'library' });
  const { book, chapter, chapterIdx } = result;
  const prevIdx = chapterIdx - 1;
  const nextIdx = chapterIdx + 1;

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh' }}>
      <div className="px-6 py-4 flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(184,146,42,0.15)', background: 'var(--bg-page)' }}>
        <Link href={`/library/${book.slug}`} style={{ fontSize: '12px', color: 'var(--ac)', letterSpacing: '0.3em', textDecoration: 'none' }}>
          {t('chapter.backToToc', { book: book.title })}
        </Link>
        <div style={{ fontSize: '12px', color: 'var(--tx-3)', letterSpacing: '0.15em' }}>
          {chapter.title}
        </div>
        <Link href="/library" style={{ fontSize: '12px', color: 'var(--ac)', letterSpacing: '0.2em', textDecoration: 'none' }}>
          {t('chapter.backToLibrary')}
        </Link>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <div style={{ fontSize: '11px', color: 'var(--tx-3)', letterSpacing: '0.25em', marginBottom: '8px' }}>
            {t('chapter.bookMeta', { book: book.title, dynasty: book.dynasty })}
          </div>
          <h1 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: 'var(--tx-0)', letterSpacing: '0.15em', marginBottom: '8px' }}>
            {chapter.title}
          </h1>
          {chapter.subtitle && (
            <div style={{ fontSize: '13px', color: 'var(--tx-2)', letterSpacing: '0.1em' }}>
              {chapter.subtitle}
            </div>
          )}
          {locale === 'vi' && (
            <p style={{ fontSize: '12px', color: 'var(--tx-3)', marginTop: '12px', lineHeight: 1.6 }}>
              {t('chapter.sourceNote')}
            </p>
          )}
        </div>

        <div style={{ background: 'var(--bg-card)', borderRadius: '14px', border: '1px solid rgba(184,146,42,0.2)', padding: '32px 28px' }}>
          {chapter.paragraphs.map((p, i) => (
            <div
              key={p.id}
              id={p.id}
              style={{
                marginBottom: i === chapter.paragraphs.length - 1 ? 0 : '20px',
                paddingBottom: i === chapter.paragraphs.length - 1 ? 0 : '20px',
                borderBottom: i === chapter.paragraphs.length - 1 ? 'none' : '1px dashed rgba(184,146,42,0.15)',
                scrollMarginTop: '80px',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '12px',
              }}>
                <span style={{
                  fontSize: '11px',
                  color: 'var(--ac)',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  minWidth: '24px',
                }}>
                  {String(p.idx).padStart(2, '0')}
                </span>
                <p style={{
                  flex: 1,
                  fontSize: '16px',
                  color: 'var(--tx-0)',
                  lineHeight: 2,
                  letterSpacing: '0.04em',
                  fontFamily: '"PingFang SC", "Hiragino Sans GB", serif',
                }}>
                  {p.text}
                </p>
              </div>
              {p.translation && (
                <div style={{
                  marginTop: '8px',
                  marginLeft: '36px',
                  padding: '8px 12px',
                  background: 'rgba(184,146,42,0.05)',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: 'var(--tx-2)',
                  lineHeight: 1.8,
                }}>
                  <span style={{ fontSize: '10px', color: 'var(--ac)', marginRight: '6px' }}>{t('chapter.vernacular')}</span>
                  {p.translation}
                </div>
              )}
              {p.niNote && (
                <div style={{
                  marginTop: '8px',
                  marginLeft: '36px',
                  padding: '8px 12px',
                  background: 'rgba(196,90,45,0.05)',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: 'var(--tx-2)',
                  lineHeight: 1.8,
                }}>
                  <span style={{ fontSize: '10px', color: 'var(--ji)', marginRight: '6px' }}>{t('chapter.niNote')}</span>
                  {p.niNote}
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
          {prevIdx >= 0 ? (
            <Link
              href={`/library/${book.slug}/${prevIdx}`}
              style={{
                flex: 1,
                padding: '14px 18px',
                background: 'var(--bg-card)',
                border: '1px solid rgba(184,146,42,0.2)',
                borderRadius: '10px',
                textDecoration: 'none',
                color: 'var(--tx-0)',
              }}
            >
              <div style={{ fontSize: '10px', color: 'var(--tx-3)', letterSpacing: '0.2em', marginBottom: '2px' }}>{t('chapter.prev')}</div>
              <div style={{ fontSize: '13px', fontWeight: 500 }}>{book.chapters[prevIdx].title}</div>
            </Link>
          ) : <div style={{ flex: 1 }} />}
          {nextIdx < book.chapters.length ? (
            <Link
              href={`/library/${book.slug}/${nextIdx}`}
              style={{
                flex: 1,
                padding: '14px 18px',
                background: 'var(--bg-card)',
                border: '1px solid rgba(184,146,42,0.2)',
                borderRadius: '10px',
                textDecoration: 'none',
                color: 'var(--tx-0)',
                textAlign: 'right',
              }}
            >
              <div style={{ fontSize: '10px', color: 'var(--tx-3)', letterSpacing: '0.2em', marginBottom: '2px' }}>{t('chapter.next')}</div>
              <div style={{ fontSize: '13px', fontWeight: 500 }}>{book.chapters[nextIdx].title}</div>
            </Link>
          ) : <div style={{ flex: 1 }} />}
        </div>
      </article>
    </div>
  );
}
