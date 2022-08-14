import create from "zustand";
import { StateStoreType } from "../types/states";

// type item = {
//   id: string;
//   date: string;
//   name: string;
//   note: string | null;
//   category: number | null;
// };

// type MyStore = {
//   // * Editing an Item State
//   showEditMenu: boolean;
//   toggleEditMenu: () => void;
//   openEditMenu: () => void;
//   closeEditMenu: () => void;
//   idToEdit: string;
//   updateEditId: (input: string) => void;
//   // Item: item[];
//   // updateItem: (input: item) => void;

//   // * User Preferences State
//   showAdjustmentsMenu: boolean;
//   toggleAdjustmentsMenu: () => void;
//   openAdjustmentsMenu: () => void;
//   closeAdjustmentsMenu: () => void;
// };

const useMenuStore = create<StateStoreType>((set) => ({
  // * Editing an Item State
  showEditMenu: false,
  toggleEditMenu: () =>
    set((state) => ({
      showEditMenu: !state.showEditMenu,
      showAdjustmentsMenu: false,
    })),
  openEditMenu: () =>
    set((state) => ({ showEditMenu: true, showAdjustmentsMenu: false })),
  closeEditMenu: () => set((state) => ({ showEditMenu: false })),
  idToEdit: "this is a test",
  updateEditId: (input) =>
    set((state) => ({
      idToEdit: input,
      showEditMenu: true,
      showAdjustmentsMenu: false,
    })),

  // * User Preferences State
  showAdjustmentsMenu: false,
  toggleAdjustmentsMenu: () =>
    set((state) => ({
      showAdjustmentsMenu: !state.showAdjustmentsMenu,
      showEditMenu: false,
    })),
  openAdjustmentsMenu: () =>
    set((state) => ({ showAdjustmentsMenu: true, showEditMenu: false })),
  closeAdjustmentsMenu: () => set((state) => ({ showAdjustmentsMenu: false })),
}));

export default useMenuStore;
