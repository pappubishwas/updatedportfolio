import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const researchpapers = [
  {
    id: 1,
    title: "Automated Clip Mining from Video Data for High-Demand Content",
    description: "Developed ClipXpert, a system that automates YouTube clip extraction using keyword mining, transcription, and sentiment analysis. Built transcription-based search over video speech, mined frequent keywords and parts of speech for content highlights, and implemented dynamic clip caching. Also performed sentiment analysis on comments to assess audience engagement. Optimized for speed, relevance, and automation in high-demand video content scenarios.",
    image: "researchpapers/paper1.png",
    tags: ["Sentiment Analysis", "Automatic Speech Recognition", "NLP", "Generative AI"],
    demoUrl: "https://ieeexplore.ieee.org/document/10969233",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Urban Audio Classification Using MFCC and 1D-CNN",
    description: "Developed an urban sound classification system for South Asian audio using MFCCs and a 1D-CNN model. Handled data preprocessing, feature extraction, model selection, and training. Classified sounds like traffic, trains, music, and classroom noise from India and Bangladesh. Trained on both a custom dataset and UrbanSound8K. Achieved high accuracy, showing strong potential for use in noise monitoring, urban planning, and smart city applications.",
    image: "researchpapers/paper2.png",
    tags: ["Machine Learning ","Feature Extraction" ,"Data Cleaning", "Deep Learning", "Data Preprocessing"],
    demoUrl: "https://ieeexplore.ieee.org/document/10829485",
    githubUrl: "#",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Research Work</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          creativity. Click on the project titles to view more details.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchpapers.map((project, key) => (
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
                  <a href={project.githubUrl}
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    <Github size={20} />
                  </a>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
            <a href="https://github.com/pappubishwas" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                Check My Github <ArrowRight size={20}/>
            </a>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
