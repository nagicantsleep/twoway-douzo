'use client';
import { motion, AnimatePresence } from 'framer-motion';
import type { Star } from '@/lib/ziwei/types';
import { STAR_DESCRIPTIONS } from '@/lib/ziwei/constants';
import { localizeTerm } from '@/lib/ziwei/terms';
import { getStarDetail } from '@/lib/ziwei/star-detail';
import { useLocale, useTranslations } from 'next-intl';

interface StarDetailPanelProps {
  star: Star | null;
  palaceName?: string;
  onClose: () => void;
}

const LUCKY_STAR_KEYS: Record<string, string> = {
  '文昌': 'wenchang', '文曲': 'wenqu', '左辅': 'zuofu', '右弼': 'youbi',
  '天魁': 'tiankui', '天钺': 'tianyue', '禄存': 'lucun', '天马': 'tianma',
};
const SHA_STAR_KEYS: Record<string, string> = {
  '地空': 'dikong', '地劫': 'dijie', '火星': 'huoxing', '铃星': 'lingxing',
  '擎羊': 'qingyang', '陀罗': 'tuoluo',
};

const levelConfig = {
  major: { label: '主星', color: 'text-amber-400 border-amber-500/30 bg-amber-500/10' },
  lucky: { label: '吉星', color: 'text-sky-400 border-sky-500/30 bg-sky-500/10' },
  sha:   { label: '煞星', color: 'text-red-400 border-red-500/30 bg-red-500/10' },
  minor: { label: '杂星', color: 'text-slate-400 border-slate-500/25 bg-slate-500/10' },
};

const siHuaColors: Record<string, string> = {
  '禄': 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  '权': 'text-blue-400 bg-blue-500/10 border-blue-500/30',
  '科': 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
  '忌': 'text-red-400 bg-red-500/10 border-red-500/30',
};

