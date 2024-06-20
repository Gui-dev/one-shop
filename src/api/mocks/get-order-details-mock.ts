import { http, HttpResponse } from 'msw'

import {
  IGetOrderDetailsParams,
  IGetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  IGetOrderDetailsParams,
  never,
  IGetOrderDetailsResponse
>(`/orders/:orderId`, async ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'Bruce Wayne',
      email: 'bruce@email.com',
      phone: '11999887766',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 5000,
    orderItems: [
      {
        id: 1,
        priceInCents: 1000,
        product: { name: 'Pizza Muçarela' },
        quantity: 1,
      },
      {
        id: 2,
        priceInCents: 2000,
        product: { name: 'Pizza Pepperoni' },
        quantity: 2,
      },
    ],
    customerName: 'Bruce Wayne',
    email: 'bruce@email.com',
    phone: '11999887766',
  })
})
