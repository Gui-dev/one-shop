import { setupWorker } from 'msw/browser'

import { env } from '@/validations/env'

import { signInMock } from './sign-in-mock'

export const worker = setupWorker(signInMock)

export const enableMSW = async () => {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}
