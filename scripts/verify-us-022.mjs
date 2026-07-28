import fs from 'fs';

const routing = fs.readFileSync('i18n/routing.ts', 'utf8');
const page = fs.readFileSync('app/page.tsx', 'utf8');
if (!routing.includes("defaultLocale: 'zh'")) process.exit(1);
if (!page.includes("redirect('/zh')")) process.exit(1);
if (!fs.existsSync('components/LocaleSwitcher.tsx')) process.exit(1);
if (fs.existsSync('messages/ja')) process.exit(1);
console.log('US-022 ok');
