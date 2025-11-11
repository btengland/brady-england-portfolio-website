import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Code,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    "JavaScript",
    "React",
    "React Native",
    "TypeScript",
    "Redux",
    "Remix",
    "Python",
    "Ruby",
    "C++",
    "Java",
    "SQL",
    "HTML",
    "CSS",
    "SASS",
    "Tailwind",
    "Bootstrap",
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "Sentry",
    "Figma",
    "Jira",
    "RESTful API",
    "Cursor AI",
    "Jules AI",
  ];

  const projectTechnologies = [
    "React Native",
    "AWS Lambda",
    "WebSockets",
    "DynamoDB",
    "Sentry",
    "Cursor AI",
    "Jules AI",
  ];

  const getSkillUrl = (skill) => {
    const skillUrls = {
      JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      React: "https://react.dev/",
      "React Native": "https://reactnative.dev/",
      TypeScript: "https://www.typescriptlang.org/",
      Redux: "https://redux.js.org/",
      Remix: "https://remix.run/",
      Python: "https://www.python.org/",
      Ruby: "https://www.ruby-lang.org/en/",
      "C++": "https://isocpp.org/",
      Java: "https://www.java.com/en/",
      SQL: "https://en.wikipedia.org/wiki/SQL",
      HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      SASS: "https://sass-lang.com/",
      Tailwind: "https://tailwindcss.com/",
      Bootstrap: "https://getbootstrap.com/",
      Git: "https://git-scm.com/",
      GitHub: "https://github.com/",
      Docker: "https://www.docker.com/",
      AWS: "https://aws.amazon.com/",
      "AWS Lambda": "https://aws.amazon.com/lambda/",
      Sentry: "https://sentry.io/",
      Figma: "https://www.figma.com/",
      Jira: "https://www.atlassian.com/software/jira",
      "RESTful API": "https://restfulapi.net/",
      WebSockets:
        "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
      DynamoDB: "https://aws.amazon.com/dynamodb/",
      "Cursor AI": "https://cursor.sh/",
      "Jules AI": "https://jules.google/",
    };
    return skillUrls[skill] || "#";
  };

  const experience = [
    {
      title: "Software Engineer",
      company: "Self-Employed",
      period: "July 2025 - Present",
      points: [
        "Developing a mobile application in React Native within the Cursor AI environment",
        "Leveraging Google Jules for AI-assisted coding, testing, and debugging",
        "Monitoring user errors through Sentry",
        "Building a serverless multiplayer game backend using AWS API Gateway WebSockets, Lambda, and DynamoDB, enabling real-time hosting and joining of game sessions without a traditional backend",
      ],
    },
    {
      title: "Front End Engineer",
      company: "Vitality IO",
      period: "July 2023 - Present",
      points: [
        "Lead Front-End Developer contributing to a Utility Management application using React",
        "Collaborate closely with backend team to integrate front-end code",
        "Contribute to reporting of utility data from buildings to businesses",
        "Familiar with jQuery for versatile front-end development",
      ],
    },
    {
      title: "UX Designer",
      company: "Clear C2",
      period: "June 2022 - July 2023",
      points: [
        "Development of CRM marketing web application features and designs using Figma",
      ],
    },
    {
      title: "Front End Engineer",
      company: "Clear C2",
      period: "April 2022 - June 2022",
      points: [
        "Worked in Remix, ReactJS, JavaScript, TypeScript, Figma, and Tailwind",
        "Contributed to development of a CRM marketing web application",
      ],
    },
  ];

  const education = [
    {
      school: "Western Governors University",
      degree: "Bachelor of Science in Computer Science",
      location: "Salt Lake City, Utah",
      graduated: "May 2023",
    },
    {
      school: "Devmountain",
      degree: "Full-Stack Web Development Certification",
      location: "Lehi, Utah",
      graduated: "April 2021",
    },
    {
      school: "Utah Valley University",
      degree: "Bachelor of Science in Digital Marketing",
      location: "Orem, Utah",
      graduated: "December 2020",
    },
  ];

  return (
    <div
      className="min-h-screen text-white"
      style={{
        background:
          "linear-gradient(to bottom right, #0F172A, #581C87, #0F172A)",
      }}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold hover:scale-105 transition-transform"
            style={{
              background:
                "linear-gradient(to right, #A855F7, #EC4899, #A855F7)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            BE
          </button>
          <div className="flex gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              Project
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-purple-400 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 pt-40 pb-20"
      >
        <div className="max-w-4xl text-center">
          <div className="mb-8 animate-fade-in">
            <div
              className="w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center text-5xl font-bold"
              style={{
                background:
                  "linear-gradient(to right, #A855F7, #EC4899, #A855F7)",
              }}
            >
              BE
            </div>
          </div>
          <h1
            className="md:text-5xl font-bold mb-4 animate-fade-in leading-relaxed pb-2"
            style={{
              background:
                "linear-gradient(to right, #A855F7, #EC4899, #A855F7)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            Brady England
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-4 animate-fade-in">
            Software Engineer
          </p>
          <p className="text-base md:text-lg text-gray-400 mb-8 animate-fade-in">
            UX Design & Digital Marketing Background
          </p>
          <div className="flex gap-4 justify-center mb-12 animate-fade-in">
            <a
              href="https://github.com/btengland"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/bradyengland/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
          </div>
          <button
            onClick={() => scrollToSection("about")}
            className="inline-block animate-bounce"
          >
            <ChevronDown size={32} className="text-purple-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Code className="text-purple-400" />
            About Me
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a software engineer specializing in React and modern web
              technologies. What sets me apart is my background in UX design and
              digital marketing. I understand user flows and how to build
              products that connect with people. For example, at Vitality IO, I
              work closely with the backend team to make sure complex utility
              data displays clearly for end users, not just developers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3">
                <MapPin className="text-purple-400" size={20} />
                <span>Eagle Mountain, UT</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-purple-400" size={20} />
                <span>385-331-6171</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="text-purple-400" />
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400">
                      {job.title}
                    </h3>
                    <p className="text-xl text-gray-300">{job.company}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {job.points.map((point, idx) => (
                    <li key={idx} className="text-gray-300 flex gap-3">
                      <span className="text-purple-400 mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Code className="text-purple-400" />
            Featured Project
          </h2>
          <div
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400 transition-all shadow-xl"
            style={{
              background:
                "linear-gradient(to bottom right, rgba(192, 132, 252, 0.1), rgba(244, 114, 182, 0.1))",
            }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <Code className="text-purple-400" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-purple-400 mb-2">
                  Board Game Companion App
                </h3>
                <p className="text-lg text-gray-300 mb-4">
                  A mobile companion app for a Stonemaier Games board game. I
                  reached out to the company to ask if I could build an app for
                  one of their games, and they provided me with specifications
                  and instructions. The app tracks game state in real-time
                  across multiple devices, so players can see live updates from
                  everyone at the table while playing with the physical board.
                </p>
              </div>
            </div>

            {/* App Screenshots */}
            <div className="flex justify-center gap-6 mb-6 flex-wrap">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 w-48">
                <img
                  src="https://i.imgur.com/placeholder1.jpg"
                  alt="Vantage Connect home screen with Host and Join game options"
                  className="w-full rounded-lg shadow-lg"
                  style={{ aspectRatio: "9/19.5", objectFit: "cover" }}
                />
                <p className="text-xs text-gray-400 mt-3 text-center">
                  Home screen
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 w-48">
                <img
                  src="https://i.imgur.com/placeholder2.jpg"
                  alt="Game interface showing player info and real-time tracking"
                  className="w-full rounded-lg shadow-lg"
                  style={{ aspectRatio: "9/19.5", objectFit: "cover" }}
                />
                <p className="text-xs text-gray-400 mt-3 text-center">
                  Game tracking
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-purple-300 mb-3">
                Key Features:
              </h4>
              <ul className="space-y-2">
                <li className="text-gray-300 flex gap-3">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>
                    Real-time multiplayer functionality allowing players to see
                    each other's updates live
                  </span>
                </li>
                <li className="text-gray-300 flex gap-3">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>
                    Created with official permission and guidance from
                    Stonemaier Games
                  </span>
                </li>
                <li className="text-gray-300 flex gap-3">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>
                    Players use the app alongside their physical board game for
                    enhanced tracking
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-purple-300 mb-3">
                Technical Implementation:
              </h4>
              <ul className="space-y-2">
                <li className="text-gray-300 flex gap-3">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>
                    Developing mobile application in React Native within the
                    Cursor AI environment
                  </span>
                </li>
                <li className="text-gray-300 flex gap-3">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>
                    Leveraging Google Jules for AI-assisted coding, testing, and
                    debugging
                  </span>
                </li>
                <li className="text-gray-300 flex gap-3">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>
                    Monitoring user errors and performance through Sentry
                  </span>
                </li>
                <li className="text-gray-300 flex gap-3">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>
                    Building serverless multiplayer backend using AWS API
                    Gateway WebSockets, Lambda, and DynamoDB
                  </span>
                </li>
                <li className="text-gray-300 flex gap-3">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>
                    Enabling real-time hosting and joining of game sessions
                    without a traditional backend server
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {projectTechnologies.map((tech, index) => (
                <a
                  key={index}
                  href={getSkillUrl(tech)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-purple-500/30 rounded-full text-sm border border-purple-400/50 hover:border-purple-400/80 transition-all"
                >
                  {tech}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Award className="text-purple-400" />
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <a
                key={index}
                href={getSkillUrl(skill)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-purple-400/30 hover:border-purple-400 hover:scale-105 transition-all cursor-pointer"
                style={{
                  background:
                    "linear-gradient(to right, rgba(192, 132, 252, 0.2), rgba(244, 114, 182, 0.2))",
                }}
              >
                {skill}
              </a>
            ))}
          </div>
          <div className="mt-12 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              Additional Skills
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-3">
                <span className="text-purple-400">▹</span> Fluent in Spanish
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">▹</span> Formal communication
                training and sales experience
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">▹</span> Working knowledge of
                Facebook Ads and Google Ads
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">▹</span> Content and Inbound
                Marketing certified through HubSpot
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <GraduationCap className="text-purple-400" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all"
              >
                <h3 className="text-2xl font-bold text-purple-400">
                  {edu.school}
                </h3>
                <p className="text-xl text-gray-300 mt-2">{edu.degree}</p>
                <div className="flex flex-col md:flex-row md:justify-between mt-3 text-gray-400">
                  <span>{edu.location}</span>
                  <span>Graduated {edu.graduated}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="flex gap-6 justify-center">
            <a
              href="https://www.linkedin.com/in/bradyengland/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-lg hover:shadow-purple-500/50"
              style={{
                background:
                  "linear-gradient(to right, #C084FC, #F9A8D4, #C084FC)",
              }}
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/btengland"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-700/50 rounded-full font-bold hover:bg-slate-600/50 transition-all"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section id="contact" className="bg-slate-900/50">
        <footer className="py-8 px-6 text-center text-gray-400 border-t border-white/10">
          <p>© 2025 Brady England. Built with React & Tailwind CSS.</p>
        </footer>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
