import { http, HttpResponse } from 'msw'

import { IGetPopularProducts } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  IGetPopularProducts
>('/metrics/popular-products', async () => {
  return HttpResponse.json([
    {
      product: 'Pepperoni',
      amount: 40,
    },
    {
      product: 'Mussarela',
      amount: 50,
    },
    {
      product: 'Marguerita',
      amount: 16,
    },
    {
      product: '4 queijos',
      amount: 26,
    },
    {
      product: 'Portuguesa',
      amount: 30,
    },
  ])
})
