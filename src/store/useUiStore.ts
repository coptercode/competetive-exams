import { create } from "zustand";

interface UiState {
  alertMessage: string | null;
  alertResolve: (() => void) | null;
  confirmMessage: string | null;
  confirmResolve: ((value: boolean) => void) | null;
  
  showAlert: (message: string) => Promise<void>;
  showConfirm: (message: string) => Promise<boolean>;
  
  closeAlert: () => void;
  closeConfirm: (result: boolean) => void;
}

export const useUiStore = create<UiState>((set) => ({
  alertMessage: null,
  alertResolve: null,
  confirmMessage: null,
  confirmResolve: null,

  showAlert: (message) => {
    return new Promise((resolve) => {
      set({ alertMessage: message, alertResolve: resolve });
    });
  },

  showConfirm: (message) => {
    return new Promise((resolve) => {
      set({ confirmMessage: message, confirmResolve: resolve });
    });
  },

  closeAlert: () => {
    set((state) => {
      if (state.alertResolve) {
        state.alertResolve();
      }
      return { alertMessage: null, alertResolve: null };
    });
  },

  closeConfirm: (result) => {
    set((state) => {
      if (state.confirmResolve) {
        state.confirmResolve(result);
      }
      return { confirmMessage: null, confirmResolve: null };
    });
  },
}));
