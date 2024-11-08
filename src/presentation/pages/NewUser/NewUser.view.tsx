import { Controller, useForm } from "react-hook-form";
import { HiOutlineArrowLeft } from "react-icons/hi";

import * as S from "./NewUser.styles";

import { CreateRegistration } from "@/core/domain/registrations";
import { cpfMask, fullNameMask } from "@/core/masks";
import { cpfValidator, emailValidator } from "@/core/validators";
import { PageContainer } from "@/presentation/components";
import { Button } from "@/presentation/components/Buttons";
import { IconButton } from "@/presentation/components/Buttons/IconButton";
import { TextField } from "@/presentation/components/TextField/TextField.view";
import { useNavigateUrl } from "@/presentation/hooks";

export const NewUserPage = (props: {
  handleCreateRegistration: (payload: CreateRegistration.DataModel) => void;
  loadingRegistrations: boolean;
}) => {
  const { navigate } = useNavigateUrl();
  const { handleCreateRegistration } = props;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: any) =>
    handleCreateRegistration({
      ...data,
      admissionDate: data.admissionDate.split("-").reverse().join("/"),
      cpf: data.cpf.replace(/\D/g, ""),
    });

  return (
    <PageContainer>
      <S.Container>
        <S.Card>
          <IconButton
            onClick={() => {
              navigate("/dashboard");
            }}
            aria-label="back"
          >
            <HiOutlineArrowLeft size={24} />
          </IconButton>
          <form id="form" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="employeeName"
              control={control}
              render={({ field }) => {
                return (
                  <TextField
                    placeholder="Nome"
                    label="Nome"
                    error={errors.employeeName?.message?.toString()}
                    {...field}
                    value={fullNameMask(field.value)}
                  />
                );
              }}
              rules={{
                required: "Este campo é obrigatório",
              }}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => {
                return (
                  <TextField
                    placeholder="Email"
                    label="Email"
                    error={errors.email?.message?.toString()}
                    type="email"
                    {...field}
                    value={field.value}
                  />
                );
              }}
              rules={{
                required: "Este campo é obrigatório",
                validate: {
                  validateEmail: (value: string) =>
                    emailValidator(value) || "E-mail em formato inválido",
                },
              }}
            />
            <Controller
              name="cpf"
              control={control}
              render={({ field }) => {
                return (
                  <TextField
                    placeholder="CPF"
                    label="CPF"
                    error={errors.cpf?.message?.toString()}
                    {...field}
                    value={cpfMask(field.value)}
                  />
                );
              }}
              rules={{
                required: "Este campo é obrigatório",
                validate: {
                  minLength: (value: string) =>
                    value.length > 13 || "O CPF precisa ter 11 dígitos",
                  validateCPF: (value: string) =>
                    cpfValidator(value) || "CPF em formato inválido",
                },
              }}
            />
            <Controller
              name="admissionDate"
              control={control}
              render={({ field }) => {
                return (
                  <TextField
                    label="Data de admissão"
                    type="date"
                    error={errors.admissionDate?.message?.toString()}
                    {...field}
                    value={field.value}
                  />
                );
              }}
              rules={{
                required: "Este campo é obrigatório",
              }}
            />
            <Button>Cadastrar</Button>
          </form>
        </S.Card>
      </S.Container>
    </PageContainer>
  );
};
