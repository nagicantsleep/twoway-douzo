export const meta = {
  name: 'finish-i18n-refactors',
  description: 'Refactor AnnouncementModal, BirthForm, chart page, and message files to use next-intl',
  phases: [
    { title: 'Update messages', detail: 'Add missing keys to message JSON files' },
    { title: 'Refactor components', detail: 'Replace hardcoded Chinese with t() calls' },
  ],
}

phase('Update messages')
log('Adding missing keys to message files...')

await agent({
  label: 'Update vi and zh message files',
  phase: 'Update messages',
  prompt: 'You need to update several message JSON files for the T\\u1eed Vi next-intl i18n app.\n\n' +
    '### 1. messages/vi/form.json — Add "back" key at root level:\n' +
    '  "back": "Quay l\\u1ea1i"\n\n' +
    '### 2. messages/zh/form.json — Complete rewrite to match vi structure.\n' +
    '  Here is the vi structure — create zh with Chinese text for all keys:\n' +
    '  Keys to include with Chinese values:\n' +
    '  - pageTitle: "\\u8d77\\u7d2b\\u5fae\\u547d\\u76d8"\n' +
    '  - subtitle: "\\u8F93\\u5165\\u51FA\\u751F\\u5E74\\u6708\\u65E5\\u65F6 \\u00B7 \\u4EE5\\u516C\\u5386\\u4E3A\\u51C6"\n' +
    '  - titleAccent: "\\u2014\\u2014 \\u8F93\\u5165\\u751F\\u8FB0\\u516B\\u5B57 \\u2014\\u2014"\n' +
    '  - back: "\\u8FD4\\u56DE"\n' +
    '  - loading.generating: "\\u7D2B\\u5FAE\\u8D77\\u76D8\\u4E2D\\u2026"\n' +
    '  - loading.submit: "\\u7ACB\\u5373\\u8D77\\u76D8 \\u00B7 \\u89E3\\u547D\\u8FD0\\u5BC6\\u7801"\n' +
    '  - error.generateFailed: "\\u547D\\u76D8\\u751F\\u6210\\u5931\\u8D25"\n' +
    '  - error.retry: "\\u751F\\u6210\\u5931\\u8D25\\uFF0C\\u8BF7\\u91CD\\u8BD5"\n' +
    '  - reset: "\\u91CD\\u65B0\\u8D77\\u76D8"\n' +
    '  - history.title: "\\u5386\\u53F2\\u547D\\u76D8"\n' +
    '  - calendar.solar: "\\u516C\\u5386"\n' +
    '  - calendar.lunar: "\\u519C\\u5386"\n' +
    '  - labels: year "\\u5E74", month "\\u6708", day "\\u65E5", hour "\\u65F6", minute "\\u5206", yearShort "\\u5E74", monthShort "\\u6708", dayShort "\\u65E5", hourSuffix "\\u65F6"\n' +
    '  - mingShen: ming "\\u547D", shen "\\u8EAB", mingGong "\\u547D\\u5BAB", shenGong "\\u8EAB\\u5BAB"\n' +
    '  - summary.section: "\\u4E94\\u884C\\u5C40 \\u00B7 \\u5927\\u9650\\u5F53\\u524D"\n' +
    '  - summary.wuxingJu: "\\u4E94\\u884C\\u5C40"\n' +
    '  - summary.unknownHour: "\\u65F6\\u8FB0\\u4E0D\\u8BE6"\n' +
    '  - field.name: "\\u59D3\\u540D(\\u53EF\\u9009)"\n' +
    '  - field.namePlaceholder: "\\u8BF7\\u8F93\\u5165\\u59D3\\u540D"\n' +
    '  - field.birthDate: "\\u51FA\\u751F\\u65E5\\u671F(\\u516C\\u5386)"\n' +
    '  - field.birthPlace: "\\u51FA\\u751F\\u5730\\u70B9(\\u7528\\u4E8E\\u771F\\u592A\\u9633\\u65F6\\u6821\\u6B63)"\n' +
    '  - field.province: "\\u7701\\u4EFD/\\u76F4\\u8F96\\u5E02"\n' +
    '  - field.city: "\\u57CE\\u5E02"\n' +
    '  - field.selectProvinceFirst: "\\u5148\\u9009\\u7701\\u4EFD"\n' +
    '  - field.selectCity: "\\u9009\\u62E9\\u57CE\\u5E02"\n' +
    '  - field.birthTime: "\\u51FA\\u751F\\u65F6\\u95F4(\\u5317\\u4EAC\\u65F6\\u95F4)"\n' +
    '  - field.trueSolar: "\\u771F\\u592A\\u9633\\u65F6 \\u2192 {hourName} ({range})"\n' +
    '  - field.unknownTime: "\\u4E0D\\u77E5\\u9053\\u51FA\\u751F\\u65F6\\u95F4\\uFF0C\\u4EE5\\u5B50\\u65F6(23:00-01:00)\\u8D77\\u76D8"\n' +
    '  - field.gender: "\\u6027\\u522B"\n' +
    '  - field.male: "\\u7537"\n' +
    '  - field.female: "\\u5973"\n' +
    '  - field.locationInfo: "{city} \\u00B7 \\u7ECF\\u5EA6 {longitude}\\u00B0E \\u00B7 \\u65F6\\u5DEE {offset} \\u5206\\u949F"\n' +
    '  - field.locationHint: "* \\u502A\\u6D77\\u590F\\u6279\\u547D\\u7528\\u771F\\u592A\\u9633\\u65F6\\uFF0C\\u5EFA\\u8BAE\\u586B\\u5199\\u51FA\\u751F\\u5730\\u4EE5\\u81EA\\u52A8\\u6821\\u6B63\\u65F6\\u8FB0"\n' +
    '  - errorMessages: selectYear "\\u8BF7\\u9009\\u62E9\\u51FA\\u751F\\u5E74\\u4EFD", yearRange "\\u5E74\\u4EFD\\u8303\\u56F4: 1900-2026", selectMonth "\\u8BF7\\u9009\\u62E9\\u6708\\u4EFD", selectDay "\\u8BF7\\u9009\\u62E9\\u65E5\\u671F", invalidDay "{month} \\u6708\\u6CA1\\u6709 {day} \\u65E5"\n' +
    '  - submit: "\\u7ACB\\u5373\\u8D77\\u76D8 \\u00B7 \\u89E3\\u547D\\u8FD0\\u5BC6\\u7801"\n' +
    '  - submitting: "\\u7D2B\\u5FAE\\u8D77\\u76D8\\u4E2D\\u2026"\n' +
    '  - validation: same structure and values as errorMessages\n\n' +
    '### 3. messages/vi/home.json — Add "famousCharts" section at root level (after "scrollIntro"):\n' +
    '  "famousCharts": {\n' +
    '    "tag": "Famous Charts",\n' +
    '    "title": "Danh nh\\u00e2n m\\u1ec7nh b\\u00e0n kh\\u1ed1",\n' +
    '    "description": "T\\u1ed5ng h\\u1ee3p m\\u1ec7nh b\\u00e0n danh nh\\u00e2n b\\u1ed1n l\\u0129nh v\\u1ef1c: Kinh doanh, V\\u0103n ngh\\u1ec7, C\\u00f4ng ngh\\u1ec7, Th\\u1ec3 thao, k\\u1ebft h\\u1ee3p h\\u1ec7 th\\u1ed1ng Ni H\\u00e0 H\\u1ea1 gi\\u1ea3i \\u0111\\u1ecdc c\\u00e1ch c\\u1ee5c m\\u1ec7nh b\\u00e0n.",\n' +
    '    "categories": {\n' +
    '      "\\u5546\\u4E1A": "K\\u1ef3 t\\u00edch kinh doanh",\n' +
    '      "\\u6587\\u827A": "Danh gia v\\u0103n ngh\\u1ec7",\n' +
    '      "\\u79D1\\u6280": "Tinh anh c\\u00f4ng ngh\\u1ec7",\n' +
    '      "\\u4F53\\u80B2": "Minh tinh th\\u1ec3 thao",\n' +
    '      "\\u5386\\u53F2": "Nh\\u00e2n v\\u1eadt l\\u1ecbch s\\u1eed"\n' +
    '    }\n' +
    '  }\n\n' +
    '### 4. messages/zh/home.json — Add "famousCharts" section at root level (after "scrollIntro"):\n' +
    '  "famousCharts": {\n' +
    '    "tag": "Famous Charts",\n' +
    '    "title": "\\u540D\\u4EBA\\u547D\\u76D8\\u5E93",\n' +
    '    "description": "\\u6536\\u5F55\\u5546\\u4E1A\\u3001\\u6587\\u827A\\u3001\\u79D1\\u6280\\u3001\\u4F53\\u80B2\\u56DB\\u5927\\u9886\\u57DF\\u540D\\u4EBA\\u547D\\u76D8\\uFF0C\\u7ED3\\u5408\\u502A\\u6D77\\u590F\\u4F53\\u7CFB\\u89E3\\u8BFB\\u5176\\u547D\\u683C\\u4EAE\\u70B9\\u3002",\n' +
    '    "categories": {\n' +
    '      "\\u5546\\u4E1A": "\\u5546\\u4E1A\\u4F20\\u5947",\n' +
    '      "\\u6587\\u827A": "\\u6587\\u827A\\u540D\\u5BB6",\n' +
    '      "\\u79D1\\u6280": "\\u79D1\\u6280\\u7CBE\\u82F1",\n' +
    '      "\\u4F53\\u80B2": "\\u4F53\\u80B2\\u660E\\u661F",\n' +
    '      "\\u5386\\u53F2": "\\u5386\\u53F2\\u4EBA\\u7269"\n' +
    '    }\n' +
    '  }\n\n' +
    'IMPORTANT: Read each file first, then write the COMPLETE updated file. Preserve all existing keys. Output each file\\\'s full path and content.',
})

