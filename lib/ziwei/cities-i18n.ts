/**
 * Display labels for Chinese province/city names (Decision 0002 Option B-ish).
 * Algorithm / form values keep Chinese `name` keys for longitude lookup.
 */
import { pickLocale, type LocaleText } from '@/lib/ziwei/famous';

/** Province-level bilingual labels (31). City names stay Chinese proper nouns for now. */
const PROVINCE_I18N: Record<string, LocaleText> = {
  北京市: { zh: '北京市', vi: 'Bắc Kinh' },
  天津市: { zh: '天津市', vi: 'Thiên Tân' },
  上海市: { zh: '上海市', vi: 'Thượng Hải' },
  重庆市: { zh: '重庆市', vi: 'Trùng Khánh' },
  河北省: { zh: '河北省', vi: 'Hà Bắc' },
  山西省: { zh: '山西省', vi: 'Sơn Tây' },
  内蒙古自治区: { zh: '内蒙古自治区', vi: 'Nội Mông Cổ' },
  辽宁省: { zh: '辽宁省', vi: 'Liêu Ninh' },
  吉林省: { zh: '吉林省', vi: 'Cát Lâm' },
  黑龙江省: { zh: '黑龙江省', vi: 'Hắc Long Giang' },
  江苏省: { zh: '江苏省', vi: 'Giang Tô' },
  浙江省: { zh: '浙江省', vi: 'Chiết Giang' },
  安徽省: { zh: '安徽省', vi: 'An Huy' },
  福建省: { zh: '福建省', vi: 'Phúc Kiến' },
  江西省: { zh: '江西省', vi: 'Giang Tây' },
  山东省: { zh: '山东省', vi: 'Sơn Đông' },
  河南省: { zh: '河南省', vi: 'Hà Nam' },
  湖北省: { zh: '湖北省', vi: 'Hồ Bắc' },
  湖南省: { zh: '湖南省', vi: 'Hồ Nam' },
  广东省: { zh: '广东省', vi: 'Quảng Đông' },
  广西壮族自治区: { zh: '广西壮族自治区', vi: 'Quảng Tây' },
  海南省: { zh: '海南省', vi: 'Hải Nam' },
  四川省: { zh: '四川省', vi: 'Tứ Xuyên' },
  贵州省: { zh: '贵州省', vi: 'Quý Châu' },
  云南省: { zh: '云南省', vi: 'Vân Nam' },
  西藏自治区: { zh: '西藏自治区', vi: 'Tây Tạng' },
  陕西省: { zh: '陕西省', vi: 'Thiểm Tây' },
  甘肃省: { zh: '甘肃省', vi: 'Cam Túc' },
  青海省: { zh: '青海省', vi: 'Thanh Hải' },
  宁夏回族自治区: { zh: '宁夏回族自治区', vi: 'Ninh Hạ' },
  新疆维吾尔自治区: { zh: '新疆维吾尔自治区', vi: 'Tân Cương' },
};

/** Common city display names (subset). Unlisted cities keep Chinese proper nouns. */
const CITY_I18N: Record<string, LocaleText> = {
  北京: { zh: '北京', vi: 'Bắc Kinh' },
  天津: { zh: '天津', vi: 'Thiên Tân' },
  上海: { zh: '上海', vi: 'Thượng Hải' },
  重庆: { zh: '重庆', vi: 'Trùng Khánh' },
  石家庄: { zh: '石家庄', vi: 'Thạch Gia Trang' },
  太原: { zh: '太原', vi: 'Thái Nguyên' },
  呼和浩特: { zh: '呼和浩特', vi: 'Hô Hòa Hạo Đặc' },
  沈阳: { zh: '沈阳', vi: 'Thẩm Dương' },
  长春: { zh: '长春', vi: 'Trường Xuân' },
  哈尔滨: { zh: '哈尔滨', vi: 'Cáp Nhĩ Tân' },
  南京: { zh: '南京', vi: 'Nam Kinh' },
  杭州: { zh: '杭州', vi: 'Hàng Châu' },
  合肥: { zh: '合肥', vi: 'Hợp Phì' },
  福州: { zh: '福州', vi: 'Phúc Châu' },
  南昌: { zh: '南昌', vi: 'Nam Xương' },
  济南: { zh: '济南', vi: 'Tế Nam' },
  郑州: { zh: '郑州', vi: 'Trịnh Châu' },
  武汉: { zh: '武汉', vi: 'Vũ Hán' },
  长沙: { zh: '长沙', vi: 'Trường Sa' },
  广州: { zh: '广州', vi: 'Quảng Châu' },
  深圳: { zh: '深圳', vi: 'Thâm Quyến' },
  南宁: { zh: '南宁', vi: 'Nam Ninh' },
  海口: { zh: '海口', vi: 'Hải Khẩu' },
  成都: { zh: '成都', vi: 'Thành Đô' },
  贵阳: { zh: '贵阳', vi: 'Quý Dương' },
  昆明: { zh: '昆明', vi: 'Côn Minh' },
  拉萨: { zh: '拉萨', vi: 'Lhasa' },
  西安: { zh: '西安', vi: 'Tây An' },
  兰州: { zh: '兰州', vi: 'Lan Châu' },
  西宁: { zh: '西宁', vi: 'Tây Ninh' },
  银川: { zh: '银川', vi: 'Ngân Xuyên' },
  乌鲁木齐: { zh: '乌鲁木齐', vi: 'Ürümqi' },
  厦门: { zh: '厦门', vi: 'Hạ Môn' },
  青岛: { zh: '青岛', vi: 'Thanh Đảo' },
  大连: { zh: '大连', vi: 'Đại Liên' },
  苏州: { zh: '苏州', vi: 'Tô Châu' },
  宁波: { zh: '宁波', vi: 'Ninh Ba' },
  无锡: { zh: '无锡', vi: 'Vô Tích' },
  东莞: { zh: '东莞', vi: 'Đông Quản' },
  佛山: { zh: '佛山', vi: 'Phật Sơn' },
};

export function localizePlaceName(name: string, locale: string): string {
  const entry = PROVINCE_I18N[name] ?? CITY_I18N[name];
  if (entry) return pickLocale(entry, locale);
  return name;
}
