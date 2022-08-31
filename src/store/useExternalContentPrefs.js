import create from 'zustand';
import { persist } from 'zustand/middleware';

const useExternalContentPrefs = create(
  persist((set) => ({
    youTube: false,
    setYouTube: (b) => {
      set(() => ({
        youTube: b,
      }));
    },
  }))
);
export default useExternalContentPrefs;
