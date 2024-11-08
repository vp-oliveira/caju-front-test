import { InputHTMLAttributes } from 'react'

import * as S from './TextField.styles'

export const TextField = (
  props: { label?: string; error?: string } & InputHTMLAttributes<any>
) => {
  const { error, label } = props
  return (
    <S.TextField>
      <S.Label htmlFor={label}>{label}</S.Label>
      <S.Input className={error && 'error'} {...props} />
      <S.Error>{error}</S.Error>
    </S.TextField>
  )
}
