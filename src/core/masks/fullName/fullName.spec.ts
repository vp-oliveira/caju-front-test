import { expect, test, describe } from "vitest";

import { fullNameMask } from "./fullName.mask";

describe("Masks -> fullName", () => {
  test("Should return the value in correct format", () => {
    const mask = fullNameMask("Fulano 1Tal");
    expect(mask).toBe("Fulano Tal");
  });
});
