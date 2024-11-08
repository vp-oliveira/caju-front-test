import { cleanup } from '@testing-library/react'
import { afterAll, afterEach, beforeAll, vi } from 'vitest'

//React Testing Library Middleware
import '@testing-library/jest-dom/vitest'

//Promise.withResolvers ReactPDF issue
//https://github.com/wojtekmaj/react-pdf/issues/1810
import 'core-js/proposals/promise-with-resolvers'

import { handlers } from './handlers'

import { setupServer } from '@/infrastructure/msw'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
})

const mockServer = setupServer(...handlers)

beforeAll(() => {
  mockServer.listen({ onUnhandledRequest: 'warn' })
})
afterEach(() => {
  cleanup()
  mockServer.resetHandlers()
})
afterAll(() => mockServer.close())
