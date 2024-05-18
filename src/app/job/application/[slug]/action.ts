// actions.ts
"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { updateApplicationSchema } from "@/lib/validation";
import { redirect } from "next/navigation";

export async function createApplication(
  formData: FormData,
  userId: string,
  jobId: number,
) {
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const values = Object.fromEntries(formData.entries());
  const { message } = updateApplicationSchema.parse(values);

  await prisma.application.create({
    data: {
      message,
      userId,
      jobId,
    },
  });

  redirect("/job/submitted");
}
