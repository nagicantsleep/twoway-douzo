/**
 * 14 主星 × 13 topic knowledge database (locale-aware).
 *
 * Long-form body: Decision 0002 Option A — `db-analysis.zh.ts` / `db-analysis.vi.ts`.
 * Topic labels: Option B `{ zh, vi }` + pickLocale (same as famous.ts).
 */

import { pickLocale, type LocaleText } from '@/lib/ziwei/famous';
import { STAR_DB_ZH } from '@/lib/ziwei/db-analysis.zh';
import { STAR_DB_VI } from '@/lib/ziwei/db-analysis.vi';

export type { LocaleText };
export { pickLocale };

export type TopicKey =
  | 'overview'
  | 'personality'
  | 'love'
  | 'career'
  | 'wealth'
  | 'health'
  | 'family'
  | 'children'
  | 'move'
  | 'friends'
  | 'home'
  | 'spirit'
  | 'parents';

export const ALL_TOPIC_KEYS: TopicKey[] = [
  'overview', 'personality', 'love', 'career', 'wealth', 'health',
  'family', 'children', 'move', 'friends', 'home', 'spirit', 'parents',
];

/** Topic → 宫位名 (algorithm / lookup key; display via localizeTerm) */
export const TOPIC_PALACE_NAME: Record<TopicKey, string> = {
  overview: '命宫',
  personality: '命宫',
  love: '夫妻宫',
  career: '官禄宫',
  wealth: '财帛宫',
  health: '疾厄宫',
  family: '兄弟宫',
  children: '子女宫',
  move: '迁移宫',
  friends: '交友宫',
  home: '田宅宫',
  spirit: '福德宫',
  parents: '父母宫',
};

/** Topic → display label (bilingual) */
export const TOPIC_LABEL: Record<TopicKey, LocaleText> = {
  overview: { zh: '命格总论', vi: 'Tổng luận mệnh cách' },
  personality: { zh: '性格特质', vi: 'Đặc chất tính cách' },
  love: { zh: '感情婚姻', vi: 'Tình cảm hôn nhân' },
  career: { zh: '事业功名', vi: 'Sự nghiệp công danh' },
  wealth: { zh: '财运理财', vi: 'Tài vận quản lý' },
  health: { zh: '健康养生', vi: 'Sức khỏe dưỡng sinh' },
  family: { zh: '兄弟朋友', vi: 'Huynh đệ bạn bè' },
  children: { zh: '子女缘分', vi: 'Duyên tử nữ' },
  move: { zh: '迁居出行', vi: 'Di cư xuất hành' },
  friends: { zh: '人际交往', vi: 'Giao tiếp nhân tế' },
  home: { zh: '家宅田产', vi: 'Gia trạch điền sản' },
  spirit: { zh: '福德精神', vi: 'Phúc đức tinh thần' },
  parents: { zh: '父母长辈', vi: 'Phụ mẫu trưởng bối' },
};

export function topicLabel(topic: TopicKey, locale: string): string {
  return pickLocale(TOPIC_LABEL[topic], locale);
}

export interface StarContent {
  mingGong: string;
  personality: string;
  xiongDi?: string;
  fuQi: string;
  ziNv?: string;
  caiBo: string;
  jiE: string;
  qianYi?: string;
  jiaoYou?: string;
  guanLu: string;
  tianZhai?: string;
  fuDe?: string;
  fuMu?: string;
}

/** @deprecated Prefer getStarDb(locale). Kept as Chinese default for route existence checks. */
export const STAR_DB: Record<string, StarContent> = STAR_DB_ZH;

export function getStarDb(locale: string): Record<string, StarContent> {
  return locale === 'vi' ? STAR_DB_VI : STAR_DB_ZH;
}
