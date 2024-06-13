import { api } from '@/lib/api'

export interface IGetMonthOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export const getMonthOrdersAmount = async () => {
  const { data } = await api.get<IGetMonthOrdersAmountResponse>(
    '/metrics/month-orders-amount',
  )

  return data
}