phase('Refactor components')
log('Refactoring AnnouncementModal...')

await agent({
  label: 'Refactor AnnouncementModal',
  phase: 'Refactor components',
  prompt: 'Refactor E:\\Workspaces\\twoway-douzo\\components\\AnnouncementModal.tsx to use next-intl useTranslations for all hardcoded text.\n\n' +
    'Read the file first. The file already has:\n' +
    '- "use client"\n' +
    '- import { useTranslations } from "next-intl"\n' +
    '- "announcement" namespace is already in i18n/request.ts NAMESPACES\n' +
    '- messages/vi/announcement.json and messages/zh/announcement.json already exist with keys: title, letterLabel, bannerLabel, date, features, closeAria, ackBtn, p1-p7, quote, signoff\n\n' +
    'Tasks:\n' +
    '1. Add "const t = useTranslations(\\'announcement\\');" after the component opening line\n' +
    '2. Replace ALL hardcoded Chinese text strings with {t(\\'keyName\\')} calls:\n' +
    '   - "A LETTER TO USERS" → {t(\\'letterLabel\\')}\n' +
    '   - "致正在使用这个平台的你" → {t(\\'title\\')}\n' +
    '   - aria-label="关闭" → aria-label={t(\\'closeAria\\')}\n' +
    '   - "LIMITED TIME · 限时回馈" → {t(\\'bannerLabel\\')}\n' +
    '   - "5 月 1 日 — 5 月 8 日" → {t(\\'date\\')}\n' +
    '   - "平台全部功能 + AI 提问 全部免费开放" → use dangerouslySetInnerHTML with t.raw(\\'features\\')\n' +
    '   - All <p> body text: p1→t(\\'p1\\'), p2→t(\\'p2\\'), etc.\n' +
    '   - The quote text: {t(\\'quote\\')}\n' +
    '   - The p6 strong text: use dangerouslySetInnerHTML with t.raw(\\'p6\\')\n' +
    '   - "——谢谢大家 🙏" → {t(\\'signoff\\')}\n' +
    '   - "我知道了" → {t(\\'ackBtn\\')}\n' +
    '3. For the body section, the <p> tags currently have hardcoded content. Replace each <p> content with {t(\\'p1\\')} etc. For the quote (a styled <p> with border-left), replace its content with {t(\\'quote\\')}. For the signoff <p> at the bottom, use {t(\\'signoff\\')}.\n' +
    '4. For the banner text with <strong> tags (p6), use: dangerouslySetInnerHTML={{ __html: t.raw(\\'p6\\') }} instead of children.\n\n' +
    'IMPORTANT: Output the COMPLETE updated file. Keep ALL styles, animations, structure unchanged. Only replace the text/label strings.',
})

