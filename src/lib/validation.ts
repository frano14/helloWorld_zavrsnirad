import { boolean, z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().trim().min(1, "Cannot be empty"),
  username: z.string().trim().min(1, "Cannot be empty"),
  worklocation: z.string().trim().min(1, "Cannot be empty"),
  country: z.string().trim().min(1, "Cannot be empty"),
  worktime: z.string().trim().min(1, "Cannot be empty"),
  experience: z.string().trim().min(1, "Cannot be empty"),
});

export type UpdateProfileValues = z.infer<typeof updateProfileSchema>;

export const jobFilterSchema = z.object({
  q: z.string().optional(),
  type: z.string().optional(),
  location: z.string().optional(),
  remote: z.coerce.boolean().optional(),
});

export type JobFilterValues = z.infer<typeof jobFilterSchema>;
