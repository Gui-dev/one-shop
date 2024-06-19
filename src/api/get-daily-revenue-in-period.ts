/* eslint-disable @typescript-eslint/no-unused-vars */
import { api } from '@/lib/api'

export interface IGetDailyRevenueInPeriod {
  from: Date | undefined
  to: Date | undefined
}

export type IGetDailyRevenueInPeriodResponse = {
  date: string
  receipt: number
}[]

export const getDailyRevenueInPeriod = async ({
  from,
  to,
}: IGetDailyRevenueInPeriod) => {
  // const { data } = await api.get<IGetDailyRevenueInPeriodResponse>(
  //   '/metrics/daily-receipt-in-period',
  // )

  const { data } = await api.get<IGetDailyRevenueInPeriodResponse>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return data
}
