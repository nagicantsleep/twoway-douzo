/**
 * IndexNow ping — gửi tín hiệu cập nhật URL đến các search engine.
 * Gọi sau mỗi lần build thành công.
 *
 * Chạy: node scripts/indexnow-ping.mjs
 *
 * Các biến môi trường (optional):
 *   INDEXNOW_KEY  — IndexNow API key (nếu có)
 *   SITE_URL      — URL gốc (mặc định: https://wdyziweidoushu666.com)
 */

const SITE_URL = process.env.SITE_URL || 'https://wdyziweidoushu666.com';
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || '';

if (!INDEXNOW_KEY) {
  console.log(`[IndexNow] No INDEXNOW_KEY set — skipping ping for ${SITE_URL}`);
  process.exit(0);
}

const INDEXNOW_URL = `https://api.indexnow.org/indexnow?url=${encodeURIComponent(SITE_URL)}&key=${INDEXNOW_KEY}`;

async function ping() {
  try {
    const res = await fetch(INDEXNOW_URL, { method: 'POST' });
    if (res.ok) {
      console.log(`[IndexNow] Ping thành công: ${SITE_URL}`);
    } else {
      console.warn(`[IndexNow] Ping thất bại: ${res.status} ${res.statusText}`);
    }
  } catch (err) {
    console.warn('[IndexNow] Không thể kết nối IndexNow:', err.message);
  }
}

ping();
