import { create } from 'zustand';

const useNewsletterStore = create((set) => ({
  isOpen: false,
  email: '',
  open: () => {
    set(() => ({
      isOpen: true,
    }));
  },
  close: () => {
    set(() => ({
      isOpen: false,
    }));
  },
  setEmail: (nEmail) => {
    set(() => ({
      email: nEmail,
    }));
  },
}));

export default useNewsletterStore;
