import { test, expect } from '@playwright/test';

async function dismissAnnouncement(page: import('@playwright/test').Page) {
  const ack = page.getByRole('button', { name: /我知道了|Tôi đã hiểu/ });
  const close = page.getByRole('button', { name: /关闭|Đóng/ });
  if (await ack.isVisible({ timeout: 2000 }).catch(() => false)) {
    await ack.click();
    await expect(ack).toBeHidden({ timeout: 5000 }).catch(() => undefined);
    return;
  }
  if (await close.isVisible({ timeout: 1000 }).catch(() => false)) {
    await close.click();
    await expect(close).toBeHidden({ timeout: 5000 }).catch(() => undefined);
  }
}

/**
 * Smoke: LocaleSwitcher keeps path and flips zh ↔ vi (US-032 / backlog #7).
 */
test.describe('locale switch', () => {
  test('homepage zh → vi → zh via Language group', async ({ page }) => {
    test.setTimeout(90_000);
    await page.goto('/zh');
    await expect(page).toHaveURL(/\/zh\/?$/);
    await dismissAnnouncement(page);

    const group = page.getByRole('group', { name: 'Language' });
    await expect(group).toBeVisible();
    await expect(page.getByRole('heading', { name: '紫微命盘' }).first()).toBeVisible();

    await group.getByRole('button', { name: 'Tiếng Việt' }).click();
    await expect(page).toHaveURL(/\/vi\/?$/, { timeout: 20_000 });
    await dismissAnnouncement(page);
    await expect(page.getByRole('heading', { name: 'Tử Vi Mệnh Bàn' }).first()).toBeVisible();

    await group.getByRole('button', { name: '中文' }).click();
    await expect(page).toHaveURL(/\/zh\/?$/, { timeout: 20_000 });
    await dismissAnnouncement(page);
    await expect(page.getByRole('heading', { name: '紫微命盘' }).first()).toBeVisible();
  });

  test('library book page serves VI chrome for gusuifu', async ({ page }) => {
    await page.goto('/vi/library/gusuifu');
    await expect(page).toHaveURL(/\/vi\/library\/gusuifu\/?$/);
    await expect(page.getByRole('heading', { name: /Tủy Phú/ })).toBeVisible();
  });
});
