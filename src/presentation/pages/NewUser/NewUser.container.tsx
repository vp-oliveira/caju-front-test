import { useCallback, useState } from "react";

import { NewUserPage } from "./NewUser.view";

import { CreateRegistration } from "@/core/domain/registrations";
import { RegistrationsRepository } from "@/infrastructure/data/repositories/Registrations.repository";
import { useNavigateUrl } from "@/presentation/hooks";

export const NewUser = () => {
  const [loadingRegistrations, setLoadingRegistrations] = useState(false);
  const { navigate } = useNavigateUrl();

  const { CreateRegistration } = new RegistrationsRepository();

  const handleCreateRegistration = useCallback(
    async (payload: CreateRegistration.DataModel) => {
      setLoadingRegistrations(true);
      await CreateRegistration(payload);
      navigate("/dashboard");
      setLoadingRegistrations(false);
    },
    []
  );

  const injectDependencies = {
    handleCreateRegistration,
    loadingRegistrations,
  };

  return <NewUserPage {...injectDependencies} />;
};
