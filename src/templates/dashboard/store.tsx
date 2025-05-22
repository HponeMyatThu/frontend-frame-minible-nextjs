/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContextStore } from "@/providers/ZustandProvider";
import React from "react";
import { createStore } from "zustand/vanilla";

// Define the state structure for the Dashboard Add page
export type DashboardFormState = {
  // Define state properties here
};

// Define all the actions that can modify the Dashboard form state
export type DashboardFormActions = {
  // Define action methods here
};

// Combine state and actions into a single store type
export type DashboardFormStore = DashboardFormState & DashboardFormActions;

// Default state initialization
const defaultDashboardFormState: DashboardFormState = {
  // Add default values here
};

// Create Zustand store and context with default and passed-in state
const [DashboardFormProvider, useDashboardFormStore] = createContextStore<
  DashboardFormStore,
  DashboardFormState
>((initialProps: DashboardFormState) =>
  createStore<DashboardFormStore>()((set) => ({
    ...defaultDashboardFormState,
    ...initialProps,
    // Define actions here if needed
  }))
);

// Export the custom hook for consuming the store
export { useDashboardFormStore };

// Wrap provider with passed props and children
export default function DashboardFormStoreProvider({
  children,
  ...initialProps
}: React.PropsWithChildren<DashboardFormState>) {
  return (
    <DashboardFormProvider {...initialProps}>{children}</DashboardFormProvider>
  );
}
