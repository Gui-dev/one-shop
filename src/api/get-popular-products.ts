import { api } from '@/lib/api'

export type IGetPopularProducts = {
  product: string
  amount: number
}[]

export const getPopularProducts = async () => {
  const { data } = await api.get<IGetPopularProducts>(
    '/metrics/popular-products',
  )

  return data
}
