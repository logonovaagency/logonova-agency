"use server";

import { z } from "zod";
import { getDictionary } from "@/lib/dictionaries";
import { i18n, type Locale } from "../../../i18n-config";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(8, "Phone number seems too short."),
  projectType: z.string({ required_error: "Please select a project type." }),
  budget: z.string({ required_error: "Please select a budget." }),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const lang = (formData.get("lang") as Locale) || i18n.defaultLocale;

  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    projectType: formData.get("projectType"),
    budget: formData.get("budget"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Simulate sending an email or saving to a database
  console.log("Form data submitted:", validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const dictionary = await getDictionary(lang);

  return {
    success: true,
    message: dictionary.contactPage.form.success,
    errors: null,
  };
}
