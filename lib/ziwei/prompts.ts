import { TOPIC_PROMPTS_ZH, buildPalacePromptZh, buildSiHuaPromptZh } from './prompts.zh';
import { TOPIC_PROMPTS_VI, buildPalacePromptVi, buildSiHuaPromptVi } from './prompts.vi';

export function getTopicPrompt(topic: string, locale: string): string {
  const map = locale === 'vi' ? TOPIC_PROMPTS_VI : TOPIC_PROMPTS_ZH;
  return map[topic] ?? TOPIC_PROMPTS_ZH[topic] ?? '';
}

export function buildPalacePrompt(
  locale: string,
  palaceName: string,
  role: string,
  starDesc: string,
): string {
  return locale === 'vi'
    ? buildPalacePromptVi(palaceName, role, starDesc)
    : buildPalacePromptZh(palaceName, role, starDesc);
}

export function buildSiHuaPrompt(
  locale: string,
  viewLabel: string,
  starName: string,
  siHua: string,
  palaceName: string,
): string {
  return locale === 'vi'
    ? buildSiHuaPromptVi(viewLabel, starName, siHua, palaceName)
    : buildSiHuaPromptZh(viewLabel, starName, siHua, palaceName);
}
