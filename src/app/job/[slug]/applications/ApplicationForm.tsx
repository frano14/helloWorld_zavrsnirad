"use client";

import { useState } from "react";
import { approveApplication, rejectApplication } from "./action";

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
    <div>
      {error && <p>{error}</p>}
      <button onClick={handleApprove}>Approve</button>
      <button onClick={handleReject}>Reject</button>
    </div>
  );
};

export default ApplicationForm;
