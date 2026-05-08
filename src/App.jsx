import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const projects = [
    {
      title: "MedSynthAI",
      description:
        "AI-based healthcare synthetic data generation system using GANs, VAEs, Differential Privacy, and Federated Learning.",
    },
    {
      title: "AI Resume Analyzer",
      description:
        "Analyzes resumes, predicts ATS score, extracts skills, and suggests improvements.",
    },
    {
      title: "Weather App",
      description:
        "Real-time weather forecasting application using APIs and responsive UI design.",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Machine Learning",
    "MongoDB",
    "GitHub",
    "Tailwind CSS",
    "Flask",
  ];

  return (
    <div
      className={
        darkMode
          ? "bg-black text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-gray-700">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">Ritika Patil</h1>

          <div className="flex items-center gap-6 text-lg">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Hi, I'm Ritika
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-xl max-w-2xl text-gray-400"
        >
          CSE Student | AI & Full Stack Developer | Building Real-World AI
          Applications
        </motion.p>

        <div className="flex gap-6 mt-8 text-3xl">
          <a href="https://github.com/yourgithub" target="_blank">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/in/yourlinkedin" target="_blank">
            <FaLinkedin />
          </a>

          <a href="mailto:yourmail@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <div className="mt-10 flex gap-4">
          <a
            href="/resume.pdf"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="border border-gray-500 px-6 py-3 rounded-xl"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-lg leading-8 text-gray-400">
            I am a Computer Science Engineering student passionate about AI,
            Machine Learning, and Full Stack Development. I enjoy building
            modern applications that solve real-world problems using technology.
            My interests include healthcare AI, privacy-preserving systems,
            responsive web development, and cloud deployment.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={index}
              className="border border-gray-700 rounded-2xl p-6 text-center shadow-lg"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="border border-gray-700 rounded-3xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

              <p className="text-gray-400 leading-7">
                {project.description}
              </p>

              <button className="mt-6 bg-blue-600 px-5 py-2 rounded-xl">
                View Project
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Certifications</h2>

        <div className="space-y-6">
          <div className="border border-gray-700 p-6 rounded-2xl">
            IBM AI Fundamentals
          </div>

          <div className="border border-gray-700 p-6 rounded-2xl">
            Python for Data Science
          </div>

          <div className="border border-gray-700 p-6 rounded-2xl">
            Web Development Bootcamp
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

        <p className="text-lg text-gray-400 mb-10">
          Open to internships, collaborations, and exciting opportunities.
        </p>

        <div className="flex justify-center gap-8 text-4xl">
          <a href="https://github.com/yourgithub" target="_blank">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/in/yourlinkedin" target="_blank">
            <FaLinkedin />
          </a>

          <a href="mailto:yourmail@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;