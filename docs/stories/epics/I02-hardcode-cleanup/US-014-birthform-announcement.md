# US-014: I18n BirthForm + AnnouncementModal

**Lane**: normal
**Status**: planned
**Initiative**: I02

## Scope

- `components/BirthForm.tsx`: ~40 string CJK (labels, errors, summary,
  time displays, gender, button, hints) → `useTranslations('form')`
  (namespace `form` cần mở rộng thêm key).
- `components/AnnouncementModal.tsx`: ~30 string (title, body, dates,
  button) → namespace `home.announcementModal`.
- Comments tiếng Trung (non-functional, có thể để lại hoặc xóa).

## Files
- `components/BirthForm.tsx`
- `components/AnnouncementModal.tsx`
- `messages/{vi,zh}/form.json` (mở rộng)
- `messages/{vi,zh}/home.json` (tạo key modal)

## Verify
- `/vi`: form labels/errors/buttons tiếng Việt.
- `/zh`: form labels/errors/buttons tiếng Trung.
- Modal open/close check locale content.
