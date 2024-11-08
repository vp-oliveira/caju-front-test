import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";

import { Loading } from "./components";
import { Routes } from "./routes/routes";

//ReactQuery Middlewere
const queryClient = new QueryClient();

export const AppShell = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </QueryClientProvider>
  );
};
