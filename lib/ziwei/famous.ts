/**
 * 名人命盘数据库
 * 基于公开记录的出生日期，时辰为估算值（部分有文献记载）
 *
 * Display strings use { zh, vi } pairs (Decision 0002 Option B).
 * category stays as algorithm key for message lookup.
 */

export type LocaleText = { zh: string; vi: string };

export function pickLocale(text: LocaleText, locale: string): string {
  return locale === 'vi' ? text.vi : text.zh;
}

export interface FamousPerson {
  id: string;
  name: LocaleText;
  category: '商业' | '文艺' | '历史' | '体育' | '科技';
  description: LocaleText;
  year: number;
  month: number;
  day: number;
  hour: number;
  gender: 'male' | 'female';
  notable: LocaleText;
}

export const FAMOUS_PERSONS: FamousPerson[] = [
  {
    id: 'ma-yun',
    name: { zh: '马云', vi: 'Mã Vân' },
    category: '商业',
    description: { zh: '阿里巴巴创始人', vi: 'Người sáng lập Alibaba' },
    year: 1964, month: 9, day: 10, hour: 5,
    gender: 'male',
    notable: {
      zh: '命盘显示极强的破格重建之力，官禄宫星曜与互联网商业帝国高度对应',
      vi: 'Mệnh bàn cho thấy lực phá cách tái lập rất mạnh; tinh diệu Quan Lộc cung tương ứng cao với đế chế thương mại internet',
    },
  },
  {
    id: 'li-jiacheng',
    name: { zh: '李嘉诚', vi: 'Lý Gia Thành' },
    category: '商业',
    description: { zh: '香港超级富豪，长和系创始人', vi: 'Đại gia Hong Kong, người sáng lập tập đoàn Cheung Kong' },
    year: 1928, month: 7, day: 29, hour: 3,
    gender: 'male',
    notable: {
      zh: '财帛宫四化是研究东方首富命盘的绝佳案例，禄存守财，越积越厚',
      vi: 'Tứ hóa Tài Bạch cung là case nghiên cứu điển hình của đại gia châu Á — Lộc Tồn thủ tài, càng tích càng dày',
    },
  },
  {
    id: 'ren-zhengfei',
    name: { zh: '任正非', vi: 'Nhậm Chính Phi' },
    category: '商业',
    description: { zh: '华为创始人', vi: 'Người sáng lập Huawei' },
    year: 1944, month: 10, day: 25, hour: 3,
    gender: 'male',
    notable: {
      zh: '七杀入命格局，一生逆风而行，越打压越强大，倪师七杀理论的活教材',
      vi: 'Cách cục Thất Sát nhập Mệnh — cả đời đi ngược gió, càng bị đàn áp càng mạnh; bài học sống động về Thất Sát của Ni Sư',
    },
  },
  {
    id: 'zhang-ailing',
    name: { zh: '张爱玲', vi: 'Trương Ái Linh' },
    category: '文艺',
    description: { zh: '中国现代文学巨匠', vi: 'Bậc thầy văn học hiện đại Trung Quốc' },
    year: 1920, month: 9, day: 30, hour: 1,
    gender: 'female',
    notable: {
      zh: '命盘孤独星曜组合与其传奇感情经历、文学成就形成神奇对照',
      vi: 'Tổ hợp tinh cô độc trên mệnh bàn đối chiếu kỳ diệu với chuyện tình huyền thoại và thành tựu văn học của bà',
    },
  },
  {
    id: 'jay-chou',
    name: { zh: '周杰伦', vi: 'Châu Kiệt Luân' },
    category: '文艺',
    description: { zh: '华语流行音乐天王', vi: 'Thiên vương nhạc pop Hoa ngữ' },
    year: 1979, month: 1, day: 18, hour: 1,
    gender: 'male',
    notable: {
      zh: '文曲星与贪狼的组合，天生才艺之命，命盘解释了他为何能横跨音乐各风格',
      vi: 'Tổ hợp Văn Khúc + Tham Lang — mệnh tài nghệ trời sinh, giải thích vì sao ông xuyên suốt nhiều phong cách âm nhạc',
    },
  },
  {
    id: 'wang-fei',
    name: { zh: '王菲', vi: 'Vương Phi' },
    category: '文艺',
    description: { zh: '华语乐坛最具传奇色彩的女歌手', vi: 'Nữ ca sĩ mang màu sắc huyền thoại nhất làng nhạc Hoa ngữ' },
    year: 1969, month: 8, day: 8, hour: 4,
    gender: 'female',
    notable: {
      zh: '夫妻宫星曜与其两段传奇婚姻高度对应，感情格局极具研究价值',
      vi: 'Tinh diệu Phu Thê cung tương ứng cao với hai cuộc hôn nhân huyền thoại — cách cục tình cảm rất đáng nghiên cứu',
    },
  },
  {
    id: 'lin-zhiling',
    name: { zh: '林志玲', vi: 'Lâm Chí Linh' },
    category: '文艺',
    description: { zh: '台湾名模、演员', vi: 'Siêu mẫu và diễn viên Đài Loan' },
    year: 1974, month: 11, day: 29, hour: 5,
    gender: 'female',
    notable: {
      zh: '太阴守命的女性美貌典范，命盘完美印证倪师"太阴入命女孩最漂亮"的论断',
      vi: 'Điển phạm nhan sắc nữ với Thái Âm thủ Mệnh — mệnh bàn minh chứng luận đoán của Ni Sư: «Thái Âm nhập Mệnh, gái đẹp nhất»',
    },
  },
  {
    id: 'steve-jobs',
    name: { zh: '乔布斯', vi: 'Steve Jobs' },
    category: '科技',
    description: { zh: '苹果公司联合创始人', vi: 'Đồng sáng lập Apple' },
    year: 1955, month: 2, day: 24, hour: 6,
    gender: 'male',
    notable: {
      zh: '破军入命格局，被亲生父母遗弃又创建苹果帝国，破而后立的命盘典范',
      vi: 'Cách cục Phá Quân nhập Mệnh — bị cha mẹ ruột bỏ rơi rồi dựng đế chế Apple; điển phạm phá rồi dựng lại',
    },
  },
  {
    id: 'elon-musk',
    name: { zh: '马斯克', vi: 'Elon Musk' },
    category: '科技',
    description: { zh: '特斯拉、SpaceX创始人', vi: 'Người sáng lập Tesla và SpaceX' },
    year: 1971, month: 6, day: 28, hour: 4,
    gender: 'male',
    notable: {
      zh: '杀破狼格局的极致体现，命盘中驿马星旺盛，一生在改变人类未来边界',
      vi: 'Hiện thân cực hạn của cách cục Sát Phá Lang — Dịch Mã vượng, cả đời đẩy biên giới tương lai nhân loại',
    },
  },
  {
    id: 'yao-ming',
    name: { zh: '姚明', vi: 'Diệu Minh' },
    category: '体育',
    description: { zh: 'NBA传奇中锋，中国篮球代言人', vi: 'Trung phong huyền thoại NBA, đại diện bóng rổ Trung Quốc' },
    year: 1980, month: 9, day: 12, hour: 5,
    gender: 'male',
    notable: {
      zh: '天梁守命，高大威严，官禄宫星象与其职业成就高度吻合',
      vi: 'Thiên Lương thủ Mệnh — cao lớn uy nghiêm; tinh tượng Quan Lộc cung khớp cao với thành tựu nghề nghiệp',
    },
  },
  {
    id: 'li-na',
    name: { zh: '李娜', vi: 'Lý Na' },
    category: '体育',
    description: { zh: '中国网球大满贯得主', vi: 'Vô địch Grand Slam quần vợt Trung Quốc' },
    year: 1982, month: 2, day: 26, hour: 2,
    gender: 'female',
    notable: {
      zh: '七杀化气，命中注定与人竞争，大限流年与法网夺冠时间点精准对应',
      vi: 'Thất Sát hóa khí — định sẵn cạnh tranh; đại hạn lưu niên khớp chính xác thời điểm vô địch Pháp mở rộng',
    },
  },
];

export function getFamousByCategory(category: FamousPerson['category']): FamousPerson[] {
  return FAMOUS_PERSONS.filter(p => p.category === category);
}

export const FAMOUS_CATEGORIES: FamousPerson['category'][] = [
  '商业', '文艺', '科技', '体育',
];
