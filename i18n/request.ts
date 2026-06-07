import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

/** Namespace files được tách theo domain để dễ maintain */
const NAMESPACES = [
  'common', 'chart', 'form', 'home', 'insight', 'knowledge',
  'library', 'preview', 'share', 'star-detail',
] as const;

/** Merge nhiều namespace JSON thành một object messages */
async function loadMessages(locale: string) {
  const entries = await Promise.all(
    NAMESPACES.map(async (ns) => {
      try {
        const mod = await import(`../messages/${locale}/${ns}.json`);
        return [ns, mod.default] as const;
      } catch {
        return [ns, {}] as const;
      }
    }),
  );
  return Object.fromEntries(entries);
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: await loadMessages(locale),
  };
});
