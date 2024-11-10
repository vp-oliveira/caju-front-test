import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import * as S from "./SearchBar.styles";

import { LoadRegistrations } from "@/core/domain/registrations";
import { cpfMask } from "@/core/masks";
import { cpfValidator } from "@/core/validators";
import { TextField } from "@/presentation/components/TextField/TextField.view";

export const SearchBar = (props: {
  handleGetRegistrations: (data: LoadRegistrations.Filters) => void;
}) => {
  const { handleGetRegistrations } = props;

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    handleGetRegistrations({
      ...data,
      cpf: data.cpf.replace(/\D/g, ""),
    });
    reset();
  };

  useEffect(() => {
    if (isValid) {
      handleSubmit(onSubmit)();
    }
  }, [isValid, handleSubmit]);

  return (
    <S.Container>
      <form id="form">
        <Controller
          name="cpf"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                placeholder="Digite um CPF válido"
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
      </form>
    </S.Container>
  );
};
