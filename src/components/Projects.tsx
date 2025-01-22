/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import awapay from "../assets/awapay.png";
import crosscountry from "../assets/cross-country.png";
import eight from "../assets/eight.png";
import exclusive from "../assets/exclusive.png";
import fx from "../assets/fx.png";
import sendwave from "../assets/send-wave.png";
import { motion } from "motion/react";
const Projects = () => {
  const projectsData = [
    {
      image: awapay,
      title: "Awapay Landing Page",
      description: "",
      technologies: ["React", "Tailwind", "Typescript"],
      liveLink: "https://www.awapay.ng/",
    },
    {
      image: crosscountry,
      title: "Cross-Country Bookings",
      description:
        "Landing and Bookings page for cross-country courier service",
      technologies: ["React", "Tailwind"],
    },
    {
      image: eight,
      title: "Eight fashion",
      description: "E-commerce website for eight plus",
      technologies: ["React", "Tailwind"],
      liveLink: "",
      github: "",
    },
    {
      image: exclusive,
      title: "Exclusive Ecommerce",
      description: "",
      technologies: ["React", "Tailwind"],
      liveLink: "",
      github: "",
    },
    {
      image: sendwave,
      title: "Sendwave Dashboard",
      description: "",
      technologies: ["React", "Tailwind"],
      liveLink: "",
      github: "",
    },
    {
      image: fx,
      title: "FxKudi Landing Page",
      description: "Fx kudi borderless payment",
      technologies: ["React", "Tailwind"],
      liveLink: "",
      github: "",
    },
  ];

  const ProjectCard = ({ project }: any) => {
    return (
      <ScrollReveal>
        {" "}
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
          <img
            src={project.image}
            className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
            alt=""
          />
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <div className="text-xl font-semibold">{project.title}</div>
              <p className="text-gray-400">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-5">
              {project.technologies.map((tech: string, index: number) => (
                <span className="rounded-lg bg-black p-3" key={index}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    );
  };

  const ScrollReveal = ({ children }: any) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    );
  };
  return (
    <div
      id="project"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-32"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
