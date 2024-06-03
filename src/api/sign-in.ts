import { api } from '@/lib/api'

interface ISignInBody {
  email: string
}

export const signIn = async ({ email }: ISignInBody) => {
  await api.post('/login', { email, password: '123456' })
}
