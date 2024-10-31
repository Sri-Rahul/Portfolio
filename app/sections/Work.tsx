import ProjectGrid from "../components/work/ProjectGrid";
import WorkExperience from "../components/work/WorkExperience";
import Spotlight from "../components/work/spotlight-card"; // Update the path accordingly
import Particles from "../components/work/Particles"; // Importing the Particles component
import React from "react";

const Work = () => {
  const experiences = [
    {
      company: "Thaya Jewels",
      role: "Content Writer & Product Manager Intern",
      duration: "Mar 2023 – May 2023",
      responsibilities: [
        "Developed SEO-optimized content for the company website, improving organic search rankings by 20%",
        "Managed product listings and assisted in implementing digital marketing strategies",
        "Gained hands-on experience with WordPress and e-commerce content management systems",
      ],
    },
    {
      company: "CSI VITAP CHAPTER",
      role: "Content Editor",
      duration: "Jan 2023 – Dec 2023",
      responsibilities: [
        "Created and edited engaging content for multiple digital platforms, increasing online engagement",
        "Collaborated with cross-functional teams to develop and implement effective communication strategies",
        "Utilized video editing tools like Wondershare Filmora to produce high-quality multimedia content",
      ],
    },
  ];

  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center py-16 md:py-20 lg:py-20 overflow-hidden"
      id="work"
    >
      {/* Particles Background */}
      <Particles className="absolute top-0 left-0 w-full h-full z-0" quantity={50} staticity={60} ease={60} />

      {/* Work Experience Title */}
      <div className="mb-10 flex gap-16 text-[#e4ded7] md:mb-16 lg:mb-20">
        <h4 className={`text-[16px] md:text-[20px] lg:text-[34px] text-[#e4ded7]`}>
                    Work Experience
        </h4>
      </div>

      {/* Spotlight Container with Extended Padding */}
      <Spotlight className="w-full flex flex-col items-center px-4 md:px-8 lg:px-16">
        {/* Work Experiences */}
        {experiences.map((exp, index) => (
          <WorkExperience
            key={index}
            company={exp.company}
            role={exp.role}
            duration={exp.duration}
            responsibilities={exp.responsibilities}
          />
        ))}
      </Spotlight>

      {/* Project Grid */}
      <ProjectGrid />
    </section>
  );
};

export default Work;
