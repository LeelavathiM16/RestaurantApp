import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .refine(
      (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      "Invalid email address"
    ),
  password: z
    .string()
    .min(8, "Minimum 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
      "Must include uppercase, lowercase, number & special character"
    ),
});

export const registerSchema = loginSchema.extend({
  username: z
    .string()
    .min(5, "Minimum 5 characters")
    .nonempty("Username is required"),
});

export const schemaMap = {
  login: loginSchema,
  register: registerSchema,
} as const;

export const defaultValuesMap = {
  login: { email: "", password: "" },
  register: { username: "", email: "", password: "" },
} as const;