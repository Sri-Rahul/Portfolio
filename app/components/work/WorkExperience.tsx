// components/work/WorkExperience.tsx

import React from "react";
import { SpotlightCard } from "./spotlight-card"; // Corrected relative path

interface WorkExperienceProps {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  company,
  role,
  duration,
  responsibilities,
}) => {
  return (
    <SpotlightCard className="mb-8 w-full max-w-3xl rounded-3xl bg-slate-800 p-8 text-[#e4ded7]">
      <h3 className="mb-2 text-2xl font-semibold">{company}</h3>
      <p className="mb-1 text-lg">{role}</p>
      <p className="mb-4 text-sm text-[#a9a9a9]">{duration}</p>
      <ul className="list-inside list-disc pl-5">
        {responsibilities.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    </SpotlightCard>
  );
};

export default WorkExperience;
