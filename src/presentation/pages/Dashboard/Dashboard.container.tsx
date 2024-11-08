import { useState, useCallback, useEffect } from "react";

import { DashboardPage } from "./Dashboard.view";

import { LoadRegistrations } from "@/core/domain/registrations";
import { convertFiltersObjToUrlString } from "@/core/helpers";
import { RegistrationsRepository } from "@/infrastructure/data/repositories/Registrations.repository";

export const Dashboard = () => {
  const { LoadRegistrations } = new RegistrationsRepository();
  const [loadingRegistrations, setLoadingRegistrations] = useState(false);
  const [getRegistrations, setGetRegistrations] = useState<
    Array<LoadRegistrations.DataModel>
  >([]);
  const [reload, setReload] = useState(false);

  const handleGetRegistrations = useCallback(
    async (filters?: LoadRegistrations.Filters) => {
      setLoadingRegistrations(true);

      const convertFilters = convertFiltersObjToUrlString(filters);
      const result = await LoadRegistrations(convertFilters);

      setGetRegistrations(result.body);
      setLoadingRegistrations(false);
    },
    []
  );

  useEffect(() => {
    handleGetRegistrations();
  }, [reload]);

  const injectDependencies = {
    loadingRegistrations,
    getRegistrations,
    handleGetRegistrations,
    setReload,
  };

  return <DashboardPage {...injectDependencies} />;
};
