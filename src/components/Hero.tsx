import image from "../assets/me.jpg";
import { motion } from "motion/react";
const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-5 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            alt="me"
            className="w-[250px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[300px]"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[700px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-5xl font-light md:text-7xl">
            Afolabi Oluwasegun
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent opacity-80 text-2xl md:text-3xl">
            Software Developer
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-400 ">
            Hi, I’m a skilled Full-Stack Developer with 5+ years of experience
            in Java (Spring Boot), React.js, and Node.js. I specialize in
            building scalable backend systems, seamless RESTful APIs, and
            responsive user interfaces. I’ve worked on fintech, e-commerce, and
            SaaS projects, integrating payment gateways like Stripe and
            optimizing high-traffic platforms for performance and reliability.
            Passionate about problem-solving and innovation, I thrive in
            collaborative environments and enjoy creating impactful digital
            solutions. Let’s build something great together!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
