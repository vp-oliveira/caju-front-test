import { test, expect } from "@playwright/test";

import { LoadRegistrations } from "@/core/domain/registrations";
import { VITE_BASE_URL } from "@/infrastructure/NodeSettings";

test("Dashboard -> AccessNewUserPage", async ({ page }) => {
  await page.route("*/**/registrations", async (route) => {
    const json: Array<LoadRegistrations.DataModel> = [
      {
        admissionDate: "22/10/2023",
        email: "luiz@caju.com.br",
        employeeName: "Luiz Filho",
        status: "APPROVED",
        cpf: "56642105087",
        id: "1",
      },
    ];
    await route.fulfill({ json });
  });

  await page.goto(VITE_BASE_URL);

  const newUserPageBtn = page.getByText(/Nova Admissão/);

  newUserPageBtn.click();

  await expect(page.getByText(/Nome/)).toBeVisible();
});
