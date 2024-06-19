import { http, HttpResponse } from 'msw'

import { IGetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, IGetProfileResponse>(
  '/me',
  async () => {
    return HttpResponse.json({
      id: 1,
      name: 'Bruce Wayne',
      email: 'bruce@email.com',
      phone: '11991919191',
      role: 'manager',
      createdAT: new Date(),
      updateAt: null,
    })
  },
)
