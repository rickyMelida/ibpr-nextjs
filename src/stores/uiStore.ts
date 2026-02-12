import { create } from 'zustand';

/**
 * Store for managing UI state
 * Following Single Responsibility Principle - only handles UI-related state
 */
interface UIStore {
  isLoading: boolean;
  currentYear: number;
  setIsLoading: (loading: boolean) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isLoading: false,
  currentYear: new Date().getFullYear(),
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
