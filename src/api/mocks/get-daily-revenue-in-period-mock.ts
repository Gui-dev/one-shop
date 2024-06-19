import { http, HttpResponse } from 'msw'

import { IGetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  IGetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', async () => {
  return HttpResponse.json([
    { date: '19/06/2024', receipt: 2000 },
    { date: '20/06/2024', receipt: 800 },
    { date: '21/06/2024', receipt: 8000 },
    { date: '22/06/2024', receipt: 540 },
    { date: '23/06/2024', receipt: 700 },
    { date: '24/06/2024', receipt: 1000 },
  ])
})
