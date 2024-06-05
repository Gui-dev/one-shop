import { api } from '@/lib/api'

interface IGetManagedRestaurantResponse {
  id: number
  managerId: string | null
  name: string
  description: string | null
  createdAT: Date | null
  updateAt: Date | null
}

export const getManagedRestaurant = async () => {
  const { data } = await api.get<IGetManagedRestaurantResponse>(
    '/managed-restaurant/1',
  )
  // const { data } = await api.get<IGetManagedRestaurantResponse>(
  //   '/managed-restaurant',
  // )

  return data
}
