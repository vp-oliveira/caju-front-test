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

    const request = await DeleteRegistration(id);

    if (request.statusCode !== 200) {
      //TODO: Handle API exception (Toast component)
    }

    setLoadingRegistrations(false);
  }, []);

  const handleUpdateRegistration = useCallback(
    async (id: string, payload: UpdateRegistration.Request) => {
      setLoadingRegistrations(true);

      const request = await UpdateRegistration(id, payload);

      if (request.statusCode !== 200) {
        //TODO: Handle API exception (Toast component)
      }

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
