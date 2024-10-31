// components/work/WorkExperience.tsx

import React from "react";
import { SpotlightCard } from "./spotlight-card"; // Corrected relative path

interface WorkExperienceProps {
    company: string;
    role: string;
    duration: string;
    responsibilities: string[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ company, role, duration, responsibilities }) => {
  return (
    <SpotlightCard className="mb-8 w-full max-w-3xl p-8 bg-slate-800 text-[#e4ded7] rounded-3xl">
      <h3 className="text-2xl font-semibold mb-2">{company}</h3>
      <p className="text-lg mb-1">{role}</p>
      <p className="text-sm text-[#a9a9a9] mb-4">{duration}</p>
      <ul className="list-disc list-inside pl-5">
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