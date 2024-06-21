import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })
  await page.getByLabel('Seu e-mail').fill('bruce@email.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText(
    'Enviamos um link de autenticação para seu e-mail',
  )

  expect(toast).toBeVisible()
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })
  await page.getByLabel('Seu e-mail').fill('wrong@email.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Opssss - E-mail inválido')

  expect(toast).toBeVisible()
  await page.waitForTimeout(2000)
})
