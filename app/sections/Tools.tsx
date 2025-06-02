import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import { InlineMarquee } from "../components/eldoraui/inline-marquee";
import Image from "next/image";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiGooglecloud,
  SiFigma,
  SiCanva,
  SiAdobe,
  SiMysql,
  SiMongodb,
  SiGit,
  SiWordpress,
  SiTensorflow,
  SiOpencv,
  SiCodeberg,
} from "react-icons/si";
import {
  FaCogs,
  FaJava,
  FaServer,
  FaNetworkWired,
  FaProjectDiagram,
  FaPenNib,
  FaUsers,
  FaBrain,
  FaLightbulb,
  FaComments,
  FaBullhorn,
  FaPencilAlt,
} from "react-icons/fa";
import AnimatedTools from "../animations/AnimatedTools";

const Tools = () => {
  // Certification companies data
  const certificationProviders = [
    {
      name: "Google",
      url: "https://res.cloudinary.com/eldoraui/image/upload/v1734066341/Google_fav2wl.svg",
    },
    {
      name: "Coursera",
      url: "/projects/coursera.svg",
    },
    {
      name: "AWS",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "Google Cloud",
      url: "https://cloud.google.com/_static/cloud/images/cloud-logo.svg",
    },
    {
      name: "Cisco Networking Academy",
      url: "/projects/cisco.svg",
    },
    {
      name: "Future Learn",
      url: "/projects/futurelearn.png",
    },
  ];

  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pb-36 pt-16 md:pb-44 md:pt-20 lg:pb-56 lg:pt-20"
      id="tools"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"Skills."}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto w-full justify-center lg:max-w-[1200px]">
          {/* Programming Languages & Frameworks */}
          <div className="mb-10 flex w-full flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-1/2">
            <AnimatedBody
              delay={0.2}
              text="Programming Languages & Frameworks"
            />
            <div>
              <AnimatedTools
                className="grid grid-cols-6 gap-4"
                delay={0.2}
                stepSize={0.1}
                iconSize={50}
              >
                <SiJavascript size={50} title="JavaScript" />
                <SiTypescript size={50} title="TypeScript" />
                <SiPython size={50} title="Python" />
                <FaJava size={50} title="Java" />
                <SiHtml5 size={50} title="HTML5" />
                <SiCss3 size={50} title="CSS3" />
              </AnimatedTools>
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="mb-10 flex w-full flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-1/2">
            <AnimatedBody delay={0.3} text="Cloud & DevOps" />
            <div>
              <AnimatedTools
                className="grid grid-cols-2 gap-4"
                delay={0.3}
                stepSize={0.1}
                iconSize={50}
              >
                <SiAmazonaws size={50} title="AWS" />
                <SiGooglecloud size={50} title="Google Cloud Platform (GCP)" />
              </AnimatedTools>
            </div>
          </div>

          {/* Design Tools */}
          <div className="mb-10 flex w-full flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-1/2">
            <AnimatedBody delay={0.4} text="Design Tools" />
            <div>
              <AnimatedTools
                className="grid grid-cols-3 gap-4"
                delay={0.4}
                stepSize={0.1}
                iconSize={50}
              >
                <SiFigma size={50} title="Figma" />
                <SiCanva size={50} title="Canva" />
                <SiAdobe size={50} title="Adobe Creative Suite" />
              </AnimatedTools>
            </div>
          </div>

          {/* Database Technologies */}
          <div className="mb-10 flex w-full flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-1/2">
            <AnimatedBody delay={0.5} text="Database Technologies" />
            <div>
              <AnimatedTools
                className="grid grid-cols-2 gap-4"
                delay={0.5}
                stepSize={0.1}
                iconSize={50}
              >
                <SiMysql size={50} title="MySQL" />
                <SiMongodb size={50} title="NoSQL" />
              </AnimatedTools>
            </div>
          </div>

          {/* Development Tools & Technologies */}
          <div className="mb-10 flex w-full flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-1/2">
            <AnimatedBody delay={0.6} text="Development Tools & Technologies" />
            <div>
              <AnimatedTools
                className="grid grid-cols-4 gap-4"
                delay={0.6}
                stepSize={0.1}
                iconSize={50}
              >
                <SiGit size={50} title="Git" />
                <SiWordpress size={50} title="WordPress" />
                <SiTensorflow size={50} title="TensorFlow" />
                <SiOpencv size={50} title="OpenCV" />
              </AnimatedTools>
            </div>
          </div>

          {/* Additional Technical Skills */}
          <div className="mb-10 flex w-full flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-1/2">
            <AnimatedBody delay={0.7} text="Additional Technical Skills" />
            <div>
              <AnimatedTools
                className="grid grid-cols-4 gap-4"
                delay={0.7}
                stepSize={0.1}
                iconSize={50}
              >
                <FaCogs size={50} title="Data Structures" />
                <SiCodeberg size={50} title="Algorithms" />
                <FaServer size={50} title="Operating Systems" />
                <FaNetworkWired size={50} title="Computer Networking" />
              </AnimatedTools>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mb-10 flex w-full flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-1/2">
            <AnimatedBody delay={0.8} text="Soft Skills" />
            <div>
              <AnimatedTools
                className="grid grid-cols-8 gap-4"
                delay={0.8}
                stepSize={0.1}
                iconSize={50}
              >
                <FaProjectDiagram size={50} title="Project Management" />
                <FaPenNib size={50} title="Technical Writing" />
                <FaUsers size={50} title="Team Leadership" />
                <FaBrain size={50} title="Problem Solving" />
                <FaLightbulb size={50} title="Critical Thinking" />
                <FaComments size={50} title="Communication" />
                <FaPencilAlt size={50} title="Content Development" />
                <FaBullhorn size={50} title="Digital Marketing" />
              </AnimatedTools>
            </div>
          </div>
        </div>

        {/* New Certifications Section */}
        <div className="mx-auto mt-20 w-full lg:max-w-[1200px]">
          <div className="relative">
            <div className="mb-8 text-center">
              <h3 className="text-lg font-semibold uppercase tracking-wider text-[#e4ded7] opacity-70">
                My Professional Certifications are from
              </h3>
            </div>

            <div className="relative">
              <InlineMarquee className="max-w-full" speed={20}>
                {certificationProviders.map((provider, idx) => (
                  <Image
                    key={idx}
                    width={140}
                    height={50}
                    src={provider.url}
                    className="w-35 h-12 flex-shrink-0 opacity-60 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0 dark:brightness-0 dark:invert"
                    alt={`${provider.name} Certification`}
                  />
                ))}
              </InlineMarquee>

              {/* Gradient overlays for smooth fade effect */}
              <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/4 bg-gradient-to-r from-[#0E1016] to-transparent"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/4 bg-gradient-to-l from-[#0E1016] to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
