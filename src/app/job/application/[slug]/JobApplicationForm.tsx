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
import LoadingButton from "@/components/LoadingButton";

export default function JobApplicationForm({ jobId }: { jobId: number }) {
  const { data: session } = useSession();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState: { isSubmitting },
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
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="w-full  py-6">
        <textarea
          id="message"
          {...register("message")}
          required
          className="w-full rounded-lg bg-light p-4"
          placeholder="The more detailed, the better"
          rows={12}
        />
        {errors.message && <p>{errors.message.message}</p>}
      </div>
      {errors.message && <p>{errors.message.message}</p>}
      <LoadingButton
        type="submit"
        loading={isSubmitting}
        className="bg-blue hover:bg-darkerBlue"
      >
        Submit
      </LoadingButton>
    </form>
  );
}
