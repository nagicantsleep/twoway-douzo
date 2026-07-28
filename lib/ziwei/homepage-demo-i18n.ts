/**
 * Homepage demo star / sihua brief tooltips (Decision 0002 Option B).
 * Algorithm keys stay Chinese; UI picks locale via pickLocale.
 */
import { pickLocale, type LocaleText } from '@/lib/ziwei/famous';

type Brief = { attr: LocaleText; brief: LocaleText };

export const SIHUA_BRIEF: Record<string, Brief> = {
  化禄: {
    attr: { zh: '吉化·增益', vi: 'Cát hóa · tăng ích' },
    brief: {
      zh: '福星到宫，主财运与福气增益。所在宫位事物顺遂，能力增强，是命盘中最受欢迎的化星。',
      vi: 'Phúc tinh đến cung — chủ tài vận và phúc khí tăng. Việc ở cung đó thuận, năng lực tăng; hóa tinh được ưa nhất trên lá số.',
    },
  },
  化权: {
    attr: { zh: '吉化·权威', vi: 'Cát hóa · uy quyền' },
    brief: {
      zh: '权力星到宫，主掌控与领导力。所在宫位主强势与决断，喜入官禄宫与命宫，主事业上的实权。',
      vi: 'Quyền lực tinh đến cung — chủ kiểm soát và lãnh đạo. Cung đó mạnh và quyết đoán; thích nhập Quan Lộc và Mệnh — thực quyền sự nghiệp.',
    },
  },
  化科: {
    attr: { zh: '吉化·名誉', vi: 'Cát hóa · danh dự' },
    brief: {
      zh: '科名星到宫，主声誉与贵人缘。所在宫位主文名与考运，有贵人扶持，宜学术、考试与公开场合。',
      vi: 'Khoa danh tinh đến cung — chủ danh tiếng và duyên quý nhân. Cung đó chủ văn danh, khảo vận, có quý nhân; hợp học thuật, thi cử, nơi công cộng.',
    },
  },
  化忌: {
    attr: { zh: '凶化·阻碍', vi: 'Hung hóa · trở ngại' },
    brief: {
      zh: '劫数星到宫，主执念与阻碍。所在宫位需特别关注，该宫人生课题将成为重要考验。',
      vi: 'Kiếp số tinh đến cung — chủ chấp niệm và trở ngại. Cung đó cần đặc biệt chú ý; đề tài nhân sinh của cung sẽ là thử thách quan trọng.',
    },
  },
};

