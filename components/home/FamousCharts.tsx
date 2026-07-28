'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import type { Theme } from '@/components/ThemeProvider';
import { FAMOUS_PERSONS, FAMOUS_CATEGORIES, pickLocale, type FamousPerson } from '@/lib/ziwei/famous';

interface Colors {
  goldLine?: string;
  goldSolid?: string;
  tagText?: string;
  textPrimary?: string;
  textSecond?: string;
  textMuted?: string;
  cardBg?: string;
  cardBorder?: string;
  cardShadow?: string;
  starBg?: string;
  starBorder?: string;
  starText?: string;
  [key: string]: string | undefined;
}

interface FamousChartsProps {
  colors: Colors;
  theme: Theme;
}

export default function FamousCharts({ colors, theme }: FamousChartsProps) {
  const t = useTranslations('home');
  const locale = useLocale();
  const c = colors;
  return (
    <section className="relative z-10 px-6 md:px-10 lg:px-14 py-20">
      <div className="mx-auto" style={{ maxWidth: '1280px' }}>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: c.goldLine }} />
            <span className="text-[10px] tracking-[0.5em] uppercase" style={{ color: c.tagText }}>
              {t('famousCharts.tag')}
            </span>
            <div className="h-px w-8" style={{ background: c.goldLine }} />
          </div>
          <h2
            className={`grad-text ${theme === 'dark' ? 'grad-text-dark' : 'grad-text-light'} font-bold tracking-tight`}
            style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
          >
            {t('famousCharts.title')}
          </h2>
          <p
            className="text-sm leading-relaxed mt-4 max-w-2xl mx-auto"
            style={{ color: c.textSecond }}
          >
            {t('famousCharts.description')}
          </p>
        </div>

        {FAMOUS_CATEGORIES.map(cat => {
          const list = FAMOUS_PERSONS.filter((p: FamousPerson) => p.category === cat);
          if (list.length === 0) return null;
          return (
            <div key={cat} className="mb-12">
              <h3
                className="text-sm font-medium mb-5"
                style={{ color: c.goldSolid, letterSpacing: '0.2em' }}
              >
                {t(`famousCharts.categories.${cat}`)}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {list.map(person => (
                  <motion.div
                    key={person.id}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.1 }}
                    className="rounded-xl p-5"
                    style={{
                      background: c.starBg,
                      border: `1px solid ${c.starBorder}`,
                      boxShadow: c.cardShadow,
                    }}
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <span
                        style={{
                          fontSize: '18px',
                          fontWeight: 700,
                          color: c.textPrimary,
                          letterSpacing: '0.1em',
                        }}
                      >
                        {pickLocale(person.name, locale)}
                      </span>
                      <span
                        style={{
                          fontSize: '10px',
                          color: c.starText,
                          letterSpacing: '0.15em',
                        }}
                      >
                        {t('famousCharts.yearTemplate', { year: person.year })}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: '12px',
                        color: c.textSecond,
                        lineHeight: 1.7,
                        marginBottom: '10px',
                      }}
                    >
                      {pickLocale(person.description, locale)}
                    </p>
                    <p
                      style={{
                        fontSize: '11px',
                        color: c.textMuted,
                        lineHeight: 1.7,
                        fontStyle: 'italic',
                      }}
                    >
                      {pickLocale(person.notable, locale)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
