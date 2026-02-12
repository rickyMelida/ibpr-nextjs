import { create } from 'zustand';
import { NavigationItem } from '@/types';
import { NAVIGATION_ROUTES } from '@/constants';

/**
 * Store for managing navigation state
 * Following Single Responsibility Principle - only handles navigation logic
 * Following DRY - uses constants from centralized config
 */
interface NavigationStore {
  isMenuOpen: boolean;
  currentPath: string;
  navigationItems: NavigationItem[];
  toggleMenu: () => void;
  closeMenu: () => void;
  setCurrentPath: (path: string) => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  isMenuOpen: false,
  currentPath: '/',
  navigationItems: NAVIGATION_ROUTES.map(route => ({ ...route })),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
  setCurrentPath: (path) => set({ currentPath: path }),
}));
