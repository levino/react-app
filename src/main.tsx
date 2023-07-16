import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App.tsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

void import("./mocks/browser").then(({ worker }) => {
  void worker.start({ onUnhandledRequest: "bypass" })

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>,
  )
})
