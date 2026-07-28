/** Vietnamese STAR_DB long-form content (US-018 / Decision 0002 Option A). */

import type { StarContent } from './db-analysis';

/**
 * Markers stay Chinese so parseStarContent can split sections;
 * body text after each marker is Vietnamese.
 */
export const STAR_DB_VI: Record<string, StarContent> = {
  '紫微': {
    mingGong: '**【一句话定调】Tử Vi là đế vương tinh, người tọa mệnh tôn quý khác thường, thống ngự chúng tinh, uy nghi trời ban.**\n'
      + '**【核心论断】Tử Vi nhập Mệnh chủ cô cao tự trọng, thích ở một mình, không thích bị người khác quản. Cần Tả Phụ Hữu Bật kẹp mới hiện đủ khí chất đế vương; không thì là cô quân, giàu mà không quý. An mệnh Thìn/Tuất tốt nhất, đồng thủ với Thiên Phủ song tinh, tài quan song mỹ, xuất tướng nhập tướng. Kỵ nhất Hỏa Tinh, Linh Tinh, Kình Dương, Đà La đồng cung; thêm sát thì cô quý có quyền mà không có tài.**\n'
      + '**【命盘依据】Tử Vi ở cung Thìn/Tuất miếu vượng, được trời ưu đãi. Mệnh cung có Phụ Bật kẹp thì tam hợp mới hiện quý; không Phụ Bật dù đế tinh cũng cô. Gặp sát tinh thì quyền thế còn mà tài bạch tán.**\n'
      + '**【经典出处】Cổ quyết:「Tử Vi đế tọa lâm mệnh chủ tôn quý, thống lĩnh chúng tinh, tọa mệnh chủ quyền uy hiển đạt.」Nam Bắc Sơn Nhân chú:「Tử Vi thủ mệnh ở Thìn vị, tài quan song mỹ, xuất tướng nhập tướng, vị chí tam công; Tý cung an mệnh, phú quý không bền, về sau không đẹp.」**',
    personality: 'Cô ngạo tự trọng, không thích bị quản, có khí chất lãnh đạo. Người Tử Vi nhập Mệnh bẩm sinh uy nghi, cử chỉ trang trọng, phong thái thủ lĩnh. Tính cách nghiêng về cô độc, cao chỗ không thắng lạnh, cần phụ tinh điều hòa tính cô. Có Phụ Bật thì khí độ khoáng đạt, tả hữu phùng nguyên; không Phụ Bật dù tôn quý nhưng cô tịch, xa cách người.',
    xiongDi: 'Trong anh chị em thường có người địa vị xã hội, nhưng quan hệ nhạt; Tử Vi nhập Cung Huynh Đệ chủ quý khí giữa thủ túc nhưng qua lại không mật, mỗi người tự phát triển độc lập.',
    fuQi: 'Tình cảm bị động, lòng tự trọng mạnh, cần đối phương chủ động theo đuổi. Tử Vi tọa Cung Phu Thê trong tình cảm khá tự ngã, không dễ cúi đầu, có khuynh hướng cô độc. Kết hôn muộn thì cát, sớm hôn nhiều sóng gió. Phối ngẫu cần có địa vị hoặc năng lực nhất định mới xứng đế tinh.',
    ziNv: 'Con cái có quý khí, dạy dỗ cần khoan nghiêm song hành, không nên ràng buộc quá. Tử Vi tọa Cung Tử Nữ, con cái thường có tài lãnh đạo, cá tính độc lập.',
    caiBo: 'Tài vận ổn định, thủ thành mạnh hơn tấn thủ. Vị Thìn/Tuất tài quan song mỹ, rất hợp đầu tư tích lũy. Tử Vi không chủ động cầu tài mà lấy địa vị và uy quyền mang tài; nên làm tầng quản lý hoặc tự lập nghiệp, của cải từ địa vị mà đến.',
    jiE: 'Thuộc thổ, chú ý tỳ vị, hệ tiêu hóa. Kỵ quá lao, nên giữ giờ giấc đều. Tử Vi Cung Tật Ách có sát cần phòng bệnh tim mạch và đường tiêu hóa.',
    qianYi: 'Ra ngoài có quý nhân giúp, được tôn kính, xa hành phát triển có lợi. Tử Vi nhập Cung Thiên Di, ra ngoài được lễ ngộ, hợp phát triển sự nghiệp nơi khác.',
    jiaoYou: 'Bạn nhiều nhưng có khoảng cách, vòng giao hữu đa phần người có địa vị. Tử Vi nhập Cung Giao Hữu, kết giao tầng lớp trên, nhưng tri kỷ thật ít.',
    guanLu: 'Hợp chính giới, tầng quản lý, tự lập nghiệp; khí chất đế vương trời ban, hợp vị trí lãnh đạo một mình đảm đương. Tử Vi nhập Cung Quan Lộc, sự nghiệp dễ nắm quyền bính, có cục diện lãnh đạo đội ngũ, chỉ cần phòng cao chỗ không thắng lạnh.',
    tianZhai: 'Tổ nghiệp phong hậu, gia trạch hưng vượng, có cơ hội nâng môi trường ở. Tử Vi nhập Cung Điền Trạch, vận bất động sản tốt, dễ được nhà đất chất lượng.',
    fuDe: 'Thế giới tinh thần phong phú, có tư duy triết học nhưng dễ cảm cô độc. Tử Vi nhập Cung Phúc Đức, nội tâm cao quý độc lập, thưởng thức đời sống tinh thần một mình.',
    fuMu: 'Cha mẹ có địa vị xã hội hoặc cảm giác uy quyền, nhưng quan hệ cha mẹ–con khá nghiêm, thiếu thân mật. Tử Vi nhập Cung Phụ Mẫu, ít nhất một bên phụ mẫu cá tính mạnh.',
  },
  '天机': {
    mingGong: '**【一句话定调】Thiên Cơ là mưu sĩ tinh, thông minh tuyệt đỉnh, cơ biến vô song, động tĩnh đều hợp.**\n'
      + '**【核心论断】Người Thiên Cơ tọa mệnh tư duy nhanh, trí tuệ siêu quần, nhưng thông minh lộ ra thì hại thân; đa mưu thiếu quyết là điểm chí mạng. Thuộc mộc, thiện biến linh động, cần ly hương xa hành mới đại triển. Thiên Cơ hóa kỵ phiền phức nhất — thông minh phản bị thông minh lầm. Thiên Cơ nhập Mão miếu vượng, tinh minh cường cán, năng lực hoạch định cực mạnh; hãm địa thì ảm đạm, lấy thương mại làm nghề.**\n'
      + '**【命盘依据】Thiên Cơ ở cung Mão miếu vượng, cung Hợi cũng tốt, chủ trí lực vượt trội. Mệnh cung Thiên Cơ hội Xương Khúc chủ thành tựu học thuật; gặp sát tinh thì tâm thuật bất chính hoặc tư lự quá độ. Hóa kỵ cần phòng quyết sách sai.**\n'
      + '**【经典出处】Cổ quyết:「Thiên Cơ thuộc mộc, thương mãi đều nhiều cơ kiến, ly tông tất xa thân, cơ mưu tất viễn ly thân.」Nam Bắc Sơn Nhân chú:「Thiên Cơ cư miếu vượng địa, chủ tinh minh, thiện hoạch định; cư hãm địa thì ảm đạm, ai cũng theo thương làm nghề.」**',
    personality: 'Thông minh cơ mẫn, giỏi hoạch định, tư duy hoạt bát. Người Thiên Cơ nhập Mệnh đầu óc linh hoạt, phản ứng nhanh, học lực mạnh, nhưng dễ nghĩ nhiều mà do dự; đa mưu thiếu đoán là điểm yếu. Thiện biến thích ứng mạnh nhưng ổn định hơi thiếu.',
    xiongDi: 'Anh em thông minh nhưng quan hệ biến động nhiều, thường bất đồng ý kiến. Thiên Cơ nhập Cung Huynh Đệ, anh chị em đa tài nhưng tụ ít ly nhiều.',
    fuQi: 'Tình cảm đa biến, ý nghĩ quá nhiều, khó chuyên nhất. Thiên Cơ tọa Cung Phu Thê thiếu ổn định trong tình cảm, dễ do dự vì tư lự. Nên kết hôn muộn; sau hôn cần học buông tư lự quá mức mới giữ được tình.',
    caiBo: 'Kiếm tiền bằng trí tuệ và kỹ năng, không giỏi thủ tài. Lấy chuyên môn kỹ thuật làm nghề thì tài vận ổn. Thiên Cơ nhập Cung Tài Bạch, nguồn tài từ lao động trí óc — hoạch định, tư vấn, kỹ thuật.',
    jiE: 'Thuộc mộc, chú ý can mật, hệ thần kinh. Tư tâm nặng dễ mất ngủ, nên tập tĩnh tâm thiền. Thiên Cơ nhập Cung Tật Ách hóa kỵ cần phòng suy nhược tinh thần và lo âu.',
    guanLu: 'Hợp chuyên gia kỹ thuật, mưu sĩ, nghiên cứu, IT, hoạch định; dùng óc hơn dùng tay, nên ly hương phát triển. Thiên Cơ nhập Cung Quan Lộc, lấy trí mưu thắng, hợp việc cần phân tích trí tuệ cao.',
    fuDe: 'Đời sống tinh thần phong phú, thích nghiên cứu huyền học và triết học; nội tâm hoạt bát nhưng dễ rối loạn.',
    fuMu: 'Cha mẹ thông minh khai minh, nhưng giao tiếp cha mẹ–con nhiều biến số; phụ mẫu có thể bận rộn, ít kèm cặp.',
  },
  '太阳': {
    mingGong: '**【一句话定调】Thái Dương là quang minh tinh, đại công vô tư, khái khái lỗi lạc, chiếu rọi bốn phương.**\n'
      + '**【核心论断】Người Thái Dương tọa mệnh quang minh chính đại, khái khái thích thể diện; nam mệnh cực tốt, nữ mệnh hiện mạnh. Từ Mão đến Ngọ nhập miếu, quang huy vạn trượng; sau Ngọ dần lạc hãm, trước cần sau lười. Thái Dương đại diện cha và trưởng bối; nhập mệnh tính hướng ngoại khai lãng, thích được nhìn thấy, rất hợp công chức hoặc sự nghiệp công chúng. Lạc hãm thì cô quả lao lục, tình chí u uất.**\n'
      + '**【命盘依据】Thái Dương ở cung Ngọ nhập miếu, ánh sáng thịnh nhất, chủ quý hiển; cung Thìn cũng tốt, trung niên sau phát đạt. Mệnh cung Thái Dương ở Mão Thìn Tỵ Ngọ miếu vượng; Thân Dậu Tuất Hợi Tý lạc hãm. Gặp Cự Môn thì bị che, ánh sáng bị cản.**\n'
      + '**【经典出处】Cổ quyết:「Thái Dương cư Ngọ nhập miếu, quang huy đại phóng, chủ quý hiển, nam mệnh tối cát; lạc hãm thì cô quả lao lục, trước cần sau lười.」Nam Bắc Sơn Nhân chú:「Thái Dương ở cung Ngọ thủ mệnh, tài quan song mỹ, xuất tướng nhập tướng; Thìn vị an mệnh, trung niên tài quan biến mỹ, Ất niên sinh gặp hung cũng đại lợi.」**',
    personality: 'Khái khái đại phương, hướng ngoại khai lãng, nhiệt tâm giúp người. Người Thái Dương nhập Mệnh tính cách quang minh lỗi lạc, không thích âm ám và bí mật, đãi người chân thành nhiệt tình. Nam có tinh này cực tốt; nữ thì tính quá mạnh. Nhập miếu thì tích cực hướng thượng; lạc hãm trước cần sau lười, vận muộn khá cô.',
    fuQi: 'Nam mệnh duyên tốt nhưng dễ hoa tâm; nữ mệnh độc lập mạnh, hôn nhân cần mài giũa. Thái Dương nhập Cung Phu Thê: nam khái khái với bạn đời nhưng dễ đào hoa; nữ muốn chủ đạo tình cảm, nên tìm bạn đời ôn nhu thể thiết để bổ sung.',
    caiBo: 'Tài vận nhờ nỗ lực, khái khái hay thí, không giỏi tích lũy. Thái Dương nhập Cung Tài Bạch: nhập miếu tài vận thịnh, cơ hội kiếm tiền nhiều; lạc hãm tài vận lên xuống, thủ tài khó.',
    jiE: 'Thuộc hỏa, chú ý tim, mắt, tuần hoàn máu. Thái Dương lạc hãm dễ quá lao, cần nghỉ đủ, tránh áp lực lớn gây loạn nhịp.',
    guanLu: 'Hợp công chức, chính giới, quản lý, quan hệ công chúng, giáo dục, truyền thông; thích đứng trước đám đông, hợp sự nghiệp công chúng. Thái Dương nhập Cung Quan Lộc, sự nghiệp phát dương diện, danh tiếng xa.',
    fuMu: 'Duyên với cha sâu, cha ảnh hưởng lớn đến đời người. Thái Dương nhập Cung Phụ Mẫu, phụ mẫu khỏe khai lãng, quan hệ gia đình hòa quang minh.',
  },
  '武曲': {
    mingGong: '**【一句话定调】Vũ Khúc là chủ tài bạch, cương nghị quả quyết, lôi lệ phong hành, giàu hành động lực.**\n'
      + '**【核心论断】Người Vũ Khúc tọa mệnh ý chí kiên định, tính cách cương trực, lực chấp hành siêu quần. Ngũ hành thuộc kim, cứng không khuất, sợ nhất cô khắc. Nhập Thìn Tuất Sửu Mùi tứ khố được vượng địa, tài quan song mỹ. Đồng cung Thất Sát thành Tướng Tài cách, cục diện tài rất cao. Kỵ nhất Cung Phu Thê thấy Vũ Khúc — chủ tình cảm cô khắc. Vũ Khúc hóa kỵ cần phòng huyết quang bất ngờ.**\n'
      + '**【命盘依据】Vũ Khúc ở bốn cung Thìn Tuất Sửu Mùi miếu vượng, kim nhập thổ khố, được chỗ. Đồng cung Thất Sát là Tướng Tài cách, chủ đại phú. Đồng cung Thiên Phủ thì tài khố song mỹ. Hóa kỵ cần phòng tai nạn liên quan kim loại.**\n'
      + '**【经典出处】Cổ quyết:「Vũ Khúc thuộc kim, tính cương cường, một đời nhiều hình khắc; thủ mệnh ở vượng địa, xuất tướng nhập tướng.」Nam Bắc Sơn Nhân chú:「Vũ Khúc thủ mệnh, tam phương tứ chính đều cát, tài quan song mỹ; võ chức thêm Phụ Bật Xương Khúc cũng chủ đại quý; đồng cung Thất Sát là Tướng Tài cách, chủ đại phú.」**',
    personality: 'Cương trực quả đoán, lực chấp hành mạnh, ý chí kiên định. Người Vũ Khúc nhập Mệnh cá tính cứng, nói một không hai, quan niệm thị phi và nguyên tắc mạnh. Làm việc cầu hiệu suất, không dây dưa, nhưng đôi khi quá thẳng làm tổn thương cảm xúc người khác; tình cảm khá mộc nột.',
    fuQi: 'Tình cảm thẳng tuột, thiếu thú vị, cần bạn đời ôn nhu bổ sung. Vũ Khúc nhập Cung Phu Thê: quan hệ duy lý trực tiếp, không giỏi biểu đạt lãng mạn; kỵ tình cảm cô khắc, nên tìm đối tượng tính mềm mới cân bằng.',
    caiBo: 'Tài tinh bản mệnh, tài vận cực mạnh, năng lực quản lý tiền siêu quần. Vũ Khúc nhập Cung Tài Bạch: kiếm tiền hạng nhất, nhạy cảm tự nhiên với tiền bạc; vị Thìn/Tuất tài quan song mỹ, đầu tư quản lý đều hợp.',
    jiE: 'Thuộc kim, chú ý phổi, hô hấp, răng. Hóa kỵ cần phòng huyết quang bất ngờ, đặc biệt tai nạn kim loại. Vũ Khúc nhập Cung Tật Ách cần bảo dưỡng đường hô hấp.',
    guanLu: 'Hợp tài chính, quân cảnh, kế toán, kỹ thuật; lực chấp hành cực mạnh, hợp lĩnh vực cần khí phách và quyết đoán. Vũ Khúc nhập Cung Quan Lộc: sự nghiệp dám xung dám đánh, hợp việc thử thách cao.',
    fuMu: 'Cha mẹ tính cương, gia phong nghiêm, cách giáo dục khá chặt. Vũ Khúc nhập Cung Phụ Mẫu, ít nhất một bên phụ mẫu nguyên tắc cực mạnh.',
  },
  '天同': {
    mingGong: '**【一句话定调】Thiên Đồng là phúc đức tinh, phúc thọ miên trường, tính tình ôn hòa, tự tại tiêu dao.**\n'
      + '**【核心论断】Người Thiên Đồng tọa mệnh một đời hưởng phúc, không thích cạnh tranh, tính thuận, thích đời sống ổn định. Thiên Đồng là phúc tinh, cũng là tinh 「lười」 nhất; nhập mệnh không thích lao tâm lao lực, biết hưởng thụ. Đồng cung Thiên Lương tốt nhất — hưởng phúc lại có bảo đảm. Thiên Đồng hóa lộc là hóa lộc đẹp nhất, chủ một đời no ấm, vui vẻ nhàn du. Kỵ lạc hãm — lạc hãm phúc giảm mạnh, cần nỗ lực mới được phúc.**\n'
      + '**【命盘依据】Thiên Đồng ở cung Dần Thân Mão miếu vượng; Cung Phúc Đức thấy là tốt nhất. Hóa lộc thì phúc trạch sâu nhất. Mệnh cung Thiên Đồng thêm cát tinh thì phú quý song toàn, người ôn hòa, nhiều nhân duyên; thêm sát thì phúc khí bị cản, cần hậu thiên nỗ lực bù.**\n'
      + '**【经典出处】Cổ quyết:「Thiên Đồng là phúc đức tinh, tọa mệnh hưởng phúc hữu dư, chủ một đời tiêu dao tự tại, không cần lao khổ.」Nam Bắc Sơn Nhân chú:「Thiên Đồng thủ mệnh, tam phương không sát, một đời vui vẻ, áo cơm sung túc; thêm cát tinh thì phú quý song toàn, người ôn hòa, nhiều nhân duyên.」**',
    personality: 'Ôn hòa tùy hòa, không thích tranh đấu, tri túc thường lạc. Người Thiên Đồng nhập Mệnh tính mềm, có thân hòa lực, không thích xung đột cạnh tranh, giỏi điều hòa không khí. Thái độ xử thế tùy duyên, tùy ngộ mà an; quá an dật có thể thiếu tiến thủ.',
    fuQi: 'Tình cảm ôn hòa, không chủ động, dễ bị động tiếp nhận, hôn nhân khá ổn. Thiên Đồng nhập Cung Phu Thê: trong tình cảm tùy hòa dễ gần, quan hệ bạn đời hòa hợp, nhưng cần đối phương chủ động đẩy quan hệ.',
    caiBo: 'Tài vận không nổi bật, dựa lương ổn định, không giỏi đầu cơ. Thiên Đồng nhập Cung Tài Bạch: tài vận bình ổn, no ấm nhưng khó đại phú đại quý — kiểu của cải nhỏ giọt dài lâu.',
    jiE: 'Thuộc thủy, chú ý thận, bàng quang. Thể chất yếu hơn, nên vận động vừa phải, giữ tâm thái nhẹ. Thiên Đồng nhập Cung Tật Ách thể chất thiên hàn, cần giữ ấm và miễn dịch.',
    guanLu: 'Hợp dịch vụ, giải trí, ẩm thực, văn nghệ; môi trường nhẹ vui hợp nhất, kỵ cạnh tranh áp lực cao. Thiên Đồng nhập Cung Quan Lộc: sự nghiệp cầu cân bằng việc–đời sống.',
    fuMu: 'Cha mẹ từ tường ôn hòa, quan hệ gia đình hòa hợp, môi trường tuổi thơ khá ưu việt. Thiên Đồng nhập Cung Phụ Mẫu, phụ mẫu yêu chiều nhiều.',
  },
  '廉贞': {
    mingGong: '**【一句话定调】Liêm Trinh là thứ đào hoa tinh, tài hoa cái thế, tình cảm phong phú, sóng gió hùng tráng.**\n'
      + '**【核心论断】Người Liêm Trinh tọa mệnh tài hoa ngang trời, cá tính cương liệt, một đời nhiều thăng trầm. Liêm Trinh là thứ đào hoa, tình cảm phong phú phức tạp. Ngũ hành thuộc hỏa, tính kịch liệt, có thiên phú nghệ thuật. Hóa kỵ rất hung hiểm — kiện tụng, lao ngục, tai nạn. Đồng cung Thiên Tướng hóa hung thành cát, thành cách Hành chính Ấn thụ, nắm quyền bính. Giữ chính không tà thì thành đại khí.**\n'
      + '**【命盘依据】Liêm Trinh ở cung Dần Thân khá tốt; đồng cung Thiên Tướng ở Tý Ngọ tốt nhất. Mệnh cung Liêm Trinh hóa lộc thì tài hoa hiển đạt; hóa kỵ thì kiện tụng huyết quang. Liêm Trinh kỵ nhất tứ sát đồng cung — chủ huyết quang chi tai.**\n'
      + '**【经典出处】Cổ quyết:「Liêm Trinh là thứ đào hoa, tài hoa ngang trời, tình cảm nhiều sóng gió; Liêm Tướng đồng cung, hóa hung thành cát, thành cách Hành chính Ấn thụ, nắm quyền bính.」Nam Bắc Sơn Nhân chú:「Liêm Trinh thủ mệnh, gặp cát tinh thì tài hoa xuất chúng; hóa kỵ thì kiện tụng vướng thân, chủ huyết quang, cần phòng.」**',
    personality: 'Tài hoa ngang trời, cá tính cương liệt, tình cảm phong phú. Người Liêm Trinh nhập Mệnh thông minh linh lợi, đa tài đa nghệ, khí chất nghệ thuật. Tính cương nhu song tế, vừa có nguyên tắc vừa có mặt cảm tính. Một đời thăng trầm lớn, cảm xúc dao động mạnh, cần quản lý cảm xúc.',
    fuQi: 'Đào hoa nhiều, tình cảm phức tạp, dễ gặp tranh chấp tình cảm. Liêm Trinh nhập Cung Phu Thê: thế giới tình cảm phong phú nhưng đầy sóng gió; nên kết hôn muộn, chọn bạn đời vững chắc mới lâu dài.',
    caiBo: 'Tài vận lên xuống, kiếm tiền bằng tài nghệ. Liêm Trinh nhập Cung Tài Bạch: cách kiếm tiền đa dạng nhưng thu nhập không ổn; hóa kỵ cần phòng tranh chấp tài chính và rủi ro pháp lý.',
    jiE: 'Thuộc hỏa, chú ý tim, máu, gan. Hóa kỵ phòng tai nạn và phẫu thuật, lưu ý huyết quang. Liêm Trinh nhập Cung Tật Ách cần khám tim mạch định kỳ.',
    guanLu: 'Hợp nghệ thuật, giải trí, luật, công chức (phối Thiên Tướng); tài nghệ xuất chúng, nên giữ chính nghiệp mới lâu. Liêm Trinh nhập Cung Quan Lộc: sự nghiệp chọn chính đạo, lấy tài hoa thắng.',
    fuMu: 'Cha mẹ có tài nghệ hoặc nền công chức, nhưng quan hệ cha mẹ–con phức tạp, dễ có thế hệ cách. Liêm Trinh nhập Cung Phụ Mẫu, trong phụ mẫu có người tính cương liệt.',
  },
  '天府': {
    mingGong: '**【一句话定调】Thiên Phủ là tài khố tinh, vững trọng bảo thủ, thủ thành có phương, phúc trạch miên trường.**\n'
      + '**【核心论断】Người Thiên Phủ tọa mệnh vững trọng bảo thủ, không chủ động cầu tài nhưng giữ được của. Thiên Phủ là tài khố tinh, giỏi thủ thành và quản lý, không hợp mạo hiểm đầu cơ. Nữ mệnh tốt nhất — năng vượng phu hưng gia. Thích nhất đồng cung hoặc đối chiếu Tử Vi, thành cục song tinh, tài quan song mỹ. Sợ nhất Không Kiếp kẹp mệnh — thấy Không Kiếp thì tài khố cạn đáy, khó tích tài.**\n'
      + '**【命盘依据】Thiên Phủ ở cung Tý Ngọ miếu vượng, tài khố vững. Mệnh cung Thiên Phủ đồng cung Tử Vi ở Thìn Tuất — song đế tinh giao huy, cục diện cực cao. Thiên Phủ gặp Lộc Tồn thì tài như núi; gặp Không Kiếp thì khố vỡ tài tán.**\n'
      + '**【经典出处】Cổ quyết:「Thiên Phủ là tài khố tinh, thủ mệnh vững trọng bảo thủ, chủ tích tài vượng gia; nữ mệnh gặp thì năng vượng phu ích tử, gia đạo hưng long.」Nam Bắc Sơn Nhân chú:「Thiên Phủ thủ mệnh, tam phương cát tụ, tài quan song mỹ, phú quý an khang; gặp Không Kiếp thì tài khố thủng, khó tích tài.」**',
    personality: 'Vững trọng bảo thủ, thận trọng thực tế, có trách nhiệm. Người Thiên Phủ nhập Mệnh tính trầm ổn, làm việc có kế hoạch, không xung động. Có tài lãnh đạo quản lý nhưng phong cách thiên thủ thành hơn khai sáng. Coi trọng gia đình và giá trị truyền thống.',
    fuQi: 'Tình cảm ổn định, lo gia, là bạn đời tốt. Thiên Phủ nhập Cung Phu Thê: chú trọng an toàn gia đình và bảo đảm kinh tế, hôn nhân bền, cho đối phương môi trường sống ổn định.',
    caiBo: 'Tài vận cực tốt, năng lực thủ tài mạnh, rất hợp đầu tư tích lũy và bất động sản. Thiên Phủ nhập Cung Tài Bạch: quản lý tài có đạo, lấy vững chắc làm dài, hợp đầu tư dài hạn và nhà đất.',
    jiE: 'Thuộc thổ, chú ý tỳ vị, tiêu hóa. Thể chất vững, nên giữ ăn uống và sinh hoạt đều; ít bệnh lớn nhưng cần phòng tích lao thành bệnh.',
    guanLu: 'Hợp hành chính quản lý, tài chính, bảo hiểm, bất động sản; cầu ổn không mạo hiểm, hợp nghề thủ thành. Thiên Phủ nhập Cung Quan Lộc: lấy năng lực quản lý làm dài.',
    fuMu: 'Cha mẹ gia cảnh dư dả, có thể nhận hỗ trợ nguồn lực từ gia tộc. Thiên Phủ nhập Cung Phụ Mẫu: thế gia tốt, phụ mẫu là hậu thuẫn tài chính.',
  },
  '太阴': {
    mingGong: '**【一句话定调】Thái Âm là phụ tài tinh, nhã nhặn tinh tế, tình cảm phong phú, ôn nhu nội liễm.**\n'
      + '**【核心论断】Người Thái Âm tọa mệnh cá tính nhã, tư tâm tinh tế, tình cảm phong phú. Thái Âm là tài tinh, đặc biệt lợi nữ mệnh; cũng là tinh đại diện mẹ và vợ của nam mệnh. Hai cung Hợi Tý nhập miếu, quang huy toàn chiếu, tài vận cực thịnh; vị Ngọ lạc hãm thì u uất đa tình, tài vận bình. Thái Âm coi trọng nội tâm và đời sống tinh thần, biểu đạt tình cảm hàm súc nội liễm. Hóa kỵ cần chú ý sức khỏe thân nhân nữ.**\n'
      + '**【命盘依据】Thái Âm ở cung Hợi Tý miếu vượng, trong sáng, tài vận và quý khí đều tốt. Ở cung Ngọ lạc hãm, ánh sáng ảm. Mệnh cung Thái Âm nhập miếu thêm cát tinh thì tài phú hậu; lạc hãm cần nỗ lực mới thành.**\n'
      + '**【经典出处】Cổ quyết:「Thái Âm là tài tinh, lợi nữ mệnh; Hợi Tý nhập miếu, quang huy toàn chiếu, tài vận cực thịnh; vị Ngọ lạc hãm, u uất đa tình, tài vận bình.」Nam Bắc Sơn Nhân chú:「Thái Âm thủ mệnh, nhập miếu thì tài phú ưu hậu, nữ mệnh càng tốt; lạc hãm cần nỗ lực mới giàu, tình cảm tinh tế.」**',
    personality: 'Nhã nhặn ôn nhu, tư tâm tinh tế, tình cảm phong phú. Người Thái Âm nhập Mệnh khí chất văn tĩnh, cử chỉ đắc thể, khí chất nghệ sĩ. Tính nội liễm hàm súc, không thích phô trương, nhạy cảm với cái đẹp. Nam mệnh Thái Âm thì tính ôn hòa, có phong độ quý ông.',
    fuQi: 'Tình cảm ôn nhu tinh tế, coi trọng cảm nhận nội tâm, cần quan hệ ổn có an toàn cảm. Thái Âm nhập Cung Phu Thê: đối đãi tình cảm nghiêm chuyên nhất, khao khát kết nối sâu, kỵ bị lạnh nhạt.',
    caiBo: 'Nhập miếu tài vận cực thịnh; lạc hãm cần nỗ lực. Thái Âm nhập Cung Tài Bạch: quản lý tiền tỉ mỉ, giỏi tích lũy, không giỏi đầu tư mạo hiểm, lấy vững chắc làm dài.',
    jiE: 'Thuộc thủy, chú ý thận, tử cung (nữ mệnh). Dao động cảm xúc ảnh hưởng sức khỏe, nên giữ tâm tình thư thái. Thái Âm nhập Cung Tật Ách cần chú ý bệnh liên quan nữ và quản lý cảm xúc.',
    guanLu: 'Hợp tài chính, ngân hàng, bất động sản, nghệ thuật, giáo dục; nghề cần thẩm mỹ và ôn nhu. Thái Âm nhập Cung Quan Lộc: lấy tinh tế và kiên nhẫn thắng.',
    fuMu: 'Duyên với mẹ sâu, mẹ ảnh hưởng sâu đến đời người. Thái Âm nhập Cung Phụ Mẫu: mẹ tính ôn nhu từ ái, không khí gia đình hòa hợp.',
  },
  '贪狼': {
    mingGong: '**【一句话定调】Tham Lang là đào hoa tối thượng, đa tài đa nghệ, khí chất tỏa sáng, muộn phát hanh thông.**\n'
      + '**【核心论断】Người Tham Lang tọa mệnh đa tài đa nghệ nhất, đào hoa nặng nhất, sức hút khó cưỡng. Tham Lang là tinh muộn phát — trung niên sau mới thật phát đạt. Tham Lang hóa lộc nhập mệnh thì khí chất tỏa sáng, người thấy người yêu, tài vận đại phát. Vị Dần Thân nhập miếu tốt nhất — đào hoa thịnh, tài nghệ siêu quần. Gặp Không Kiếp một đời nhiều sóng gió, khó tụ tài. Tham Lang lạc hãm gặp sát phản cát — đặc tính lạc hãm của Tham Lang, kích thích ý chí phấn đấu.**\n'
      + '**【命盘依据】Tham Lang ở cung Dần Thân miếu vượng; Dần là mộc vị, Tham Lang được địa. Hóa lộc sau tài vận thịnh nhất. Mệnh cung Tham Lang thêm cát tinh thì phúc lộc đa thọ, phát phúc hanh thông; thêm Không Kiếp thì tài đến tài đi, tụ tán vô thường.**\n'
      + '**【经典出处】Cổ quyết:「Tham Lang phát phúc hanh thông, đa tài đa nghệ, đào hoa nặng nhất; nhưng khó qua ba mươi tuổi, muộn phát đông. Lạc hãm gặp sát phản cát — lý lạc hãm của Tham Lang.」Nam Bắc Sơn Nhân chú:「Tham Lang thủ mệnh, gặp cát thì phúc lộc đa thọ, phát phúc hanh thông; nhưng về lâu không được thiện chung, nên tu thân dưỡng đức mới thiện chung.」**',
    personality: 'Đa tài đa nghệ, năng lực xã giao mạnh, sức hút đầy đủ. Người Tham Lang nhập Mệnh bẩm sinh hấp dẫn, giỏi giao tiếp, đa tài, học lực cực mạnh. Tính hướng ngoại hoạt bát, thích cái mới, nhưng dễ thích mới chán cũ. Trung niên sau tính dần chín chắn ổn định.',
    fuQi: 'Đào hoa cực thịnh, tình cảm đa nguyên, nên kết hôn muộn. Tham Lang nhập Cung Phu Thê: đời sống tình cảm sôi động, người theo đuổi đông; sau hôn cần kiềm chế đào hoa mới đầu bạc cùng nhau, chọn bạn đời bao dung mạnh.',
    caiBo: 'Kiếm tiền bằng nhân mạch và tài nghệ; tài vận trung–vãn niên mới ổn. Tham Lang nhập Cung Tài Bạch: hóa lộc thì nguồn tài rộng; sớm niên nên thủ vững, trung niên sau mới đại phú.',
    jiE: 'Thuộc mộc (hàm thủy), chú ý gan, thận. Đào hoa quá thịnh dễ hao tinh lực, nên tiết dục điều dưỡng, chú ý bảo vệ hệ sinh sản.',
    guanLu: 'Hợp nghệ thuật, giải trí, quan hệ công chúng, bán hàng, phong thủy ngũ thuật; dựa nhân mạch và tài nghệ phát triển. Tham Lang nhập Cung Quan Lộc: sự nghiệp đa nguyên, lấy quan hệ nhân tế làm vốn.',
    fuMu: 'Quan hệ phụ mẫu khá phức tạp hoặc có khả năng tái hôn; giáo dục gia đình nghiêng tự do mở. Tham Lang nhập Cung Phụ Mẫu: trong phụ mẫu có người tài nghệ xuất chúng.',
  },
  '巨门': {
    mingGong: '**【一句话定调】Cự Môn là khẩu thiệt tinh, lấy ngôn lập thân, năng ngôn thiện biện, trong tối có sáng.**\n'
      + '**【核心论断】Người Cự Môn tọa mệnh khẩu tài xuất chúng, thiện biện đa nghi, một đời lấy khẩu thiệt làm nghề hoặc làm lụy. Cự Môn là ám diệu, chủ khẩu thiệt thị phi; nhưng hóa lộc hóa quyền thì chuyển cát, lấy khẩu tài mưu sinh giàu. Vị Tý Ngọ thủ mệnh tốt nhất — khẩu tài sắc, lấy ngôn ngữ lập thân. Hóa kỵ chủ khẩu thiệt thị phi liên tục, thậm chí kiện tụng — cần cẩn ngôn. Người Cự Môn tọa mệnh đa nghi nặng, giỏi quan sát ngôn sắc, hợp công việc điều tra nghiên cứu.**\n'
      + '**【命盘依据】Cự Môn ở cung Tý Ngọ miếu vượng, khẩu tài tốt nhất. Mệnh cung Cự Môn hóa lộc hóa quyền — lấy khẩu tài làm nghề đại cát; hóa kỵ cần phòng khẩu thiệt kiện tụng. Cự Môn thêm sát thì thị phi liên tục; thêm cát thì lấy ngôn thành nghiệp.**\n'
      + '**【经典出处】Cổ quyết:「Cự Môn là ám diệu, chủ khẩu thiệt thị phi; hóa lộc quyền thì chuyển thành lấy khẩu tài mưu sinh, chủ phú quý.」Nam Bắc Sơn Nhân chú:「Cự Môn thủ mệnh, gặp hóa lộc quyền, lấy khẩu thiệt làm nghề đại cát; hóa kỵ thì khẩu thiệt liên lụy, kiện tụng vướng thân, cần thận trọng ngôn ngữ.」**',
    personality: 'Năng ngôn thiện biện, tư lự chu mật, quan sát tinh tế. Người Cự Môn nhập Mệnh khẩu tài cực tốt, giỏi biểu đạt và thuyết phục. Tính đa nghi nhạy cảm, thích đào sâu sự thật. Có chính nghĩa cảm nhưng đôi khi quá thẳng làm mất lòng.',
    fuQi: 'Đa nghi đa lự, dễ nghĩ nhiều, giao tiếp là then chốt hôn nhân. Cự Môn nhập Cung Phu Thê: trong tình cảm thích phân tích và truy hỏi, dễ vì nghi ảnh hưởng quan hệ; cần chọn bạn đời kiên nhẫn và sẵn sàng giao tiếp.',
    caiBo: 'Kiếm tiền bằng khẩu tài và kỹ năng chuyên môn; hóa lộc sau tài vận khá tốt. Cự Môn nhập Cung Tài Bạch: lấy miệng làm nghề — luật sư, giáo viên, bán hàng nguồn tài rộng; hóa kỵ phòng tranh chấp tài chính.',
    jiE: 'Thuộc thủy, chú ý thận, tai, miệng. Đa tư đa lự dễ hại thân, nên học thư giãn giảm áp. Cự Môn hóa kỵ đặc biệt chú ý tiêu hóa và sức khỏe miệng.',
    guanLu: 'Hợp luật sư, giáo viên, bán hàng, MC, chuyên gia đàm phán; khẩu tài là năng lực cốt lõi. Cự Môn nhập Cung Quan Lộc: sự nghiệp thắng bằng nói và biểu đạt.',
    fuMu: 'Cha mẹ quản giáo nghiêm, ngôn ngữ nhiều chỉ điểm, giao tiếp cha mẹ–con nhiều. Cự Môn nhập Cung Phụ Mẫu: ít nhất một bên phụ mẫu giỏi lời hoặc thích dạy bảo.',
  },
  '天相': {
    mingGong: '**【一句话定调】Thiên Tướng là ấn thụ tinh, trung quy trung củ, phụ tá có phương, hành chính trưởng tài.**\n'
      + '**【核心论断】Người Thiên Tướng tọa mệnh trung quy trung củ, tính ôn hòa, hợp công chức hành chính hoặc việc phụ trợ. Thiên Tướng là ấn thụ tinh, phụ trách hành chính thứ vụ, giỏi phụ tá người khác thành nghiệp. Thích nhất Liêm Trinh kèm — thành Liêm Tướng cách, hóa hung thành cát, nắm đại quyền hành chính. Một mình tọa mệnh khá bình; cần cường tinh phối mới phát huy. Sợ nhất Phá Quân đồng cung — thành Hình Kỵ Kẹp Ấn cách, chủ hình khắc hung hiểm.**\n'
      + '**【命盘依据】Thiên Tướng ở cung Tý Ngọ miếu vượng. Mệnh cung Thiên Tướng phối Liêm Trinh ở Ngọ Tý tốt nhất — 「Liêm Tướng cách」, chủ nắm quyền bính. Thiên Tướng phối Phá Quân thành Hình Kỵ Kẹp Ấn, nhiều hung hiểm. Thiên Tướng phối Tử Vi cũng tốt — đế tinh phối ấn, quyền lực vững.**\n'
      + '**【经典出处】Cổ quyết:「Thiên Tướng là ấn thụ tinh, chủ hành chính thứ vụ; Liêm Tướng đồng cung, hóa hung thành cát, nắm đại quyền hành chính.」Nam Bắc Sơn Nhân chú:「Thiên Tướng thủ mệnh, trung quy trung củ, hợp công chức; được Liêm Trinh phối thành trụ cột quốc gia; Phá Quân đồng thủ thì hình khắc khó tránh.」**',
    personality: 'Ôn hòa chính trực, trung quy trung củ, có trách nhiệm. Người Thiên Tướng nhập Mệnh tính đôn hậu thật thà, tuân quy củ, làm việc nghiêm túc trách nhiệm. Có năng lực điều hòa, giỏi vai trò trung gian hoặc hòa giải. Không thích xung đột, cầu ổn định hòa hợp.',
    fuQi: 'Tình cảm ổn định, trung hậu thật thà, là bạn đời tốt. Thiên Tướng nhập Cung Phu Thê: trong hôn nhân coi trọng cam kết trách nhiệm, nhưng cần đối phương chủ động định hướng tình cảm.',
    caiBo: 'Tài vận bình ổn, dựa lương tích lũy, không hợp đầu tư mạo hiểm. Thiên Tướng nhập Cung Tài Bạch: quản lý kiểu thủ thành hợp nhất, không nên đầu cơ.',
    jiE: 'Thuộc thủy, chú ý thận, hệ bạch huyết. Thể chất trung bình, nên giữ thói quen sinh hoạt đều, chú ý phù thũng và hệ bài tiết.',
    guanLu: 'Hợp công chức, hành chính quản lý, thư ký, trợ lý; giỏi vai trò hỗ trợ phụ tá, cần cường tinh dẫn đường. Thiên Tướng nhập Cung Quan Lộc: lấy điều hòa quản lý làm dài.',
    fuMu: 'Cha mẹ giáo dục có phương, gia quy nghiêm, môi trường gia đình hòa hợp có trật tự. Thiên Tướng nhập Cung Phụ Mẫu: phụ mẫu người chính trực, coi trọng giáo dục phẩm cách.',
  },
  '天梁': {
    mingGong: '**【一句话定调】Thiên Lương là âm tí tinh, hộ vệ chúng sinh, vãn phúc sâu, đức cao vọng trọng.**\n'
      + '**【核心论断】Người Thiên Lương tọa mệnh có duyên trưởng bối; sớm niên nhiều gian nan, vãn niên hưởng thanh phúc. Thiên Lương là âm tinh, bảo vệ người khác, cũng đại diện y dược tôn giáo. Mệnh chủ tính vững trọng, có từ bi tâm, vui giúp người. Đồng cung Thái Dương tốt nhất — nhật nguyệt tịnh minh, quý nhân tí âm, một đời có quý nhân giúp, cuối được bình an. Thiên Lương sợ nhất hóa kỵ — đại diện trưởng bối hoặc bản thân sức khỏe có vấn đề. Thiên Lương cũng có tính thanh cao, không thích tục vụ, có theo đuổi tinh thần.**\n'
      + '**【命盘依据】Thiên Lương ở cung Tý Ngọ miếu vượng, phúc âm hậu nhất. Mệnh cung Thiên Lương gặp Thái Dương đồng cung — nhật nguyệt tịnh minh đại quý cách. Thiên Lương hóa kỵ cần phòng sức khỏe trưởng bối hoặc bản thân; Thiên Lương thêm sát thì phúc âm giảm.**\n'
      + '**【经典出处】Cổ quyết:「Thiên Lương là âm tinh, chủ tí âm bảo vệ; tọa mệnh có duyên trưởng bối, sớm niên chịu rèn, vãn niên hưởng thanh phúc.」Nam Bắc Sơn Nhân chú:「Thiên Lương thủ mệnh, cần gặp cát tinh mới phát đạt; gặp Thái Dương đồng cung, nhật nguyệt tịnh minh, chủ quý hiển, một đời nhiều quý nhân giúp.」**',
    personality: 'Vững trọng từ bi, có chính nghĩa cảm, vui thiện hảo thí. Người Thiên Lương nhập Mệnh tính chín chắn vững trọng, phong thái trưởng giả, bẩm sinh có dục vọng bảo vệ và trách nhiệm. Sớm niên trải nhiều rèn luyện thành tính kiên cường; vãn niên đức cao vọng trọng.',
    fuQi: 'Tình cảm thường với người chênh lệch tuổi lớn, hoặc duyên đến muộn. Thiên Lương nhập Cung Phu Thê: phối ngẫu có thể lớn tuổi hoặc tâm trí chín; cần kiên nhẫn chờ mới được lương duyên.',
    caiBo: 'Tài vận nhờ quý nhân giúp; sớm niên tài kém, vãn niên tài mới vững. Thiên Lương nhập Cung Tài Bạch: nên thủ không nên xung, không hợp đầu tư rủi ro cao.',
    jiE: 'Thuộc thổ, chú ý tỳ vị, xương. Cần coi trọng bảo dưỡng sức khỏe tuổi già, nên phòng sớm, khám xương và tiêu hóa định kỳ.',
    guanLu: 'Hợp y tế, tôn giáo, luật, công tác xã hội, từ thiện; thích giúp người, có tâm tí âm chúng sinh. Thiên Lương nhập Cung Quan Lộc: lấy phục vụ người khác làm cốt lõi sự nghiệp.',
    fuMu: 'Cha mẹ đức cao vọng trọng, gia đình có truyền thừa tốt, được tí âm từ trưởng bối. Thiên Lương nhập Cung Phụ Mẫu: song thân khỏe thọ, và có vai trò chỉ đạo quan trọng cho đời người.',
  },
  '七杀': {
    mingGong: '**【一句话定调】Thất Sát là tướng quân tinh, quả quyết cương mãnh, xung lực đủ, cô khắc tự lập.**\n'
      + '**【核心论断】Người Thất Sát tọa mệnh quả quyết cương mãnh, lực hành động cực mạnh, có khí phách và chấp hành như tướng quân. Nhưng tính cô khắc nặng, lục thân duyên mỏng, phải có phụ tinh hóa giải tính cô. Đồng cung Vũ Khúc là Tướng Tài cách — cực tốt, chủ đại phú đại quý. Thất Sát sợ nhất Trúc La Tam Hạn (Dương Đà Hỏa Linh đồng chiếu) — chủ đại hung, cần phòng tai nạn hình khắc. Thất Sát hóa lộc phản cát, có thể thành đại tướng chi tài, khai sáng cục diện.**\n'
      + '**【命盘依据】Thất Sát ở cung Dần Thân Tý Ngọ miếu vượng. Mệnh cung Thất Sát có cát tinh phụ tá thì đại quý; gặp Trúc La Tam Hạn (tứ sát đồng chiếu) chủ đại hung. Đồng cung Vũ Khúc ở Thìn Tuất là Tướng Tài cách, cực tốt. Thất Sát hóa lộc thì sát khí giảm, cát lợi tăng mạnh.**\n'
      + '**【经典出处】Cổ quyết:「Thất Sát là tướng quân tinh, quả quyết xung lực mạnh; thủ mệnh tính cô khắc nặng, lục thân duyên mỏng.」Nam Bắc Sơn Nhân chú:「Thất Sát thủ mệnh, tam hợp cát tụ thì đại quý; gặp Trúc La Tam Hạn (Dương Đà Hỏa Linh), chủ đại hung, phòng tai nạn, phòng hình khắc.」**',
    personality: 'Quả quyết cương mãnh, lực hành động mạnh, độc lập tự chủ. Người Thất Sát nhập Mệnh tính cương liệt, có dũng có mưu, làm việc lôi lệ phong hành, không dây dưa. Không thích bị ràng buộc, hợp làm việc độc lập. Tính mang cô tính; giao tiếp cần học nhu hòa.',
    fuQi: 'Tình cảm cô khắc, khó tìm bạn đời phù hợp. Thất Sát nhập Cung Phu Thê: trong tình cảm mạnh trực tiếp, cần đối tượng bao dung được cá tính; nên kết hôn muộn, sau hôn cần thông cảm lẫn nhau.',
    caiBo: 'Tài vận dao động lớn, có cơ hội đại phú cũng có đại khởi đại lạc. Thất Sát nhập Cung Tài Bạch: đồng cung Vũ Khúc thành Tướng Tài cách đại quý, có khuynh hướng mạo hiểm cầu tài.',
    jiE: 'Thuộc kim, chú ý phổi, đại tràng. Tính tình cấp táo dễ hại thân, nên học kiểm soát cảm xúc và tu thân dưỡng tính, phòng thương tổn bất ngờ.',
    guanLu: 'Hợp quân cảnh, khởi nghiệp, giao dịch tài chính, lĩnh vực một mình đảm đương; cần quyết đoán nhanh và khí phách. Thất Sát nhập Cung Quan Lộc: năng lực khai sáng mạnh.',
    fuMu: 'Duyên phụ mẫu mỏng; sớm niên ly gia độc lập hoặc quan hệ phụ mẫu khá sơ. Thất Sát nhập Cung Phụ Mẫu: trong song thân có người tính cương, cách quản giáo trực tiếp.',
  },
  '破军': {
    mingGong: '**【一句话定调】Phá Quân là tinh phá cũ lập mới, khai sáng cách tân, trước phá sau lập, cuối thành đại nghiệp.**\n'
      + '**【核心论断】Người Phá Quân tọa mệnh tinh thần khai sáng mạnh nhất, một đời nhiều sóng gió nhưng phá rồi mới lập. Phá Quân là tinh phá cũ lập mới nhất, cũng là một trong những tinh cô khắc nặng nhất. Lục thân duyên mỏng nhưng năng lực khai sáng cực mạnh, rất hợp cải cách và sáng tạo. Hóa lộc sau phá rồi lập, tài vận cuối chuyển tốt, vãn niên thành tựu. Người Phá Quân tọa mệnh một đời biến động lớn — sự nghiệp, tình cảm, chỗ ở đều có thể trải nhiều lần đổi thay; đổi thay chính là chủ đề đời sống.**\n'
      + '**【命盘依据】Phá Quân ở cung Dần Thân Tý miếu vượng. Mệnh cung Phá Quân hóa lộc sau cục diện tốt nhất — trước phá sau lập. Phá Quân thêm sát thì sóng gió tăng, nhưng nếu vượt qua thì thành tựu lớn hơn. Phá Quân đồng cung Tử Vi ở Thìn Tuất — đế tinh phối Phá Quân, cải cách có lực.**\n'
      + '**【经典出处】Cổ quyết:「Phá Quân là tinh phá cũ lập mới nhất, tọa mệnh cô khắc, lục thân duyên mỏng, nhưng năng lực khai sáng cực mạnh; hóa lộc sau phá rồi lập, có thể thành đại nghiệp.」Nam Bắc Sơn Nhân chú:「Phá Quân thủ mệnh, một đời nhiều sóng gió; hóa lộc thì phá tài rồi mới tái dựng, tài vận cuối chuyển tốt, chủ thành tựu vãn niên.」**',
    personality: 'Năng lực khai sáng mạnh, dám làm dám chịu, không sợ đổi thay. Người Phá Quân nhập Mệnh có tinh thần cách mạng, không thích một thành bất biến, luôn tìm đột phá và thay đổi. Tính quả đoán dũng cảm nhưng đôi khi quá xung động, ổn định thiếu. Trung niên sau tính dần chín chắn.',
    fuQi: 'Tình cảm nhiều sóng gió, ly hợp bất định, lục thân duyên mỏng. Phá Quân nhập Cung Phu Thê: trải nghiệm tình cảm nhiều biến đổi; cần chọn bạn đời độc lập và bao dung mạnh mới cùng trải thăng trầm đời người.',
    caiBo: 'Tài vận lên xuống lớn; hóa lộc sau tài vận chuyển tốt. Phá Quân nhập Cung Tài Bạch: thủ thành thì tài lùi, cần liên tục khai sáng cục mới mới tích tài — lấy biến cầu tài.',
    jiE: 'Thuộc thủy, chú ý thận, bàng quang, hệ sinh sản. Thể chất lên xuống lớn, nên giữ thói quen vận động đều, chú ý bảo dưỡng hệ bài tiết.',
    guanLu: 'Hợp sự nghiệp khai sáng, quân cảnh, cải cách, quản lý biến đổi; việc tiên phong không ngừng mở lĩnh vực mới. Phá Quân nhập Cung Quan Lộc: lấy sáng tạo và cải cách làm dài.',
    fuMu: 'Duyên phụ mẫu mỏng; sớm niên ly gia hoặc môi trường gia đình biến động lớn. Phá Quân nhập Cung Phụ Mẫu: trong gia tộc có thể có lịch sử đổi thay hoặc di cư.',
  },
};
