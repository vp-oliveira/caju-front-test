import { useState, useCallback } from "react";

import { RegistrationCardComponent } from "./RegistrationCard.view";

import {
  LoadRegistrations,
  UpdateRegistration,
} from "@/core/domain/registrations";
import { RegistrationsRepository } from "@/infrastructure/data/repositories/Registrations.repository";

export const RegistrationCard = (props: {
  data: LoadRegistrations.DataModel;
  setReload: (value: boolean) => void;
}) => {
  const { data, setReload } = props;
  const { DeleteRegistration, UpdateRegistration } =
    new RegistrationsRepository();
  const [loadingRegistrations, setLoadingRegistrations] = useState(false);

  const handleDeleteRegistration = useCallback(async (id: string) => {
    setLoadingRegistrations(true);

    await DeleteRegistration(id);
    setLoadingRegistrations(false);
  }, []);

  const handleUpdateRegistration = useCallback(
    async (id: string, payload: UpdateRegistration.Request) => {
      setLoadingRegistrations(true);

      await UpdateRegistration(id, payload);
      setLoadingRegistrations(false);
    },
    []
  );

  const injectDependencies = {
    data,
    loadingRegistrations,
    handleDeleteRegistration,
    handleUpdateRegistration,
    setReload,
  };

  return <RegistrationCardComponent {...injectDependencies} />;
};
