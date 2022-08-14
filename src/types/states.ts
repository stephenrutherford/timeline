import { z } from "zod";

const StateStoreType = z.object({
  // * Editing an Item State
  showEditMenu: z.boolean(),
  toggleEditMenu: z.function().returns(z.void()),
  openEditMenu: z.function().returns(z.void()),
  closeEditMenu: z.function().returns(z.void()),
  idToEdit: z.string(),
  updateEditId: z.function().args(z.string()).returns(z.void()),

  // * User Preferences State
  showAdjustmentsMenu: z.boolean(),
  toggleAdjustmentsMenu: z.function().returns(z.void()),
  openAdjustmentsMenu: z.function().returns(z.void()),
  closeAdjustmentsMenu: z.function().returns(z.void()),
});

export type StateStoreType = z.infer<typeof StateStoreType>;
