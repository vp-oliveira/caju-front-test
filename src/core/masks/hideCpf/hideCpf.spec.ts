import { expect, test, describe } from "vitest";

import { hideCpfMask } from "./hideCpf.mask";

describe("Masks -> hideCpf", () => {
  test("Should return the value in correct format", () => {
    const mask = hideCpfMask("18872455022");
    expect(mask).toBe("XXX.724.550-XX");
  });
});
