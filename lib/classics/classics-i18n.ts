/**
 * Classics bilingual overlays (Decision 0002 Option C).
 *
 * Classical Paragraph.text stays Chinese in data/*.ts.
 * This file supplies book/chapter chrome (VI) and vernacular + niNote ({ zh, vi }).
 *
 * Teacher naming: Ni Hà Hạ (full) / Ni Sư (short).
 */

import type { LocaleText } from '@/lib/ziwei/famous';

export type BookViChrome = {
  title: string;
  dynasty: string;
  author: string;
  intro: string;
};

export type ChapterViChrome = {
  title: string;
  subtitle?: string;
};

export type ParagraphBody = {
  translation: LocaleText;
  niNote?: LocaleText;
};

export const BOOK_VI: Record<string, BookViChrome> = {
  gusuifu: {
    title: 'Tủy Phú',
    dynasty: 'Triều Minh',
    author: 'Truyền thừa cổ tịch Tử Vi Đẩu Số (không rõ tác giả)',
    intro: 'Khẩu quyết cốt lõi cô đọng nhất của Tử Vi Đẩu Số, toàn văn khoảng 1500 chữ. Ni Hà Hạ nhiều lần dẫn trong《Thiên Kỷ》—kinh điển bắt buộc với người học Tử Vi.',
  },
  quanji: {
    title: 'Tử Vi Đẩu Số Toàn Tập',
    dynasty: 'Triều Minh',
    author: 'Tương truyền Trần Đoàn Tổ sư truyền',
    intro: 'Một trong những cổ tịch uy tín nhất của Tử Vi Đẩu Số, tương truyền do Trần Đoàn Tổ sư đời Tống truyền lại. Nguồn dẫn chứng cốt lõi của hệ《Thiên Kỷ》Ni Hà Hạ.',
  },
  quanshu: {
    title: 'Tử Vi Đẩu Số Toàn Thư',
    dynasty: 'Triều Minh',
    author: 'La Hồng Tiên biên',
    intro: 'Cổ tịch hệ thống nhất của Tử Vi Đẩu Số, nhấn mạnh quan hệ mười hai cung và Tứ Hóa. Giáo tài chính của giới học Tử Vi từ đời Thanh trở đi.',
  },
};

export function chapterKey(bookSlug: string, chapterIdx: number): string {
  return `${bookSlug}:${chapterIdx}`;
}

export const CHAPTER_VI: Record<string, ChapterViChrome> = {
  'gusuifu:0': { title: 'Tổng luận thiên', subtitle: 'Lập luận cơ bản của Tử Vi Đẩu Số' },
  'gusuifu:1': { title: 'Tử Vi tinh luận', subtitle: 'Đế tọa tôn quý, được phụ thì quý' },
  'gusuifu:2': { title: 'Thất Sát tinh luận', subtitle: 'Tướng tinh cô độc, hợp võ chức' },
  'gusuifu:3': { title: 'Sát Phá Lang cách', subtitle: 'Mệnh khai phá, biến động' },
  'gusuifu:4': { title: 'Cơ Nguyệt Đồng Lương', subtitle: 'Tích lũy ổn định, hợp công chức' },
  'gusuifu:5': { title: 'Tứ Hóa tinh luận', subtitle: 'Hóa Lộc · Hóa Quyền · Hóa Khoa · Hóa Kỵ — cát hung' },
  'gusuifu:6': { title: 'Phụ Bật Quỳ Việt luận', subtitle: 'Quý của lục cát tinh' },
  'gusuifu:7': { title: 'Lục sát tinh luận', subtitle: 'Dương Đà Hỏa Linh Không Kiếp — hung' },
  'gusuifu:8': { title: 'Thập nhị cung luận', subtitle: 'Chủ tượng và cát hung từng cung' },
  'quanji:0': { title: 'Quyển I · Tổng luận', subtitle: 'Pháp lập cơ bản của Tử Vi Đẩu Số' },
  'quanji:1': { title: 'Quyển II · Tử Vi tinh luận', subtitle: 'Đế tọa tôn quý' },
  'quanji:2': { title: 'Quyển III · Nam Đẩu lục tinh luận', subtitle: 'Thiên Phủ, Thái Âm, Tham Lang, Cự Môn, Thiên Tướng, Thiên Lương' },
  'quanji:3': { title: 'Quyển IV · Bắc Đẩu lục tinh luận', subtitle: 'Tử Vi, Thiên Cơ, Thái Dương, Vũ Khúc, Liêm Trinh, Phá Quân' },
  'quanji:4': { title: 'Quyển V · Tứ Hóa và cách cục luận', subtitle: 'Lực Tứ Hóa và các cách cục trọng yếu' },
  'quanshu:0': { title: 'Thập nhị cung luận · Mệnh Cung', subtitle: 'Căn bản xem mệnh' },
  'quanshu:1': { title: 'Thập nhị cung luận · Tài Bạch Cung', subtitle: 'Nơi nguồn tài' },
  'quanshu:2': { title: 'Thập nhị cung luận · Quan Lộc Cung', subtitle: 'Gốc sự nghiệp' },
  'quanshu:3': { title: 'Thập nhị cung luận · Phu Thê Cung', subtitle: 'Khí trường phối ngẫu' },
  'quanshu:4': { title: 'Tứ Hóa luận', subtitle: 'Hóa Lộc · Hóa Quyền · Hóa Khoa · Hóa Kỵ' },
  'quanshu:5': { title: 'Cơ Nguyệt Đồng Lương cách', subtitle: 'Mệnh tích lũy ổn định' },
  'quanshu:6': { title: 'Song Lộc Triêu Viên cách', subtitle: 'Giàu sánh Đào Chu' },
};

