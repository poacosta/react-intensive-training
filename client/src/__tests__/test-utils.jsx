import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../query-client";

const customRender = (ui, options = {}) => {
  const { initialEntries = ["/"] } = options;
  const AllTheProviders = ({ children }) => (
    <React.StrictMode>
      <MemoryRouter initialEntries={initialEntries}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </MemoryRouter>
    </React.StrictMode>
  );
  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from "@testing-library/react";

export { customRender as render };
