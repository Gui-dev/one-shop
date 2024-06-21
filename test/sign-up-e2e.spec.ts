import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByLabel('Nome do estabelecimento').fill('One shop')
  await page.getByLabel('Seu nome').fill('Bruce Wayne')
  await page.getByLabel('E-mail').fill('bruce@email.com')
  await page.getByLabel('Seu celular').fill('11991928272')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Estabelecimento cadastrado com sucesso')

  expect(toast).toBeVisible()
})
test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
})
