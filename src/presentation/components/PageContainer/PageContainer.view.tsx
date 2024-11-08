import { Fragment, ReactElement } from 'react'

import { Header } from '../Header/Header.view'

import * as S from './PageContainer.styles'

export const PageContainer = ({ children }: { children: ReactElement }) => {
  return (
    <Fragment>
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>
      <S.Container>{children}</S.Container>
    </Fragment>
  )
}
