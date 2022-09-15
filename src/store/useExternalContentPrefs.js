import create from 'zustand';
import { persist } from 'zustand/middleware';

const useExternalContentPrefs = create(
  persist(
    (set) => ({
      youTube: false,
      setYouTube: (b) => {
        set(() => ({
          youTube: b,
        }));
      },
    }),
    {
      name: 'external-content-prefs-storage',
      getStorage: () => localStorage,
    }
  )
);
export default useExternalContentPrefs;