export const STAR_BRIEF: Record<string, Brief> = {
  紫微: {
    attr: { zh: '土·帝王星', vi: 'Thổ · Đế vương tinh' },
    brief: {
      zh: '天皇贵星，统御众星。坐命者有孤傲之气，主权威显达，天生具备领导气质，适合独当一面的领导岗位。',
      vi: 'Thiên hoàng quý tinh, thống ngự chúng tinh. Thủ Mệnh có khí cô ngạo, chủ uy quyền hiển đạt, bẩm sinh lãnh đạo; hợp vị trí một mình một cõi.',
    },
  },
  天机: {
    attr: { zh: '木·智慧星', vi: 'Mộc · Trí tuệ tinh' },
    brief: {
      zh: '益寿星，主智谋与变动。聪慧机灵，善于筹谋，心思细腻，宜从事策划、顾问、技术类工作。',
      vi: 'Ích thọ tinh — chủ trí mưu và biến động. Thông tuệ nhanh nhẹn, giỏi mưu kế, tâm tư tinh tế; hợp hoạch định, tư vấn, kỹ thuật.',
    },
  },
  太阳: {
    attr: { zh: '火·官禄主', vi: 'Hỏa · Quan Lộc chủ' },
    brief: {
      zh: '官禄主星，主声誉与名望。慷慨大度，重视公众形象，利官场与公职，男命力强，入庙时光明磊落。',
      vi: 'Quan Lộc chủ tinh — chủ danh tiếng. Khoáng đạt, coi trọng hình ảnh công chúng; lợi quan trường và công chức; nam mệnh lực mạnh, nhập miếu thì quang minh lỗi lạc.',
    },
  },
  武曲: {
    attr: { zh: '金·财帛主', vi: 'Kim · Tài Bạch chủ' },
    brief: {
      zh: '财帛主星，主财务与决断。意志坚定，行动果敢，适合财务、金融、军警类职业，孤克之星，利晚婚。',
      vi: 'Tài Bạch chủ tinh — chủ tài chính và quyết đoán. Ý chí vững, hành động quả cảm; hợp tài chính, quân cảnh; cô khắc tinh, lợi muộn hôn.',
    },
  },
  天同: {
    attr: { zh: '水·福星', vi: 'Thủy · Phúc tinh' },
    brief: {
      zh: '福德主星，主享乐与人缘。性情温和，人缘极好，注重生活品质，感情细腻，晚年运势佳。',
      vi: 'Phúc Đức chủ tinh — chủ hưởng lạc và nhân duyên. Tính ôn hòa, duyên tốt, chú trọng chất lượng sống, tình cảm tinh tế; vận muộn niên tốt.',
    },
  },
  廉贞: {
    attr: { zh: '火·才艺星', vi: 'Hỏa · Tài nghệ tinh' },
    brief: {
      zh: '次桃花星，主才艺与情欲。才华出众，感情丰富，适合艺术、政界，多才多艺但需防桃花是非。',
      vi: 'Thứ đào hoa tinh — chủ tài nghệ và tình dục. Tài hoa xuất chúng, tình cảm phong phú; hợp nghệ thuật, chính giới; đa tài nhưng phòng đào hoa thị phi.',
    },
  },
  天府: {
    attr: { zh: '土·财库星', vi: 'Thổ · Tài khố tinh' },
    brief: {
      zh: '南斗主星，主财库与积蓄。稳重保守，理财能力强，是命盘的稳定力量，适合管理财务与行政。',
      vi: 'Nam Đẩu chủ tinh — chủ tài khố và tích trữ. Trầm ổn bảo thủ, lý tài mạnh; lực ổn định của lá số; hợp quản lý tài chính và hành chính.',
    },
  },
  太阴: {
    attr: { zh: '水·田宅主', vi: 'Thủy · Điền Trạch chủ' },
    brief: {
      zh: '田宅主星，主财富与阴柔。细腻温柔，感受力强，女命尤佳，利不动产与积蓄，适合文艺或服务业。',
      vi: 'Điền Trạch chủ tinh — chủ tài phú và âm nhu. Tinh tế ôn nhu, cảm thụ mạnh; nữ mệnh càng tốt; lợi bất động sản và tích trữ; hợp văn nghệ hoặc dịch vụ.',
    },
  },
  贪狼: {
    attr: { zh: '木水·桃花', vi: 'Mộc Thủy · Đào hoa' },
    brief: {
      zh: '桃花星，主欲望与才艺。多才多艺，欲望旺盛，社交活跃，宜从事艺术、公关、商业，人缘极好。',
      vi: 'Đào hoa tinh — chủ dục vọng và tài nghệ. Đa tài, dục vọng mạnh, xã giao sôi nổi; hợp nghệ thuật, PR, thương mại; nhân duyên cực tốt.',
    },
  },
  巨门: {
    attr: { zh: '水·是非星', vi: 'Thủy · Thị phi tinh' },
    brief: {
      zh: '暗星，主口才与是非。口才出众，思辨能力强，适合律师、教育、媒体，注意口舌是非，以辩才立身。',
      vi: 'Ám tinh — chủ khẩu tài và thị phi. Khẩu tài xuất chúng, tư biện mạnh; hợp luật sư, giáo dục, truyền thông; chú ý khẩu thiệt; lấy biện tài lập thân.',
    },
  },
  天相: {
    attr: { zh: '水·印星', vi: 'Thủy · Ấn tinh' },
    brief: {
      zh: '印星，主辅佐与印绶。善于协调，重视礼节，正直守法，适合幕僚、行政、法律类工作，贵人运佳。',
      vi: 'Ấn tinh — chủ phụ tá và ấn thụ. Giỏi phối hợp, trọng lễ tiết, chính trực thủ pháp; hợp mạc liêu, hành chính, pháp luật; quý nhân vận tốt.',
    },
  },
  天梁: {
    attr: { zh: '土·荫星', vi: 'Thổ · Ấm tinh' },
    brief: {
      zh: '荫星，主老成与荫蔽。正直稳重，慈悲心强，老天爷会保佑，适合医疗、社会工作、宗教领域。',
      vi: 'Ấm tinh — chủ lão thành và ấm hộ. Chính trực trầm ổn, từ bi mạnh, được trời che chở; hợp y tế, công tác xã hội, tôn giáo.',
    },
  },
  七杀: {
    attr: { zh: '金火·将星', vi: 'Kim Hỏa · Tướng tinh' },
    brief: {
      zh: '将星，主刚烈与开创。性格刚毅，行动力强，勇于挑战，适合创业、军警、竞争性行业，逢凶化吉。',
      vi: 'Tướng tinh — chủ cương liệt và khai sáng. Tính cương nghị, hành động mạnh, dám thử thách; hợp khởi nghiệp, quân cảnh, ngành cạnh tranh; gặp hung hóa cát.',
    },
  },
  破军: {
    attr: { zh: '水·耗星', vi: 'Thủy · Hao tinh' },
    brief: {
      zh: '耗星，主变动与开拓。勇于突破，不惧改变，一生变动大但有魄力，适合开拓型工作，走别人没走过的路。',
      vi: 'Hao tinh — chủ biến động và khai thác. Dám đột phá, không sợ thay đổi; đời biến động lớn nhưng có khí phách; hợp công việc mở đường mới.',
    },
  },
};

