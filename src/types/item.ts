import { z } from "zod";

const ItemCardType = z.object({
  id: z.string(),
  date: z.string(),
  name: z.string(),
  note: z.string().nullish(),
  category: z.number().nullish(),
});

export type ItemCardType = z.infer<typeof ItemCardType>;

const EditItemFormType = z.object({
  date: z.string(),
  name: z.string(),
  note: z.string().nullish(),
  category: z.number().nullish(),
});

export type EditItemFormType = z.infer<typeof EditItemFormType>;
