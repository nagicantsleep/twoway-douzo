# US-019: I18n AI prompts

**Lane**: high-risk
**Status**: implemented
**Initiative**: I02

## Scope

- `components/InsightPanel.tsx`:
  - `TOPIC_PROMPTS` (6 prompt dài CJK) → tách file
    `prompts.vi.ts` + `prompts.zh.ts`.
  - Inline `prompt` builders (palace + siHua) → dùng `localizeTerm`
    thay CJK hardcode.
  - Preamble: "Trả lời bằng tiếng Việt" khi locale=vi.
- `components/ChatPanel.tsx` heading/subtitle (đã i18n rồi, verify
  không còn hardcode).

High-risk vì AI behavior phụ thuộc quality prompt → cần manual test
trước merge.

## Gate
- Manual test: build chart, click 3 topic, verify response tiếng Việt
  đầy đủ (đúng cấu trúc 5 đoạn).
- Nếu Claude trả lời tiếng Trung: cần điều chỉnh preamble.

## Files
- `components/InsightPanel.tsx`
- `lib/insight/prompts.vi.ts` (new)
- `lib/insight/prompts.zh.ts` (new)
- `components/ChatPanel.tsx`

## Verify
- `/vi`: prompt gửi là tiếng Việt → response tiếng Việt.
- `/zh`: prompt giữ tiếng Trung → response tiếng Trung.
