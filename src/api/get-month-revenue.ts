import { api } from '@/lib/api'

export interface IGetMonthRevenueResponse {
  receipt: number
  diffFromLastMonth: number
}

export const getMonthRevenue = async () => {
  const { data } = await api.get<IGetMonthRevenueResponse>(
    '/metrics/month-receipt',
  )

  return data
}
