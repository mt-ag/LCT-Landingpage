import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useDarkmodeStore = create(
  persist(
    (set, get) => ({
      isDark:
        (typeof window !== 'undefined' &&
          window.matchMedia('(prefers-color-scheme: dark)').matches) ??
        false,
      toggleDarkMode: () => {
        const newIsDark = !get().isDark;
        set(() => ({
          isDark: newIsDark,
        }));
        get().apply();
      },
      apply: () => {
        if (get().isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      },
    }),
    {
      name: 'darkmode-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useDarkmodeStore;
