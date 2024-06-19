import { setupWorker } from 'msw/browser'

import { env } from '@/validations/env'

import { registerRestaurantMock } from './register-restaurant-mock'
import { signInMock } from './sign-in-mock'

export const worker = setupWorker(signInMock, registerRestaurantMock)

export const enableMSW = async () => {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}
