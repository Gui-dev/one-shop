import { z } from 'zod'

export const orderFiltersSchema = z.object({
  orderId: z.string().optional(),
  customerName: z.string().optional(),
  status: z.string().optional(),
})

export type OrderFiltersSchema = z.infer<typeof orderFiltersSchema>
