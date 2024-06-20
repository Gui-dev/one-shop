import { api } from '@/lib/api'

export interface IDispatchOrderParams {
  orderId: string
}

export const dispatchOrder = async ({ orderId }: IDispatchOrderParams) => {
  // await api.patch(`/orders/${orderId}`, {
  //   status: 'delivering',
  // })
  await api.patch(`/orders/${orderId}/dispatch`)
}
