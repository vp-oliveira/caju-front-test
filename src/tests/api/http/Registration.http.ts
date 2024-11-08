import { http, HttpResponse } from "msw";

import { LoadRegistrations } from "@/core/domain/registrations";
import { VITE_API_MOCK_URL } from "@/infrastructure/AppSettings";

export const loadRegistrations = http.get(
  `${VITE_API_MOCK_URL}/registrations`,
  () => {
    return HttpResponse.json<Array<LoadRegistrations.DataModel>>([
      {
        admissionDate: "22/10/2023",
        email: "luiz@caju.com.br",
        employeeName: "Luiz Filho",
        status: "APPROVED",
        cpf: "56642105087",
        id: "1",
      },
    ]);
  }
);
