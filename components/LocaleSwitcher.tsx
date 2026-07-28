'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

const LABELS: Record<string, string> = {
  zh: '中文',
  vi: 'Tiếng Việt',
};

type Props = {
  /** Compact pill for nav bars */
  className?: string;
};

/**
 * Toggle between Chinese and Vietnamese while keeping the current path.
 */
export default function LocaleSwitcher({ className = '' }: Props) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={`inline-flex items-center rounded-full overflow-hidden ${className}`}
      style={{ border: '1px solid var(--t-border, rgba(180,160,100,0.35))' }}
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => {
              if (loc === locale) return;
              router.replace(pathname, { locale: loc });
            }}
            className="text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-1 tracking-wide transition-colors duration-200"
            style={{
              background: active ? 'rgba(200,160,60,0.22)' : 'transparent',
              color: active ? 'var(--t-gold, #c8a03c)' : 'var(--t-muted, #8a7e68)',
              fontWeight: active ? 600 : 400,
            }}
            aria-pressed={active}
          >
            {LABELS[loc] ?? loc}
          </button>
        );
      })}
    </div>
  );
}
