"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { createApplication } from "./action";
import {
  UpdateApplicationValues,
  updateApplicationSchema,
} from "@/lib/validation";

export default function JobApplicationForm({ jobId }: { jobId: number }) {
  const { data: session } = useSession();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateApplicationValues>({
    resolver: zodResolver(updateApplicationSchema),
  });

  const onSubmit = async (data: UpdateApplicationValues) => {
    const formData = new FormData();
    formData.append("message", data.message);

    if (session?.user.id) {
      await createApplication(formData, session.user.id, jobId);
      router.push("/job/application/submitted");
    } else {
      alert("You need to be logged in to apply for a job.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          {...register("message")}
          required
          className="bg-green"
        />
        {errors.message && <p>{errors.message.message}</p>}
      </div>
      <button type="submit">Apply</button>
    </form>
  );
}
