import React from "react";
import ProjectGrid from "../components/work/ProjectGrid";
import Particles from "../components/work/Particles";
import { Features } from "../components/eldoraui/features";
import { PackageSearch, Settings, BrainCircuit, Code } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedTitle from "../animations/AnimatedTitle";
import "../animations/animate.css";

const Work = () => {
  // Animation variants for different elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  // Updated image paths to match the format used in projectDetails.ts
  const workExperienceData = [
    {
      id: 1,
      title: "Content Writer & Product Manager Intern",
      content:
        "Thaya Jewels (Mar 2023 – May 2023) - Developed SEO-optimized content, managed product listings, and implemented digital marketing strategies, improving organic search rankings by 20%.",
      image: "/projects/ThayaJewels.png", // Ensure images are in the public folder
      imagealt: "Thaya Jewels Internship",
      icon: <PackageSearch className="size-6 text-[#e4ded7]" />,
    },
    {
      id: 2,
      title: "Content Editor",
      content:
        "CSI VITAP CHAPTER (Jan 2023 – Dec 2023) - Created engaging content for multiple digital platforms, collaborated with cross-functional teams, and produced high-quality multimedia content using tools like Wondershare Filmora.",
      image: "/projects/CSI.png", // Ensure images are in the public folder
      imagealt: "CSI VITAP Chapter",
      icon: <Settings className="size-6 text-[#e4ded7]" />,
    },
    {
      id: 3,
      title: "AI Intern",
      content:
        "Edunet Foundation (Jan 2025) - Worked on Image Generation using Stable Diffusion & ComfyUI, gaining hands-on experience in fine-tuning diffusion models, optimizing prompt engineering, and leveraging advanced AI tools for creating high-quality images.",
      image: "/projects/aiintern.png", // Ensure images are in the public folder
      imagealt: "AI Internship",
      icon: <BrainCircuit className="size-6 text-[#e4ded7]" />,
    },
    {
      id: 4,
      title: "Web Developer",
      content:
        "Texvo Developers (Feb 2025 – May 2025) - Worked remotely as a Web Development Intern, designing and implementing innovative web applications using PHP, HTML, JavaScript, MySQL, and AI tools. Also implemented CRUD operations using Spring Boot.",
      image: "/projects/texvo.png", // Ensure images are in the public folder
      imagealt: "Web Development Internship",
      icon: <Code className="size-6 text-[#e4ded7]" />,
    },
  ];

  return (
    <motion.section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pb-36 pt-16 md:pb-44 md:pt-20 lg:pb-56 lg:pt-20"
      id="work"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Particles Background */}
      <Particles
        className="absolute left-0 top-0 z-0 h-full w-full"
        quantity={50}
        staticity={60}
        ease={60}
      />

      <motion.div
        className="z-10 mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]"
        variants={containerVariants}
      >
        {/* Work Experience Section */}
        <motion.div className="mb-36 w-full" variants={sectionVariants}>
          <motion.div variants={titleVariants}>
            <AnimatedTitle
              text={"Work Experience."}
              className={
                "mb-20 text-center text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-20 md:text-[60px] lg:text-[80px]"
              }
              wordSpace={"mr-[14px]"}
              charSpace={"mr-[0.001em]"}
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.2 },
              },
            }}
          >
            <Features data={workExperienceData} collapseDelay={6000} />
          </motion.div>
        </motion.div>

        {/* Projects Section with clear separation */}
        <motion.div className="mt-20 w-full" variants={sectionVariants}>
          <motion.div variants={titleVariants}>
            <AnimatedTitle
              text={"Projects."}
              className={
                "mb-20 text-center text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-20 md:text-[60px] lg:text-[80px]"
              }
              wordSpace={"mr-[14px]"}
              charSpace={"mr-[0.001em]"}
            />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.2 },
              },
            }}
          >
            <ProjectGrid />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Work;
