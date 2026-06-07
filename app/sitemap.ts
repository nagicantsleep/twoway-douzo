/**
 * 自动生成 sitemap.xml
 *
 * Mỗi đường dẫn được nhân đôi cho mỗi locale (vi, zh).
 * next-intl localePrefix: 'always' nên URL chuẩn luôn có locale prefix.
 */

import type { MetadataRoute } from 'next';
import { ALL_BOOKS } from '@/lib/classics';
import { getAllKnowledgeRoutes } from '@/lib/seo/knowledge';

const BASE_URL = 'https://wdyziweidoushu666.com';
const LOCALES = ['vi', 'zh'];

function localize(path: string, locale: string): string {
  return `${BASE_URL}/${locale}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastmod = new Date('2026-04-28');

  const staticPages: MetadataRoute.Sitemap = LOCALES.flatMap(locale => [
    { url: localize('', locale), priority: 1.0, changeFrequency: 'weekly', lastModified: lastmod },
    { url: localize('/chart', locale), priority: 0.95, changeFrequency: 'weekly', lastModified: lastmod },
    { url: localize('/heming', locale), priority: 0.7, changeFrequency: 'weekly', lastModified: lastmod },
    { url: localize('/library', locale), priority: 0.85, changeFrequency: 'weekly', lastModified: lastmod },
    { url: localize('/knowledge', locale), priority: 0.9, changeFrequency: 'weekly', lastModified: lastmod },
    { url: localize('/terms', locale), priority: 0.3, changeFrequency: 'monthly', lastModified: lastmod },
    { url: localize('/privacy', locale), priority: 0.3, changeFrequency: 'monthly', lastModified: lastmod },
  ]);

  const libraryPages: MetadataRoute.Sitemap = LOCALES.flatMap(locale =>
    ALL_BOOKS.flatMap(book => {
      const bookHome: MetadataRoute.Sitemap[number] = {
        url: localize(`/library/${book.slug}`, locale),
        priority: 0.75,
        changeFrequency: 'monthly',
        lastModified: lastmod,
      };
      const chapters: MetadataRoute.Sitemap = book.chapters.map((_, i) => ({
        url: localize(`/library/${book.slug}/${i}`, locale),
        priority: 0.7,
        changeFrequency: 'monthly',
        lastModified: lastmod,
      }));
      return [bookHome, ...chapters];
    })
  );

  const knowledgePages: MetadataRoute.Sitemap = LOCALES.flatMap(locale =>
    getAllKnowledgeRoutes().map(({ slug, topic }) => ({
      url: localize(`/knowledge/${slug}/${topic}`, locale),
      priority: 0.7,
      changeFrequency: 'monthly',
      lastModified: lastmod,
    }))
  );

  return [...staticPages, ...libraryPages, ...knowledgePages];
}
