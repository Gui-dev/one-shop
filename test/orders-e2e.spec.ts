import { expect, test } from '@playwright/test'

test('list orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true }),
  ).toBeVisible()

  await expect(
    page.getByRole('cell', { name: 'Customer 10', exact: true }),
  ).toBeVisible()
})
