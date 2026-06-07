/**
 * Bảng phiên âm Hán-Việt — lớp hiển thị cho thuật ngữ Tử Vi.
 *
 * ⚠️  KHÔNG đổi key tra cứu trong SI_HUA_TABLE, STAR_BRIGHTNESS,
 *     STAR_DESCRIPTIONS, PALACE_NAMES_ORDER, STEMS, BRANCHES v.v.
 *     Các giá trị gốc tiếng Trung vẫn là KEY cho thuật toán Tử Vi.
 *     Lớp này chỉ thêm khả năng hiển thị theo locale.
 */

export type Locale = 'vi' | 'zh';

export interface TermEntry {
  vi: string;
  zh: string;
}

/** Toàn bộ thuật ngữ Tử Vi dùng trong giao diện */
export const TERMS: Record<string, TermEntry> = {
  // ── 14 chính tinh ──
  '紫微': { vi: 'Tử Vi', zh: '紫微' },
  '天机': { vi: 'Thiên Cơ', zh: '天机' },
  '太阳': { vi: 'Thái Dương', zh: '太阳' },
  '武曲': { vi: 'Vũ Khúc', zh: '武曲' },
  '天同': { vi: 'Thiên Đồng', zh: '天同' },
  '廉贞': { vi: 'Liêm Trinh', zh: '廉贞' },
  '天府': { vi: 'Thiên Phủ', zh: '天府' },
  '太阴': { vi: 'Thái Âm', zh: '太阴' },
  '贪狼': { vi: 'Tham Lang', zh: '贪狼' },
  '巨门': { vi: 'Cự Môn', zh: '巨门' },
  '天相': { vi: 'Thiên Tướng', zh: '天相' },
  '天梁': { vi: 'Thiên Lương', zh: '天梁' },
  '七杀': { vi: 'Thất Sát', zh: '七杀' },
  '破军': { vi: 'Phá Quân', zh: '破军' },

  // ── 12 cung ──
  '命宫': { vi: 'Cung Mệnh', zh: '命宫' },
  '兄弟宫': { vi: 'Cung Huynh Đệ', zh: '兄弟宫' },
  '夫妻宫': { vi: 'Cung Phu Thê', zh: '夫妻宫' },
  '子女宫': { vi: 'Cung Tử Nữ', zh: '子女宫' },
  '财帛宫': { vi: 'Cung Tài Bạch', zh: '财帛宫' },
  '疾厄宫': { vi: 'Cung Tật Ách', zh: '疾厄宫' },
  '迁移宫': { vi: 'Cung Thiên Di', zh: '迁移宫' },
  '交友宫': { vi: 'Cung Giao Hữu', zh: '交友宫' },
  '官禄宫': { vi: 'Cung Quan Lộc', zh: '官禄宫' },
  '田宅宫': { vi: 'Cung Điền Trạch', zh: '田宅宫' },
  '福德宫': { vi: 'Cung Phúc Đức', zh: '福德宫' },
  '父母宫': { vi: 'Cung Phụ Mẫu', zh: '父母宫' },

  // ── 命 / 身 (badge) ──
  '命': { vi: 'Mệnh', zh: '命' },
  '身': { vi: 'Thân', zh: '身' },

  // ── 10 thiên can ──
  '甲': { vi: 'Giáp', zh: '甲' },
  '乙': { vi: 'Ất', zh: '乙' },
  '丙': { vi: 'Bính', zh: '丙' },
  '丁': { vi: 'Đinh', zh: '丁' },
  '戊': { vi: 'Mậu', zh: '戊' },
  '己': { vi: 'Kỷ', zh: '己' },
  '庚': { vi: 'Canh', zh: '庚' },
  '辛': { vi: 'Tân', zh: '辛' },
  '壬': { vi: 'Nhâm', zh: '壬' },
  '癸': { vi: 'Quý', zh: '癸' },

  // ── 12 địa chi ──
  '子': { vi: 'Tý', zh: '子' },
  '丑': { vi: 'Sửu', zh: '丑' },
  '寅': { vi: 'Dần', zh: '寅' },
  '卯': { vi: 'Mão', zh: '卯' },
  '辰': { vi: 'Thìn', zh: '辰' },
  '巳': { vi: 'Tỵ', zh: '巳' },
  '午': { vi: 'Ngọ', zh: '午' },
  '未': { vi: 'Mùi', zh: '未' },
  '申': { vi: 'Thân', zh: '申' },
  '酉': { vi: 'Dậu', zh: '酉' },
  '戌': { vi: 'Tuất', zh: '戌' },
  '亥': { vi: 'Hợi', zh: '亥' },

  // ── 12 thời thần ──
  '子时': { vi: 'Giờ Tý', zh: '子时' },
  '丑时': { vi: 'Giờ Sửu', zh: '丑时' },
  '寅时': { vi: 'Giờ Dần', zh: '寅时' },
  '卯时': { vi: 'Giờ Mão', zh: '卯时' },
  '辰时': { vi: 'Giờ Thìn', zh: '辰时' },
  '巳时': { vi: 'Giờ Tỵ', zh: '巳时' },
  '午时': { vi: 'Giờ Ngọ', zh: '午时' },
  '未时': { vi: 'Giờ Mùi', zh: '未时' },
  '申时': { vi: 'Giờ Thân', zh: '申时' },
  '酉时': { vi: 'Giờ Dậu', zh: '酉时' },
  '戌时': { vi: 'Giờ Tuất', zh: '戌时' },
  '亥时': { vi: 'Giờ Hợi', zh: '亥时' },

  // ── ngũ hành ──
  '金': { vi: 'Kim', zh: '金' },
  '木': { vi: 'Mộc', zh: '木' },
  '水': { vi: 'Thủy', zh: '水' },
  '火': { vi: 'Hỏa', zh: '火' },
  '土': { vi: 'Thổ', zh: '土' },

  // ── ngũ hành cục ──
  '水二局': { vi: 'Thủy Nhị Cục', zh: '水二局' },
  '木三局': { vi: 'Mộc Tam Cục', zh: '木三局' },
  '金四局': { vi: 'Kim Tứ Cục', zh: '金四局' },
  '土五局': { vi: 'Thổ Ngũ Cục', zh: '土五局' },
  '火六局': { vi: 'Hỏa Lục Cục', zh: '火六局' },

  // ── tứ hóa ──
  '禄': { vi: 'Lộc', zh: '禄' },
  '权': { vi: 'Quyền', zh: '权' },
  '科': { vi: 'Khoa', zh: '科' },
  '忌': { vi: 'Kỵ', zh: '忌' },

  // ── phụ tinh (chính) ──
  '天魁': { vi: 'Thiên Khôi', zh: '天魁' },
  '天钺': { vi: 'Thiên Việt', zh: '天钺' },
  '禄存': { vi: 'Lộc Tồn', zh: '禄存' },
  '天马': { vi: 'Thiên Mã', zh: '天马' },
  '左辅': { vi: 'Tả Phụ', zh: '左辅' },
  '右弼': { vi: 'Hữu Bật', zh: '右弼' },
  '文昌': { vi: 'Văn Xương', zh: '文昌' },
  '文曲': { vi: 'Văn Khúc', zh: '文曲' },
  '地空': { vi: 'Địa Không', zh: '地空' },
  '地劫': { vi: 'Địa Kiếp', zh: '地劫' },
  '擎羊': { vi: 'Kình Dương', zh: '擎羊' },
  '陀罗': { vi: 'Đà La', zh: '陀罗' },
  '火星': { vi: 'Hỏa Tinh', zh: '火星' },
  '铃星': { vi: 'Linh Tinh', zh: '铃星' },

  // ── sao đặc biệt ──
  '天伤': { vi: 'Thiên Thương', zh: '天伤' },
  '天使': { vi: 'Thiên Sứ', zh: '天使' },
  '红鸾': { vi: 'Hồng Loan', zh: '红鸾' },
  '天喜': { vi: 'Thiên Hỷ', zh: '天喜' },
  '孤辰': { vi: 'Cô Thần', zh: '孤辰' },
  '寡宿': { vi: 'Quả Túc', zh: '寡宿' },

  // ── phân loại sao (dùng trong StarDetailPanel labels) ──
  '主星': { vi: 'Chủ Tinh', zh: '主星' },
  '吉星': { vi: 'Cát Tinh', zh: '吉星' },
  '凶星': { vi: 'Hung Tinh', zh: '凶星' },
  '煞星': { vi: 'Sát Tinh', zh: '煞星' },
  '杂星': { vi: 'Tạp Tinh', zh: '杂星' },
  '辅星': { vi: 'Phụ Tinh', zh: '辅星' },

  // ── bảng chỉ định khác ──
  '空宫': { vi: 'Không Cung', zh: '空宫' },
};

/**
 * Tra cứu tên hiển thị theo locale.
 * - Nếu tìm thấy → trả về bản dịch theo locale.
 * - Nếu không tìm thấy → trả về nguyên bản (tiếng Trung), không crash.
 */
export function localizeTerm(term: string, locale: Locale): string {
  const entry = TERMS[term];
  if (!entry) return term;
  if (locale === 'vi') return entry.vi;
  return entry.zh;
}

/**
 * Helper: localize với locale mặc định 'vi'.
 * Tiện cho component client component không cần truyền locale.
 */
export function localizeTermVi(term: string): string {
  return localizeTerm(term, 'vi');
}
