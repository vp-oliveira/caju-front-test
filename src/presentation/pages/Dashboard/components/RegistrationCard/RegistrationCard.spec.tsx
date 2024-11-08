import { render, screen } from "@testing-library/react";
import { expect, test, describe, vi } from "vitest";

import { RegistrationCardComponent } from "./RegistrationCard.view";

import { LoadRegistrations } from "@/core/domain/registrations";

const makeSut = (props: {
  data: LoadRegistrations.DataModel;
  loadingRegistrations: boolean;
  handleDeleteRegistration: (id: string) => void;
  handleUpdateRegistration: (id: string, payload: any) => void;
  setReload: (value: boolean) => any;
}) => {
  render(<RegistrationCardComponent {...props} />);
  const registrationCard = screen.queryByTestId("registration-card");

  return { registrationCard };
};

describe("Dashboard -> RegistrationCard", () => {
  test("Should render the component with default props", async () => {
    makeSut({
      data: {
        admissionDate: "22/10/2023",
        email: "luiz@caju.com.br",
        employeeName: "Luiz Filho",
        status: "REVIEW",
        cpf: "56642105087",
        id: "1",
      },
      setReload: vi.fn(),
      handleDeleteRegistration: vi.fn(),
      handleUpdateRegistration: vi.fn(),
      loadingRegistrations: false,
    });
    const employeeName = await screen.findByText(/Luiz Filho/i);
    const admissionDate = await screen.findByText("22/10/2023");
    const approveBtn = await screen.findByText(/Aprovar/i);
    const reproveBtn = await screen.findByText(/Reprovar/i);

    expect(employeeName).toBeVisible();
    expect(admissionDate).toBeVisible();
    expect(approveBtn).toBeVisible();
    expect(reproveBtn).toBeVisible();
  });
});
