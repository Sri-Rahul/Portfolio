import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
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
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
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

                <div className="mx-auto w-full lg:max-w-[1200px] justify-center">

                    {/* Programming Languages & Frameworks */}
                    <div className="mb-10 flex w-full flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-1/2">
                        <AnimatedBody delay={0.2} text="Programming Languages & Frameworks" />
                        <div>
                            <AnimatedTools className="grid grid-cols-6 gap-4" delay={0.2} stepSize={0.1} iconSize={50}>
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
                            <AnimatedTools className="grid grid-cols-2 gap-4" delay={0.3} stepSize={0.1} iconSize={50}>
                                <SiAmazonaws size={50} title="AWS" />
                                <SiGooglecloud size={50} title="Google Cloud Platform (GCP)" />
                            </AnimatedTools>
                        </div>
                    </div>

                    {/* Design Tools */}
                    <div className="mb-10 flex w-full flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-1/2">
                        <AnimatedBody delay={0.4} text="Design Tools" />
                        <div>
                            <AnimatedTools className="grid grid-cols-3 gap-4" delay={0.4} stepSize={0.1} iconSize={50}>
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
                            <AnimatedTools className="grid grid-cols-2 gap-4" delay={0.5} stepSize={0.1} iconSize={50}>
                                <SiMysql size={50} title="MySQL" />
                                <SiMongodb size={50} title="NoSQL" />
                            </AnimatedTools>
                        </div>
                    </div>

                    {/* Development Tools & Technologies */}
                    <div className="mb-10 flex w-full flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-1/2">
                        <AnimatedBody delay={0.6} text="Development Tools & Technologies" />
                        <div>
                            <AnimatedTools className="grid grid-cols-4 gap-4" delay={0.6} stepSize={0.1} iconSize={50}>
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
                            <AnimatedTools className="grid grid-cols-4 gap-4" delay={0.7} stepSize={0.1} iconSize={50}>
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
                            <AnimatedTools className="grid grid-cols-8 gap-4" delay={0.8} stepSize={0.1} iconSize={50}>
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
            </div>
        </section>
    );
};

export default Tools;
