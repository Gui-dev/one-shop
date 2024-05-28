import { z } from 'zod'

export const signUpValidation = z.object({
  restaurant_name: z.string(),
  manager_name: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

export type SignUpData = z.infer<typeof signUpValidation>
