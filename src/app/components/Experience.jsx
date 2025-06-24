import { useState } from "react";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      role: "Full Stack Developer",
      duration: "2023 - Present",
      description:
        "Developed scalable web applications using React, Node.js, and cloud services. Led a team of 4 engineers to deliver client projects on time.",
      logo: "https://picsum.photos/200/200?random=1",
      tech: ["React", "Node.js", "AWS", "MongoDB"],
      highlights: [
        "Architected and deployed a microservices-based platform on AWS.",
        "Mentored junior developers and conducted code reviews.",
        "Integrated CI/CD pipelines for faster deployments.",
      ],
    },
    {
      company: "InnovateX Labs",
      role: "Frontend Developer",
      duration: "2021 - 2023",
      description:
        "Built modern UI components and improved performance for SaaS products. Collaborated closely with designers and backend teams.",
      logo: "https://picsum.photos/200/200?random=2",
      tech: ["React", "Redux", "Sass"],
      highlights: [
        "Redesigned dashboard UI for better usability.",
        "Reduced bundle size by 30% through code splitting.",
        "Worked with QA to automate UI testing.",
      ],
    },
    {
      company: "Freelance",
      role: "Web Developer",
      duration: "2019 - 2021",
      description:
        "Worked with startups and small businesses to create responsive websites and e-commerce solutions.",
      logo: "https://picsum.photos/200/200?random=3",
      tech: ["HTML", "CSS", "JavaScript", "WordPress"],
      highlights: [
        "Delivered 10+ client projects with 100% satisfaction.",
        "Customized WordPress themes and plugins.",
        "Provided SEO and analytics setup for clients.",
      ],
    },
  ];

  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#64ffda]">
        Experience
      </h2>
      <div className="relative max-w-2xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 w-1 h-full bg-[#64ffda]/40 rounded"></div>
        <ul className="space-y-12">
          {experiences.map((exp, idx) => (
            <li
              key={idx}
              className="relative grid grid-cols-12 gap-4 items-center opacity-0 translate-y-8 animate-fade-in-up"
              style={{
                animationDelay: `${idx * 0.2 + 0.2}s`,
                animationFillMode: "forwards",
                animationDuration: "0.7s",
              }}
            >
              {/* Timeline and details */}
              <div className="col-span-9 flex items-start">
                <span className="z-10 mt-1 w-4 h-4 rounded-full translate-x-[18px] bg-[#64ffda] border-4 border-white shadow absolute left-0"></span>
                <div className="ml-12 w-full">
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}{" "}
                    <span className="text-[#64ffda] font-normal">
                      @ {exp.company}
                    </span>
                  </h3>
                  <span className="text-sm text-[#ADB7BE]">{exp.duration}</span>
                  <p className="mt-2 text-[#ADB7BE]">{exp.description}</p>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.tech &&
                      exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-[#222] text-[#64ffda] px-2 py-1 rounded text-xs font-semibold border border-[#64ffda]/30"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                  {/* Learn More link with animated icon */}
                  <div className="mt-3">
                    <button
                      onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                      className="text-[#64ffda] text-sm underline hover:text-[#52e0c4] transition focus:outline-none flex items-center gap-1 group"
                      aria-expanded={openIdx === idx}
                      aria-controls={`exp-details-${idx}`}
                    >
                      {openIdx === idx ? "Hide Details" : "Learn More"}
                      <span
                        className={`inline-block transition-transform duration-300 group-hover:translate-x-1 ${
                          openIdx === idx ? "rotate-90" : ""
                        }`}
                        aria-hidden="true"
                      >
                        ▶
                      </span>
                    </button>
                  </div>
                  {/* Expandable highlights with animated collapse/expand */}
                  <div
                    style={{
                      overflow: "hidden",
                      transition:
                        "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1)",
                      maxHeight: openIdx === idx ? "500px" : "0",
                      opacity: openIdx === idx ? 1 : 0,
                    }}
                  >
                    <ul
                      id={`exp-details-${idx}`}
                      className="mt-3 list-disc list-inside text-[#ADB7BE] space-y-1"
                      aria-hidden={openIdx !== idx}
                    >
                      {exp.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Logo */}
              <div className="col-span-3 flex justify-center items-center">
                <img
                  src={exp.logo}
                  alt={exp.company + " logo"}
                  className="w-16 h-16 object-contain rounded-lg shadow bg-white p-2 hover:scale-110 hover:shadow-xl transition-transform duration-300"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
