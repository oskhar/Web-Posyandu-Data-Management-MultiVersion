import '@testing-library/jest-dom/vitest'

import { cleanup } from '@testing-library/react'
import { afterAll, afterEach, vi } from 'vitest'

afterEach(() => {
  cleanup()
})

afterAll(() => {
  vi.restoreAllMocks()
})
