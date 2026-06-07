/**
 * 14 主星 × 13 topic 知识数据库
 *
 * 5 import sites:
 *   - lib/seo/knowledge.ts (helper, getKnowledge, generateStaticParams)
 *   - app/knowledge/page.tsx (主页列出 14 主星)
 *   - app/knowledge/[star]/[topic]/page.tsx (182 SEO 落地页)
 *
 * STAR_DB 当前为空 — 真实内容由 US-007 (dịch nội dung tri thức
 * chuyên sâu) fill.  Skeleton này chỉ cần tsc pass và build pass.
 * Khi STAR_DB rỗng, getAllKnowledgeRoutes() trả [] → tất cả
 * /knowledge/[star]/[topic] 404, nhưng /knowledge (trang chủ)
 * vẫn render.
 *
 * Type `StarContent` được define trùng với shape local trong
 * lib/seo/knowledge.ts (cùng field names). Hai definition
 * độc lập, tsc OK nhờ cast `as StarContent | undefined` ở
 * knowledge.ts.
 */

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

/** Topic → 宫位名 (用于页面 header "X 入 Y 宫") */
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

/** Topic → 显示标签 (用于 tab/chip "命格总论" 等) */
export const TOPIC_LABEL: Record<TopicKey, string> = {
  overview: '命格总论',
  personality: '性格特质',
  love: '感情婚姻',
  career: '事业功名',
  wealth: '财运理财',
  health: '健康养生',
  family: '兄弟朋友',
  children: '子女缘分',
  move: '迁居出行',
  friends: '人际交往',
  home: '家宅田产',
  spirit: '福德精神',
  parents: '父母长辈',
};

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

/**
 * 主星 → 13 宫位 4 段 markers (一句话定调/核心论断/命盘依据/经典出处).
 * Empty skeleton — fill by US-007.
 */
export const STAR_DB: Record<string, StarContent> = {} as Record<string, StarContent>;
