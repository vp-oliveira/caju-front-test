import { test, expect } from "@playwright/test";

import { LoadRegistrations } from "@/core/domain/registrations";
import { VITE_BASE_URL } from "@/infrastructure/NodeSettings";

test("Dashboard -> ApproveRegistration", async ({ page }) => {
  await page.route("*/**/registrations", async (route) => {
    if (route.request().method() === "GET") {
      const json: Array<LoadRegistrations.DataModel> = [
        {
          admissionDate: "22/10/2023",
          email: "luiz@caju.com.br",
          employeeName: "Luiz Filho",
          status: "REVIEW",
          cpf: "56642105087",
          id: "1",
        },
      ];
      await route.fulfill({ json });
    }
  });

  await page.goto(VITE_BASE_URL);

  const approveBtn = page.getByText(/Aprovar/);

  await expect(approveBtn).toBeVisible();
});
