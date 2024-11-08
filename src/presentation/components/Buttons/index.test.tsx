import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";

import { Button } from ".";

describe("Button", () => {
  test("Should show button", () => {
    render(<Button>Ativar</Button>);
    expect(screen.getByRole("button", { name: /Ativar/i }));
  });
});
