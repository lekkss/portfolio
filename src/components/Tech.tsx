import {
  BiLogoDocker,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  SiReact,
  SiSpringboot,
  SiMysql,
  SiGit,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiKubernetes,
} from "react-icons/si";
import { motion } from "motion/react";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const techStack = [
    { name: "TypeScript", icon: BiLogoTypescript, color: "text-sky-500" },
    { name: "JavaScript", icon: BiLogoJavascript, color: "text-orange-500" },
    { name: "Docker", icon: BiLogoDocker, color: "text-sky-500" },
    { name: "Node.js", icon: BiLogoNodejs, color: "text-green-500" },
    { name: "PostgreSQL", icon: BiLogoPostgresql, color: "text-sky-500" },
    { name: "Tailwind CSS", icon: BiLogoTailwindCss, color: "text-sky-500" },
    { name: "Java", icon: BiLogoJava, color: "text-red-500" },
    { name: "React", icon: SiReact, color: "text-blue-500" },
    { name: "Spring Boot", icon: SiSpringboot, color: "text-green-600" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
    { name: "Git", icon: SiGit, color: "text-orange-600" },
    { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-600" },
    { name: "Redux", icon: SiRedux, color: "text-purple-500" },
    { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-400" },
  ];

  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <tech.icon
              className={`cursor-pointer text-[80px] ${tech.color} transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
