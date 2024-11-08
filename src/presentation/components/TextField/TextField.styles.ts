import styled from 'styled-components'

export const TextField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
export const Input = styled.input`
  padding: 0 8px;
  vertical-align: middle;
  border-radius: 2px;
  width: 100%;
  min-height: 36px;
  background-color: #ffffff;
  border: 1px solid rgba(36, 28, 21, 0.3);
  transition: all 0.2s ease-in-out 0s;
  font-size: 14px;
  line-height: 18px;
  font-weight: normal;
  border-radius: 8px;
  :focus {
    outline: none;
    border: 1px solid #007c89;
    box-shadow: inset 0 0 0 1px #007c89;
  }
  &::placeholder {
    font-size: 14px;
  }
  &.error {
    border: 1px solid red;
  }
`
export const Label = styled.label`
  font-size: 16px;
`

export const Error = styled.span`
  font-size: 12px;
  color: red;
`
