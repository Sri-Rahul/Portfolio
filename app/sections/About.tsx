import React from 'react';
import "../animations/animate.css";
import AnimatedTitle from "../animations/AnimatedTitle";
import LetterPullUp from "../animations/LetterPullUp";
import Particles from "../components/work/Particles";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      {/* Particles Background */}
      <Particles className="absolute top-0 left-0 w-full h-full z-0" quantity={50} staticity={60} ease={60} />

      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px] z-10">
        <AnimatedTitle
          text={"Sri Rahul Namana."}
          className={
            "mb-10 text-center text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-center text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[24px]">
            {/* Your About content goes here */}
            <LetterPullUp
              text="I am a versatile Computer Science professional from Vellore Institute of Technology, where I developed a strong foundation in software development and data structures. My unique blend of technical expertise and creative skills sets me apart - from developing machine learning models to crafting user experiences in Figma, I bring a holistic approach to technology solutions."
              className="mb-4"
            />

            <LetterPullUp
              text="My experience as a Content Writer at Thaya Jewels and Content Editor at CSI VITAP CHAPTER has honed my ability to communicate complex technical concepts effectively. I'm particularly passionate about emerging technologies, having worked on projects involving IoT, Computer Vision, and Cloud Computing (AWS and GCP). As a former National Cadet Corps member, I developed strong leadership and disciplinary skills that complement my technical abilities."
              className="mb-4"
            />

            <LetterPullUp
              text="My diverse project portfolio, including an Automated Shopping Experience system and a Road Accident Severity Prediction model, demonstrates my commitment to creating technology solutions that make a real-world impact. With certifications in UI/UX Design, Cloud Computing, and various programming technologies, I continuously strive to stay at the forefront of technological advancement while maintaining a user-centered approach in all my work."
              className="mb-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
