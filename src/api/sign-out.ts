import { api } from '@/lib/api'

export const signOut = async () => {
  await api.post('/sign-out')
}
