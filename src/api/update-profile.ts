import { api } from '@/lib/api'

export interface IUpdateProfileBody {
  name: string
  description: string | null
}

export const updateProfile = async ({
  name,
  description,
}: IUpdateProfileBody) => {
  // await api.patch('/managed-restaurant/1', { name, description })
  await api.put('/profile', { name, description })
}
