import Form from "next/form";
import { submitContactForm } from "../action";

export default function ContactForm() {
  return (
    <Form
      action={submitContactForm}
      className="flex flex-col gap-4 max-w-md w-full mx-auto p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-2 text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-2 text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />
      <input
        type="text"
        name="message"
        placeholder="Your Message"
        required
        className="w-full px-4 py-2 text-sm rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />
      <button
        type="submit"
        className="w-full py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 text-sm font-medium rounded-lg transition-colors cursor-pointer"
      >
        Submit
      </button>
    </Form>
  );
}