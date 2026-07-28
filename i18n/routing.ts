import { defineRouting } from 'next-intl/routing';

/** 中越 bilingual: Chinese primary, Vietnamese second (Decision 0003). */
export const routing = defineRouting({
  locales: ['zh', 'vi'],
  defaultLocale: 'zh',
  localePrefix: 'always',
});
