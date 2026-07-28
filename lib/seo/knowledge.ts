/**
 * SEO 知识页 — 数据 helper
 *
 * 14 主星 × 13 topic = 182 个独立 SEO URL
 * Body: STAR_DB locale-aware (US-018). SEO briefs: Option B { zh, vi }.
 */

import { getStarDb, pickLocale, type LocaleText, type StarContent } from '@/lib/ziwei/db-analysis';
import type { TopicKey } from '@/lib/ziwei/db-analysis';
import { TOPIC_PALACE_NAME, topicLabel } from '@/lib/ziwei/db-analysis';

export const ALL_STARS = [
  '紫微', '天机', '太阳', '武曲', '天同', '廉贞', '天府',
  '太阴', '贪狼', '巨门', '天相', '天梁', '七杀', '破军',
];

// 主星名 ↔ 拼音 slug 映射（URL 用 slug，避免中文 URL 在 Vercel/CDN 上的边界问题）
export const STAR_TO_SLUG: Record<string, string> = {
  '紫微': 'ziwei',
  '天机': 'tianji',
  '太阳': 'taiyang',
  '武曲': 'wuqu',
  '天同': 'tiantong',
  '廉贞': 'lianzhen',
  '天府': 'tianfu',
  '太阴': 'taiyin',
  '贪狼': 'tanlang',
  '巨门': 'jumen',
  '天相': 'tianxiang',
  '天梁': 'tianliang',
  '七杀': 'qisha',
  '破军': 'pojun',
};

export const SLUG_TO_STAR: Record<string, string> = Object.fromEntries(
  Object.entries(STAR_TO_SLUG).map(([k, v]) => [v, k])
);

export const ALL_TOPICS: TopicKey[] = [
  'overview', 'personality', 'love', 'career', 'wealth', 'health',
  'family', 'children', 'move', 'friends', 'home', 'spirit', 'parents',
];

const TOPIC_TO_FIELD: Record<TopicKey, keyof StarContent> = {
  overview:    'mingGong',
  personality: 'personality',
  love:        'fuQi',
  career:      'guanLu',
  wealth:      'caiBo',
  health:      'jiE',
  family:      'xiongDi' as keyof StarContent,
  children:    'ziNv' as keyof StarContent,
  move:        'qianYi' as keyof StarContent,
  friends:     'jiaoYou' as keyof StarContent,
  home:        'tianZhai' as keyof StarContent,
  spirit:      'fuDe' as keyof StarContent,
  parents:     'fuMu' as keyof StarContent,
};

interface ParsedContent {
  dingdiao: string;
  lundian: string;
  yiju: string;
  chuchu: string;
  raw: string;
  hasMarkers: boolean;
}

function parseStarContent(content: string): ParsedContent {
  const out: ParsedContent = { dingdiao: '', lundian: '', yiju: '', chuchu: '', raw: content, hasMarkers: false };
  if (!content) return out;
  if (!content.includes('**【一句话定调】**') && !content.includes('**【核心论断】**')) {
    out.lundian = content;
    return out;
  }
  out.hasMarkers = true;
  const re = /\*\*【([^】]+)】\*\*/g;
  const parts: { name: string; markerEnd: number; start: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(content)) !== null) {
    parts.push({ name: m[1], start: m.index, markerEnd: m.index + m[0].length });
  }
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i];
    const end = i + 1 < parts.length ? parts[i + 1].start : content.length;
    const text = content.slice(p.markerEnd, end).trim();
    if (p.name === '一句话定调') out.dingdiao = text;
    else if (p.name === '核心论断') out.lundian = text;
    else if (p.name === '命盘依据') out.yiju = text;
    else if (p.name === '经典出处') out.chuchu = text;
  }
  return out;
}

export interface KnowledgeData {
  star: string;
  topic: TopicKey;
  topicLabel: string;
  palaceName: string;
  parsed: ParsedContent;
  exists: boolean;
}

export function getKnowledge(star: string, topic: TopicKey, locale = 'zh'): KnowledgeData {
  const profile = getStarDb(locale)[star];
  const field = TOPIC_TO_FIELD[topic];
  const content = profile && field ? (profile[field] as string | undefined) ?? '' : '';
  return {
    star,
    topic,
    topicLabel: topicLabel(topic, locale),
    palaceName: TOPIC_PALACE_NAME[topic],
    parsed: parseStarContent(content),
    exists: Boolean(content),
  };
}

/** 生成所有 14×13 组合（用于 generateStaticParams） — existence from zh corpus */
export function getAllKnowledgeRoutes() {
  const routes: { star: string; slug: string; topic: TopicKey }[] = [];
  for (const star of ALL_STARS) {
    for (const topic of ALL_TOPICS) {
      const data = getKnowledge(star, topic, 'zh');
      if (data.exists) routes.push({ star, slug: STAR_TO_SLUG[star], topic });
    }
  }
  return routes;
}