export default function StarDetailPanel({ star, palaceName, onClose }: StarDetailPanelProps) {
  const locale = useLocale();
  const t = useTranslations('star-detail');
  const desc = star ? STAR_DESCRIPTIONS[star.name] : null;
  const detail = star ? getStarDetail(star.name, locale) : null;
  const typeConfig = star ? levelConfig[star.type] : null;

  return (
    <AnimatePresence>
      {star && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.2 }}
          className="card-glass rounded-xl overflow-hidden"
        >
          {/* 标题栏 */}
          <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid var(--t-border)' }}>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold" style={{ color: 'var(--t-gold)' }}>{localizeTerm(star.name, locale)}</span>
              {typeConfig && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full border ${typeConfig.color}`}>
                  {localizeTerm(typeConfig.label, locale)}
                </span>
              )}
              {star.siHua && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full border font-medium ${siHuaColors[star.siHua] || ''}`}>
                  {localizeTerm('化', locale)}{localizeTerm(star.siHua, locale)}
                </span>
              )}
            </div>
            <button onClick={onClose} className="transition-colors text-lg leading-none" style={{ color: 'var(--t-faint)' }}>×</button>
          </div>

          <div className="p-4 space-y-4 overflow-y-auto max-h-[560px]">
            {/* 基本信息 */}
            {desc && (
              <div className="flex flex-wrap gap-1.5">
                {[
                  `${localizeTerm('五行', locale)} · ${localizeTerm(desc.element, locale)}`,
                  `${localizeTerm('性质', locale)} · ${localizeTerm(desc.nature, locale)}`,
                  ...(palaceName ? [`${localizeTerm('位置', locale)} · ${localizeTerm(palaceName, locale)}`] : []),
                  ...(star.brightness ? [localizeTerm(star.brightness === 'bright' ? '庙旺' : star.brightness === 'dim' ? '落陷' : '平和', locale)] : []),
                ].map(tag => (
                  <div key={tag} className="text-[10px] px-2 py-1 rounded-full"
                    style={{
                      border: '1px solid var(--t-border)',
                      color: tag.includes('庙旺') || tag.includes('Miếu Vượng') ? '#eab308' : tag.includes('落陷') || tag.includes('Lạc Hãm') ? '#ef4444' : 'var(--t-text2)',
                    }}>
                    {tag}
                  </div>
                ))}
              </div>
            )}

            {/* 关键词 */}
            {desc && (
              <div>
                <div className="text-[10px] tracking-widest mb-1.5" style={{ color: 'var(--t-faint)' }}>{t('sections.starTraits')}</div>
                <div className="flex flex-wrap gap-1.5">
                  {desc.keywords.split('·').filter(k => k.trim()).map(k => (
                    <span key={k} className="text-[11px] px-2 py-0.5 rounded-full"
                      style={{ color: 'var(--t-gold)', border: '1px solid rgba(212,168,67,0.2)', background: 'rgba(212,168,67,0.06)' }}>
                      {k.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 古书原文 */}
            {detail && (
              <div className="rounded-xl p-3" style={{ background: 'rgba(212,168,67,0.04)', border: '1px solid rgba(212,168,67,0.12)' }}>
                <div className="text-[10px] tracking-widest mb-1.5 flex items-center gap-1" style={{ color: 'var(--t-gold)', opacity: 0.7 }}>
                  {t('sections.classical')}
                </div>
                <p className="text-[11px] leading-relaxed italic" style={{ color: 'var(--t-gold)', opacity: 0.8 }}>{detail.classical}</p>
              </div>
            )}

            {/* 倪海夏解读 */}
            {detail && (
              <>
                <div>
                  <div className="text-[10px] tracking-widest mb-1.5 flex items-center gap-1.5" style={{ color: 'var(--t-faint)' }}>
                    <span className="w-3 h-px inline-block" style={{ background: 'var(--t-border-acc)' }} />
                    {t('sections.niHaixiaInterpretation')}
                    <span className="w-3 h-px inline-block" style={{ background: 'var(--t-border-acc)' }} />
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--t-text2)' }}>{detail.niHaixia}</p>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {[
                    { labelKey: 'career' as const, value: detail.career, icon: t('icons.career') },
                    { labelKey: 'relationship' as const, value: detail.relationship, icon: t('icons.relationship') },
                    { labelKey: 'wealth' as const, value: detail.wealth, icon: t('icons.wealth') },
                    { labelKey: 'health' as const, value: detail.health, icon: t('icons.health') },
                  ].map(item => (
                    <div key={item.labelKey} className="card-inner rounded-lg p-3">
                      <div className="text-[10px] mb-1 flex items-center gap-1" style={{ color: 'var(--t-faint)' }}>
                        <span>{item.icon}</span>
                        <span>{t(`sections.${item.labelKey}`)}</span>
                      </div>
                      <p className="text-[11px] leading-relaxed" style={{ color: 'var(--t-text2)' }}>{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="text-[10px] p-2.5 rounded-lg" style={{ border: '1px solid rgba(74,222,128,0.15)', background: 'rgba(74,222,128,0.05)' }}>
                    <div className="text-emerald-500 mb-0.5 font-medium">{t('sections.bestPalace')}</div>
                    <div className="text-emerald-500/70">{detail.bestPalace}</div>
                  </div>
                  <div className="text-[10px] p-2.5 rounded-lg" style={{ border: '1px solid rgba(248,113,113,0.15)', background: 'rgba(248,113,113,0.05)' }}>
                    <div className="text-red-500 mb-0.5 font-medium">{t('sections.worstPalace')}</div>
                    <div className="text-red-500/70">{detail.worstPalace}</div>
                  </div>
                </div>
              </>
            )}

            {/* 辅星/煞星说明 */}
            {!detail && star.type !== 'major' && (
              <div className="text-xs leading-relaxed" style={{ color: 'var(--t-text2)' }}>
                {star.type === 'lucky' && LUCKY_STAR_KEYS[star.name] && t(`luckyStars.${LUCKY_STAR_KEYS[star.name]}`)}
                {star.type === 'sha' && SHA_STAR_KEYS[star.name] && t(`shaStars.${SHA_STAR_KEYS[star.name]}`)}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
