import { expect, test } from '@playwright/test'

test('list orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true }),
  ).toBeVisible()

  expect(
    page.getByRole('cell', { name: 'Customer 10', exact: true }),
  ).toBeVisible()
})

test('paginate orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })
  await page.getByRole('button', { name: 'Próxima página' }).click()

  expect(
    page.getByRole('cell', { name: 'Customer 11', exact: true }),
  ).toBeVisible()

  expect(
    page.getByRole('cell', { name: 'Customer 20', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Última página' }).click()

  expect(
    page.getByRole('cell', { name: 'Customer 51', exact: true }),
  ).toBeVisible()

  expect(
    page.getByRole('cell', { name: 'Customer 60', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Página anterior' }).click()

  expect(
    page.getByRole('cell', { name: 'Customer 41', exact: true }),
  ).toBeVisible()

  expect(
    page.getByRole('cell', { name: 'Customer 50', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Primeira página' }).click()

  expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true }),
  ).toBeVisible()

  expect(
    page.getByRole('cell', { name: 'Customer 10', exact: true }),
  ).toBeVisible()
})

test('filter by order id', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })
  await page.getByPlaceholder('ID do cliente').fill('order_11')
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  expect(page.getByRole('cell', { name: 'order_11' })).toBeVisible()
  expect(
    page.getByRole('cell', { name: 'Customer 11', exact: true }),
  ).toBeVisible()
  await page.waitForTimeout(1000)
})
