"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Send, CheckCircle } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";
import { Locale } from "../../../i18n-config";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(8, "Phone number seems too short."),
  projectType: z.string({ required_error: "Please select a project type." }).min(1, "Please select a project type."),
  budget: z.string({ required_error: "Please select a budget." }).min(1, "Please select a budget."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function SubmitButton({ dictionary, isSubmitting }: { dictionary: Dictionary['contactPage']['form'], isSubmitting: boolean }) {
  return (
    <Button type="submit" disabled={isSubmitting} className="w-full">
      {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      {dictionary.submit}
    </Button>
  );
}

export function ContactForm({ dictionary, lang }: { dictionary: Dictionary['contactPage']['form'], lang: Locale }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      projectType: "",
      budget: "",
    },
  });

  const { formState: { isSubmitting } } = form;

  async function onSubmit(values: ContactFormValues) {
    setError(null);

    const payload = {
        ...values,
        _subject: "Nouveau Lead - Site Logonova",
        _template: "table",
        _captcha: "false",
    };

    try {
        const response = await fetch("https://formsubmit.co/ajax/devis.logonovaagency@gmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            setIsSuccess(true);
        } else {
            const result = await response.json();
            const message = result.message || dictionary.error;
            setError(message);
        }
    } catch (e) {
        const message = (e instanceof Error ? e.message : String(e)) || dictionary.error;
        setError(message);
    }
  }

  if (isSuccess) {
    return (
        <div className="flex flex-col items-center justify-center text-center p-8 bg-green-900/20 rounded-lg border border-green-700">
            <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
            <h3 className="text-2xl font-headline font-bold mb-2 text-green-300">Message Envoyé !</h3>
            <p className="text-muted-foreground">{dictionary.success}</p>
        </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {error && (
            <Alert variant="destructive">
                <AlertTitle>Erreur</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dictionary.name}</FormLabel>
              <FormControl>
                <Input placeholder={dictionary.namePlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dictionary.email}</FormLabel>
              <FormControl>
                <Input type="email" placeholder={dictionary.emailPlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dictionary.phone}</FormLabel>
              <FormControl>
                <Input type="tel" placeholder={dictionary.phonePlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dictionary.projectType}</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={dictionary.projectTypePlaceholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {dictionary.projectTypes.map(option => (
                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dictionary.budget}</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={dictionary.budgetPlaceholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {dictionary.budgetOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dictionary.message}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={dictionary.messagePlaceholder}
                  className="min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton dictionary={dictionary} isSubmitting={isSubmitting} />
      </form>
    </Form>
  );
}
