/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import awapay from "../assets/awapay.png";
import crosscountry from "../assets/cross-country.png";
import eight from "../assets/eight.png";
import exclusive from "../assets/exclusive.png";
import fx from "../assets/fx.png";
import tour from "../assets/tour.png";
import sendwave from "../assets/send-wave.png";
import { motion } from "motion/react";
const Projects = () => {
  const projectsData = [
    {
      image: awapay,
      title: "Awapay Landing Page",
      description:
        "A sleek and responsive landing page for a digital wallet platform, showcasing features and improving user engagement.",
      technologies: ["React", "Tailwind", "Typescript"],
      liveLink: "https://www.awapay.ng",
      github: "",
    },
    {
      image: crosscountry,
      title: "Cross-Country Bookings",
      description:
        "A user-friendly transport booking platform that allows users to select seats and schedule trips seamlessly.",
      technologies: ["React", "Tailwind"],
      liveLink: "https://cross-country.netlify.app/",
      github: "",
    },
    {
      image: eight,
      title: "Eight Fashion",
      description:
        "An e-commerce website for Eight Plus, providing a responsive shopping experience for fashion enthusiasts.",
      technologies: ["React", "Tailwind"],
      liveLink: "https://eightplus.netlify.app/",
      github: "",
    },
    {
      image: exclusive,
      title: "Exclusive Ecommerce",
      description:
        "A dynamic e-commerce site with a modern design, offering a smooth shopping experience and product management.",
      technologies: ["React", "Tailwind"],
      liveLink: "https://exxclusive.netlify.app/",
      github: "https://github.com/lekkss/exclusive-ecommerce",
    },
    {
      image: sendwave,
      title: "Sendwave Dashboard",
      description:
        "An admin dashboard for managing and tracking transactions on the Sendwave platform, designed for scalability.",
      technologies: ["React", "Tailwind"],
      liveLink: "https://xendwave.netlify.app/dashboard",
      github: "",
    },
    {
      image: fx,
      title: "FxKudi Landing Page",
      description:
        "A responsive landing page for FxKudi, a borderless payment platform, highlighting its features and services.",
      technologies: ["React", "Tailwind"],
      liveLink: "https://fxkudi.com",
      github: "",
    },
    {
      image: tour,
      title: "Touramp",
      description:
        "A food  platform featuring an engaging user interface for exploring food experiences.",
      technologies: ["React", "Tailwind"],
      liveLink: "https://tour-ramp.netlify.app/",
      github: "",
    },
  ];

  const ProjectCard = ({ project }: any) => {
    return (
      <ScrollReveal>
        <div className="flex flex-col bg-[#1a1a1a] h-full text-white rounded-xl p-5 hover:shadow-lg transition-shadow duration-300">
          {/* Project Image */}
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full h-[200px] object-cover"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 rounded-lg transition-opacity duration-300 hover:opacity-100">
              <div className="flex gap-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 px-3 py-1 rounded-full text-sm hover:bg-green-400"
                  >
                    Preview
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-400"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-400 mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {project.technologies.map((tech: any, i: number) => (
                <span
                  key={i}
                  className="bg-gray-700 px-2 py-1 rounded-lg text-xs font-medium"
                >
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
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
