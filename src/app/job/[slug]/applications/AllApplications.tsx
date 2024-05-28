"use client";
import React, { useState } from "react";
import Image from "next/image";
import arrow from "../../../../assets/images/arrowDown512.png";

// Definiranje tipa aplikacije
type Application = {
  id: number;
  jobId: number;
  userId: string;
  message: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
};

// Definiranje tipa za job
type Job = {
  title: string;
};

// Definiranje tipa za props
type AllApplicationsProps = {
  approvedApplications: Application[];
  rejectedApplications: Application[];
  job: Job;
};

const AllApplications: React.FC<AllApplicationsProps> = ({
  approvedApplications,
  rejectedApplications,
  job,
}) => {
  const [showApplications, setShowApplications] = useState(false);

  return (
    <div>
      <h1 className="customFont mb-2 text-[18px] xs:text-[20px] md:text-[22px]">
        <div className="mb-8 flex items-center justify-start gap-1">
          <p>Show all applications</p>
          <Image
            src={arrow}
            alt="arrow"
            width={24}
            height={24}
            onClick={() => setShowApplications(!showApplications)}
            className="cursor-pointer"
          />
        </div>
      </h1>
      {showApplications && (
        <div className="blackTxt">
          <div className="mb-6">
            <p className="mb-2 text-[20px] text-lime-600">
              Approved applications
            </p>
            {approvedApplications.length === 0 && (
              <p className="ml-8 text-[16px] text-dark">
                No approved applications
              </p>
            )}
            {approvedApplications.map((application: Application) => (
              <div
                key={application.id}
                className="greenBorder mb-4 flex items-start justify-between gap-24 rounded-lg bg-lime-50 p-4"
              >
                <div>
                  <p className="mb-4 text-[22px] font-semibold">{job.title}</p>
                  <p className="text-[16px]">{application.message}</p>
                </div>
                <div className="bg-lime-600 px-4 py-1 text-white">Approved</div>
              </div>
            ))}
          </div>
          <div>
            <p className="mb-2 text-[20px] text-red-600">
              Rejected applications
            </p>
            {rejectedApplications.length === 0 && (
              <p className="ml-8 text-[16px] text-dark">
                No rejected applications
              </p>
            )}
            {rejectedApplications.map((application: Application) => (
              <div
                key={application.id}
                className="redBorder mb-4 flex items-start justify-between gap-24 rounded-lg bg-red-50 p-4"
              >
                <div>
                  <p className="mb-4 text-[22px] font-semibold">{job.title}</p>
                  <p className="text-[16px]">{application.message}</p>
                </div>
                <div className="bg-red-600 px-4 py-1 text-white">Rejected</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllApplications;
