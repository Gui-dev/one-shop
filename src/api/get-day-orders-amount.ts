import { api } from '@/lib/api'

export interface IGetDayOrdersAmountResponse {
  amount: number
  diffFromYesterday: number
}

export const getDayOrdersAmount = async () => {
  const { data } = await api.get<IGetDayOrdersAmountResponse>(
    '/metrics/day-orders-amount',
  )

  return data
}
