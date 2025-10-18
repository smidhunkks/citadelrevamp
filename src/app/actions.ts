"use server";

import { z } from "zod";
import { contactFormSchema } from "@/lib/schema";
import type { ContactFormState } from "@/lib/schema";

export async function submitContactForm(
  data: z.infer<typeof contactFormSchema>
): Promise<ContactFormState> {
  try {
    // In a real application, you'd process the form data here.
    // e.g., send an email, save to database.
    console.log("Received contact form data:", data);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      message: "Thank you for your message! We will get back to you soon.",
      status: "success",
    };
  } catch (error) {
    console.error(error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      status: "error",
    };
  }
}