log('Refactoring chart page...')

await agent({
  label: 'Fix chart page remaining hardcoded strings',
  phase: 'Refactor components',
  prompt: 'Fix 2 remaining hardcoded Chinese strings in E:\\Workspaces\\twoway-douzo\\app\\[locale]\\chart\\page.tsx.\n\n' +
    'Read the file first. It already has "const t = useTranslations(\\'form\\');" on line 20.\n\n' +
    'Two strings to replace:\n' +
    '1. Line ~221: the heading text "历史命盘" inside a <span> — replace with {t(\\'history.title\\')}\n' +
    '2. Line ~324: the button text "重新起盘" inside a <button> — replace with {t(\\'reset\\')}\n\n' +
    'IMPORTANT: Output the COMPLETE updated file. Only change those two lines.',
})

log('Refactoring BirthForm...')

await agent({
  label: 'Refactor BirthForm to useTranslations',
  phase: 'Refactor components',
  prompt: 'Refactor E:\\Workspaces\\twoway-douzo\\components\\BirthForm.tsx to use next-intl useTranslations for ALL hardcoded Chinese strings (about 40 strings).\n\n' +
    'The "form" namespace is already in i18n/request.ts NAMESPACES. Both vi/form.json and zh/form.json already exist with the needed keys.\n\n' +
    'Tasks:\n' +
    '1. Add import: import { useTranslations } from "next-intl";\n' +
    '2. Add "const t = useTranslations(\\'form\\');" right after the component opening\n' +
    '3. Replace ALL these hardcoded Chinese strings with t() calls:\n\n' +
    '=== Header area ===\n' +
    '- h3 text "── 输入生辰八字 ──" → {t(\\'titleAccent\\')}\n\n' +
    '=== Name field ===\n' +
    '- label "姓名（可选）" → {t(\\'field.name\\')}\n' +
    '- input placeholder "请输入姓名" → {t(\\'field.namePlaceholder\\')}\n\n' +
    '=== Date field ===\n' +
    '- label "出生日期（公历）" → {t(\\'field.birthDate\\')}\n' +
    '- select option "年份" → {t(\\'labels.year\\')}\n' +
    '- select option "月份" → {t(\\'labels.month\\')}\n' +
    '- select option "日期" → {t(\\'labels.day\\')}\n' +
    '- option text for year: \\`String(yr) + \\' \\' + t(\\'labels.year\\')\\` instead of just \\`yr\\`\n' +
    '- option text for month: \\`String(mo) + \\' \\' + t(\\'labels.month\\')\\`  instead of \\`mo + \\" 月\\"\\`\n' +
    '- option text for day: \\`String(dy) + \\' \\' + t(\\'labels.day\\')\\`  instead of \\`dy + \\" 日\\"\\`\n\n' +
    '=== Location field ===\n' +
    '- label "出生地点（用于真太阳时校正）" → {t(\\'field.birthPlace\\')}\n' +
    '- select default "省份 / 直辖市" → {t(\\'field.province\\')}\n' +
    '- select default "城市" → {t(\\'field.city\\')}\n' +
    '- select disabled placeholder "先选省份" → {t(\\'field.selectProvinceFirst\\')}\n' +
    '- location info text: use t(\\'field.locationInfo\\', {city: ..., longitude: ..., offset: ...}) for the text like "{city} · 经度 {long}°E · 时差 {offset} 分钟"\n' +
    '- "（请选择城市）" fallback for city → {t(\\'field.selectCity\\')}\n' +
    '- hint text → {t(\\'field.locationHint\\')}\n\n' +
    '=== Time field ===\n' +
    '- label "出生时间（北京时间）" → {t(\\'field.birthTime\\')}\n' +
    '- hour option: \\`String(h).padStart(2, \\'0\\') + \\' \\' + t(\\'labels.hour\\')\\`\n' +
    '- minute option: \\`String(min).padStart(2, \\'0\\') + \\' \\' + t(\\'labels.minute\\')\\`\n' +
    '- "真太阳时 → " text → as part of a styled element, can hardcode or use t(\\'field.trueSolar\\') with params\n' +
    '- checkbox label "不知道出生时间，以子时（23:00–01:00）起盘" → {t(\\'field.unknownTime\\')}\n\n' +
    '=== Gender field ===\n' +
    '- label "性别" → {t(\\'field.gender\\')}\n' +
    '- male button: "♂ 男" → {"♂ " + t(\\'field.male\\')} (JSX expression)\n' +
    '- female button: "♀ 女" → {"♀ " + t(\\'field.female\\')}\n\n' +
    '=== Summary chip ===\n' +
    '- summaryText building: replace year/month/day labels: \\`\\${y} \\${t(\\'labels.year\\')}\\${m} \\${t(\\'labels.month\\')}\\${d} \\${t(\\'labels.day\\')}\\`\n' +
    '- gender in summary: form.gender === "male" ? t(\\'field.male\\') : t(\\'field.female\\')\n' +
    '- "时辰不详" → {t(\\'summary.unknownHour\\')}\n\n' +
    '=== Validation errors ===\n' +
    '- errors.year (two variants) → t(\\'errorMessages.selectYear\\') and t(\\'errorMessages.yearRange\\')\n' +
    '- errors.month → t(\\'errorMessages.selectMonth\\')\n' +
    '- errors.day (two variants) → t(\\'errorMessages.selectDay\\') and t(\\'errorMessages.invalidDay\\', {month: m, day: d})\n\n' +
    '=== Submit button ===\n' +
    '- Submit text "立即起盘 · 解命运密码" → {t(\\'submit\\')}\n' +
    '- Loading text "紫微起盘中…" → {t(\\'submitting\\')}\n\n' +
    'IMPORTANT: Output the COMPLETE updated file content. Keep ALL styling variables, logic, animations unchanged. Only replace the hardcoded string literals.',
})
