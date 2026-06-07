'use client';

import { motion } from 'framer-motion';
import type { Theme } from '@/components/ThemeProvider';
import { FAMOUS_PERSONS, FAMOUS_CATEGORIES, type FamousPerson } from '@/lib/ziwei/famous';

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

const CATEGORY_TITLES: Record<string, string> = {
  '商业': '商业传奇',
  '文艺': '文艺名家',
  '科技': '科技精英',
  '体育': '体育明星',
  '历史': '历史人物',
};

export default function FamousCharts({ colors, theme }: FamousChartsProps) {
  const c = colors;
  return (
    <section className="relative z-10 px-6 md:px-10 lg:px-14 py-20">
      <div className="mx-auto" style={{ maxWidth: '1280px' }}>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: c.goldLine }} />
            <span className="text-[10px] tracking-[0.5em] uppercase" style={{ color: c.tagText }}>
              Famous Charts
            </span>
            <div className="h-px w-8" style={{ background: c.goldLine }} />
          </div>
          <h2
            className={`grad-text ${theme === 'dark' ? 'grad-text-dark' : 'grad-text-light'} font-bold tracking-tight`}
            style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
          >
            名人命盘库
          </h2>
          <p
            className="text-sm leading-relaxed mt-4 max-w-2xl mx-auto"
            style={{ color: c.textSecond }}
          >
            收录商业、文艺、科技、体育四大领域名人命盘，结合倪海夏体系解读其命格亮点。
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
                {CATEGORY_TITLES[cat] ?? cat}
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
                        {person.name}
                      </span>
                      <span
                        style={{
                          fontSize: '10px',
                          color: c.starText,
                          letterSpacing: '0.15em',
                        }}
                      >
                        {person.year}年生
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
                      {person.description}
                    </p>
                    <p
                      style={{
                        fontSize: '11px',
                        color: c.textMuted,
                        lineHeight: 1.7,
                        fontStyle: 'italic',
                      }}
                    >
                      {person.notable}
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
