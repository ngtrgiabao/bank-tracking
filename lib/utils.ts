import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const authFormSchema = (type: string) => z.object({
  // sign up
  address1: type === "sign-in" ?
    z.string().optional()
    : z.string().max(50),
  dataOfBirth: type === "sign-in" ?
    z.string().optional()
    : z.string().min(3),
  firstName: type === "sign-in" ?
    z.string().optional()
    : z.string().min(3),
  lastName: type === "sign-in" ?
    z.string().optional()
    : z.string().min(3),
  postalCode: type === "sign-in" ?
    z.string().optional()
    : z.string().min(3).max(6),
  ssn: type === "sign-in" ?
    z.string().optional()
    : z.string().min(3),
  state: type === "sign-in" ?
    z.string().optional()
    : z.string().min(2).max(2),
  city: type === "sign-in" ?
    z.string().optional()
    : z.string().min(2).max(50),
  email: type === "sign-in" ?
    z.string().optional()
    : z.string().email(),
  // sign in
  username: z.string().min(8),
  password: z.string().min(8),
});