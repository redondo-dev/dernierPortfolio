'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useTranslations } from 'next-intl';

interface ContactFormData {
  firstName: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bannerMessage, setBannerMessage] = useState("");
  const [bannerType, setBannerType] = useState("");

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(t('firstNameRequired')),
    email: Yup.string()
      .email(t('emailInvalid'))
      .required(t('emailRequired')),
    message: Yup.string().required(t('messageRequired')),
  });

  const form = useForm<ContactFormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setBannerMessage("");
    setBannerType("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || t('errorSendingEmail'));
      }

      setBannerMessage(t('messageSentSuccessfully'));
      setBannerType("success");
      form.reset();
    } catch (error) {
      setBannerMessage(t('errorSendingMessage'));
      setBannerType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
        {bannerMessage && (
          <div
            className={`p-4 mb-6 rounded-md ${
              bannerType === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {bannerMessage}
          </div>
        )}

        <div className="space-y-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t('name')}
            </label>
            <input
              id="firstName"
              type="text"
              placeholder={t('enterYourName')}
              {...form.register("firstName")}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
            {form.formState.errors.firstName && (
              <p className="mt-1 text-sm text-red-600">
                {form.formState.errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t('email')}
            </label>
            <input
              id="email"
              type="email"
              placeholder={t('enterYourEmail')}
              {...form.register("email")}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
            {form.formState.errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t('message')}
            </label>
            <textarea
              id="message"
              placeholder={t('enterYourMessage')}
              {...form.register("message")}
              rows={4}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none dark:bg-gray-700 dark:text-white"
            />
            {form.formState.errors.message && (
              <p className="mt-1 text-sm text-red-600">
                {form.formState.errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            {isSubmitting ? t('sending') : t('sendMessage')}
          </button>
        </div>
      </form>
    </div>
  );
}