/** 主星属性简介（SEO / knowledge home） — Decision 0002 Option B */
export const STAR_BRIEF_SEO: Record<string, LocaleText> = {
  '紫微': {
    zh: '紫微为帝星，主尊贵，化气为尊。落命主有领导气场、宜大平台高位。',
    vi: 'Tử Vi là đế tinh, chủ tôn quý, hóa khí là tôn. Lạc mệnh chủ có khí trường lãnh đạo, hợp nền tảng lớn vị cao.',
  },
  '天机': {
    zh: '天机为智慧星，主善变机灵，化气为善。落命主聪明机变、宜辅佐策划。',
    vi: 'Thiên Cơ là trí tuệ tinh, chủ thiện biến cơ linh, hóa khí là thiện. Lạc mệnh chủ thông minh cơ biến, hợp phụ tá hoạch định.',
  },
  '太阳': {
    zh: '太阳为男贵星，主名誉公务，化气为贵。落命主光明磊落、宜公职名声。',
    vi: 'Thái Dương là nam quý tinh, chủ danh dự công vụ, hóa khí là quý. Lạc mệnh chủ quang minh lỗi lạc, hợp công chức danh tiếng.',
  },
  '武曲': {
    zh: '武曲为财星，主刚毅果决，化气为财。落命主理财能力强、宜实业金融。',
    vi: 'Vũ Khúc là tài tinh, chủ cương nghị quả quyết, hóa khí là tài. Lạc mệnh chủ năng lực quản lý tiền mạnh, hợp thực nghiệp tài chính.',
  },
  '天同': {
    zh: '天同为福星，主温和享乐，化气为福。落命主性情温和、有福气。',
    vi: 'Thiên Đồng là phúc tinh, chủ ôn hòa hưởng lạc, hóa khí là phúc. Lạc mệnh chủ tính tình ôn hòa, có phúc khí.',
  },
  '廉贞': {
    zh: '廉贞为次桃花星，文武兼备，化气为囚。落命主多才多艺、感情丰富。',
    vi: 'Liêm Trinh là thứ đào hoa tinh, văn võ kiêm bị, hóa khí là tù. Lạc mệnh chủ đa tài đa nghệ, tình cảm phong phú.',
  },
  '天府': {
    zh: '天府为南帝守财星，主稳重保守，化气为令。落命主品行端正、善守财库。',
    vi: 'Thiên Phủ là Nam Đế thủ tài tinh, chủ vững trọng bảo thủ, hóa khí là lệnh. Lạc mệnh chủ phẩm hạnh đoan chính, giỏi thủ tài khố.',
  },
  '太阴': {
    zh: '太阴为月亮富贵星，主田宅富贵，化气为富。落命主感情细腻、女命最吉。',
    vi: 'Thái Âm là nguyệt lượng phú quý tinh, chủ điền trạch phú quý, hóa khí là phú. Lạc mệnh chủ tình cảm tinh tế, nữ mệnh tối cát.',
  },
  '贪狼': {
    zh: '贪狼为桃花欲望星，多才多社交，化气为桃花。落命主多才艺、社交广。',
    vi: 'Tham Lang là đào hoa dục vọng tinh, đa tài đa xã giao, hóa khí là đào hoa. Lạc mệnh chủ đa tài nghệ, xã giao rộng.',
  },
  '巨门': {
    zh: '巨门为是非口才星，主辩论传媒，化气为暗。落命主口才好、宜律师教师。',
    vi: 'Cự Môn là thị phi khẩu tài tinh, chủ biện luận truyền thông, hóa khí là ám. Lạc mệnh chủ khẩu tài tốt, hợp luật sư giáo viên.',
  },
  '天相': {
    zh: '天相为印星辅佐，主忠厚老实，化气为印。落命主品行端正、宜行政法务。',
    vi: 'Thiên Tướng là ấn tinh phụ tá, chủ trung hậu thật thà, hóa khí là ấn. Lạc mệnh chủ phẩm hạnh đoan chính, hợp hành chính pháp vụ.',
  },
  '天梁': {
    zh: '天梁为老人星荫星，善逢凶化吉，化气为荫。落命主慈悲善良、宜法律医学。',
    vi: 'Thiên Lương là lão nhân tinh âm tinh, giỏi gặp hung hóa cát, hóa khí là âm. Lạc mệnh chủ từ bi thiện lương, hợp luật pháp y học.',
  },
  '七杀': {
    zh: '七杀为将星，主孤独果决冒险，化气为肃杀。落命主刚毅果决、宜军警创业。',
    vi: 'Thất Sát là tướng tinh, chủ cô độc quả quyết mạo hiểm, hóa khí là túc sát. Lạc mệnh chủ cương nghị quả quyết, hợp quân cảnh khởi nghiệp.',
  },
  '破军': {
    zh: '破军为破坏创新星，主六亲缘薄，化气为耗。落命主开创变动、宜技术专长。',
    vi: 'Phá Quân là phá hoại sáng tạo tinh, chủ lục thân duyên mỏng, hóa khí là hao. Lạc mệnh chủ khai sáng biến động, hợp chuyên môn kỹ thuật.',
  },
};

export function starBriefSeo(star: string, locale: string): string {
  const brief = STAR_BRIEF_SEO[star];
  return brief ? pickLocale(brief, locale) : '';
}
