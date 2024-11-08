import { styled } from 'styled-components'

export const ModalElement = styled.dialog`
  &::backdrop {
    position: fixed;
    inset: 0px;
    background: rgba(0, 0, 0, 0.1);
  }
  max-width: 90%;
  padding: 0;
  border: 0;
  border-radius: 0.5rem;
  position: relative;
  border-radius: 1rem;
  position: fixed;
  box-shadow: hsl(0 0% 0% / 10%) 0 0 0.5rem 0.25rem;
  border: 1px solid #ccc;
  min-width: 400px;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dedede;
  padding: 16px;
  align-items: center;

  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }
`

export const ModalBody = styled.div`
  padding: 16px;
`

export const ModalFooter = styled.div`
  border-top: 1px solid #dedede;
  padding: 16px;

  .default-header {
    display: flex;
    justify-content: end;
    gap: 8px;
  }
`
