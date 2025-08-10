import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Swiggy Clone: Front-End Mini Project Using Angular",
    description:
      "A responsive Swiggy clone built with Angular, featuring restaurant listings, search, favorites, and a cart system using localStorage. Utilizes Angular services, routing, reusable components, and MockAPI for mock authentication and order flow",
    image: "/projects/project1.png",
    tags: ["Anguler", "TailwindCSS", "TypeScript", "Responsive Design"],
    demoUrl: "https://swiggy-clone87.netlify.app/",
    githubUrl: "https://github.com/pappubishwas/swiggy-clone",
  },
  {
    id: 2,
    title: "Recipe Blogs Website",
    description:
      "A responsive recipe blog built with the MERN stack, featuring advanced search functionality and seamless front-end/back-end integration for a fast and smooth user experience across devices.",
    image: "/projects/project2.png",
    tags: ["JavaScript", "MongoDB", "Node.js", "Express", "React"],
    demoUrl: "https://recipes-blogs-frontend.vercel.app/",
    githubUrl: "https://github.com/pappubishwas/recipes-blogs-frontend",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce app using React, Node.js & MongoDB with secure JWT auth, Stripe & Razorpay payments, and a built-in admin panel for product and order management.",
    image: "/projects/project3.png",
    tags: [
      "React",
      "Node.js",
      "Stripe",
      "MongoDB",
      "Razorpay",
      "JWT Authentication",
    ],
    demoUrl: "https://ecommerce-app-frontend-peach.vercel.app/",
    githubUrl: "https://github.com/pappubishwas/Ecommerce-app",
  },
  {
    id: 4,
    title: "Military, Paramilitary, Non-Military Detection",
    description:
      "Deep learning-based classification system to detect and classify images into Military, Paramilitary, and Non-Military categories using YOLO variants and advanced computer vision techniques.",
    image: "/projects/project4.png",
    tags: [
      "Deep Learning",
      "YOLOv5",
      "YOLOv8",
      "Computer Vision",
      "Image Classification",
      "Python",
    ],
    demoUrl: "",
    githubUrl:
      "https://github.com/pappubishwas/Military_ParaMilitary_NonMilitary_Detection",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          creativity. Click on the project titles to view more details.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}{" "}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/pappubishwas"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
