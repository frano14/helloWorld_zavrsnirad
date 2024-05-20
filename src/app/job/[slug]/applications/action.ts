"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

type FormState = { error?: string } | undefined;

export async function approveApplication(
  formData: FormData,
  applicationId: number,
): Promise<FormState> {
  try {
    console.log("doslo");
    await prisma.application.update({
      where: { id: applicationId },
      data: { status: "approved" },
    });

    revalidatePath("/");
  } catch (error) {
    let message = "Unexpected error";
    if (error instanceof Error) {
      message = error.message;
    }
    return { error: message };
  }
}

export async function rejectApplication(
  formData: FormData,
  applicationId: number,
): Promise<FormState> {
  try {
    await prisma.application.update({
      where: { id: applicationId },
      data: { status: "rejected" },
    });

    revalidatePath("/");
  } catch (error) {
    let message = "Unexpected error";
    if (error instanceof Error) {
      message = error.message;
    }
    return { error: message };
  }
}
