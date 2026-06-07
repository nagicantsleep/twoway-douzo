'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { STEMS, SI_HUA_TABLE } from '@/lib/ziwei/constants';
import type { ZiweiChart } from '@/lib/ziwei/types';
import TimeNav, { type TimeView, getYearStemIndex, buildSiHuaOverlay } from '@/components/TimeNav';

export type { TimeView };

interface TopBarProps {
  chart: ZiweiChart;
  view: TimeView;
  liunianYear: number;
  liuyueMonth: number;
  onViewChange: (view: TimeView) => void;
  onYearChange: (year: number) => void;
  onMonthChange: (month: number) => void;
  onShare?: () => void;
  onExport?: () => void;
  copied?: boolean;
}

const SIHUA_COLORS: Record<string, string> = {
  禄: '#4ade80',
  权: '#60a5fa',
  科: '#facc15',
  忌: '#f87171',
};

export default function TopBar({
  chart,
  view,
  liunianYear,
  liuyueMonth,
  onViewChange,
  onYearChange,
  onMonthChange,
  onShare,
  onExport,
  copied = false,
}: TopBarProps) {
  const router = useRouter();
  const currentDx = chart.daXians[chart.currentDaXianIndex];

  const getOverlayInfo = (): { stemName: string; overlay: Record<string, string> } | null => {
    if (view === 'mingpan') return null;

    if (view === 'daxian' && currentDx) {
      const dxPalace = chart.palaces.find(p => p.branch === currentDx.palaceBranch);
      if (!dxPalace) return null;
      const stemIndex = dxPalace.stem;
      return {
        stemName: STEMS[stemIndex],
        overlay: buildSiHuaOverlay(stemIndex),
      };
    }

    if (view === 'liunian') {
      const stemIndex = getYearStemIndex(liunianYear);
      return {
        stemName: STEMS[stemIndex],
        overlay: buildSiHuaOverlay(stemIndex),
      };
    }

    return null;
  };

  const overlayInfo = getOverlayInfo();

  return (
    <div
      className="sticky top-0 z-40"
      style={{
        background: 'color-mix(in srgb, var(--bg-0) 92%, transparent)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--bdr)',
      }}
    >
      <div
        className="flex items-center gap-3"
        style={{ padding: '0 20px', height: '52px' }}
      >
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-1 text-[13px] cursor-pointer bg-transparent border-none"
          style={{ color: 'var(--tx-3)', transition: 'color 0.15s', padding: '4px 0' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--tx-1)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--tx-3)'; }}
        >
          <span style={{ fontSize: '16px' }}>‹</span>
          <span>返回</span>
        </button>

        <div style={{ width: '1px', height: '20px', background: 'var(--bdr-med)' }} />

        <span
          className="text-[12px] tracking-[0.2em]"
          style={{ color: 'var(--ac)' }}
        >
          紫微命盘
        </span>

        <div className="flex-1" />

        <div className="flex items-center gap-1.5">
          {onShare && (
            <ActionButton onClick={onShare} label="分享" />
          )}
          {onExport && (
            <ActionButton onClick={onExport} label="打印" />
          )}
        </div>
      </div>

      <div style={{ padding: '8px 20px 12px' }}>
        <TimeNav
          chart={chart}
          view={view}
          liunianYear={liunianYear}
          onViewChange={onViewChange}
          onYearChange={onYearChange}
        />
      </div>

      {view === 'liunian' && (
        <div
          className="flex items-center justify-center gap-2"
          style={{ padding: '0 20px 10px' }}
        >
          <span className="text-[10px]" style={{ color: 'var(--t-faint)' }}>流月</span>
          <button
            onClick={() => onMonthChange(((liuyueMonth - 2 + 12) % 12) + 1)}
            className="text-[10px] w-5 h-5 flex items-center justify-center rounded cursor-pointer bg-transparent border-none"
            style={{ color: 'var(--t-faint)' }}
          >
            ‹
          </button>
          <span
            className="text-[11px] font-mono min-w-[32px] text-center"
            style={{ color: 'var(--t-gold)' }}
          >
            {liuyueMonth}月
          </span>
          <button
            onClick={() => onMonthChange((liuyueMonth % 12) + 1)}
            className="text-[10px] w-5 h-5 flex items-center justify-center rounded cursor-pointer bg-transparent border-none"
            style={{ color: 'var(--t-faint)' }}
          >
            ›
          </button>
        </div>
      )}

      {copied && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute right-5 top-12 text-[10px] px-2 py-1 rounded-md"
          style={{
            background: 'rgba(74,222,128,0.15)',
            color: '#4ade80',
            border: '1px solid rgba(74,222,128,0.3)',
          }}
        >
          ✓ 已复制
        </motion.div>
      )}
    </div>
  );
}

function ActionButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className="text-[11px] px-3 py-1 rounded-full cursor-pointer"
      style={{
        background: 'rgba(212,168,67,0.08)',
        color: 'var(--ac)',
        border: '1px solid rgba(212,168,67,0.25)',
        transition: 'background 0.15s',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(212,168,67,0.16)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(212,168,67,0.08)'; }}
    >
      {label}
    </button>
  );
}
