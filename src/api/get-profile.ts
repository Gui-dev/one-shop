import { api } from '@/lib/api'

export interface IGetProfileResponse {
  id: number
  name: string
  email: string
  phone: string | null
  role: string
  createdAT: Date | null
  updateAt: Date | null
}

export const getProfile = async () => {
  const { data } = await api.get<IGetProfileResponse>('/me')

  return data
}
