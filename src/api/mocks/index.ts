import { setupWorker } from 'msw/browser'

import { env } from '@/validations/env'

export const worker = setupWorker()

export const enableMSW = async () => {
  if (env.MODE !== 'test') {
    return
  }
  await worker.start()
}
