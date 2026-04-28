import { z } from "zod";

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const PHONE_REGEX = /^\d{7,15}$/;

export const emailSchema = z
    .string()
    .trim()
    .min(1, "Email is required")
    .regex(EMAIL_REGEX, "Enter a valid email address");

export const phoneSchema = z
    .string()
    .trim()
    .regex(PHONE_REGEX, "Enter a valid mobile number with 7 to 15 digits");

export const leadSchema = z.object({
    name: z.string().min(2, "Name required"),
    email: emailSchema,
    phoneCode: z.string().min(1).default("+91"),
    phone: phoneSchema,
    company: z.string().min(2, "Company required"),

    domain: z.string().optional().nullable(),
    teamSize: z.string().optional().nullable(),
    deliveryMode: z.string().optional().nullable(),
    location: z.string().optional().nullable(),
    source: z.enum(["compact", "detailed"]),
});
