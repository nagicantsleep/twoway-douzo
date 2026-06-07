import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['vi', 'zh'],
  defaultLocale: 'vi',
  localePrefix: 'always',
});
