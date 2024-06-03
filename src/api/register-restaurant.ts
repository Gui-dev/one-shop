import { api } from '@/lib/api'

interface IRegisterRestaurantBody {
  restaurantName: string
  manager: string
  email: string
  phone: string
}

export const registerRestaurant = async ({
  restaurantName,
  manager,
  email,
  phone,
}: IRegisterRestaurantBody) => {
  await api.post('/users', {
    restaurantName,
    manager,
    email,
    password: '123456',
    phone,
    createdAt: new Date(),
  })
}
