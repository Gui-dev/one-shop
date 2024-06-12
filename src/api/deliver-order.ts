import { api } from '@/lib/api'

export interface IDeliverOrderParams {
  orderId: string
}

export const deliverOrder = async ({ orderId }: IDeliverOrderParams) => {
  await api.patch(`/orders/${orderId}`, {
    status: 'delivered',
  })
  // await api.patch(`/orders/${orderId}/deliver`)
}