export function getDemoBrief(
  name: string,
  locale: string,
): { attr: string; brief: string } | null {
  const entry = STAR_BRIEF[name] ?? SIHUA_BRIEF[name];
  if (!entry) return null;
  return {
    attr: pickLocale(entry.attr, locale),
    brief: pickLocale(entry.brief, locale),
  };
}

/** Algorithm keys for homepage chart-display demo (display via localizeTerm). */
export const DEMO_MAJOR_STARS = [
  '紫微', '天机', '太阳', '武曲', '天同', '廉贞', '天府',
  '太阴', '贪狼', '巨门', '天相', '天梁', '七杀', '破军',
] as const;

export const DEMO_ZIWEI_STARS = [
  '紫微', '天机', '太阳', '武曲', '天同', '廉贞',
] as const;

export const DEMO_TIANFU_STARS = [
  '天府', '太阴', '贪狼', '巨门', '天相', '天梁', '七杀', '破军',
] as const;

/** [full sihua label, short key for localizeTerm] */
export const DEMO_SIHUA = [
  ['化禄', '禄'],
  ['化权', '权'],
  ['化科', '科'],
  ['化忌', '忌'],
] as const;

/**
 * Pattern-recognition feature visual — dedicated strings (do not parse feature bullets).
 */
const PATTERN_DEMO: { name: LocaleText; desc: LocaleText; ok: boolean }[] = [
  {
    name: { zh: '杀破狼格', vi: 'Sát Phá Lang cách' },
    desc: { zh: '开创进取之命', vi: 'Mệnh khai sáng, tiến thủ' },
    ok: true,
  },
  {
    name: { zh: '廉相格', vi: 'Liêm Tướng cách' },
    desc: { zh: '行政印绶之格', vi: 'Cách ấn thụ hành chính' },
    ok: true,
  },
  {
    name: { zh: '化忌入命', vi: 'Hóa Kỵ nhập Mệnh' },
    desc: { zh: '需关注心理课题', vi: 'Cần chú ý đề tài tâm lý' },
    ok: false,
  },
];

export function getPatternDemo(
  locale: string,
): { name: string; desc: string; ok: boolean }[] {
  return PATTERN_DEMO.map((p) => ({
    name: pickLocale(p.name, locale),
    desc: pickLocale(p.desc, locale),
    ok: p.ok,
  }));
}
