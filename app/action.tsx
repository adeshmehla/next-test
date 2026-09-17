"use server";

import clientPromise from "@/lib/mongodb";

export async function submitContactForm(formData: FormData): Promise<void> {
  console.log("submitContactForm called");

  console.log("Raw form entries:", Array.from(formData.entries()));

  const name = formData.get("name")?.toString() ?? "";
  const email = formData.get("email")?.toString() ?? "";
  const message = formData.get("message")?.toString() ?? "";

  console.log("Extracted values:", { name, email, message });

  if (!name || !email || !message) {
    console.log("Validation failed: missing required fields");
    return;
  }

  try {
    console.log("Connecting to MongoDB...");
    const client = await clientPromise;

    console.log("Mongo client created:", !!client);

    const db = client.db("next-test");
    const result = await db.collection("contactData").insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    console.log("Insert success:", result.insertedId);
  } catch (error) {
    console.error("Database Error:", error);
  }
}