import { z } from "zod";

const UserAdjustmentsType = z.object({
  category_one: z.string().nullish(),
  category_two: z.string().nullish(),
  category_three: z.string().nullish(),
  category_four: z.string().nullish(),
  category_five: z.string().nullish(),
});

export type UserAdjustmentsType = z.infer<typeof UserAdjustmentsType>;
