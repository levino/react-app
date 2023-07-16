import React, { PropsWithChildren } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { handlers } from "../mocks/handlers"
import { setupServer } from "msw/node"
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react"
import { Profile } from "."
import { describe, beforeAll, afterEach, afterAll, test, expect } from "vitest"
const server = setupServer(...handlers)

describe("Profile", () => {
  beforeAll(() => server.listen())
  afterEach(() => {
    server.resetHandlers()
  })
  afterAll(() => server.close())
  test("should show users name", async () => {
    // Arrange
    render(<Profile />, { wrapper })

    // Assert
    expect(screen.getByText("Loading...")).toBeDefined()
    await waitForElementToBeRemoved(screen.getByText("Loading..."))
    expect(screen.getByText("Sam Flicker")).toBeDefined()
  })
})

const queryClient = new QueryClient()

const wrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
