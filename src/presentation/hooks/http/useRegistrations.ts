import { useQuery } from '@tanstack/react-query'

import { RegistrationsRepository } from '@/infrastructure/data/repositories/Registrations.repository'

const { LoadRegistrations } = new RegistrationsRepository()

//TODO: Implement in a new version - Just a example
export const useLoadRegistrations = async (queryKey: string) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const response = await LoadRegistrations()
      return response
    },
    enabled: true
  })
}
