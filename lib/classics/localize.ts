/**
 * Classics library locale helpers (Decision 0002 Option C).
 *
 * Classical `Paragraph.text` stays Chinese. Book/chapter chrome, vernacular,
 * and niNote are localized via overlays in classics-i18n.ts.
 */

import { pickLocale, type LocaleText } from '@/lib/ziwei/famous';
import type { Book, Chapter, Paragraph } from './types';
import {
  BOOK_VI,
  CHAPTER_VI,
  PARAGRAPH_BODY,
  chapterKey,
} from './classics-i18n';

export type LocalizedBookChrome = {
  title: string;
  dynasty: string;
  author: string;
  intro: string;
};

export type LocalizedChapterChrome = {
  title: string;
  subtitle?: string;
};

export type LocalizedParagraphExtras = {
  translation?: string;
  niNote?: string;
};

export function localizeBookChrome(book: Book, locale: string): LocalizedBookChrome {
  if (locale !== 'vi') {
    return {
      title: book.title,
      dynasty: book.dynasty,
      author: book.author,
      intro: book.intro,
    };
  }
  const vi = BOOK_VI[book.slug];
  return {
    title: vi?.title ?? book.title,
    dynasty: vi?.dynasty ?? book.dynasty,
    author: vi?.author ?? book.author,
    intro: vi?.intro ?? book.intro,
  };
}

export function localizeChapterChrome(
  bookSlug: string,
  chapterIdx: number,
  chapter: Chapter,
  locale: string,
): LocalizedChapterChrome {
  if (locale !== 'vi') {
    return { title: chapter.title, subtitle: chapter.subtitle };
  }
  const vi = CHAPTER_VI[chapterKey(bookSlug, chapterIdx)];
  return {
    title: vi?.title ?? chapter.title,
    subtitle: vi?.subtitle ?? chapter.subtitle,
  };
}

export function localizeParagraphExtras(
  paragraph: Paragraph,
  locale: string,
): LocalizedParagraphExtras {
  const body = PARAGRAPH_BODY[paragraph.id];
  if (!body) {
    return {
      translation: paragraph.translation,
      niNote: paragraph.niNote,
    };
  }
  return {
    translation: pickLocale(body.translation, locale),
    niNote: body.niNote ? pickLocale(body.niNote, locale) : paragraph.niNote,
  };
}

/** True when this paragraph has vernacular (or note) for the locale. */
export function paragraphHasLocalizedBody(paragraphId: string, locale: string): boolean {
  const body = PARAGRAPH_BODY[paragraphId];
  if (!body) return false;
  if (locale === 'vi') return Boolean(body.translation.vi);
  return Boolean(body.translation.zh);
}

/** Book has any VI chapter/vernacular overlay (drives sourceNote wording). */
export function bookHasViBody(bookSlug: string): boolean {
  return Boolean(BOOK_VI[bookSlug]);
}

export type { LocaleText };
