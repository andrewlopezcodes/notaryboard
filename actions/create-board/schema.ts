import {z} from "zod";

export const CreateBoard = z.object({
  title: z.string({
    required_error: "tile is required",
    invalid_type_error: "Title is required",
  }).min(3, {
    message: "Title is too short."
  }),
});