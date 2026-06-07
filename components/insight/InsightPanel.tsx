export { default } from '@/components/InsightPanel';
export type FocusState =
  | { type: 'star'; label: string; star: import('@/lib/ziwei/types').Star; palace: import('@/lib/ziwei/types').Palace }
  | { type: 'palace'; label: string; palace: import('@/lib/ziwei/types').Palace }
  | { type: 'sihua'; label: string; siHua: { starName: string; siHua: string; view: import('@/components/TimeNav').TimeView } };
