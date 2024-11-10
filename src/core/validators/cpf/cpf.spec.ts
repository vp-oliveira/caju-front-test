import { expect, test, describe } from "vitest";

import { cpfValidator } from "./cpf.validator";

describe("Masks -> CPF", () => {
  test("Should return true if the value is in the correct format", () => {
    const mask = cpfValidator("18872455022");
    expect(mask).toBe(true);
  });
});
