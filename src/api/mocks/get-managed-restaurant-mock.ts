import { http, HttpResponse } from 'msw'

import { IGetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  IGetManagedRestaurantResponse
>('/managed-restaurant', async () => {
  return HttpResponse.json({
    id: 1,
    managerId: 'fake_id',
    name: 'fake_name',
    description: 'fake_description',
    createdAT: new Date(),
    updateAt: null,
  })
})
