import { ArrowRight, ExternalLink } from "lucide-react";
import React from "react";

const experiences = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Chubb Business Services India",
    duration: "Sep 2024 – June 2025",
    description:
      "Worked on full-stack development with Angular, .NET, and SQL. Built a Library Management System with JWT auth, inventory, reservations, and reporting. Gained experience in Duck Creek Claims platform, API design, WCF services, and GitHub version control.",
    image: "/experience/chubb.png", 
    tags: ["Angular","Mongodb", ".NET", "SQL Server", "Full-Stack Development","Duck Creek"],
    companyUrl: "https://www.chubb.com/us-en/",
  },
  {
    id: 2,
    role: "Freelance Developer",
    company: "Self-employed",
    duration: "2023 – Present",
    description:
      "Delivered MERN-based web apps including e-commerce platforms and SaaS solutions. Implemented secure auth, payment integration, and responsive UIs using modern frameworks and cloud deployments.",
    image: "/experience/freelancer.webp",
    tags: ["MERN", "Stripe", "Razorpay", "TailwindCSS", "Vercel"],
    companyUrl: "https://github.com/pappubishwas",
  },
];

const WorkExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here’s an overview of my professional work experience and freelance contributions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {experiences.map((exp, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-40 overflow-hidden flex items-center justify-center bg-muted">
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="max-h-28 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                <p className="text-sm text-primary font-medium">{exp.company}</p>
                <p className="text-muted-foreground text-xs mb-3">{exp.duration}</p>
                <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                
                <div className="flex justify-between items-center">
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                  >
                    Visit <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/in/pappu-bishwas-tan87/"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            View LinkedIn <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
