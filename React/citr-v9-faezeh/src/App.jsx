import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import {
  QueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const router = createRouter({ routeTree });
const queryClient = new QueryClient();
const App = () => {
  return (
    <>
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </StrictMode>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />); //Hey , inside of root go and stamp app once -> you get instance of the class or component
