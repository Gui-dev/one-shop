import { api } from '@/lib/api'
import { OrderStatusProps } from '@/pages/app/orders/components/order-status'

export interface IGetOrderDetailsParams {
  orderId: string
}

export interface IGetOrderDetailsResponse {
  id: string
  customerName: string
  email: string
  phone: string
  totalInCents: number
  status: OrderStatusProps
  createdAt: string
  customer: {
    name: string
    email: string | null
    phone: string
  }
  orderItems: {
    id: number
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export const getOrderDetails = async ({ orderId }: IGetOrderDetailsParams) => {
  const { data } = await api.get<IGetOrderDetailsResponse>(`/orders/${orderId}`)
  return data
}
