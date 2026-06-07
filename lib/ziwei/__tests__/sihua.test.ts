import { describe, it, expect } from 'vitest';
import {
  getSiHuaByStem,
  getYearStemIndex,
  getYearBranchIndex,
} from '@/lib/ziwei/sihua';
import { SI_HUA_TABLE, STEMS, BRANCHES } from '@/lib/ziwei/constants';

describe('lib/ziwei/sihua — getYearStemIndex', () => {
  it('returns correct stem index for known years', () => {
    expect(getYearStemIndex(2024)).toBe(0); // 甲
    expect(getYearStemIndex(2025)).toBe(1); // 乙
    expect(getYearStemIndex(1984)).toBe(0); // 甲
    expect(getYearStemIndex(2000)).toBe(6); // 庚
  });

  it('wraps around 10-year cycle for any year', () => {
    for (let y = 1900; y < 2100; y += 1) {
      const idx = getYearStemIndex(y);
      expect(idx).toBeGreaterThanOrEqual(0);
      expect(idx).toBeLessThan(10);
    }
  });
});

describe('lib/ziwei/sihua — getYearBranchIndex', () => {
  it('returns correct branch index for known years', () => {
    expect(getYearBranchIndex(2024)).toBe(4); // 辰
    expect(getYearBranchIndex(2025)).toBe(5); // 巳
    expect(getYearBranchIndex(2016)).toBe(8); // 申
  });

  it('wraps around 12-year cycle for any year', () => {
    for (let y = 1900; y < 2100; y += 1) {
      const idx = getYearBranchIndex(y);
      expect(idx).toBeGreaterThanOrEqual(0);
      expect(idx).toBeLessThan(12);
    }
  });
});

describe('lib/ziwei/sihua — getSiHuaByStem', () => {
  it('returns four distinct star names for valid stems', () => {
    for (let s = 0; s < 10; s += 1) {
      const result = getSiHuaByStem(s);
      const values = [result.禄, result.权, result.科, result.忌];
      expect(values).toHaveLength(4);
      expect(new Set(values).size).toBe(4);
      values.forEach(v => expect(typeof v).toBe('string'));
      values.forEach(v => expect(v.length).toBeGreaterThan(0));
    }
  });

  it('matches SI_HUA_TABLE[0] for stem 0 (甲)', () => {
    expect(getSiHuaByStem(0)).toEqual({
      禄: '廉贞',
      权: '破军',
      科: '武曲',
      忌: '太阳',
    });
  });

  it('returns empty strings for out-of-range stem', () => {
    expect(getSiHuaByStem(99)).toEqual({ 禄: '', 权: '', 科: '', 忌: '' });
    expect(getSiHuaByStem(-1)).toEqual({ 禄: '', 权: '', 科: '', 忌: '' });
  });
});

describe('lib/ziwei/constants — data integrity', () => {
  it('STEMS has 10 Heavenly Stems', () => {
    expect(STEMS).toHaveLength(10);
    expect(STEMS[0]).toBe('甲');
    expect(STEMS[9]).toBe('癸');
  });

  it('BRANCHES has 12 Earthly Branches', () => {
    expect(BRANCHES).toHaveLength(12);
    expect(BRANCHES[0]).toBe('子');
    expect(BRANCHES[11]).toBe('亥');
  });

  it('SI_HUA_TABLE has one row per stem with four star names', () => {
    expect(Object.keys(SI_HUA_TABLE)).toHaveLength(10);
    for (let s = 0; s < 10; s += 1) {
      const row = SI_HUA_TABLE[s];
      expect(row).toBeDefined();
      expect(row).toHaveLength(4);
      row.forEach(name => expect(typeof name).toBe('string'));
    }
  });
});
