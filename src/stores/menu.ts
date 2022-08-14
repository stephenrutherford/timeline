import create from "zustand";
// import { trpc } from "../utils/trpc";

// type item = {
//   id: string;
//   date: string;
//   name: string;
//   note: string | null;
//   category: number | null;
// };

type MyStore = {
  // * Editing an Item State
  showEditMenu: boolean;
  toggleEditMenu: () => void;
  openEditMenu: () => void;
  closeEditMenu: () => void;
  idToEdit: string;
  updateEditId: (input: string) => void;
  // Item: item[];
  // updateItem: (input: item) => void;

  // * User Preferences State
  showAdjustmentsMenu: boolean;
  toggleAdjustmentsMenu: () => void;
  openAdjustmentsMenu: () => void;
  closeAdjustmentsMenu: () => void;
};

// const utils = trpc.useContext();

const useMenuStore = create<MyStore>((set) => ({
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

  // Item: [
  //   {
  //     id: "",
  //     name: "",
  //     date: "",
  //     note: "",
  //     category: 1,
  //   },
  // ],
  // updateItem: (input) => {
  //   set((state) => ({
  //     Item: [
  //       {
  //         id: input.id,
  //         name: input.name,
  //         date: input.date,
  //         note: input.note,
  //         category: input.category,
  //       },
  //     ],
  //   }));
  // },

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
