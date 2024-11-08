import { ReactNode, useEffect, useRef } from "react";
import { HiX } from "react-icons/hi";

import { ButtonSmall } from "../Buttons";

import * as S from "./Modal.styles";

export const Modal = (props: {
  children: ReactNode;
  open: boolean;
  footer?: Array<{
    title: string;
    type: "default" | "primary";
    onClick: (value: any) => void;
  }>;
  title?: string;
  onConfirm?: () => void;
  onClose: (value: boolean) => void;
}) => {
  const { children, open, footer, title, onConfirm, onClose } = props;

  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modalElement = modalRef.current;
    modalElement?.close();

    if (!open) {
      modalElement?.close();
    }

    if (modalElement && open) {
      modalElement.showModal();
    }
  }, [open]);

  return (
    open && (
      <S.ModalElement ref={modalRef} open={open}>
        <S.ModalHeader>
          <span>{title}</span>
          <button onClick={() => onClose(false)}>
            <HiX size={20} />
          </button>
        </S.ModalHeader>
        <S.ModalBody>{children}</S.ModalBody>
        <S.ModalFooter>
          {!footer && (
            <div className="default-header">
              <ButtonSmall
                bgcolor="#fff"
                border="1px solid #dedede"
                onClick={() => onClose(false)}
              >
                Cancelar
              </ButtonSmall>
              <ButtonSmall bgcolor="#ff7500" color="#fff" onClick={onConfirm}>
                Confirmar
              </ButtonSmall>
            </div>
          )}
          {footer &&
            footer.length > 0 &&
            footer.map((button) => {
              return (
                <button key={button.title} onClick={button.onClick}>
                  {button.title}
                </button>
              );
            })}
        </S.ModalFooter>
      </S.ModalElement>
    )
  );
};
