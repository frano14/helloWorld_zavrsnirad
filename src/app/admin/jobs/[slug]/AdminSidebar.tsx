"use client";

import FormSubmitButton from "@/components/jobssearch/FormSubmitButton";
import { Job } from "@prisma/client";
import { useFormState } from "react-dom";
import { approveSubmission, deleteJob } from "./action";

interface AdminSidebarProps {
  job: Job;
}

export default function AdminSidebar({ job }: AdminSidebarProps) {
  return (
    <aside className="flex w-[200px] flex-none flex-row items-center gap-2 text-black md:flex-col md:items-stretch">
      {job.approved ? (
        <span className=" bg-green text-center font-semibold text-white">
          Approved
        </span>
      ) : (
        <ApproveSubmissionButton jobId={job.id} />
      )}
      <DeleteJobButton jobId={job.id} />
    </aside>
  );
}

interface AdminButtonProps {
  jobId: number;
}

function ApproveSubmissionButton({ jobId }: AdminButtonProps) {
  const [formState, formAction] = useFormState(approveSubmission, undefined);

  return (
    <form action={formAction} className="space-y-1">
      <input hidden name="jobId" value={jobId} />
      <FormSubmitButton className="hover:bg-green-600 w-full bg-green">
        Approve
      </FormSubmitButton>
      {formState?.error && (
        <p className="text-sm text-red-500">{formState.error}</p>
      )}
    </form>
  );
}

function DeleteJobButton({ jobId }: AdminButtonProps) {
  const [formState, formAction] = useFormState(deleteJob, undefined);

  return (
    <form action={formAction} className="space-y-1">
      <input hidden name="jobId" value={jobId} />
      <FormSubmitButton className="w-full bg-red-500 hover:bg-red-600">
        Delete
      </FormSubmitButton>
      {formState?.error && (
        <p className="text-sm text-red-500">{formState.error}</p>
      )}
    </form>
  );
}
