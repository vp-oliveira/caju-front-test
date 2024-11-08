import { LoadTrip } from '@/core/domain/registrations'
import { VITE_MOCK_BASE_URL } from '@/infrastructure/AppSettings'
import { HttpResponse as HttpResposeData } from '@/infrastructure/data/protocols'
import { http, HttpResponse } from '@/infrastructure/msw'

export const loadTrips = http.get(
  `${VITE_MOCK_BASE_URL}/queries/viagens/portaria/1234?cpf=1234`,
  () => {
    return HttpResponse.json({
      body: {
        result: [{ expirada: false }],
        errors: undefined,
        messages: [],
        statusCode: 200,
        success: true
      },
      statusCode: 200
    } as HttpResposeData<LoadTrip.Response>)
  }
)
