import { http, HttpResponse } from 'msw'

import { IGetOrdersResponse } from '../get-orders'

type Orders = IGetOrdersResponse['orders']
type OrderStatus = IGetOrdersResponse['orders'][number]['status']

const statuses: OrderStatus[] = [
  'pending',
  'canceled',
  'processing',
  'delivering',
  'delivered',
]

const orders: Orders = Array.from({ length: 60 }).map((_, index) => {
  return {
    id: `order_${index + 1}`,
    customerName: `Customer ${index + 1}`,
    totalInCents: 2400,
    status: statuses[index % 5],
    createdAt: new Date().toISOString(),
  }
})

export const getOrdersMock = http.get<never, never, IGetOrdersResponse>(
  '/orders',
  async ({ request }) => {
    const { searchParams } = new URL(request.url)
    const pageIndex = Number(searchParams.get('pageIndex')) ?? 0
    const customerName = searchParams.get('customerName')
    const orderId = searchParams.get('orderId')
    const status = searchParams.get('status')

    let filteredOrders = orders

    if (customerName) {
      filteredOrders = filteredOrders.filter((order) =>
        order.customerName.includes(customerName),
      )
    }

    if (orderId) {
      filteredOrders = filteredOrders.filter((order) =>
        order.id.includes(orderId),
      )
    }

    if (status) {
      filteredOrders = filteredOrders.filter((order) => order.status === status)
    }

    const paginatedOrders = filteredOrders.slice(
      pageIndex * 10,
      (pageIndex + 1) * 10,
    )

    return HttpResponse.json({
      orders: paginatedOrders,
      meta: {
        pageIndex,
        perPage: 10,
        totalCount: filteredOrders.length,
      },
    })
  },
)
