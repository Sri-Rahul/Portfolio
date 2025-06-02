import React from "react";
import ProjectCard from "./ProjectCard";
import { projects, ProjectProps } from "./projectDetails"; // Ensure projectDetails.ts is in the same directory
import { motion } from "framer-motion";
import AnimatedBody from "../../animations/AnimatedBody";

const ProjectGrid: React.FC = () => {
  // Animation variants for the project grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <motion.div 
        className="grid w-full grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1 mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((project: ProjectProps, index) => (
          <motion.div
            key={project.id}
            variants={projectVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <ProjectCard
              id={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              techNames={project.techNames}
              techLinks={project.techLinks}
              github={project.github}
              demo={project.demo}
              image={project.image}
              available={project.available}
              publication={project.publication}
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default ProjectGrid;
