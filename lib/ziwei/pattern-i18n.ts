/**
 * Pattern display i18n (Decision 0002 Option C).
 * Algorithm in patterns.ts keeps Chinese keys; UI localizes after detectPatterns().
 */
import type { Pattern, PatternCondition } from './patterns';
import { localizeTerm, TERMS } from './terms';

type LocaleText = { zh: string; vi: string };

const PATTERN_I18N: Record<string, { name: LocaleText; description?: LocaleText }> = {
  '君臣庆会': {
    name: { zh: '君臣庆会', vi: 'Quân Thần Khánh Hội' },
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

const CONDITION_VI: Record<string, string> = {
  '七杀、破军、贪狼三星齐入命宫三方四正': 'Thất Sát, Phá Quân, Tham Lang tam tinh đồng hội tam phương tứ chính Cung Mệnh',
  '三方四正煞星过多': 'Tam phương tứ chính sát tinh quá nhiều',
  '三方有化禄或化权（动得有力）': 'Tam phương có Hóa Lộc hoặc Hóa Quyền (động lực mạnh)',
  '三方煞重': 'Tam phương sát nặng',
  '两星不同宫': 'Hai sao không đồng cung',
  '会照': 'hội chiếu',
  '会照命宫三方': 'hội chiếu tam phương Cung Mệnh',
  '再会七杀或破军（武职大贵）': 'Lại hội Thất Sát hoặc Phá Quân (võ chức đại quý)',
  '再会化科': 'Lại hội Hóa Khoa',
  '再会左辅': 'Lại hội Tả Phụ',
  '再会文昌或文曲': 'Lại hội Văn Xương hoặc Văn Khúc',
  '再会昌曲': 'Lại hội Xương Khúc',
  '再会魁钺': 'Lại hội Khôi Việt',
  '再遇火星/铃星（火贪/铃贪叠加）': 'Lại gặp Hỏa Tinh/Linh Tinh (Hỏa Tham/Linh Tham chồng)',
  '化忌坐命': 'Hóa Kỵ thủ Mệnh',
  '化禄、化权、化科三吉化齐会命宫三方四正': 'Hóa Lộc, Hóa Quyền, Hóa Khoa tam cát hóa đồng hội tam phương tứ chính Cung Mệnh',
  '化禄会照三方四正': 'Hóa Lộc hội chiếu tam phương tứ chính',
  '化科、化权同会命宫三方四正': 'Hóa Khoa và Hóa Quyền đồng hội tam phương tứ chính Cung Mệnh',
  '同宫': 'đồng cung',
  '命坐煞星': 'Mệnh thủ sát tinh',
  '命坐空劫（动得辛苦）': 'Mệnh thủ Không Kiếp (động mà vất vả)',
  '命坐空劫（双禄遇空，财来财去）': 'Mệnh thủ Không Kiếp (song Lộc gặp Không, tài đến tài đi)',
  '命宫在未为空宫': 'Cung Mệnh tại Mùi là không cung',
  '命宫坐煞': 'Cung Mệnh thủ sát',
  '命宫坐煞星': 'Cung Mệnh thủ sát tinh',
  '命宫见禄': 'Cung Mệnh kiến Lộc',
  '地空地劫分居命宫前后两宫': 'Địa Không Địa Kiếp phân cư hai cung trước sau Cung Mệnh',
  '地空地劫双夹会照（紫微忌空劫）': 'Địa Không Địa Kiếp song giáp hội chiếu (Tử Vi kỵ Không Kiếp)',
  '天同化禄': 'Thiên Đồng Hóa Lộc',
  '天同天梁同宫': 'Thiên Đồng Thiên Lương đồng cung',
  '天府坐命三方': 'Thiên Phủ thủ tam phương Mệnh',
  '天机、太阴、天同、天梁四星齐入命宫三方四正': 'Thiên Cơ, Thái Âm, Thiên Đồng, Thiên Lương tứ tinh đồng nhập tam phương tứ chính Cung Mệnh',
  '天梁会命宫三方': 'Thiên Lương hội tam phương Cung Mệnh',
  '天梁庙旺': 'Thiên Lương miếu vượng',
  '天相坐命三方': 'Thiên Tướng thủ tam phương Mệnh',
  '天马入命宫': 'Thiên Mã nhập Cung Mệnh',
  '天马入迁移宫': 'Thiên Mã nhập Cung Thiên Di',
  '天魁、天钺同会命宫三方四正': 'Thiên Khôi, Thiên Việt đồng hội tam phương tứ chính Cung Mệnh',
  '天魁天钺分居命宫前后两宫': 'Thiên Khôi Thiên Việt phân cư hai cung trước sau Cung Mệnh',
  '太阳会命宫三方': 'Thái Dương hội tam phương Cung Mệnh',
  '太阳太阴分居命宫前后两宫': 'Thái Dương Thái Âm phân cư hai cung trước sau Cung Mệnh',
  '太阳庙旺': 'Thái Dương miếu vượng',
  '太阳落陷（阳梁失辉）': 'Thái Dương lạc hãm (Dương Lương thất huy)',
  '太阴庙旺': 'Thái Âm miếu vượng',
  '寅宫太阳庙旺，巨门得日光化解是非': 'Cung Dần Thái Dương miếu vượng, Cự Môn được nhật quang hóa giải thị phi',
  '对宫丑宫为太阳太阴同度': 'Đối cung Sửu là Thái Dương Thái Âm đồng độ',
  '左辅、右弼同会命宫三方四正': 'Tả Phụ, Hữu Bật đồng hội tam phương tứ chính Cung Mệnh',
  '左辅会照': 'Tả Phụ hội chiếu',
  '左辅右弼分居命宫前后两宫': 'Tả Phụ Hữu Bật phân cư hai cung trước sau Cung Mệnh',
  '左辅右弼同会': 'Tả Phụ Hữu Bật đồng hội',
  '左辅右弼同会三方四正': 'Tả Phụ Hữu Bật đồng hội tam phương tứ chính',
  '巨门、火星、擎羊三星会照三方四正': 'Cự Môn, Hỏa Tinh, Kình Dương tam tinh hội chiếu tam phương tứ chính',
  '巨门化忌（口舌官非）': 'Cự Môn Hóa Kỵ (khẩu thiệt quan phi)',
  '巨门化忌（玉藏深泥）': 'Cự Môn Hóa Kỵ (ngọc tàng thâm nê)',
  '巨门化禄/化权': 'Cự Môn Hóa Lộc/Hóa Quyền',
  '巨门化禄/化权（口才生财）': 'Cự Môn Hóa Lộc/Hóa Quyền (khẩu tài sinh tài)',
  '廉相宫坐擎羊（廉杀羊倾向）': 'Cung Liêm Tướng thủ Kình Dương (thiên về Liêm Sát Dương)',
  '廉贞、七杀、擎羊三星会照三方四正': 'Liêm Trinh, Thất Sát, Kình Dương tam tinh hội chiếu tam phương tứ chính',
  '廉贞化忌': 'Liêm Trinh Hóa Kỵ',
  '廉贞天相同宫': 'Liêm Trinh Thiên Tướng đồng cung',
  '擎羊于午宫坐命': 'Kình Dương tại cung Ngọ thủ Mệnh',
  '擎羊陀罗分居命宫前后两宫': 'Kình Dương Đà La phân cư hai cung trước sau Cung Mệnh',
  '文昌、文曲同会命宫三方四正': 'Văn Xương, Văn Khúc đồng hội tam phương tứ chính Cung Mệnh',
  '文昌会命宫三方': 'Văn Xương hội tam phương Cung Mệnh',
  '文昌会照': 'Văn Xương hội chiếu',
  '文昌会照（石中隐玉得明）': 'Văn Xương hội chiếu (Thạch Trung Ẩn Ngọc được sáng)',
  '文昌文曲分居命宫前后两宫': 'Văn Xương Văn Khúc phân cư hai cung trước sau Cung Mệnh',
  '文昌文曲同会': 'Văn Xương Văn Khúc đồng hội',
  '无辅弼（孤君无臣）': 'Không có Phụ Bật (cô quân vô thần)',
  '日月宫煞星同坐': 'Cung Nhật Nguyệt sát tinh đồng tọa',
  '日月落陷（夹命无光）': 'Nhật Nguyệt lạc hãm (giáp Mệnh vô quang)',
  '昌曲会照': 'Xương Khúc hội chiếu',
  '未宫日月同辉（古书云未宫日月双美）': 'Cung Mùi Nhật Nguyệt đồng huy (cổ thư: Mùi cung Nhật Nguyệt song mỹ)',
  '武曲七杀同宫': 'Vũ Khúc Thất Sát đồng cung',
  '武曲化忌（武曲化忌为财劫之兆）': 'Vũ Khúc Hóa Kỵ (điềm tài kiếp)',
  '武曲化权': 'Vũ Khúc Hóa Quyền',
  '武曲化禄': 'Vũ Khúc Hóa Lộc',
  '武曲贪狼同宫（丑/未）': 'Vũ Khúc Tham Lang đồng cung (Sửu/Mùi)',
  '武曲贪狼对宫拱照': 'Vũ Khúc Tham Lang đối cung củng chiếu',
  '武杀宫煞星过多': 'Cung Vũ Sát sát tinh quá nhiều',
  '武贪宫见羊陀': 'Cung Vũ Tham kiến Dương Đà',
  '武贪宫遇空劫': 'Cung Vũ Tham gặp Không Kiếp',
  '火星铃星分居命宫前后两宫': 'Hỏa Tinh Linh Tinh phân cư hai cung trước sau Cung Mệnh',
  '煞星会照（珠光黯淡）': 'Sát tinh hội chiếu (châu quang ám đạm)',
  '煞星同坐': 'Sát tinh đồng tọa',
  '煞星过多（机月同梁忌煞）': 'Sát tinh quá nhiều (Cơ Nguyệt Đồng Lương kỵ sát)',
  '煞星过重（动而无成）': 'Sát tinh quá nặng (động mà vô thành)',
  '申宫太阳偏西，巨门暗曜更显': 'Cung Thân Thái Dương thiên Tây, Cự Môn ám diệu càng hiện',
  '禄存会命宫三方': 'Lộc Tồn hội tam phương Cung Mệnh',
  '禄存会照三方四正': 'Lộc Tồn hội chiếu tam phương tứ chính',
  '禄存入命宫': 'Lộc Tồn nhập Cung Mệnh',
  '禄存入身宫': 'Lộc Tồn nhập Cung Thân',
  '紫府宫坐空劫（破紫府之贵气）': 'Cung Tử Phủ thủ Không Kiếp (phá quý khí Tử Phủ)',
  '紫府宫见双煞同坐': 'Cung Tử Phủ kiến song sát đồng tọa',
  '紫微入命': 'Tử Vi nhập Mệnh',
  '紫微化权': 'Tử Vi Hóa Quyền',
  '紫微天府同入命宫': 'Tử Vi Thiên Phủ đồng nhập Cung Mệnh',
  '紫微天府同宫（不在命宫，会照减力）': 'Tử Vi Thiên Phủ đồng cung (không tại Mệnh, hội chiếu giảm lực)',
  '紫微独坐命宫（无天府同坐）': 'Tử Vi độc tọa Cung Mệnh (không Thiên Phủ đồng tọa)',
  '紫微遇空劫（古书最忌）': 'Tử Vi gặp Không Kiếp (cổ thư tối kỵ)',
  '见禄存或廉贞化禄': 'Kiến Lộc Tồn hoặc Liêm Trinh Hóa Lộc',
  '贪狼会照命宫三方': 'Tham Lang hội chiếu tam phương Cung Mệnh',
  '贪狼化禄/化权': 'Tham Lang Hóa Lộc/Hóa Quyền',
  '贪狼宫又见羊陀（破横发之力）': 'Cung Tham Lang lại kiến Dương Đà (phá lực hoành phát)',
  '贪狼庙旺': 'Tham Lang miếu vượng',
  '贪狼遇空劫（财来财去）': 'Tham Lang gặp Không Kiếp (tài đến tài đi)',
  '辅弼同会（变动中得贵人）': 'Phụ Bật đồng hội (trong biến động được quý nhân)',
  '辅弼相助': 'Phụ Bật tương trợ',
  '铃星、文昌、陀罗、武曲四星会照三方四正': 'Linh Tinh, Văn Xương, Đà La, Vũ Khúc tứ tinh hội chiếu tam phương tứ chính',
  '魁钺加照': 'Khôi Việt gia chiếu',
  '魁钺贵人加照': 'Khôi Việt quý nhân gia chiếu',
};

const SOURCE_VI: Record<string, string> = {
  '《紫微斗数全书·三奇加会》': '《Tử Vi Đẩu Số Toàn Thư·Tam Kỳ Gia Hội》',
  '《紫微斗数全书·双禄朝垣》': '《Tử Vi Đẩu Số Toàn Thư·Song Lộc Triêu Viên》',
  '《紫微斗数全书·君臣庆会格》': '《Tử Vi Đẩu Số Toàn Thư·Quân Thần Khánh Hội cách》',
  '《紫微斗数全书·四化会照》': '《Tử Vi Đẩu Số Toàn Thư·Tứ Hóa hội chiếu》',
  '《紫微斗数全书·四化论》': '《Tử Vi Đẩu Số Toàn Thư·Tứ Hóa luận》',
  '《紫微斗数全书·天马星》': '《Tử Vi Đẩu Số Toàn Thư·Thiên Mã tinh》',
  '《紫微斗数全书·巨日同宫》': '《Tử Vi Đẩu Số Toàn Thư·Cự Nhật Đồng Cung》',
  '《紫微斗数全书·府相朝垣格》': '《Tử Vi Đẩu Số Toàn Thư·Phủ Tướng Triêu Viên cách》',
  '《紫微斗数全书·廉杀羊》': '《Tử Vi Đẩu Số Toàn Thư·Liêm Sát Dương》',
  '《紫微斗数全书·文星论》': '《Tử Vi Đẩu Số Toàn Thư·Văn tinh luận》',
  '《紫微斗数全书·日月夹命》': '《Tử Vi Đẩu Số Toàn Thư·Nhật Nguyệt Giáp Mệnh》',
  '《紫微斗数全书·机月同梁格》': '《Tử Vi Đẩu Số Toàn Thư·Cơ Nguyệt Đồng Lương cách》',
  '《紫微斗数全书·机月同梁格》（降级版）': '《Tử Vi Đẩu Số Toàn Thư·Cơ Nguyệt Đồng Lương cách》(bản hạ cấp)',
  '《紫微斗数全书·杀破狼》': '《Tử Vi Đẩu Số Toàn Thư·Sát Phá Lang》',
  '《紫微斗数全书·禄存星》': '《Tử Vi Đẩu Số Toàn Thư·Lộc Tồn tinh》',
  '《紫微斗数全书·紫府同宫格》': '《Tử Vi Đẩu Số Toàn Thư·Tử Phủ Đồng Cung cách》',
  '《紫微斗数全书·辅弼夹命》': '《Tử Vi Đẩu Số Toàn Thư·Phụ Bật Giáp Mệnh》',
  '《紫微斗数全书·辅弼论》': '《Tử Vi Đẩu Số Toàn Thư·Phụ Bật luận》',
  '《紫微斗数全书·阳梁昌禄格》': '《Tử Vi Đẩu Số Toàn Thư·Dương Lương Xương Lộc cách》',
  '《紫微斗数全书·魁钺论》': '《Tử Vi Đẩu Số Toàn Thư·Khôi Việt luận》',
  '《紫微斗数全书》': '《Tử Vi Đẩu Số Toàn Thư》',
  '《紫微斗数全集·明珠出海》': '《Tử Vi Đẩu Số Toàn Tập·Minh Châu Xuất Hải》',
  '《紫微斗数骨髓赋·巨火羊》': '《Tử Vi Đẩu Số Tủy Phú·Cự Hỏa Dương》',
  '《紫微斗数骨髓赋·石中隐玉》': '《Tử Vi Đẩu Số Tủy Phú·Thạch Trung Ẩn Ngọc》',
  '《紫微斗数骨髓赋·羊陀夹忌》': '《Tử Vi Đẩu Số Tủy Phú·Dương Đà Giáp Kỵ》',
  '《紫微斗数骨髓赋·铃昌陀武》': '《Tử Vi Đẩu Số Tủy Phú·Linh Xương Đà Vũ》',
  '《紫微斗数骨髓赋·马头带箭》': '《Tử Vi Đẩu Số Tủy Phú·Mã Đầu Đới Tiễn》',
  '《紫微斗数骨髓赋》': '《Tử Vi Đẩu Số Tủy Phú》',
};

const DESCRIPTION_VI: Record<string, string> = {
  '七杀、破军、贪狼三星会命，开创闯荡之命格。一生变动多、不甘平凡，宜创业、军警、业务、销售。中年后才能稳定守成，年轻时易因冲动失利。': 'Thất Sát, Phá Quân, Tham Lang tam tinh hội Mệnh — cách mở mang xông pha. Đời biến động nhiều, không cam bình thường; nên khởi nghiệp, quân cảnh, nghiệp vụ, bán hàng. Trung niên mới ổn định thủ thành; trẻ dễ xung động thất lợi.',
  '化忌坐命，左右擎羊陀罗夹命，古书云"羊陀夹忌为败局"，主一生劳碌奔波、坎坷不顺、身心俱疲。需以德行修养与积极做事化解，凡事谨慎为上。': 'Hóa Kỵ thủ Mệnh, Kình Dương Đà La giáp Mệnh — cổ thư: "Dương Đà giáp Kỵ là bại cục"; đời lao lực bôn ba, gian nan, thân tâm đều mệt. Cần đức hạnh tu dưỡng và làm việc tích cực hóa giải; thận trọng là thượng sách.',
  '化禄、化权、化科三吉化齐会命宫三方四正，号称"三奇加会"。主一生功名、财富、贵人三全，是紫微斗数最高吉格之一。': 'Hóa Lộc, Hóa Quyền, Hóa Khoa tam cát hóa đồng hội tam phương tứ chính Cung Mệnh — gọi "Tam Kỳ Gia Hội". Chủ công danh, tài phú, quý nhân tam toàn; một trong các cách cát cao nhất.',
  '化禄、禄存同会命宫三方四正，财源涌动、衣食丰足。古书云"双禄朝垣，富比陶朱"，主一生不愁财，多有正财横财兼得。': 'Hóa Lộc và Lộc Tồn đồng hội tam phương tứ chính Cung Mệnh — tài nguyên dồi dào, no ấm. Cổ thư: "Song Lộc Triêu Viên, phú tỷ Đào Chu" — đời không lo tài, chính tài và ngang tài kiêm được.',
  '化科 + 化权 同会三方四正，主名权双美——既有学识/名声（科），又有掌控力（权），宜走"专业权威"路线（如医生、律师、教授、技术骨干），名利双收且根基扎实。': 'Hóa Khoa + Hóa Quyền đồng hội tam phương tứ chính — danh quyền song mỹ: vừa học thức/danh tiếng (Khoa), vừa lực kiểm soát (Quyền). Nên lộ trình "chuyên gia uy tín" (bác sĩ, luật sư, giáo sư, kỹ thuật nòng cốt); danh lợi kiêm thu, gốc rễ vững.',
  '命未空宫，对宫丑宫日月同辉拱照，号"明珠出海"。主出生平凡、后天努力出头，宜远赴他乡、学术研究或大公司高位，主大富大贵。': 'Mệnh tại Mùi không cung, đối cung Sửu Nhật Nguyệt đồng huy củng chiếu — gọi "Minh Châu Xuất Hải". Xuất thân bình thường, hậu thiên nỗ lực nổi bật; nên tha hương, học thuật hoặc cao vị công ty lớn; chủ đại phú đại quý.',
  '地空地劫夹命，主财来财去、思想脱俗、易遁入宗教哲学。古书云"空劫夹命，财不聚"。宜技艺、宗教、研究等不重物质之业。': 'Địa Không Địa Kiếp giáp Mệnh — tài đến tài đi, tư tưởng thoát tục, dễ đi vào tôn giáo triết học. Cổ thư: "Không Kiếp giáp Mệnh, tài bất tụ". Nên kỹ nghệ, tôn giáo, nghiên cứu — ngành không trọng vật chất.',
  '天同天梁同宫，福星与荫星共会，主宽厚和善、乐于助人，宜医疗、教育、宗教、社会公益。但偏温和保守，难成大富大贵之局。': 'Thiên Đồng Thiên Lương đồng cung — phúc tinh và ấm tinh đồng hội; chủ khoan hậu hòa thiện, thích giúp người; nên y tế, giáo dục, tôn giáo, công ích. Thiên ôn hòa bảo thủ, khó thành đại phú đại quý.',
  '天府天相分守命宫三方四正，文武并济、权印双辉，主一生衣食丰足、地位崇高。古书云"府相朝垣千钟食禄"，常见于政界、企业管理者。': 'Thiên Phủ Thiên Tướng phân thủ tam phương tứ chính Cung Mệnh — văn võ kiêm tế, quyền ấn song huy; đời no ấm, địa vị cao. Cổ thư: "Phủ Tướng Triêu Viên thiên chung thực lộc", thường thấy chính giới, quản lý doanh nghiệp.',
  '天机太阴天同天梁四星齐入命迁财官，文质彬彬、聪慧善谋。最适合公职、学术、文艺、医疗、服务等需稳定累积的行业，不宜大冒险大投机。': 'Thiên Cơ Thái Âm Thiên Đồng Thiên Lương tứ tinh đồng nhập Mệnh/Di/Tài/Quan — văn chất, thông tuệ thiện mưu. Rất hợp công chức, học thuật, văn nghệ, y tế, dịch vụ cần tích lũy ổn định; không nên mạo hiểm đầu cơ lớn.',
  '天马在迁移宫，主外出有利、远行得财，宜异乡发展。配化禄主异地生财，配煞星则旅途多波折。': 'Thiên Mã ở Cung Thiên Di — xuất ngoại lợi, viễn hành được tài, nên phát triển tha hương. Hội Hóa Lộc chủ sinh tài dị địa; hội sát thì lộ trình nhiều sóng gió.',
  '天马坐命，主一生奔波、动中得财，宜走商旅、外勤、跨界发展。倪师说「天马入命，无禄不发」——若再会禄存或化禄即「禄马交驰」之富格。': 'Thiên Mã thủ Mệnh — đời bôn ba, trong động được tài; nên thương lữ, ngoại cần, phát triển liên lĩnh vực. Ni sư: 「Thiên Mã nhập Mệnh, vô Lộc bất phát」— hội Lộc Tồn hoặc Hóa Lộc tức cách "Lộc Mã Giao Trì".',
  '天魁天钺同会命宫三方四正，主"天乙贵人"加持，关键时刻总有贵人提携。倪师说「魁钺夹命，必为贵人」——遇到困难时身边会出现得力相助者，宜主动维护人脉。': 'Thiên Khôi Thiên Việt đồng hội tam phương tứ chính Cung Mệnh — "Thiên Ất quý nhân" gia trì; lúc then chốt luôn có quý nhân đề bạt. Ni sư: 「Khôi Việt giáp Mệnh, tất vì quý nhân」— gặp khó có người trợ lực; nên chủ động giữ nhân mạch.',
  '天魁天钺夹命，男称天乙、女称玉堂，一生贵人提携。考试、求职、关键时刻常有意外贵人相助。': 'Thiên Khôi Thiên Việt giáp Mệnh — nam xưng Thiên Ất, nữ xưng Ngọc Đường; đời được quý nhân đề bạt. Thi cử, cầu việc, lúc then chốt thường có quý nhân bất ngờ.',
  '太阳、天梁、文昌、禄存四星齐会命宫三方，号称"科举之星"，主清贵显达、考运极佳，宜走学术、文教、研究、专业认证之路，一生功名易就。': 'Thái Dương, Thiên Lương, Văn Xương, Lộc Tồn tứ tinh đồng hội tam phương Cung Mệnh — gọi "khoa cử chi tinh"; chủ thanh quý hiển đạt, khảo vận cực tốt; nên học thuật, văn giáo, nghiên cứu, chứng chỉ chuyên môn; đời công danh dễ thành.',
  '太阳太阴分居命宫两侧夹照，光明磊落，一生贵人相助，事业蓬勃。男主官贵，女主旺夫兴家。日月须不落陷方为真夹。': 'Thái Dương Thái Âm phân cư hai bên Cung Mệnh giáp chiếu — quang minh lỗi lạc, đời quý nhân tương trợ, sự nghiệp hưng thịnh. Nam chủ quan quý, nữ chủ vượng phu hưng gia. Nhật Nguyệt không lạc hãm mới là chân giáp.',
  '左辅右弼同会命宫三方四正，主一生贵人不绝、人缘极佳。最宜领导岗位与团队合作型工作。倪师说「辅弼夹命，平生贵人多」——你不是单打独斗的命，要善用人际网络。': 'Tả Phụ Hữu Bật đồng hội tam phương tứ chính Cung Mệnh — đời quý nhân không dứt, nhân duyên cực tốt. Rất hợp vị trí lãnh đạo và công việc teamwork. Ni sư: 「Phụ Bật giáp Mệnh, bình sinh quý nhân đa」— không phải mệnh đơn độc; hãy dùng tốt mạng lưới quan hệ.',
  '左辅右弼夹命，一生贵人不断、逢凶化吉。适合走仕途、大企业管理，有贵人提携之命。古书云"左辅右弼，终身福厚"。': 'Tả Phụ Hữu Bật giáp Mệnh — đời quý nhân không dứt, gặp hung hóa cát. Hợp sĩ đồ, quản trị doanh nghiệp lớn, có quý nhân đề bạt. Cổ thư: "Tả Phụ Hữu Bật, chung thân phúc hậu".',
  '巨门、火星、擎羊三星会照，古书云"巨火羊，终身缢死"——古时凶格。现代理解为：易因口舌、激烈冲突而招大祸。需修身养性、慎言慎行，避免极端情绪。': 'Cự Môn, Hỏa Tinh, Kình Dương tam tinh hội chiếu — cổ thư: "Cự Hỏa Dương, chung thân ải tử" — hung cách xưa. Hiện đại: dễ vì khẩu thiệt, xung đột dữ dội mà chuốc họa lớn. Cần tu thân, thận ngôn thận hành, tránh cảm xúc cực đoan.',
  '巨门坐命子午，外表平凡而内蕴才学。早年默默无闻、中年方显贵气，宜走专业、研究、口才、传媒。需有禄权或文昌相助方能"凿石见玉"。': 'Cự Môn thủ Mệnh Tý/Ngọ — bề ngoài bình thường mà nội hàm tài học. Sớm lặng lẽ, trung niên mới lộ quý khí; nên chuyên môn, nghiên cứu, khẩu tài, truyền thông. Cần Lộc Quyền hoặc Văn Xương tương trợ mới "tạc thạch kiến ngọc".',
  '廉贞、七杀、擎羊三星会照命宫三方，古书警示之凶格。主血光、官非、意外。本命有此格不必惊慌，但流年大限再触发时需特别谨慎驾驶、避免冲突、注意手术风险。': 'Liêm Trinh, Thất Sát, Kình Dương tam tinh hội chiếu tam phương Cung Mệnh — hung cách cổ thư cảnh báo. Chủ huyết quang, quan phi, tai nạn. Bản mệnh có cách này không cần hoảng, nhưng lưu niên đại hạn kích hoạt cần thận trọng lái xe, tránh xung đột, chú ý rủi ro phẫu thuật.',
  '廉贞天相同宫，印绶格局，主秉公处事、清廉之名，宜任公职、行政管理、法务、企划。怕见擎羊化忌，则反主官非。': 'Liêm Trinh Thiên Tướng đồng cung — ấn thụ cách cục; chủ xử sự công chính, thanh liêm; nên công chức, hành chính, pháp vụ, kế hoạch. Sợ Kình Dương Hóa Kỵ thì phản chủ quan phi.',
  '擎羊于午宫坐命，号"马头带箭"。古书云"威镇边疆"——主刚毅果决、有冲杀之力，宜军警武职、运动员、外科医师。但同时主危险与意外，需配合杀破狼或贵人方为大格，否则反主血光。': 'Kình Dương tại cung Ngọ thủ Mệnh — gọi "Mã Đầu Đới Tiễn". Cổ thư: "Uy trấn biên cương" — chủ cương nghị quả quyết, có lực xung sát; hợp quân cảnh võ chức, vận động viên, ngoại khoa. Đồng thời chủ nguy hiểm tai nạn; cần hội Sát Phá Lang hoặc quý nhân mới thành đại cách, không thì phản chủ huyết quang.',
  '文昌文曲同会三方四正，主才华横溢、口才文笔俱佳。宜走需要表达与文采的行业，化科加持则名声大显。': 'Văn Xương Văn Khúc đồng hội tam phương tứ chính — tài hoa, khẩu tài văn bút đều tốt. Nên ngành cần biểu đạt và văn tài; Hóa Khoa gia trì thì danh tiếng hiển đạt.',
  '文昌文曲同入命宫，主聪明俊秀、文采斐然，宜文学、教育、写作、咨询。最忌化忌——昌曲化忌主文书契约暗亏。': 'Văn Xương Văn Khúc đồng nhập Cung Mệnh — thông minh tuấn tú, văn tài nổi bật; nên văn học, giáo dục, viết, tư vấn. Tối kỵ Hóa Kỵ — Xương Khúc Hóa Kỵ chủ khuyết thất văn thư khế ước.',
  '文昌文曲夹命宫，主聪明俊秀、文采斐然，宜走文教、学术、艺术、写作。古书云"昌曲夹命主科甲"，最利考运。': 'Văn Xương Văn Khúc giáp Cung Mệnh — thông minh tuấn tú, văn tài nổi bật; nên văn giáo, học thuật, nghệ thuật, viết lách. Cổ thư: "Xương Khúc giáp Mệnh chủ khoa giáp" — rất lợi khảo vận.',
  '武曲七杀同宫，将星配财星，主果决刚毅、理财能力强，适合金融、军警、创业。但忌见化忌煞星，否则凶险。一生奋斗、积财但操心。': 'Vũ Khúc Thất Sát đồng cung — tướng tinh phối tài tinh; chủ quả quyết cương nghị, lý tài mạnh; hợp tài chính, quân cảnh, khởi nghiệp. Kỵ Hóa Kỵ sát tinh kẻo hung hiểm. Đời phấn đấu, tích tài nhưng lo lắng.',
  '武曲贪狼会命，财星与桃花欲望星交辉，古书云"武贪不发少年人"——三十岁后方能厚积薄发。主中年以后大富大贵，财源由人脉、应酬、欲望管理而来，适合金融、投机、销售、娱乐业。': 'Vũ Khúc Tham Lang hội Mệnh — tài tinh và đào hoa dục vọng tinh giao huy. Cổ thư: "Vũ Tham bất phát thiếu niên nhân" — sau 30 tuổi mới hậu tích bạc phát. Trung niên trở đi đại phú đại quý; tài từ nhân mạch, ứng thù, quản dục vọng; hợp tài chính, đầu cơ, bán hàng, giải trí.',
  '火星铃星分居命宫前后两宫夹命，主性急、易冲动、突发意外或纠纷。需培养耐性、避免冲动决策。': 'Hỏa Tinh Linh Tinh phân cư hai cung trước sau giáp Mệnh — tính cấp, dễ xung động, đột phát tai nạn hoặc tranh chấp. Cần rèn nhẫn nại, tránh quyết định nóng vội.',
  '禄存入身宫，主中年后财源稳定、得禄自享。倪师说「禄存入身，财气近身」——配偶或事业方向能带来稳定财禄。': 'Lộc Tồn nhập Cung Thân — trung niên tài nguyên ổn định, được lộc tự hưởng. Ni sư: 「Lộc Tồn nhập Thân, tài khí cận thân」— phối ngẫu hoặc hướng nghiệp mang lại tài lộc vững.',
  '禄存坐命，主一生衣食无忧、财禄稳定。性格保守，善积累，但羊陀夹禄须防小人。最宜配化禄、左辅右弼方为大格。': 'Lộc Tồn thủ Mệnh — đời no ấm, tài lộc ổn định. Tính bảo thủ, giỏi tích lũy; Dương Đà giáp Lộc cần phòng tiểu nhân. Hội Hóa Lộc, Tả Phụ Hữu Bật mới thành đại cách.',
  '紫微入命，左辅右弼同会，帝王得贤臣辅佐，主大富大贵、统御之命。一生贵人不绝，宜走政商高位、跨界领袖之途。': 'Tử Vi nhập Mệnh, Tả Phụ Hữu Bật đồng hội — đế vương được hiền thần phụ tá; chủ đại phú đại quý, thống ngự. Đời quý nhân không dứt; nên chính thương cao vị, lãnh đạo liên lĩnh vực.',
  '紫微天府同入命宫，帝相并临，尊贵之命。主品行端正、衣食无忧、有领导才能，宜担任要职。需要左右辅弼来配合方为完整大格。': 'Tử Vi Thiên Phủ đồng nhập Cung Mệnh — đế tướng cùng lâm, tôn quý chi mệnh. Chủ phẩm hạnh đoan chính, no ấm, có tài lãnh đạo, nên đảm nhiệm trọng chức. Cần Tả Hữu Phụ Bật phối hợp mới thành đại cách trọn vẹn.',
  '紫微天府同宫但未坐命，主一生有贵人贵气依托，但本身不一定大富贵，需看会照吉煞而定。': 'Tử Vi Thiên Phủ đồng cung nhưng chưa thủ Mệnh — đời có quý khí nương tựa, bản thân chưa chắc đại phú quý, cần xem hội chiếu cát sát.',
  '紫微独坐命宫，帝王之星，自尊心强、有领导魅力。但紫微最忌"在野孤君"——若无左右辅弼相会，反成孤高自傲、易招毁谤。': 'Tử Vi độc tọa Cung Mệnh — đế vương chi tinh, tự tôn mạnh, có duyên lãnh đạo. Tử Vi tối kỵ "tại dã cô quân" — không Tả Hữu Phụ Bật hội thì thành cô cao tự ngạo, dễ chuốc hủy báng.',
  '铃星、文昌、陀罗、武曲四星齐会，古书云"铃昌陀武，限至投河"——古时大凶格。本命有此组合本身不必恐慌，但流年大限触发时需高度警觉重大决策、情绪起伏、水边活动。': 'Linh Tinh, Văn Xương, Đà La, Vũ Khúc tứ tinh đồng hội — cổ thư: "Linh Xương Đà Vũ, hạn chí đầu hà" — đại hung cách xưa. Bản mệnh có tổ hợp này không cần hoảng, nhưng lưu niên đại hạn kích hoạt cần cảnh giác quyết định lớn, dao động cảm xúc, hoạt động ven nước.',
};

/** Longer fragments first — used for runtime-built descriptions/conditions. */
const FRAGMENT_VI: [string, string][] = [
  ['未会。机月同梁不全格，文质带谋，但稳定度不如四星齐。仍宜公职、教研、医疗、服务等需要积累与稳定的行业，关键看缺位星与四化的配合。', ' chưa hội. Cơ Nguyệt Đồng Lương bất toàn cách — văn chất kèm mưu, ổn định kém hơn tứ tinh đủ. Vẫn nên công chức, giảng nghiên, y tế, dịch vụ cần tích lũy ổn định; then chốt xem sao thiếu và tứ hóa phối hợp.'],
  ['化忌坐命宫，需留意自身固执、心理障碍或健康隐患，凡事退一步思考。化忌不一定坏，代表此星能量需要特别关注。', ' Hóa Kỵ thủ Cung Mệnh — cần chú ý cố chấp, trở ngại tâm lý hoặc ẩn họa sức khỏe; mọi việc lùi một bước suy nghĩ. Hóa Kỵ không nhất định xấu — năng lượng sao này cần đặc biệt quan tâm.'],
  ['主突发横财、突如其来的机遇。古书云“贪狼遇火铃，必发横财”，但来得快去得也快，宜见好就收。', 'chủ đột phát ngang tài, cơ hội bất ngờ. Cổ thư: “Tham Lang gặp Hỏa Linh, tất phát ngang tài”, nhưng đến nhanh đi cũng nhanh — nên biết đủ thì dừng.'],
  ['太阳化解巨门暗曜，主以口才、传媒、外语、专业立业。寅宫为佳，申宫力减。怕巨门化忌则官非。', 'Thái Dương hóa giải ám diệu Cự Môn — chủ lập nghiệp bằng khẩu tài, truyền thông, ngoại ngữ, chuyên môn. Cung Dần tốt, cung Thân lực giảm. Sợ Cự Môn Hóa Kỵ thì quan phi.'],
  ['化禄入财帛宫，主财源畅通、收入稳定。倪师讲化禄是「正财」象征——这个化禄星所代表的能力（', ' Hóa Lộc nhập Cung Tài Bạch — tài mạch thông, thu nhập ổn. Ni sư nói Hóa Lộc là biểu tượng 「chính tài」— năng lực sao Hóa Lộc này ('],
  ['化科带来的是被人看重的特质，宜从事文书、教育、研究、咨询、文创等“以名取利”的方向。', ' Hóa Khoa mang đến phẩm chất được trọng dụng; nên văn thư, giáo dục, nghiên cứu, tư vấn, văn sáng tạo — hướng “lấy danh lấy lợi”.'],
  ['化权入官禄宫，主事业有掌控力、能担当独当一面的职位。化权代表权力与执行力——', ' Hóa Quyền nhập Cung Quan Lộc — sự nghiệp có lực kiểm soát, đảm đương vị trí một mình một cõi. Hóa Quyền tượng trưng quyền lực và chấp hành — '],
  ['化权说明你在事业上能成为决策者或核心执行者，宜走管理或技术权威路线。', ' Hóa Quyền cho thấy bạn có thể là người quyết sách hoặc chấp hành nòng cốt; nên quản lý hoặc uy tín kỹ thuật.'],
  ['化忌坐迁移宫，外出、远行、人际关系易有波折，宜守不宜动。', ' Hóa Kỵ thủ Cung Thiên Di — xuất ngoại, viễn hành, quan hệ dễ sóng gió; nên thủ không nên động.'],
  ['阴阳平衡，文武兼备。主异性缘佳、事业顺遂、名声远播。', 'âm dương cân bằng, văn võ kiêm bị. Chủ duyên dị tính tốt, sự nghiệp thuận, danh tiếng lan xa.'],
  ['的核心特质）是你赚钱的主轴。配禄存或天马则财源更广。', ' cốt lõi) là trục kiếm tiền của bạn. Hội Lộc Tồn hoặc Thiên Mã thì tài mạch rộng hơn.'],
  ['宫，主名声、文书、学术运。倪师讲化科是「贵人星」——', ' cung — chủ danh tiếng, văn thư, học thuật. Ni sư nói Hóa Khoa là 「quý nhân tinh」— '],
  ['化禄坐命，主生财顺利、人缘佳、机缘多。', ' Hóa Lộc thủ Mệnh — sinh tài thuận, nhân duyên tốt, cơ duyên nhiều.'],
  ['本盘破格条件已触发，发力打折。', 'Điều kiện phá cách trên bàn đã kích hoạt, lực phát bị giảm.'],
  ['武曲化禄属正财，宜实业、金融。', 'Vũ Khúc Hóa Lộc thuộc chính tài; nên thực nghiệp, tài chính.'],
  ['贪狼化禄属人脉财、桃花财。', 'Tham Lang Hóa Lộc thuộc nhân mạch tài, đào hoa tài.'],
  ['太阴化禄属阴财、不动产。', 'Thái Âm Hóa Lộc thuộc âm tài, bất động sản.'],
  ['丑宫日月同宫力量较平。', 'Cung Sửu Nhật Nguyệt đồng cung lực khá bình.'],
  ['未宫日月双美尤佳。', 'Cung Mùi Nhật Nguyệt song mỹ càng tốt.'],
  ['三方四正会齐', 'Tam phương tứ chính hội đủ '],
  ['（机月同梁缺', ' (Cơ Nguyệt Đồng Lương thiếu '],
  ['化禄入财帛宫', ' Hóa Lộc nhập Cung Tài Bạch'],
  ['化权入官禄宫', ' Hóa Quyền nhập Cung Quan Lộc'],
  ['太阳太阴于', 'Thái Dương Thái Âm tại '],
  ['巨门太阳同', 'Cự Môn Thái Dương đồng '],
  ['三方四正会', 'Tam phương tứ chính hội '],
  ['化禄坐命宫', ' Hóa Lộc thủ Cung Mệnh'],
  ['化科入命宫', ' Hóa Khoa nhập Cung Mệnh'],
  ['化科入身宫', ' Hóa Khoa nhập Cung Thân'],
  ['三方会照', 'tam phương hội chiếu'],
  ['宫同宫，', ' cung đồng cung, '],
  ['化禄入命', ' Hóa Lộc nhập Mệnh'],
  ['化忌入命', ' Hóa Kỵ nhập Mệnh'],
  ['化忌入迁', ' Hóa Kỵ nhập Di'],
  ['贪狼遇', 'Tham Lang gặp '],
  ['化科入', ' Hóa Khoa nhập '],
  ['化忌坐', ' Hóa Kỵ thủ '],
  ['同宫', 'đồng cung'],
  ['，差', ', thiếu '],
  ['迁宫', 'cung Di'],
  ['命宫', 'Cung Mệnh'],
];

const SORTED_TERM_KEYS = Object.keys(TERMS).sort((a, b) => b.length - a.length);

function pick(text: LocaleText, locale: string): string {
  return locale === 'vi' ? text.vi : text.zh;
}

function applyFragments(text: string): string {
  let out = text;
  for (const [zh, vi] of FRAGMENT_VI) {
    if (out.includes(zh)) out = out.split(zh).join(vi);
  }
  return out;
}

/** Localize embedded star/palace terms left after fragment pass. */
function localizeEmbeddedTerms(text: string, locale: string): string {
  if (locale !== 'vi') return text;
  let out = text;
  for (const key of SORTED_TERM_KEYS) {
    if (out.includes(key)) out = out.split(key).join(localizeTerm(key, locale));
  }
  return out;
}

function localizeZhPhrase(text: string, locale: string, exactMap: Record<string, string>): string {
  if (locale !== 'vi') return text;
  if (exactMap[text]) return exactMap[text];
  let out = applyFragments(text);
  out = localizeEmbeddedTerms(out, locale);
  return out;
}

/** Localize static or dynamic pattern name. */
export function localizePatternName(name: string, locale: string): string {
  const entry = PATTERN_I18N[name];
  if (entry) return pick(entry.name, locale);
  if (locale !== 'vi') return name;
  // Dynamic: e.g. 武曲化禄入命 / 巨门化忌入迁
  let out = applyFragments(name);
  out = localizeEmbeddedTerms(out, locale);
  return out;
}

export function localizePatternDescription(pattern: Pattern, locale: string): string {
  if (locale !== 'vi') return pattern.description;
  if (DESCRIPTION_VI[pattern.description]) return DESCRIPTION_VI[pattern.description];
  const entry = PATTERN_I18N[pattern.name];
  if (entry?.description) return pick(entry.description, locale);
  return localizeZhPhrase(pattern.description, locale, DESCRIPTION_VI);
}

export function localizePatternConditionItem(text: string, locale: string): string {
  return localizeZhPhrase(text, locale, CONDITION_VI);
}

export function localizePatternSource(source: string, locale: string): string {
  if (locale !== 'vi') return source;
  if (SOURCE_VI[source]) return SOURCE_VI[source];
  return localizeZhPhrase(source, locale, SOURCE_VI);
}

export function localizePatternConditions(
  conditions: PatternCondition,
  locale: string,
): PatternCondition {
  if (locale !== 'vi') return conditions;
  return {
    required: conditions.required.map((s) => localizePatternConditionItem(s, locale)),
    bonus: conditions.bonus?.map((s) => localizePatternConditionItem(s, locale)),
    breaking: conditions.breaking?.map((s) => localizePatternConditionItem(s, locale)),
  };
}
