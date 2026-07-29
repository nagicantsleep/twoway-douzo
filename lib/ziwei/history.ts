import { useEffect, useState, useCallback } from 'react';
import type { BirthFormState } from '@/components/BirthForm';
import { localizePlaceName } from '@/lib/ziwei/cities-i18n';
import { localizeTerm } from '@/lib/ziwei/terms';

export function formatHistoryLabel(form: BirthFormState, locale: string): string {
  return [
    form.name,
    `${form.year}${localizeTerm('年', locale)}${form.month}${localizeTerm('月', locale)}${form.day}${localizeTerm('日', locale)}`,
    form.city ? localizePlaceName(form.city, locale) : form.province ? localizePlaceName(form.province, locale) : '',
    form.gender === 'male' ? localizeTerm('男', locale) : form.gender === 'female' ? localizeTerm('女', locale) : '',
  ].filter(Boolean).join(' · ');
}

const STORAGE_KEY = 'ziwei_history';
const MAX_ENTRIES = 10;

export interface HistoryEntry {
  id: string;
  label: string;
  form: BirthFormState;
  savedAt: number;
}

export function useHistory() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setHistory(JSON.parse(raw));
    } catch { /* localStorage 不可用时静默失败 */ }
  }, []);

  const save = useCallback((form: BirthFormState) => {
    const label = formatHistoryLabel(form, 'zh');

    const entry: HistoryEntry = {
      id: Date.now().toString(),
      label,
      form,
      savedAt: Date.now(),
    };

    setHistory(prev => {
      // 去重：相同出生年月日+性别+时辰视为同一条记录
      const deduped = prev.filter(e =>
        !(e.form.year === form.year &&
          e.form.month === form.month &&
          e.form.day === form.day &&
          e.form.gender === form.gender &&
          e.form.clockHour === form.clockHour &&
          e.form.clockMinute === form.clockMinute)
      );
      const updated = [entry, ...deduped].slice(0, MAX_ENTRIES);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); } catch {}
      return updated;
    });
  }, []);

  const remove = useCallback((id: string) => {
    setHistory(prev => {
      const updated = prev.filter(e => e.id !== id);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); } catch {}
      return updated;
    });
  }, []);

  return { history, save, remove };
}
