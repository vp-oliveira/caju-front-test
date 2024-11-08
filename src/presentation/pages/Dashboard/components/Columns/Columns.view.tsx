import { RegistrationCard } from '../RegistrationCard/RegistrationCard.container'

import * as S from './Columns.styles'

import { LoadRegistrations } from '@/core/domain/registrations'
import { RegistrationStatus } from '@/core/enums/registrations'

export const Collumns = (props: {
  registrations: Array<LoadRegistrations.DataModel>
  setReload: (value: boolean) => void
}) => {
  const { registrations, setReload } = props

  const allColumns: Array<{
    status: RegistrationStatus
    title: string
  }> = [
    { status: 'REVIEW', title: 'Pronto para revisar' },
    { status: 'APPROVED', title: 'Aprovado' },
    { status: 'REPROVED', title: 'Reprovado' }
  ]

  return (
    <S.Container>
      {allColumns?.map((collum) => {
        return (
          <S.Column status={collum.status} key={collum.title}>
            <>
              <S.TitleColumn status={collum.status}>
                {collum.title}
              </S.TitleColumn>
              <S.CollumContent>
                {registrations?.map((registration) => {
                  if (registration.status === collum.status) {
                    return (
                      <RegistrationCard
                        data={registration}
                        key={registration.id}
                        setReload={setReload}
                      />
                    )
                  }
                })}
              </S.CollumContent>
            </>
          </S.Column>
        )
      })}
    </S.Container>
  )
}
