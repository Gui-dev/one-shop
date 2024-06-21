import { expect, test } from '@playwright/test'

test('display day orders amount', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('20', { exact: true })).toBeVisible()
  await expect(page.getByText('-5% em relação à ontem')).toBeVisible()
})
