import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1, "Title is  required.").max(255),
  description: z
    .string({ required_error: "Description is required." })
    .min(1, "Description is required."),
});



// why the description say 'required'  instead of 'Description is required.'
// The reason is that SimpleMDE returns an undefined instead of an empty string when you leave the description text field empty. So zod's z.string() schema returns an "invalid_type" error and shows the default error message "required".

// You can find these info by printing the error log to Console.

// One solution (not so elegant): Edit the schema of description field to change the default error message of "invalid_type":