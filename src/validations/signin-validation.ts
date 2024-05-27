import { z } from 'zod'

export const signInValidation = z.object({
  email: z.string().email(),
})

export type SignInData = z.infer<typeof signInValidation>
