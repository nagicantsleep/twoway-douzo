import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });
  return {
    title: t('termsTitle'),
    description: t('termsDescription'),
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'terms' });
  const tLegal = await getTranslations({ locale, namespace: 'common.legal' });

  return (
    <>
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'var(--bg-0)', borderBottom: '1px solid var(--bdr)', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--tx-3)', textDecoration: 'none' }}>
          <span style={{ fontSize: '16px' }}>‹</span>
          <span>{tLegal('backHome')}</span>
        </a>
        <div style={{ width: '1px', height: '20px', background: 'var(--bdr-med)' }} />
        <span style={{ fontSize: '12px', color: 'var(--ac)', letterSpacing: '0.2em' }}>{tLegal('siteLabel')}</span>
      </header>
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px 80px', color: 'var(--tx-1)', lineHeight: 1.8 }}>
        <h1 style={{ fontSize: 28, fontWeight: 600, marginBottom: 8 }}>{t('title')}</h1>
        <p style={{ fontSize: 12, color: 'var(--tx-3)', marginBottom: 32 }}>{tLegal('updatedAt')}</p>

        <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>{t('section1.title')}</h2>
        <p dangerouslySetInnerHTML={{ __html: t('section1.body') }} />

        <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>{t('section2.title')}</h2>
        <p>{t('section2.intro')}</p>
        <ul style={{ paddingLeft: 24 }}>
          {t.raw('section2.items').map((item: string, i: number) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>

        <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>{t('section3.title')}</h2>
        <p style={{ background: 'rgba(168,50,40,0.06)', border: '1px solid rgba(168,50,40,0.2)', padding: 16, borderRadius: 8 }}
          dangerouslySetInnerHTML={{ __html: t('section3.body') }} />

        <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>{t('section4.title')}</h2>
        <p dangerouslySetInnerHTML={{ __html: t('section4.body') }} />
        <p>{t('section4.body2')}</p>

        <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>{t('section5.title')}</h2>
        <p>{t('section5.body')}</p>

        <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>{t('section6.title')}</h2>
        <p>{t('section6.body')}</p>

        <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>{t('section7.title')}</h2>
        <p>{t('section7.body')}</p>

        <p style={{ marginTop: 48, fontSize: 12, color: 'var(--tx-3)' }}>
          <a href="/privacy" style={{ color: 'var(--ac)' }}>{t('footer.privacyLink')}</a> · <a href="/" style={{ color: 'var(--ac)' }}>{t('footer.homeLink')}</a>
        </p>
      </main>
    </>
  );
}
