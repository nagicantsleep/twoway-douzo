/** Vietnamese AI topic prompts for InsightPanel */
export const TOPIC_PROMPTS_VI: Record<string, string> = {
  overview: `Hãy tạo tổng quan mệnh cách, xuất theo cấu trúc sau (trả lời bằng tiếng Việt):

**【Định tính mệnh cách】**
Một câu khái quát cách cục cốt lõi và khí chất mệnh chủ.

**【Giải chủ tinh】**
Đặc tính cốt lõi chủ tinh Mệnh cung, trích dẫn quan điểm Ni Hà Hạ.

**【Tam phương tứ chính】**
Phân tích liên động Tài / Quan / Thiên Di và cách cục tổng thể.

**【Đại hạn hiện tại】**
Hướng vận đại hạn hiện tại và việc đáng chú ý nhất.

**【Ưu thế và lưu ý】**
Ưu thế bẩm sinh cùng rủi ro / bài học cần chú ý.`,

  love: `Hãy phân tích sâu vận tình cảm hôn nhân, xuất theo cấu trúc sau (trả lời bằng tiếng Việt):

**【Cách cục tình cảm】**
Một câu định tính mệnh cách tình cảm.

**【Phân tích Phu Thê cung】**
Chủ tinh, tứ hóa Phu Thê cung và giải theo hệ thống Ni Hà Hạ.

**【Liên động tam phương】**
Ảnh hưởng các cung liên quan tới tình cảm.

**【Vận tình cảm đại hạn hiện tại】**
Xu hướng 10 năm và các mốc then chốt.

**【Gợi ý thực tế】**
Lời khuyên tình cảm cụ thể, khả thi.`,

  career: `Hãy phân tích sâu vận sự nghiệp, xuất theo cấu trúc sau (trả lời bằng tiếng Việt):

**【Cách cục sự nghiệp】**
Một câu định tính — nên làm thuê hay khởi nghiệp.

**【Phân tích Quan Lộc cung】**
Chủ tinh, tứ hóa Quan Lộc và phán đoán của Ni Sư.

**【Liên động Tài Bạch cung】**
Quan hệ tài vận – sự nghiệp, nguồn tài lộ.

**【Vận sự nghiệp đại hạn hiện tại】**
Xu hướng sự nghiệp 10 năm hiện tại.

**【Gợi ý thực tế】**
Hướng, ngành và chiến lược phù hợp.`,

  wealth: `Hãy phân tích sâu tài vận, xuất theo cấu trúc sau (trả lời bằng tiếng Việt):

**【Cách cục tài vận】**
Một câu định tính mô hình tài — chủ động hay bị động.

**【Phân tích Tài Bạch cung】**
Chủ tinh, tứ hóa, nguồn và dòng chảy tài sản.

**【Điền Trạch cung (tài khố)】**
Khả năng tích lũy và vận bất động sản.

**【Tài vận đại hạn hiện tại】**
Xu hướng tài và điểm cần lưu ý.

**【Gợi ý quản lý tài chính】**
Lời khuyên tài chính cụ thể.`,

  health: `Hãy phân tích vận sức khỏe, xuất theo cấu trúc sau (trả lời bằng tiếng Việt):

**【Chủ tinh Tật Ách cung】**
Tinh diệu Tật Ách và ý nghĩa sức khỏe.

**【Rủi ro chính】**
Kết hợp lý thuyết Tý Ngọ lưu chú của Ni Hà Hạ, phân tích ẩn họa và bộ vị cần chú ý.

**【Xu hướng sức khỏe đại hạn】**
Xu hướng hiện tại và giai đoạn then chốt.

**【Gợi ý phòng ngừa】**
Lưu ý cụ thể và hướng dưỡng sinh.`,

  personality: `Hãy phân tích sâu tính cách, xuất theo cấu trúc sau (trả lời bằng tiếng Việt):

**【Tính cách chủ tinh Mệnh cung】**
Đặc tính cốt lõi, trích dẫn lời Ni Sư.

**【Tổng hợp tính cách tam phương】**
Ảnh hưởng Tài / Quan / Thiên Di tới tính cách.

**【Mô thức quan hệ nhân tế】**
Cách tương tác và xử thế với người khác.

**【Ưu thế và bài học đời】**
Ưu thế trời cho và bài học cần đối diện.`,
};

export function buildPalacePromptVi(palaceName: string, role: string, starDesc: string): string {
  return `Hãy phân tích trọng điểm cung【${palaceName}】(chủ quản: ${role}), chủ tinh cung này là ${starDesc}. Xuất theo cấu trúc sau (trả lời bằng tiếng Việt):

**【Tổng luận ${palaceName}】**
Ý nghĩa của ${palaceName} trong mệnh bàn và phán đoán tổng thể cấu hình tinh diệu này.

**【Giải chi tiết chủ tinh】**
Đặc tính chủ tinh theo hệ thống Ni Hà Hạ.

**【Ảnh hưởng thực tế】**
Ảnh hưởng cụ thể tới lĩnh vực liên quan của mệnh chủ và gợi ý.`;
}

export function buildSiHuaPromptVi(
  viewLabel: string,
  starName: string,
  siHua: string,
  palaceName: string,
): string {
  return `Hãy phân tích【${viewLabel} tứ hóa】: ${starName} hóa ${siHua} rơi vào ${palaceName}. Xuất theo cấu trúc sau (trả lời bằng tiếng Việt):

**【Ý nghĩa hóa ${siHua}】**
Ý nghĩa cốt lõi trong hệ thống Ni Hà Hạ.

**【Ảnh hưởng cung rơi】**
Ảnh hưởng cụ thể khi rơi vào ${palaceName}.

**【Gợi ý ứng xử】**
Thái độ và hành động nên làm hiện tại.`;
}
