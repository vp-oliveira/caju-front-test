import { expect, test, describe } from "vitest";

import { cpfMask } from "./cpf.mask";

describe("Masks -> CPF", () => {
  test("Should return the value in correct format", () => {
    const mask = cpfMask("18872455022");
    expect(mask).toBe("188.724.550-22");
  });
});