export const PARAGRAPH_BODY: Record<string, ParagraphBody> = {
  'gsf-1-1': {
    translation: { zh: 'Sao Thái Cực là chủ của quần tinh. Tử Vi ở đế tọa, tôn quý nhất trong các sao. Thiên Phủ là lệnh tinh; Nam Bắc Đẩu có Hóa Lộc, Hóa Quyền và lệnh tinh; Tả Phụ Hữu Bật chủ tế tự, trợ lực.', vi: 'Thái Cực tinh diệu là chủ của quần tinh. Tử Vi ngồi đế tọa, tôn quý nhất trong các sao. Thiên Phủ là lệnh tinh; Nam–Bắc Đẩu có Hóa Lộc, Hóa Quyền và lệnh tinh; Tả Phụ–Hữu Bật chủ tế tự, trợ lực.' },
    niNote: { zh: '倪师常言：读赋先立「帝座—令星—辅弼」三层，再往下拆格局。', vi: 'Ni Sư thường nói: đọc phú trước hãy lập ba tầng「đế tọa — lệnh tinh — phụ bật」, rồi mới tách cách cục.' },
  },
  'gsf-1-2': {
    translation: { zh: 'Tử Vi là vua, lấy Tả Phụ Hữu Bật làm tướng. Thiên Phủ là thần, lấy Lộc Tồn làm phủ khố. Thiên Cơ chủ thiện, Thiên Lương chủ ẩm; gặp thì cát. Liêm Trinh chủ tù, Phá Quân chủ hao; gặp thì hung.', vi: 'Tử Vi là quân, lấy Tả Phụ–Hữu Bật làm tướng. Thiên Phủ là thần, lấy Lộc Tồn làm phủ khố. Thiên Cơ chủ thiện, Thiên Lương chủ che chở; gặp thì cát. Liêm Trinh chủ tù, Phá Quân chủ hao; gặp thì hung.' },
  },
  'gsf-1-3': {
    translation: { zh: 'Xem mệnh trước xem Mệnh Cung: chủ tinh định cách cục, tam phương tứ chính định chỗ dùng võ. Tiếp xem Thân Cung: định cảnh muộn và chỗ quay về. Rồi xem đại hạn lưu niên: định tiết tiến thoái cả đời.', vi: 'Xem mệnh trước xem Mệnh Cung: chủ tinh định cách cục, tam phương tứ chính định chỗ phát lực. Tiếp xem Thân Cung: định cảnh muộn và chỗ quay về. Rồi xem đại hạn–lưu niên: định nhịp tiến–thoái cả đời.' },
    niNote: { zh: '倪海夏体系：命宫定格局，身宫看三十后归向——二者不可混为一谈。', vi: 'Hệ Ni Hà Hạ: Mệnh Cung định cách cục, Thân Cung xem hướng về sau ba mươi — không được lẫn hai cung.' },
  },
  'gsf-2-1': {
    translation: { zh: 'Tử Vi là sao đế tọa: được Phụ Bật thì quý, được Xương Khúc thì tú, được Quỳ Việt thì quý nhân phù trì. Tử Vi độc tọa không phụ, dù quý cũng không lâu; được cát tinh tam phương tứ chính hội chiếu mới là chính tông đại cách.', vi: 'Tử Vi là sao đế tọa: được Phụ–Bật thì quý, được Xương–Khúc thì tú mỹ, được Quỳ–Việt thì quý nhân phù trì. Tử Vi ngồi một mình không phụ, dù quý cũng khó bền; được cát tinh tam phương tứ chính hội chiếu mới thành chính tông đại cách.' },
  },
  'gsf-2-2': {
    translation: { zh: 'Tử Vi ở Tý Ngọ là quý「diện nam bối bắc」, chủ đại phú đại quý; ở Sửu Mùi cùng Phá Quân đồng cung, chủ cương nghị quả quyết; ở Dần Thân cùng Thiên Phủ đồng cung gọi「Tử Phủ đồng cung」, chủ phẩm hạnh đoan chính, ăn mặc no đủ.', vi: 'Tử Vi ở Tý–Ngọ là quý「mặt Nam lưng Bắc」, chủ đại phú đại quý; ở Sửu–Mùi cùng Phá Quân đồng cung, chủ cứng cỏi quả đoán; ở Dần–Thân cùng Thiên Phủ đồng cung gọi「Tử Phủ đồng cung」, chủ phẩm hạnh đoan chính, no ấm.' },
  },
  'gsf-2-3': {
    translation: { zh: 'Tử Vi cư Quan Lộc, không sát xung phá, ắt làm quan cao; cư Điền Trạch, chủ có tổ nghiệp lại tự sắm được; cư Phu Thê, chủ phối ngẫu đoan trang khí chất khác thường, nhưng nên muộn hôn hơn sớm hôn.', vi: 'Tử Vi ở Quan Lộc, không sát xung phá, dễ giữ vị cao; ở Điền Trạch, chủ có tổ nghiệp lại tự lập được; ở Phu Thê, chủ phối ngẫu đoan trang khí chất khác thường, nhưng nên kết hôn muộn hơn sớm.' },
  },
  'gsf-2-4': {
    translation: { zh: 'Tử Vi kỵ Không Kiếp: chủ có vị không lộc. Kỵ cô quân vô phụ: chủ cô phong độc thế, khó thành đại sự. Hóa Quyền chủ độc đoán; Hóa Khoa chủ danh tiếng; Hóa Kỵ chủ bị người chế ước.', vi: 'Tử Vi kỵ Không–Kiếp: chủ có vị mà thiếu lộc. Kỵ quân cô không phụ: như đỉnh núi đơn độc, khó thành đại sự. Hóa Quyền chủ độc đoán; Hóa Khoa chủ danh tiếng; Hóa Kỵ chủ bị người chế ước.' },
  },
  'gsf-3-1': {
    translation: { zh: 'Thất Sát là tướng tinh, tính cương nghị quả quyết. Thất Sát thủ Mệnh không thích chung cung với các cát; độc hành kỳ đạo mới là bản cách. Gặp Không Kiếp chủ cô độc phiêu bạc, sự nghiệp khó thành.', vi: 'Thất Sát là tướng tinh, tính cứng cỏi quả đoán. Thất Sát thủ Mệnh không thích ngồi chung với nhiều cát; đi một đường riêng mới đúng bản cách. Gặp Không–Kiếp chủ cô độc phiêu bạt, sự nghiệp khó thành.' },
  },
  'gsf-3-2': {
    translation: { zh: 'Thất Sát Triêu Đẩu cách: Thất Sát cư Tý Ngọ, Dần Thân, đối cung Tử Vi Thiên Phủ chiếu, chủ tước lộc vinh xương. Rất hợp quân cảnh võ chức, mở biên. Quý khí cả đời khó ngăn, nhưng phải trải mài luyện mới thành đại khí.', vi: 'Cách Thất Sát Triêu Đẩu: Thất Sát ở Tý–Ngọ, Dần–Thân, đối cung Tử Vi–Thiên Phủ chiếu, chủ tước lộc vinh xương. Rất hợp quân–cảnh–võ chức, khai phá. Quý khí cả đời mạnh, nhưng phải trải mài luyện mới thành đại khí.' },
    niNote: { zh: '倪师点「朝斗」：看对宫帝座是否真正照得上，勿只记宫位口诀。', vi: 'Ni Sư nhấn「triêu đẩu」: xem đối cung đế tọa có thực sự chiếu tới không — đừng chỉ nhớ khẩu quyết cung vị.' },
  },
  'gsf-3-3': {
    translation: { zh: 'Thất Sát gặp Dương Đà chủ hình thương huyết quang; gặp Hỏa Linh chủ uy vũ cương liệt; gặp Hóa Lộc chủ một thân võ quý; gặp Hóa Kỵ ngược lại tiêu trầm, sự nghiệp nhiều bại.', vi: 'Thất Sát gặp Dương–Đà chủ hình thương huyết quang; gặp Hỏa–Linh chủ uy vũ cứng cỏi; gặp Hóa Lộc chủ võ quý một thân; gặp Hóa Kỵ lại dễ tiêu trầm, sự nghiệp nhiều lần thất bại.' },
  },
  'gsf-4-1': {
    translation: { zh: 'Thất Sát, Phá Quân, Tham Lang hội Mệnh–Thiên Di–Tài–Quan gọi「Sát Phá Lang cách」. Chủ đời nhiều biến động, không cam bình thường; hợp khởi nghiệp, quân cảnh, kinh doanh. Trẻ dễ xung động thất lợi; đến trung niên mới ổn định thủ thành.', vi: 'Thất Sát, Phá Quân, Tham Lang hội Mệnh–Thiên Di–Tài–Quan gọi「Sát Phá Lang cách」. Chủ đời nhiều biến động, không cam bình thường; hợp khởi nghiệp, quân–cảnh, kinh doanh. Tuổi trẻ dễ xung động thất lợi; đến trung niên mới ổn định thủ thành.' },
    niNote: { zh: '杀破狼宜「动中求成」，但倪师强调先过冲动关，再谈开创。', vi: 'Sát Phá Lang hợp「thành trong động」, nhưng Ni Sư nhấn: qua cửa xung động trước, rồi mới nói khai phá.' },
  },
  'gsf-4-2': {
    translation: { zh: 'Sát Phá Lang tam phương có Hóa Lộc hoặc Hóa Quyền thì chủ động có lực, có thể thành đại sự; nếu sát tinh quá nặng (Dương Đà Hỏa Linh cùng chiếu) thì chủ động mà không thành, nên tĩnh thủ.', vi: 'Sát Phá Lang ở tam phương có Hóa Lộc hoặc Hóa Quyền thì hành động có lực, có thể thành đại sự; nếu sát tinh quá nặng (Dương–Đà–Hỏa–Linh cùng chiếu) thì động mà khó thành — nên tĩnh thủ.' },
  },
  'gsf-5-1': {
    translation: { zh: 'Thiên Cơ, Thái Âm, Thiên Đồng, Thiên Lương bốn sao cùng vào Mệnh–Thiên Di–Tài–Quan gọi「Cơ Nguyệt Đồng Lương cách」. Chủ văn nhã, thông tuệ hay mưu. Rất hợp công chức, học thuật, văn nghệ, y tế, dịch vụ — ngành cần tích lũy ổn định; không hợp đại mạo hiểm đầu cơ.', vi: 'Thiên Cơ, Thái Âm, Thiên Đồng, Thiên Lương bốn sao cùng vào Mệnh–Thiên Di–Tài–Quan gọi「Cơ Nguyệt Đồng Lương cách」. Chủ văn nhã, thông tuệ hay mưu. Rất hợp công chức, học thuật, văn nghệ, y tế, dịch vụ — ngành cần tích lũy ổn định; không hợp đại mạo hiểm đầu cơ.' },
  },
  'gsf-5-2': {
    translation: { zh: 'Cơ Nguyệt Đồng Lương hợp làm lại nhân — cổ ngữ: cách này nên làm công chức, hành chính văn thư, an ổn cả đời. Lại hội Xương Khúc Hóa Khoa thì danh tiếng xa. Kỵ nhất sát tinh quá nhiều — ngược lại hay biến động khó an.', vi: 'Cơ Nguyệt Đồng Lương hợp làm lại nhân — cổ ngữ: cách này nên làm công chức, hành chính văn thư, an ổn cả đời. Lại hội Xương–Khúc Hóa Khoa thì danh tiếng xa. Kỵ nhất sát tinh quá nhiều — ngược lại hay biến động khó an.' },
  },
  'gsf-6-1': {
    translation: { zh: 'Hóa Lộc chủ tài, duyên, năng lực biến hiện; Hóa Quyền chủ quyền, quyết đoán, độc đương một mặt; Hóa Khoa chủ danh, quý nhân, văn thư; Hóa Kỵ chủ bệnh, sát, bài học sâu.', vi: 'Hóa Lộc chủ tài, duyên, năng lực biến thành thực lực; Hóa Quyền chủ quyền, quyết đoán, gánh một mặt; Hóa Khoa chủ danh, quý nhân, văn thư; Hóa Kỵ chủ bệnh, sát, bài học sâu.' },
  },
  'gsf-6-2': {
    translation: { zh: 'Hóa Lộc nhập Mệnh: nguồn tài rộng; Hóa Quyền nhập Mệnh: gánh được đại nhiệm; Hóa Khoa nhập Mệnh: danh tiếng xa; Hóa Kỵ nhập Mệnh: phải trải mài luyện mới thành khí.', vi: 'Hóa Lộc vào Mệnh: nguồn tài rộng; Hóa Quyền vào Mệnh: gánh được đại nhiệm; Hóa Khoa vào Mệnh: danh tiếng lan xa; Hóa Kỵ vào Mệnh: phải trải mài luyện mới thành khí.' },
  },
  'gsf-6-3': {
    translation: { zh: 'Hóa Kỵ nhập Tài: tài đến rồi đi; nhập Quan: sự nghiệp trở ngại; nhập Phu Thê: hôn nhân nhiều sóng gió; nhập Tử Nữ: duyên con mỏng hoặc ma sát cha mẹ–con cái.', vi: 'Hóa Kỵ vào Tài: tài đến rồi đi; vào Quan: sự nghiệp trở ngại; vào Phu Thê: hôn nhân nhiều sóng gió; vào Tử Nữ: duyên con mỏng hoặc ma sát cha mẹ–con.' },
  },
  'gsf-6-4': {
    translation: { zh: 'Lộc Tồn cùng Hóa Lộc hội tam phương Mệnh gọi「Song Lộc Triêu Viên」, chủ giàu sánh Đào Chu; Hóa Khoa cùng Hóa Quyền hội gọi「Khoa Quyền song hội」, chủ danh–quyền đều đẹp.', vi: 'Lộc Tồn cùng Hóa Lộc hội tam phương Mệnh gọi「Song Lộc Triêu Viên」, chủ giàu sánh Đào Chu; Hóa Khoa cùng Hóa Quyền hội gọi「Khoa Quyền song hội」, chủ danh và quyền đều đẹp.' },
  },
  'gsf-7-1': {
    translation: { zh: 'Tả Phụ Hữu Bật là「tướng tinh」, chủ trợ lực quý nhân; Văn Xương Văn Khúc là「văn tinh」, chủ thông minh tuấn tú; Thiên Quỳ Thiên Việt là「quý nhân tinh」, chủ lúc then chốt có người nâng đỡ.', vi: 'Tả Phụ–Hữu Bật là「tướng tinh」, chủ trợ lực quý nhân; Văn Xương–Văn Khúc là「văn tinh」, chủ thông minh tuấn tú; Thiên Quỳ–Thiên Việt là「quý nhân tinh」, chủ lúc then chốt có người nâng đỡ.' },
  },
  'gsf-7-2': {
    translation: { zh: 'Lục cát tinh cùng hội tam phương tứ chính Mệnh Cung: cả đời quý nhân không dứt, nhân duyên cực tốt. Dù cách cục bình thường cũng có thể nhờ lục cát đạt nghiệp phi thường.', vi: 'Lục cát tinh cùng hội tam phương tứ chính Mệnh Cung: cả đời quý nhân không dứt, nhân duyên rất tốt. Dù cách cục bình thường cũng có thể nhờ lục cát đạt nghiệp ngoài tầm thường.' },
  },
  'gsf-7-3': {
    translation: { zh: 'Phụ Bật giáp Mệnh: Tả Phụ Hữu Bật kẹp trước sau Mệnh Cung — cả đời quý nhân phù trì, gặp khó có giúp. Rất hợp đồng cung với Tử Vi, gọi「Quân thần khánh hội」cách.', vi: 'Phụ–Bật giáp Mệnh: Tả Phụ–Hữu Bật kẹp trước–sau Mệnh Cung — cả đời quý nhân phù trì, gặp khó có giúp. Rất hợp đồng cung với Tử Vi, gọi cách「Quân thần khánh hội」.' },
  },
  'gsf-8-1': {
    translation: { zh: 'Kình Dương Đà La là「sát tinh」, chủ huyết quang, thị phi, trở ngại; Hỏa Tinh Linh Tinh là「 táo tinh」, chủ xung động, nóng nảy, thương tai; Địa Không Địa Kiếp là「không vong」, chủ tài hao, hư danh, không thực.', vi: 'Kình Dương–Đà La là「sát tinh」, chủ huyết quang, thị phi, trở ngại; Hỏa Tinh–Linh Tinh là「 táo tinh」, chủ xung động, nóng nảy, thương tai; Địa Không–Địa Kiếp là「không vong」, chủ tài hao, hư danh, không thực.' },
  },
  'gsf-8-2': {
    translation: { zh: 'Sát tinh không chỉ hung — như đá mài dao, luyện ra lực phá cục người thường không có. Tuổi trẻ dễ xung động tự thương; đến trung niên mới hóa sát thành quyền.', vi: 'Sát tinh không chỉ hung — như đá mài dao, luyện ra lực phá cục người thường không có. Tuổi trẻ dễ xung động tự thương; đến trung niên mới hóa sát thành quyền.' },
    niNote: { zh: '倪师看煞：先问「磨出了什么能力」，再谈避凶。', vi: 'Ni Sư xem sát: trước hỏi「đã mài ra năng lực gì」, rồi mới nói tránh hung.' },
  },
  'gsf-8-3': {
    translation: { zh: 'Dương Đà giáp Kỵ: Kình Dương Đà La kẹp cung có Hóa Kỵ — chủ đại hung. Năm đó / đại hạn đó phải đặc biệt cảnh giác huyết quang, quan phi, biến cố lớn.', vi: 'Dương–Đà giáp Kỵ: Kình Dương–Đà La kẹp cung có Hóa Kỵ — chủ đại hung. Năm đó / đại hạn đó phải đặc biệt cảnh giác huyết quang, quan phi, biến cố lớn.' },
  },
  'gsf-8-4': {
    translation: { zh: 'Không Kiếp giáp Mệnh: Địa Không Địa Kiếp kẹp trước sau Mệnh — cả đời nên theo「hư」hơn「thực」: văn nghệ, tôn giáo, huyền học…; không hợp kinh doanh đầu tư nặng.', vi: 'Không–Kiếp giáp Mệnh: Địa Không–Địa Kiếp kẹp trước–sau Mệnh — cả đời nên theo「hư」hơn「thực」: văn nghệ, tôn giáo, huyền học…; không hợp kinh doanh đầu tư nặng.' },
  },
  'gsf-9-1': {
    translation: { zh: 'Mệnh Cung là gốc, tam phương là dụng: Tài Bạch chủ nguồn tài, Quan Lộc chủ sự nghiệp, Thiên Di chủ ngoại duyên. Tam phương tứ chính cát tinh hội chiếu, cách cục mới phát dụng trọn.', vi: 'Mệnh Cung là gốc, tam phương là dụng: Tài Bạch chủ nguồn tài, Quan Lộc chủ sự nghiệp, Thiên Di chủ ngoại duyên. Tam phương tứ chính cát tinh hội chiếu, cách cục mới phát dụng trọn vẹn.' },
  },
  'gsf-9-2': {
    translation: { zh: 'Phu Thê xem khí chất phối ngẫu; Tử Nữ xem duyên con; Tật Ách xem chỗ yếu thân thể; Thiên Di xem vận ra ngoài. Chủ tinh và Tứ Hóa từng cung quyết cát hung tiến thoái lĩnh vực đó.', vi: 'Phu Thê xem khí chất phối ngẫu; Tử Nữ xem duyên con; Tật Ách xem chỗ yếu thân thể; Thiên Di xem vận ra ngoài. Chủ tinh và Tứ Hóa từng cung quyết cát–hung, tiến–thoái của lĩnh vực đó.' },
  },
  'gsf-9-3': {
    translation: { zh: 'Điền Trạch là kho tài mệnh bàn — chính tài giữ được hay không xem cung này; Phúc Đức là hưởng thụ tinh thần — lòng có an không xem cung này; Phụ Mẫu là quan hệ bề trên, cũng chủ văn thư khế ước.', vi: 'Điền Trạch là kho tài mệnh bàn — chính tài giữ được hay không xem cung này; Phúc Đức là hưởng thụ tinh thần — lòng có an không xem cung này; Phụ Mẫu là quan hệ bề trên, cũng chủ văn thư khế ước.' },
  },
  'gsf-9-4': {
    translation: { zh: 'Cung trống mượn đối cung luận sự — cung không chủ tinh thì mượn chủ tinh đối cung. Ví dụ Mệnh trống thì mượn chủ tinh Thiên Di để định cách cục.', vi: 'Cung trống mượn đối cung luận sự — cung không chủ tinh thì mượn chủ tinh đối cung. Ví dụ Mệnh trống thì mượn chủ tinh Thiên Di để định cách cục.' },
  },
  'qj-1-1': {
    translation: { zh: 'Tử Vi Đẩu Số do Trần Đoàn Tổ sư truyền: lấy Tử Vi làm đế tọa thống ngự trăm sao. Mỗi sao có chỗ chủ, có miếu–vượng–lợi–hãm, có hội chiếu cát hung khác nhau. Người xem mệnh: trước an tinh, kế định Mệnh–Thân, ba xem cát hung mười hai cung, bốn tham đại hạn lưu niên phi hóa.', vi: 'Tử Vi Đẩu Số do Trần Đoàn Tổ sư truyền: lấy Tử Vi làm đế tọa thống ngự trăm sao. Mỗi sao có chỗ chủ, có miếu–vượng–lợi–hãm, hội chiếu cát–hung khác nhau. Người xem mệnh: trước an tinh, kế định Mệnh–Thân, ba xem cát hung mười hai cung, bốn tham đại hạn–lưu niên phi hóa.' },
  },
  'qj-1-2': {
    translation: { zh: 'Pháp an tinh: trước lấy niên can khởi Tử Vi; cung Tử Vi định rồi các sao theo pháp xếp mười hai cung. Mười bốn chủ tinh mỗi sao một vị; lục cát lục sát phụ hành. Một bàn đã định, vạn tượng hiện.', vi: 'Pháp an tinh: trước lấy niên can khởi Tử Vi; cung Tử Vi định rồi các sao theo pháp xếp mười hai cung. Mười bốn chủ tinh mỗi sao một vị; lục cát lục sát phụ hành. Một bàn đã định, vạn tượng hiện.' },
  },
  'qj-1-3': {
    translation: { zh: 'Mệnh Cung là gốc — chủ cách cục cả đời; Thân Cung là phụ — chủ hướng về sau ba mươi. Mệnh–Thân rõ mới biết tiến thoái một người. Tam phương tứ chính hội chiếu mới biết chỗ dùng võ. Mười hai cung mỗi cung một chủ mới thấy toàn đồ đời người.', vi: 'Mệnh Cung là gốc — chủ cách cục cả đời; Thân Cung là phụ — chủ hướng về sau ba mươi. Mệnh–Thân rõ mới biết tiến–thoái một người. Tam phương tứ chính hội chiếu mới biết chỗ phát lực. Mười hai cung mỗi cung một chủ mới thấy toàn đồ đời người.' },
  },
  'qj-2-1': {
    translation: { zh: 'Tử Vi là chủ Bắc Đẩu, thống hạt chúng tinh. Thuộc Thổ, sao tôn quý. Trong số là đế tọa, hóa khí là tôn: chủ trung hậu có uy nghi, độc hành kỳ đạo. Nam nữ mệnh đều thích Tử Vi thủ Mệnh, nhưng cần Tả Phụ Hữu Bật đến triêu mới là chính cách.', vi: 'Tử Vi là chủ Bắc Đẩu, thống hạt chúng tinh. Thuộc Thổ, sao tôn quý. Trong số là đế tọa, hóa khí là tôn: chủ trung hậu có uy nghi, đi đường riêng. Nam–nữ mệnh đều thích Tử Vi thủ Mệnh, nhưng cần Tả Phụ–Hữu Bật đến triêu mới là chính cách.' },
  },
  'qj-2-2': {
    translation: { zh: 'Tử Vi độc tọa cần Tả Hữu Xương Khúc Quỳ Việt kẹp mới dùng được — Tử Vi đơn thân vô y, dù quý cũng không lâu; được cát tinh tam phương tứ chính hội chiếu mới thành Quân thần khánh hội đại cách.', vi: 'Tử Vi ngồi một mình cần Tả–Hữu–Xương–Khúc–Quỳ–Việt kẹp mới dùng được — Tử Vi đơn thân không dựa, dù quý cũng khó bền; được cát tinh tam phương tứ chính hội chiếu mới thành đại cách Quân thần khánh hội.' },
  },
  'qj-2-3': {
    translation: { zh: 'Tử Vi nhập Mệnh: huynh đệ có quý khí, độc lập tú mỹ, nhiều được trợ của anh cả; ở Tử Nữ: con có quý khí nhưng dạy phải công bằng; ở Phu Thê: phối đoan trang, nên muộn hôn hơn sớm hôn.', vi: 'Tử Vi vào Mệnh: anh chị em có quý khí, độc lập tú mỹ, nhiều được trợ của anh cả; ở Tử Nữ: con có quý khí nhưng dạy phải công bằng; ở Phu Thê: phối đoan trang, nên kết hôn muộn hơn sớm.' },
  },
  'qj-2-4': {
    translation: { zh: 'Tử Vi ở Điền Trạch: có tổ nghiệp lại tự sắm được, bất động sản có thể làm trục làm giàu; ở Phúc Đức: cầu phong cách tinh thần, tự tôn mạnh; ở Quan Lộc: chủ đại phú quý, hợp vị cao.', vi: 'Tử Vi ở Điền Trạch: có tổ nghiệp lại tự lập được, bất động sản có thể làm trục làm giàu; ở Phúc Đức: cầu phong cách tinh thần, tự tôn mạnh; ở Quan Lộc: chủ đại phú quý, hợp vị cao.' },
  },
  'qj-3-1': {
    translation: { zh: 'Thiên Phủ thuộc Thổ, lệnh tinh Nam Đẩu, chủ lộc khố. Độc tọa chủ phẩm hạnh đoan chính, no ấm. Đồng cung Tử Vi gọi「Tử Phủ đồng cung」, chủ tôn quý. Rất thích gặp Lộc Tồn —「Song Lộc Triêu Viên」, chủ đại phú.', vi: 'Thiên Phủ thuộc Thổ, lệnh tinh Nam Đẩu, chủ lộc khố. Ngồi một mình chủ phẩm hạnh đoan chính, no ấm. Đồng cung Tử Vi gọi「Tử Phủ đồng cung」, chủ tôn quý. Rất thích gặp Lộc Tồn —「Song Lộc Triêu Viên」, chủ đại phú.' },
  },
  'qj-3-2': {
    translation: { zh: 'Thái Âm là chủ tinh trung thiên, thuộc Thủy. Miếu vượng chủ điền trạch, phú quý; lạc hãm chủ lao lục, bôn ba. Nữ mệnh Thái Âm rất cát: đẹp và hiền. Ở Hợi Tý chủ đại phú; ở Ngọ Mùi giảm lực.', vi: 'Thái Âm là chủ tinh trung thiên, thuộc Thủy. Miếu–vượng chủ điền trạch, phú quý; lạc hãm chủ lao lục, bôn ba. Nữ mệnh Thái Âm rất cát: đẹp và hiền. Ở Hợi–Tý chủ đại phú; ở Ngọ–Mùi giảm lực.' },
  },
  'qj-3-3': {
    translation: { zh: 'Tham Lang là sao đào hoa dục vọng, thuộc Mộc–Thủy. Chủ đa tài nghệ, giao tế rộng. Gặp Hỏa gọi「Hỏa Tham cách」, gặp Linh gọi「Linh Tham cách」— đều chủ thiên tài ngang phát. Kỵ Không Kiếp: hoa mà không thực.', vi: 'Tham Lang là sao đào hoa dục vọng, thuộc Mộc–Thủy. Chủ đa tài nghệ, giao tế rộng. Gặp Hỏa gọi「Hỏa Tham cách」, gặp Linh gọi「Linh Tham cách」— đều chủ thiên tài đột phát. Kỵ Không–Kiếp: hoa mà không thực.' },
  },
  'qj-3-4': {
    translation: { zh: 'Cự Môn thuộc Thủy, hóa khí là ám, chủ khẩu thiệt thị phi. Là sao khẩu tài: hợp luật sư, giáo viên, truyền thông. Hóa Lộc「lấy miệng sinh tài」; Hóa Kỵ thì khẩu thiệt quan phi liên tục. Kỵ nhất đồng cung Thái Dương ở Sửu Mùi —「Nhật Nguyệt phản bối」.', vi: 'Cự Môn thuộc Thủy, hóa khí là ám, chủ khẩu thiệt thị phi. Là sao khẩu tài: hợp luật sư, giáo viên, truyền thông. Hóa Lộc「lấy miệng sinh tài」; Hóa Kỵ thì khẩu thiệt quan phi liên tục. Kỵ nhất đồng cung Thái Dương ở Sửu–Mùi —「Nhật Nguyệt phản bối」.' },
  },
  'qj-3-5': {
    translation: { zh: 'Thiên Tướng thuộc Thủy, hóa khí là ấn, sao phụ tá. Trung hậu thật thà; hợp hành chính, thư ký, pháp vụ. Không thích độc tọa; rất hợp đồng cung Tử Vi hoặc Liêm Trinh, mượn uy nghi mà thành sự.', vi: 'Thiên Tướng thuộc Thủy, hóa khí là ấn, sao phụ tá. Trung hậu thật thà; hợp hành chính, thư ký, pháp vụ. Không thích ngồi một mình; rất hợp đồng cung Tử Vi hoặc Liêm Trinh, mượn uy nghi mà thành sự.' },
  },
  'qj-3-6': {
    translation: { zh: 'Thiên Lương thuộc Thổ, hóa khí là ẩm, sao「người già」. Chủ thiện lương, từ bi, cô khắc, hóa giải. Hợp luật, y, giáo dục, tôn giáo. Hóa Khoa chủ danh; Hóa Lộc ngược lại dễ hư phù.', vi: 'Thiên Lương thuộc Thổ, hóa khí là che chở, sao「người già」. Chủ thiện lương, từ bi, cô khắc, hóa giải. Hợp luật, y, giáo dục, tôn giáo. Hóa Khoa chủ danh; Hóa Lộc ngược lại dễ hư phù.' },
  },
  'qj-4-1': {
    translation: { zh: 'Tử Vi thuộc Thổ — đã luận ở quyển II.', vi: 'Tử Vi thuộc Thổ — đã luận ở quyển II.' },
  },
  'qj-4-2': {
    translation: { zh: 'Thiên Cơ thuộc Mộc, hóa khí là thiện, sao trí tuệ. Chủ thông minh, cơ biến, hiếu động. Nhập Mệnh: tư duy nhanh; hợp tư vấn, hoạch định, văn giáo. Kỵ hay biến không chủ; cần Văn Xương Văn Khúc hội chiếu mới thành khí.', vi: 'Thiên Cơ thuộc Mộc, hóa khí là thiện, sao trí tuệ. Chủ thông minh, cơ biến, hiếu động. Vào Mệnh: tư duy nhanh; hợp tư vấn, hoạch định, văn giáo. Kỵ hay biến không chủ kiến; cần Văn Xương–Văn Khúc hội chiếu mới thành khí.' },
  },
  'qj-4-3': {
    translation: { zh: 'Thái Dương thuộc Hỏa, hóa khí là quý, sao nam quý. Chủ danh dự, công vụ, giao tế. Miếu vượng chủ đại quý; lạc hãm thì lao mà ít thu. Rất hợp Mão Thìn Tỵ Ngọ; rơi Tuất Hợi Tý Sửu thì giảm lực.', vi: 'Thái Dương thuộc Hỏa, hóa khí là quý, sao nam quý. Chủ danh dự, công vụ, giao tế. Miếu–vượng chủ đại quý; lạc hãm thì lao mà ít thu. Rất hợp Mão–Thìn–Tỵ–Ngọ; rơi Tuất–Hợi–Tý–Sửu thì giảm lực.' },
  },
  'qj-4-4': {
    translation: { zh: 'Vũ Khúc thuộc Kim, hóa khí là tài, chủ tài tinh. Chủ cương nghị quả quyết, giỏi lý tài kinh doanh. Hóa Kỵ chủ phẫu thuật huyết quang, tai nạn kim loại. Ở Sửu Mùi đồng cung Thất Sát gọi「Vũ Khúc Thất Sát」, chủ cương trực võ quý.', vi: 'Vũ Khúc thuộc Kim, hóa khí là tài, chủ tài tinh. Chủ cứng cỏi quả đoán, giỏi lý tài kinh doanh. Hóa Kỵ chủ phẫu thuật huyết quang, tai nạn kim loại. Ở Sửu–Mùi đồng cung Thất Sát gọi「Vũ Khúc Thất Sát」, chủ cương trực võ quý.' },
  },
  'qj-4-5': {
    translation: { zh: 'Liêm Trinh thuộc Hỏa–Mộc, hóa khí là tù, sao đào hoa thứ. Văn võ kiêm bị, đa tài nghệ. Hóa Kỵ chủ huyết quang quan phi, tình cảm rối. Đồng cung Thiên Tướng là「Liêm Tướng cách」, chủ danh thanh liêm.', vi: 'Liêm Trinh thuộc Hỏa–Mộc, hóa khí là tù, sao đào hoa thứ. Văn võ kiêm bị, đa tài nghệ. Hóa Kỵ chủ huyết quang quan phi, tình cảm rối. Đồng cung Thiên Tướng là「Liêm Tướng cách」, chủ danh thanh liêm.' },
  },
  'qj-4-6': {
    translation: { zh: 'Phá Quân thuộc Thủy, hóa khí là hao, sao phá–sáng tạo. Chủ khai phá, biến động, lục thân duyên mỏng. Hợp kỹ thuật chuyên môn đi thiên hạ. Hóa Lộc「phá rồi lập」, chủ trước tan sau tụ.', vi: 'Phá Quân thuộc Thủy, hóa khí là hao, sao phá–sáng tạo. Chủ khai phá, biến động, lục thân duyên mỏng. Hợp kỹ thuật chuyên môn đi thiên hạ. Hóa Lộc「phá rồi lập」, chủ trước tan sau tụ.' },
  },
  'qj-5-1': {
    translation: { zh: 'Hóa Lộc chủ nguồn tài, duyên phận, năng lực biến hiện. Nhập tam phương Mệnh: nguồn tài rộng; nhập Tài Bạch: tài đến tài đi nhưng chính tài ổn.', vi: 'Hóa Lộc chủ nguồn tài, duyên phận, năng lực biến thành thực lực. Vào tam phương Mệnh: nguồn tài rộng; vào Tài Bạch: tài đến–đi nhưng chính tài ổn.' },
  },
  'qj-5-2': {
    translation: { zh: 'Hóa Quyền chủ quyền lực, quyết đoán, đảm đương. Nhập Mệnh: độc đương một mặt; nhập Quan Lộc: sự nghiệp có kiểm soát; hợp quản lý hoặc uy tín kỹ thuật.', vi: 'Hóa Quyền chủ quyền lực, quyết đoán, đảm đương. Vào Mệnh: gánh một mặt; vào Quan Lộc: sự nghiệp có kiểm soát; hợp quản lý hoặc uy tín kỹ thuật.' },
  },
  'qj-5-3': {
    translation: { zh: 'Hóa Khoa chủ danh tiếng, văn thư, quý nhân. Nhập Mệnh: danh xa; nhập Thân: lấy danh lấy lợi; hợp văn giáo, nghiên cứu, tư vấn.', vi: 'Hóa Khoa chủ danh tiếng, văn thư, quý nhân. Vào Mệnh: danh xa; vào Thân: lấy danh lấy lợi; hợp văn giáo, nghiên cứu, tư vấn.' },
  },
  'qj-5-4': {
    translation: { zh: 'Hóa Kỵ chủ bệnh, sát, bài học sâu. Nhập tam phương Mệnh: đời có「điểm đục」— bài học sâu nhất của cách cục; vượt qua là đại trí tuệ. Khoảng ba mươi tuổi Hóa Kỵ sắc nhất.', vi: 'Hóa Kỵ chủ bệnh, sát, bài học sâu. Vào tam phương Mệnh: đời có「điểm đục」— bài học sâu nhất của cách cục; vượt qua là đại trí tuệ. Khoảng ba mươi tuổi Hóa Kỵ sắc nhất.' },
    niNote: { zh: '倪师论化忌：不要急着「解」，先把功课看清楚。', vi: 'Ni Sư luận Hóa Kỵ: đừng vội「giải」, hãy nhìn rõ bài học trước.' },
  },
  'qj-5-5': {
    translation: { zh: 'Tử Phủ đồng cung cách: Tử Vi Thiên Phủ cùng vào Mệnh — phẩm hạnh đoan chính, no ấm, có năng lực lãnh đạo. Cần Tả Hữu Phụ Bật phối hợp mới là đại cách trọn.', vi: 'Cách Tử Phủ đồng cung: Tử Vi–Thiên Phủ cùng vào Mệnh — phẩm hạnh đoan chính, no ấm, có năng lực lãnh đạo. Cần Tả–Hữu Phụ–Bật phối hợp mới là đại cách trọn.' },
  },
  'qj-5-6': {
    translation: { zh: 'Thất Sát Triêu Đẩu cách: Thất Sát cư Tý Ngọ Dần Thân thủ Mệnh, đối cung Tử Vi Thiên Phủ chiếu — tước lộc vinh xương, võ chức đại quý; hợp quân cảnh chính giới hoặc doanh nghiệp cấp cao.', vi: 'Cách Thất Sát Triêu Đẩu: Thất Sát ở Tý–Ngọ–Dần–Thân thủ Mệnh, đối cung Tử Vi–Thiên Phủ chiếu — tước lộc vinh xương, võ chức đại quý; hợp quân–cảnh–chính giới hoặc doanh nghiệp cấp cao.' },
  },
  'qj-5-7': {
    translation: { zh: 'Song Lộc Triêu Viên cách: Hóa Lộc và Lộc Tồn hội tam phương tứ chính Mệnh — nguồn tài cuộn, no ấm. Cổ ngữ「Song Lộc Triêu Viên, giàu sánh Đào Chu」: đời không lo thiếu tài.', vi: 'Cách Song Lộc Triêu Viên: Hóa Lộc và Lộc Tồn hội tam phương tứ chính Mệnh — nguồn tài cuộn, no ấm. Cổ ngữ「Song Lộc Triêu Viên, giàu sánh Đào Chu」: đời không lo thiếu tài.' },
  },
  'qj-5-8': {
    translation: { zh: 'Cơ Nguyệt Đồng Lương cách: Thiên Cơ Thái Âm Thiên Đồng Thiên Lương bốn sao cùng vào Mệnh–Thiên Di–Tài–Quan — văn nhã thông tuệ. Rất hợp công chức, học thuật, văn nghệ, y tế, dịch vụ cần tích lũy ổn định.', vi: 'Cách Cơ Nguyệt Đồng Lương: Thiên Cơ–Thái Âm–Thiên Đồng–Thiên Lương bốn sao cùng vào Mệnh–Thiên Di–Tài–Quan — văn nhã thông tuệ. Rất hợp công chức, học thuật, văn nghệ, y tế, dịch vụ cần tích lũy ổn định.' },
  },
  'qj-5-9': {
    translation: { zh: 'Sát Phá Lang cách: Thất Sát Phá Quân Tham Lang hội Mệnh — đời nhiều biến, không cam bình thường; hợp khởi nghiệp, quân cảnh, kinh doanh bán hàng. Trung niên về sau mới ổn định thủ thành.', vi: 'Cách Sát Phá Lang: Thất Sát–Phá Quân–Tham Lang hội Mệnh — đời nhiều biến, không cam bình thường; hợp khởi nghiệp, quân–cảnh, kinh doanh bán hàng. Trung niên về sau mới ổn định thủ thành.' },
  },
  'qj-5-10': {
    translation: { zh: 'Nhật Nguyệt đồng cung cách: Thái Dương Thái Âm cùng vào Sửu hoặc Mùi — duyên dị tính tốt, sự nghiệp thuận, danh xa. Sửu lực trung bình; Mùi hơi giảm.', vi: 'Cách Nhật Nguyệt đồng cung: Thái Dương–Thái Âm cùng vào Sửu hoặc Mùi — duyên dị tính tốt, sự nghiệp thuận, danh xa. Sửu lực trung bình; Mùi hơi giảm.' },
  },
  'qs-1-1': {
    translation: { zh: 'Mệnh Cung là căn bản một thân, then chốt vạn sự. Mệnh định thì cách cục cả đời định. Xem Mệnh trước xem chủ tinh, kế phụ sát, rồi Tứ Hóa và hội chiếu tam phương tứ chính.', vi: 'Mệnh Cung là căn bản một thân, then chốt vạn sự. Mệnh định thì cách cục cả đời định. Xem Mệnh trước xem chủ tinh, kế phụ–sát, rồi Tứ Hóa và hội chiếu tam phương tứ chính.' },
  },
  'qs-1-2': {
    translation: { zh: 'Chủ tinh Mệnh miếu vượng: ưu thế bẩm sinh, làm việc nửa công bội. Lạc hãm: bất lợi bẩm sinh nhưng ngược lại dễ đại thành — chữ「không cam」đẩy người, bùng nổ được cú lật ngược mà cách miếu vượng khó làm.', vi: 'Chủ tinh Mệnh miếu–vượng: ưu thế bẩm sinh, làm việc nửa công bội kết. Lạc hãm: bất lợi bẩm sinh nhưng ngược lại dễ đại thành — chữ「không cam」đẩy người, bùng nổ được cú lật ngược mà cách miếu–vượng khó làm.' },
  },
  'qs-1-3': {
    translation: { zh: 'Mệnh thấy lục cát (Tả Phụ Hữu Bật Văn Xương Văn Khúc Thiên Quỳ Thiên Việt): cả đời quý nhân không dứt. Thấy lục sát (Kình Dương Đà La Hỏa Linh Địa Không Địa Kiếp): nhiều sóng gió mài luyện; chịu được thì ngược lại thành đại khí.', vi: 'Mệnh thấy lục cát (Tả Phụ–Hữu Bật–Văn Xương–Văn Khúc–Thiên Quỳ–Thiên Việt): cả đời quý nhân không dứt. Thấy lục sát (Kình Dương–Đà La–Hỏa–Linh–Địa Không–Địa Kiếp): nhiều sóng gió mài luyện; chịu được thì ngược lại thành đại khí.' },
  },
  'qs-2-1': {
    translation: { zh: 'Tài Bạch chủ nguồn tài, thu nhập, cách lý tài cả đời. Chủ tinh khác thì cách kiếm tiền khác: Tử Vi ở Tài chủ quan tài; Vũ Khúc chủ thương tài; Thái Âm chủ điền trạch tài; Cự Môn chủ khẩu tài.', vi: 'Tài Bạch chủ nguồn tài, thu nhập, cách lý tài cả đời. Chủ tinh khác thì cách kiếm tiền khác: Tử Vi ở Tài chủ quan tài; Vũ Khúc chủ thương tài; Thái Âm chủ điền trạch tài; Cự Môn chủ khẩu tài.' },
  },
  'qs-2-2': {
    translation: { zh: 'Tài Bạch Hóa Lộc nhập Mệnh: nguồn tài rộng; Hóa Kỵ: tài đến rồi đi; thấy Lộc Tồn: tích lũy ổn; gặp Không Kiếp: tài hao hư danh.', vi: 'Tài Bạch Hóa Lộc vào Mệnh: nguồn tài rộng; Hóa Kỵ: tài đến rồi đi; thấy Lộc Tồn: tích lũy ổn; gặp Không–Kiếp: tài hao hư danh.' },
  },
  'qs-3-1': {
    translation: { zh: 'Quan Lộc chủ sự nghiệp, địa vị, thành tựu xã hội. Chủ tinh khác thì hướng nghề khác: Tử Vi ở Quan hợp nền tảng lớn vị cao; Thái Dương hợp công vụ danh tiếng; Vũ Khúc hợp tài chính thực nghiệp; Liêm Trinh hợp văn võ kiêm bị.', vi: 'Quan Lộc chủ sự nghiệp, địa vị, thành tựu xã hội. Chủ tinh khác thì hướng nghề khác: Tử Vi ở Quan hợp nền tảng lớn vị cao; Thái Dương hợp công vụ danh tiếng; Vũ Khúc hợp tài chính thực nghiệp; Liêm Trinh hợp văn võ kiêm bị.' },
  },
  'qs-3-2': {
    translation: { zh: 'Quan Lộc Hóa Quyền nhập Mệnh: độc đương một mặt; Hóa Lộc nhập Quan: tài từ nghề đến; Hóa Kỵ nhập Quan: sóng gió nơi làm việc.', vi: 'Quan Lộc Hóa Quyền vào Mệnh: gánh một mặt; Hóa Lộc vào Quan: tài từ nghề đến; Hóa Kỵ vào Quan: sóng gió nơi làm việc.' },
  },
  'qs-4-1': {
    translation: { zh: 'Phu Thê chủ khí chất phối ngẫu, trạng thái hôn nhân. Tử Vi: phối đoan trang uy quyền, nên muộn hôn; Tham Lang: phối đa tình, đào hoa nặng; Thiên Lương: phối chín chắn vững vàng, thường lớn tuổi hơn.', vi: 'Phu Thê chủ khí chất phối ngẫu, trạng thái hôn nhân. Tử Vi: phối đoan trang uy quyền, nên kết hôn muộn; Tham Lang: phối đa tình, đào hoa nặng; Thiên Lương: phối chín chắn vững vàng, thường lớn tuổi hơn.' },
  },
  'qs-4-2': {
    translation: { zh: 'Phu Thê Hóa Kỵ xung Mệnh: hôn nhân nhiều sóng gió. Thấy lục sát: đặc biệt chú ý mài luyện tình cảm. Thấy lục cát: phối là quý nhân.', vi: 'Phu Thê Hóa Kỵ xung Mệnh: hôn nhân nhiều sóng gió. Thấy lục sát: đặc biệt chú ý mài luyện tình cảm. Thấy lục cát: phối là quý nhân.' },
  },
  'qs-5-1': {
    translation: { zh: 'Tứ Hóa là tinh hoa mệnh bàn — Hóa Lộc chủ tài, Hóa Quyền chủ thế, Hóa Khoa chủ danh, Hóa Kỵ chủ bệnh. Cung vị Tứ Hóa quyết điểm nút sự kiện lớn cả đời.', vi: 'Tứ Hóa là tinh hoa mệnh bàn — Hóa Lộc chủ tài, Hóa Quyền chủ thế, Hóa Khoa chủ danh, Hóa Kỵ chủ bệnh. Cung vị Tứ Hóa quyết điểm nút sự kiện lớn cả đời.' },
  },
  'qs-5-2': {
    translation: { zh: 'Sinh niên Tứ Hóa là bổn mệnh Tứ Hóa, cố định mãi; Ni Sư nhấn: sao Tứ Hóa không động — chỉ xem đại hạn lưu niên đi đến đâu. Các pháp tự hóa, cung can phi hóa, lai nhân cung của Bắc phái phi tinh, Ni Sư không chủ trương dùng.', vi: 'Sinh niên Tứ Hóa là bổn mệnh Tứ Hóa, cố định mãi; Ni Sư nhấn: sao Tứ Hóa không động — chỉ xem đại hạn–lưu niên đi đến đâu. Các pháp tự hóa, cung can phi hóa, lai nhân cung của Bắc phái phi tinh, Ni Sư không chủ trương dùng.' },
    niNote: { zh: '倪海夏《天纪》核心立场：四化星不动，只看大限流年走到何处。', vi: 'Lập trường cốt lõi《Thiên Kỷ》của Ni Hà Hạ: sao Tứ Hóa không động — chỉ xem đại hạn–lưu niên đi đến đâu.' },
  },
  'qs-5-3': {
    translation: { zh: 'Hóa Lộc nhập tam phương tứ chính Mệnh: nguồn tài ổn, duyên rộng, năng lực biến hiện được. Nhập Phu Thê: hôn nhân ngọt. Nhập Quan Lộc: sự nghiệp và nguồn tài tương ứng.', vi: 'Hóa Lộc vào tam phương tứ chính Mệnh: nguồn tài ổn, duyên rộng, năng lực biến thành thực lực. Vào Phu Thê: hôn nhân ngọt. Vào Quan Lộc: sự nghiệp và nguồn tài tương ứng.' },
  },
  'qs-5-4': {
    translation: { zh: 'Hóa Kỵ nhập tam phương tứ chính Mệnh: đời có bài học sâu — nên đối diện chứ không trốn. Nhập Phu Thê: hôn nhân nhiều mài luyện. Nhập Quan Lộc: sự nghiệp nhiều sóng gió, nhưng sau mài luyện ngược lại thành chuyên gia.', vi: 'Hóa Kỵ vào tam phương tứ chính Mệnh: đời có bài học sâu — nên đối diện chứ không trốn. Vào Phu Thê: hôn nhân nhiều mài luyện. Vào Quan Lộc: sự nghiệp nhiều sóng gió, nhưng sau mài luyện ngược lại thành chuyên gia.' },
  },
  'qs-6-1': {
    translation: { zh: 'Thiên Cơ Thái Âm Thiên Đồng Thiên Lương bốn sao cùng vào tam phương tứ chính Mệnh gọi Cơ Nguyệt Đồng Lương cách. Văn nhã thông tuệ; rất hợp công chức, học thuật, văn nghệ, y tế, dịch vụ cần tích lũy ổn định.', vi: 'Thiên Cơ–Thái Âm–Thiên Đồng–Thiên Lương bốn sao cùng vào tam phương tứ chính Mệnh gọi cách Cơ Nguyệt Đồng Lương. Văn nhã thông tuệ; rất hợp công chức, học thuật, văn nghệ, y tế, dịch vụ cần tích lũy ổn định.' },
  },
  'qs-6-2': {
    translation: { zh: 'Cơ Nguyệt Đồng Lương hợp làm lại nhân — cổ ngữ: nên làm công chức, hành chính văn thư, an ổn cả đời. Lại hội Xương Khúc Hóa Khoa thì danh xa. Kỵ sát tinh quá nhiều — ngược lại hay biến khó an.', vi: 'Cơ Nguyệt Đồng Lương hợp làm lại nhân — cổ ngữ: nên làm công chức, hành chính văn thư, an ổn cả đời. Lại hội Xương–Khúc Hóa Khoa thì danh xa. Kỵ sát tinh quá nhiều — ngược lại hay biến khó an.' },
  },
  'qs-7-1': {
    translation: { zh: 'Hóa Lộc cùng Lộc Tồn hội tam phương tứ chính Mệnh gọi Song Lộc Triêu Viên cách. Cổ ngữ「Song Lộc Triêu Viên, giàu sánh Đào Chu」: đời không lo thiếu tài; thường chính tài lẫn thiên tài đều có.', vi: 'Hóa Lộc cùng Lộc Tồn hội tam phương tứ chính Mệnh gọi cách Song Lộc Triêu Viên. Cổ ngữ「Song Lộc Triêu Viên, giàu sánh Đào Chu」: đời không lo thiếu tài; thường chính tài lẫn thiên tài đều có.' },
  },
  'qs-7-2': {
    translation: { zh: 'Song Lộc Triêu Viên kỵ nhất Không Kiếp — một xung thì song lộc thành hư danh. Cần thấy Tả Phụ Hữu Bật hoặc Văn Xương Văn Khúc mới là chính cách.', vi: 'Song Lộc Triêu Viên kỵ nhất Không–Kiếp — một xung thì song lộc thành hư danh. Cần thấy Tả Phụ–Hữu Bật hoặc Văn Xương–Văn Khúc mới là chính cách.' },
  },
};
