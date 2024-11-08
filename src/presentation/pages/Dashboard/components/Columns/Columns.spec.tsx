import { render, screen } from "@testing-library/react";
import { expect, test, describe, vi } from "vitest";

import { Collumns } from "./Columns.view";

import { LoadRegistrations } from "@/core/domain/registrations";

const makeSut = (props: {
  registrations: Array<LoadRegistrations.DataModel>;
  setReload: (value: boolean) => void;
}) => {
  const { registrations, setReload } = props;
  render(<Collumns registrations={registrations} setReload={setReload} />);
  const columns = screen.queryByTestId("columns");

  return { columns };
};

describe("Dashboard -> Columns", () => {
  test("Should render the component with default props", async () => {
    makeSut({ registrations: [], setReload: vi.fn() });
    const reviewColumn = await screen.findByText(/Pronto para revisar/i);
    const approvedColumn = await screen.findByText(/Aprovado/i);
    const reprovedColumn = await screen.findByText(/Reprovado/i);

    expect(reviewColumn).toBeVisible();
    expect(approvedColumn).toBeVisible();
    expect(reprovedColumn).toBeVisible();
  });
});
