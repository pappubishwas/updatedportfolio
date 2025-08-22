import React from "react";
import { cn } from "../lib/utils";

const skills = [
  { name: "JavaScript", category: "Programming" },
  { name: "Python", category: "Programming" },
  { name: "Java", category: "Programming" },
  { name: "C++", category: "Programming" },
  { name: "React", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Docker", category: "DevOps" },
  { name: "Git/GitHub", category: "DevOps" },
  { name: "Figma", category: "Tools" },
  { name: "TensorFlow", category: "ML/Data" },
  { name: "PyTorch", category: "ML/Data" },
  { name: "Scikit-learn", category: "ML/Data" },
];

const categories = ["all", "Programming", "Frontend", "Backend", "ML/Data", "DevOps", "Tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = React.useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-gradient-to-b from-secondary/40 via-background to-secondary/40">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, key) => (
            <button
              onClick={() => setActiveCategory(category)}
              key={key}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-card text-foreground hover:bg-primary/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="group p-6 bg-card rounded-xl shadow-md border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {/* Placeholder Icon */}
                <span className="font-bold text-lg">{skill.name[0]}</span>
              </div>
              <h3 className="font-semibold text-base group-hover:text-primary transition-colors duration-300">
                {skill.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {skill.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
