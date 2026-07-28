/**
 * STAR_DETAIL long-form — locale selector (US-018 / Decision 0002 Option A).
 */

import { STAR_DETAIL_ZH, type StarDetailFields } from '@/lib/ziwei/star-detail.zh';
import { STAR_DETAIL_VI } from '@/lib/ziwei/star-detail.vi';

export type { StarDetailFields };

export function getStarDetail(
  starName: string,
  locale: string,
): StarDetailFields | undefined {
  const db = locale === 'vi' ? STAR_DETAIL_VI : STAR_DETAIL_ZH;
  return db[starName];
}
