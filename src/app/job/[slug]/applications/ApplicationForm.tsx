"use client";

import { useState } from "react";
import { approveApplication, rejectApplication } from "./action";
import LoadingButton from "@/components/LoadingButton";
import FormSubmitButton from "@/components/jobssearch/FormSubmitButton";

interface ApplicationFormProps {
  applicationId: number;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ applicationId }) => {
  const [error, setError] = useState<string | undefined>();

  const handleApprove = async () => {
    try {
      await approveApplication(new FormData(), applicationId);
    } catch (error) {
      setError("Error approving application");
    }
  };

  const handleReject = async () => {
    try {
      await rejectApplication(new FormData(), applicationId);
    } catch (error) {
      setError("Error rejecting application");
    }
  };

  return (
    <div className="flex flex-col gap-5">
      {error && <p>{error}</p>}
      <FormSubmitButton
        onClick={handleApprove}
        className="bg-lime-400 px-6 py-2 hover:bg-lime-600"
      >
        Accept
      </FormSubmitButton>
      <FormSubmitButton
        onClick={handleReject}
        className="bg-red-400 px-6 py-2 hover:bg-red-600"
      >
        Reject
      </FormSubmitButton>
    </div>
  );
};

export default ApplicationForm;
