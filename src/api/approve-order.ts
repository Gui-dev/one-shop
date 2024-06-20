import { api } from '@/lib/api'

export interface IApproveOrderParams {
  orderId: string
}

export const approveOrder = async ({ orderId }: IApproveOrderParams) => {
  // await api.patch(`/orders/${orderId}`, {
  //   status: 'processing',
  // })
  await api.patch(`/orders/${orderId}/approve`)
}
