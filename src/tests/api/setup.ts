import { cleanup } from "@testing-library/react";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll, vi } from "vitest";

//React Testing Library Middleware
import "@testing-library/jest-dom/vitest";

import { handlers } from "./handlers";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

const mockServer = setupServer(...handlers);

beforeAll(() => {
  mockServer.listen({ onUnhandledRequest: "warn" });
});
afterEach(() => {
  cleanup();
  mockServer.resetHandlers();
});
afterAll(() => mockServer.close());
