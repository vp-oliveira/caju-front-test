import { expect, test, describe } from "vitest";

import { emailValidator } from "./email.validator";

describe("Masks -> Email", () => {
  test("Should return true if the value is in the correct format", () => {
    const mask = emailValidator("jose@caju.com.br");
    expect(mask).toBe(true);
  });
});
