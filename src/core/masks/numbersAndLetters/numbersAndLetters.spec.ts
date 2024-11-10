import { expect, test, describe } from "vitest";

import { numbersAndLettersMask } from "./numbersAndLetters.mask";

describe("Masks -> numbersAndLetters", () => {
  test("Should return the value in correct format", () => {
    const mask = numbersAndLettersMask("Rua@ 15 de N-ovembro");
    expect(mask).toBe("Rua15deNovembro");
  });
});
