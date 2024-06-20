import { api } from '@/lib/api'

export interface ICancelOrderParams {
  orderId: string
}

export const cancelOrder = async ({ orderId }: ICancelOrderParams) => {
  // await api.patch(`/orders/${orderId}`, {
  //   status: 'canceled',
  // })
  await api.patch(`/orders/${orderId}/cancel`)
}
