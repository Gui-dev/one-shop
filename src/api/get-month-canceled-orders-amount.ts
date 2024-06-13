import { api } from '@/lib/api'

export interface IGetMonthCanceledOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export const getMonthCanceledOrdersAmount = async () => {
  const { data } = await api.get<IGetMonthCanceledOrdersAmountResponse>(
    '/metrics/month-canceled-orders-amount',
  )

  return data
}
