import { z } from "zod";


export const CreateList = z.object({
  title: z.string({
    required_error: "title is required",
    invalid_type_error: "Title is required",
  }).min(3, {
    message: "Title too short.",
  }),
  boardId: z.string(),
});