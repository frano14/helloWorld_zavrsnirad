"use client";

import React, { useState } from "react";
import { updateProfile } from "./actions";
import { UpdateProfileValues } from "@/lib/validation";

const SettingsPage: React.FC<{ user: any }> = ({ user }) => {
  const [formData, setFormData] = useState<UpdateProfileValues>({
    name: user.name,
    username: user.username,
    worklocation: user.worklocation,
    country: user.country,
    worktime: user.worktime,
    experience: user.experience,
    isTalent: user.isTalent,
  });

  const [isProfileSeted, setIsProfileSeted] = useState<boolean>(
    user.isProfileSeted,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  const handleTalentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      isTalent: !e.target.checked, // If checkbox is checked, set isTalent to false
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateProfile(formData);
      alert("Profile updated successfully!");
      if (Object.values(formData).every((value) => !!value)) {
        setIsProfileSeted(true);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert(
        "An error occurred while updating profile. Please try again later.",
      );
    }
  };

  return (
    <div className="mt-[128px] flex  flex-col items-center justify-center">
      <h1 className="customFont text-[26px] xs:text-[32px] md:text-[38px]">
        Hello {user.name} 👋
      </h1>
      <h1 className="customFont md:text-[18px]">
        {user.isProfileSeted
          ? "Before you begin, please set up your profile information"
          : "Update your profile information to ensure your data is accurate and up-to-date"}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="my-6 flex w-[300px] flex-col gap-6"
      >
        <div className="flex flex-col">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="blackBorder rounded-[8px] px-4 py-2"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            className="blackBorder rounded-[8px] px-4 py-2"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Work Location:</label>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-start gap-2">
              <input
                type="radio"
                name="worklocation"
                value="Hybrid"
                checked={formData.worklocation === "Hybrid"}
                onChange={handleChange}
              />
              <label>Hybrid</label>
            </div>

            <div className="flex items-center justify-start gap-2">
              <input
                type="radio"
                name="worklocation"
                value="Remote"
                checked={formData.worklocation === "Remote"}
                onChange={handleChange}
              />
              <label>Remote</label>
            </div>
            <div className="flex items-center justify-start gap-2">
              <input
                type="radio"
                name="worklocation"
                value="On-Site"
                checked={formData.worklocation === "On-Site"}
                onChange={handleChange}
              />
              <label>On-Site</label>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label>Country:</label>
          <input
            type="text"
            name="country"
            className="blackBorder rounded-[8px] px-4 py-2"
            placeholder="Enter your country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Experience:</label>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-start gap-2">
              <input
                type="radio"
                name="experience"
                value="Junior"
                checked={formData.experience === "Junior"}
                onChange={handleChange}
              />
              <label>Junior</label>
            </div>

            <div className="flex items-center justify-start gap-2">
              <input
                type="radio"
                name="experience"
                value="Medior"
                checked={formData.experience === "Medior"}
                onChange={handleChange}
              />
              <label>Medior</label>
            </div>
            <div className="flex items-center justify-start gap-2">
              <input
                type="radio"
                name="experience"
                value="Senior"
                checked={formData.experience === "Senior"}
                onChange={handleChange}
              />
              <label>Senior</label>
            </div>
          </div>
        </div>

        <div>
          <label>Work time:</label>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-start gap-2">
              <input
                type="radio"
                name="worktime"
                value="Full time"
                checked={formData.worktime === "Full time"}
                onChange={handleChange}
              />
              <label>Full time</label>
            </div>

            <div className="flex items-center justify-start gap-2">
              <input
                type="radio"
                name="worktime"
                value="Part time"
                checked={formData.worktime === "Part time"}
                onChange={handleChange}
              />
              <label>Part time</label>
            </div>
            <div className="flex items-center justify-start gap-2">
              <input
                type="radio"
                name="worktime"
                value="Internship"
                checked={formData.worktime === "Internship"}
                onChange={handleChange}
              />
              <label>Internship</label>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-2">Are you</label>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="isEmployer"
              checked={!formData.isTalent}
              onChange={handleTalentChange}
            />
            <label>Employer</label>
          </div>
          <label className="text-[14px] text-dark">
            {`If you don't select "Employer", we'll assume you're a "Talent".`}
          </label>
        </div>

        <button
          type="submit"
          className="rounded-full bg-blue px-6 py-2 text-white hover:bg-darkerBlue"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
