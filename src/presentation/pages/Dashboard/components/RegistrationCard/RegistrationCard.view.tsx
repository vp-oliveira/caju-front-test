import { Fragment, ReactNode, useState } from "react";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";

import * as S from "./RegistrationCard.styles";

import { LoadRegistrations } from "@/core/domain/registrations";
import { RegistrationStatus } from "@/core/enums/registrations";
import { Modal } from "@/presentation/components";
import { ButtonSmall } from "@/presentation/components/Buttons";

export const RegistrationCardComponent = (props: {
  data: LoadRegistrations.DataModel;
  loadingRegistrations: boolean;
  handleDeleteRegistration: (id: string) => void;
  handleUpdateRegistration: (id: string, payload: any) => void;
  setReload: (value: boolean) => any;
}) => {
  const {
    data,
    handleDeleteRegistration,
    handleUpdateRegistration,
    setReload,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const [cardStatus, setCardStatus] = useState<RegistrationStatus>("REVIEW");

  const cardsArr: Array<{
    key: RegistrationStatus;
    status: boolean;
    bgColor: string;
    buttonTitle: string;
    modal: {
      title: string;
      body: ReactNode;
    };
  }> = [
    {
      key: "REPROVED",
      status: data.status === "REVIEW",
      bgColor: "rgb(255, 145, 154)",
      buttonTitle: "Reprovar",
      modal: {
        title: "Reprovar",
        body: <div>Deseja reprovar {data.employeeName}?</div>,
      },
    },
    {
      key: "APPROVED",
      status: data.status === "REVIEW",
      bgColor: "rgb(155, 229, 155)",
      buttonTitle: "Aprovar",
      modal: {
        title: "Aprovar",
        body: <div>Deseja aprovar {data.employeeName}?</div>,
      },
    },
    {
      key: "REVIEW",
      status: data.status === "APPROVED" || data.status === "REPROVED",
      bgColor: "#ff8858",
      buttonTitle: "Revisar novamente",
      modal: {
        title: "Revisar novamente",
        body: (
          <div>
            Deseja revisar novamente o registro de(a) {data.employeeName}?
          </div>
        ),
      },
    },
  ];

  return (
    <S.Card data-testid="registration-card">
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{data.employeeName}</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{data.email}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{data.admissionDate}</span>
      </S.IconAndText>
      <S.Actions>
        <div className="buttons">
          {cardsArr.map(({ bgColor, modal, status, buttonTitle, key }) => {
            if (status) {
              return (
                <Fragment key={key}>
                  <ButtonSmall
                    bgcolor={bgColor}
                    onClick={() => {
                      setIsOpen(true);
                      setCardStatus(key);
                    }}
                  >
                    {buttonTitle}
                  </ButtonSmall>
                  {key === cardStatus && (
                    <Modal
                      open={isOpen}
                      onClose={setIsOpen}
                      title={modal.title}
                      onConfirm={() => {
                        handleUpdateRegistration(data.id, {
                          ...data,
                          status: key,
                        });
                        setIsOpen(false);
                        setReload((prevState) => !prevState);
                      }}
                    >
                      {modal.body}
                    </Modal>
                  )}
                </Fragment>
              );
            }
          })}
        </div>
        <HiOutlineTrash onClick={() => setDeleteIsOpen(true)} />
        <Modal
          open={deleteIsOpen}
          onClose={setDeleteIsOpen}
          onConfirm={() => {
            handleDeleteRegistration(data.id);
            setDeleteIsOpen(false);
            setReload((prevState) => !prevState);
          }}
          title="Deletar"
        >
          <div>Deseja remover esse registro?</div>
        </Modal>
      </S.Actions>
    </S.Card>
  );
};
