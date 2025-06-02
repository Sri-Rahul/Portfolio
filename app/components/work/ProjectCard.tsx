import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../../animations/AnimatedTitle";
import AnimatedBody from "../../animations/AnimatedBody";
import { motion } from "framer-motion";
import Container from "../container/Container";
import React from "react";
import { SiGithub } from "react-icons/si";
import { BsLink45Deg } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  techNames,
  techLinks,
  github,
  demo,
  image,
  available,
  publication,
}: ProjectProps) => {
  // Animation variants for project card elements
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };



  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: -10
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  const techStackVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const techItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className={`relative bg-cover bg-no-repeat bg-center z-10 h-[550px] w-full items-stretch justify-center py-0 sm:h-[700px] sm:w-[100%] md:h-[650px] md:w-[100%] lg:h-[500px]`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3 }
      }}
    >
      <Container
        width="100%"
        height="100%"
        borderRadius={25}
        color="rgba(255, 255, 255, 0.1)"
        blur={false}
        grain={true}
        top="0px"
        left="0px"
        angle={0}
      >
        <div>
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            className={`absolute -bottom-2 w-[70%] sm:w-[85%] md:w-[60%] lg:max-w-[55%] ${
              id % 2 === 0 ? "right-0" : "left-0"
            }`}
            priority={true}
          />
        </div>
        <motion.div
          className={`absolute top-0 text-[#0E1016] ${
            id % 2 === 0 ? "left-0 ml-8 lg:ml-14" : "right-0 mr-8 lg:mr-14"
          } mt-6 flex items-center justify-center gap-4 lg:mt-10`}
          variants={buttonVariants}
        >
          {available ? (
            <>
              {github && (
                <Link
                  href={github}
                  target="_blank"
                  aria-label="Open GitHub Repository"
                  className="rounded-full w-[43px] bg-white p-3 md:p-5 text-[20px] md:w-[65px] md:text-[24px] lg:w-[65px] lg:text-[28px]"
                  data-blobity
                  data-blobity-radius="35"
                  data-blobity-offset-x="4"
                  data-blobity-offset-y="4"
                  data-blobity-magnetic="false"
                >
                  <SiGithub />
                </Link>
              )}
              {demo && (
                <Link
                  href={demo}
                  target="_blank"
                  aria-label="Open Live Demo"
                  className="w-[43px] rounded-full bg-white p-3 md:p-5 text-[20px] md:w-[65px] md:text-[24px] lg:w-[65px] lg:text-[28px]"
                  data-blobity
                  data-blobity-radius="35"
                  data-blobity-offset-x="4"
                  data-blobity-offset-y="4"
                  data-blobity-magnetic="false"
                >
                  <BsLink45Deg />
                </Link>
              )}
              {publication && (
                <Link
                  href={publication}
                  target="_blank"
                  aria-label="View IEEE Publication"
                  className="w-[43px] rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-3 md:p-5 text-[20px] md:w-[65px] md:text-[24px] lg:w-[65px] lg:text-[28px] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  data-blobity
                  data-blobity-radius="35"
                  data-blobity-offset-x="4"
                  data-blobity-offset-y="4"
                  data-blobity-magnetic="false"
                >
                  <FaFileAlt />
                </Link>
              )}
            </>
          ) : (
            <div></div>
          )}
        </motion.div>
        
        {/* Conference Paper Tag */}
        {publication && (
          <div
            className={`absolute top-6 ${
              id % 2 === 0 ? "right-6" : "left-6"
            } z-30`}
          >
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-2xl border-2 border-white/20">
                <div className="flex items-center gap-2">
                  <FaFileAlt className="text-[12px]" />
                  <span>IEEE Published</span>
                </div>
              </div>
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-md opacity-50 animate-pulse -z-10"></div>
            </div>
          </div>
        )}
        <motion.div
          className={`absolute text-white ${
            !(id % 2 === 0)
              ? "right-0 top-32 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-60 lg:mr-4"
              : "left-10 top-32 ml-0 md:mr-12 lg:top-52 lg:ml-4"
          } mb-10 md:mb-16 lg:mb-14`}
          initial={{ opacity: 0, x: id % 2 === 0 ? -30 : 30 }}
          whileInView={{ 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.7, delay: 0.3 }
          }}
          viewport={{ once: true }}
        >
          <AnimatedTitle
            text={name}
            className={
              "max-w-[90%] text-[40px] leading-none text-white md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none"
            }
            wordSpace={"mr-[0.25em]"}
            charSpace={"-mr-[0.01em]"}
          />
          <AnimatedBody
            text={description}
            className={
              "mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D]"
            }
          />
          <motion.div 
            className="mt-9 mb-9 grid grid-cols-5 gap-5 col-start-1 col-end-2"
            variants={techStackVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {technologies.map((IconComponent, index) => (
              <motion.div 
                key={index} 
                className={"relative"}
                variants={techItemVariants}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <Link
                  href={techLinks[index]}
                  target="_blank"
                  aria-label={`Learn more about ${techNames[index]}`}
                  className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                  title={techNames[index]}
                  data-blobity-tooltip={techNames[index]}
                  data-blobity-magnetic="false"
                >
                  <IconComponent />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </motion.div>
  );

};

export default ProjectCard;
