/**
 * Pattern display labels (Decision 0002 Option C-ish map keyed by Chinese name).
 * Algorithm in patterns.ts keeps Chinese keys; UI looks up locale here.
 */
import type { Pattern } from './patterns';

type LocaleText = { zh: string; vi: string };

const PATTERN_I18N: Record<string, { name: LocaleText; description?: LocaleText }> = {
  '君臣庆会': {
    name: { zh: '君臣庆会', vi: 'Quân Thần Khánh Hội' },
    description: {
      zh: '紫微坐命，三方四正有天府、天相、左辅、右弼等贵星会照，主贵气显达',
      vi: 'Tử Vi thủ Mệnh, tam phương tứ chính hội chiếu Thiên Phủ/Thiên Tướng/Tả Phụ/Hữu Bật — chủ quý khí hiển đạt',
    },
  },
  '紫府同宫': {
    name: { zh: '紫府同宫', vi: 'Tử Phủ Đồng Cung' },
  },
  '府相朝垣': {
    name: { zh: '府相朝垣', vi: 'Phủ Tướng Triêu Viên' },
  },
  '阳梁昌禄': {
    name: { zh: '阳梁昌禄', vi: 'Dương Lương Xương Lộc' },
  },
  '武贪格': {
    name: { zh: '武贪格', vi: 'Vũ Tham cách' },
  },
  '杀破狼': {
    name: { zh: '杀破狼', vi: 'Sát Phá Lang' },
  },
  '机月同梁': {
    name: { zh: '机月同梁', vi: 'Cơ Nguyệt Đồng Lương' },
  },
  '廉贞天相格': {
    name: { zh: '廉贞天相格', vi: 'Liêm Trinh Thiên Tướng cách' },
  },
  '武曲七杀': {
    name: { zh: '武曲七杀', vi: 'Vũ Khúc Thất Sát' },
  },
  '天同天梁格': {
    name: { zh: '天同天梁格', vi: 'Thiên Đồng Thiên Lương cách' },
  },
  '日月同宫': {
    name: { zh: '日月同宫', vi: 'Nhật Nguyệt Đồng Cung' },
  },
  '日月夹命': {
    name: { zh: '日月夹命', vi: 'Nhật Nguyệt Giáp Mệnh' },
  },
  '巨日同宫': {
    name: { zh: '巨日同宫', vi: 'Cự Nhật Đồng Cung' },
  },
  '石中隐玉': {
    name: { zh: '石中隐玉', vi: 'Thạch Trung Ẩn Ngọc' },
  },
  '明珠出海': {
    name: { zh: '明珠出海', vi: 'Minh Châu Xuất Hải' },
  },
  '紫微入命': {
    name: { zh: '紫微入命', vi: 'Tử Vi nhập Mệnh' },
  },
  '辅弼夹命': {
    name: { zh: '辅弼夹命', vi: 'Phụ Bật Giáp Mệnh' },
  },
  '昌曲夹命': {
    name: { zh: '昌曲夹命', vi: 'Xương Khúc Giáp Mệnh' },
  },
  '魁钺夹命': {
    name: { zh: '魁钺夹命', vi: 'Khôi Việt Giáp Mệnh' },
  },
  '双禄朝垣': {
    name: { zh: '双禄朝垣', vi: 'Song Lộc Triêu Viên' },
  },
  '三奇加会': {
    name: { zh: '三奇加会', vi: 'Tam Kỳ Gia Hội' },
  },
  '羊陀夹忌': {
    name: { zh: '羊陀夹忌', vi: 'Dương Đà Giáp Kỵ' },
  },
  '火铃夹命': {
    name: { zh: '火铃夹命', vi: 'Hỏa Linh Giáp Mệnh' },
  },
  '空劫夹命': {
    name: { zh: '空劫夹命', vi: 'Không Kiếp Giáp Mệnh' },
  },
  '廉杀羊': {
    name: { zh: '廉杀羊', vi: 'Liêm Sát Dương' },
  },
  '巨火羊': {
    name: { zh: '巨火羊', vi: 'Cự Hỏa Dương' },
  },
  '铃昌陀武': {
    name: { zh: '铃昌陀武', vi: 'Linh Xương Đà Vũ' },
  },
  '马头带箭': {
    name: { zh: '马头带箭', vi: 'Mã Đầu Đới Tiễn' },
  },
  '化禄入财': {
    name: { zh: '化禄入财', vi: 'Hóa Lộc nhập Tài' },
  },
  '化权入官': {
    name: { zh: '化权入官', vi: 'Hóa Quyền nhập Quan' },
  },
  '机月同梁三星会': {
    name: { zh: '机月同梁三星会', vi: 'Cơ Nguyệt Đồng Lương tam tinh hội' },
  },
  '辅弼同会': {
    name: { zh: '辅弼同会', vi: 'Phụ Bật Đồng Hội' },
  },
  '魁钺同会': {
    name: { zh: '魁钺同会', vi: 'Khôi Việt Đồng Hội' },
  },
  '科权双会': {
    name: { zh: '科权双会', vi: 'Khoa Quyền Song Hội' },
  },
};

function pick(text: LocaleText, locale: string): string {
  return locale === 'vi' ? text.vi : text.zh;
}

/** Localize static pattern name; falls back to Chinese algorithm key. */
export function localizePatternName(name: string, locale: string): string {
  const entry = PATTERN_I18N[name];
  if (entry) return pick(entry.name, locale);
  // Dynamic names like "武曲化禄入命" — keep Chinese key; terms layer may partially help
  return name;
}

export function localizePatternDescription(pattern: Pattern, locale: string): string {
  const entry = PATTERN_I18N[pattern.name];
  if (entry?.description) return pick(entry.description, locale);
  return pattern.description;
}
