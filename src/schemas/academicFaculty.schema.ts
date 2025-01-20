import { z } from "zod";

export const academicFacultySchema = z.object({
    name: z.string({required_error: 'Please write a Name'})
})