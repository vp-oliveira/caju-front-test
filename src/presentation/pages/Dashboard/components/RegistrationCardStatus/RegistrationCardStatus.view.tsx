import { ReactNode } from 'react'

import { ButtonSmall, Modal } from '@/presentation/components'

export const RegistrationCardStatus = (props: {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  modalTitle: string
  buttonTitle: string
  modalText: ReactNode
}) => {
  const { isOpen, setIsOpen, buttonTitle, modalText, modalTitle } = props
  return (
    <>
      <ButtonSmall bgcolor="rgb(155, 229, 155)" onClick={() => setIsOpen(true)}>
        {buttonTitle}
      </ButtonSmall>
      <Modal open={isOpen} onClose={setIsOpen} title={modalTitle}>
        {modalText}
      </Modal>
    </>
  )
}
