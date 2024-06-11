import { api } from '@/lib/api'

export interface IGetOrderQuery {
  pageIndex?: number | null
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}

export interface IGetOrdersResponse {
  id: string
  customerName: string
  totalInCents: number
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  createdAt: string
}

/*
export interface IGetOrdersResponse {
  orders: {
    orderId: string
    customerName: string
    total: number
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    createdAt: string
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}
*/

export const getOrders = async ({
  pageIndex,
  orderId,
  customerName,
  status,
}: IGetOrderQuery) => {
  const { data, headers } = await api.get<IGetOrdersResponse[]>('/orders', {
    params: {
      _page: pageIndex,
      _limit: 2,
      _sort: 'createdAt',
      _order: 'desc',
      orderId,
      customerName,
      status,
    },
  })

  return {
    orders: data,
    meta: {
      page: Number(pageIndex),
      limit: 2,
      totalCount: Number(headers['x-total-count']),
    },
  }

  /*
    const { data } = await api.get<IGetOrdersResponse>('/orders', {
      params: {
        pageIndex
      },
    })

    return data
  */
}
