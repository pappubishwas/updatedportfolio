import React from "react";
import { cn } from "../lib/utils";

const skills = [
  // All Languages
  { name: "JavaScript", level: 90, category: "Programming language" },
  { name: "Python", level: 85, category: "Programming language" },
  { name: "Java", level: 75, category: "Programming language" },
  { name: "C++", level: 95, category: "Programming language" },
  { name: "C#", level: 85, category: "Programming language" },
  { name: "C", level: 90, category: "Programming language" },
  { name: "R", level: 80, category: "Programming language" },


  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Angular", level: 80, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Redux/Context API", level: 85, category: "frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },
  { name: "Firebase", level: 70, category: "backend" },
  { name: "JWT Auth", level: 80, category: "backend" },
  { name: "Firebase", level: 80, category: "backend" },

  // Machine Learning & Data
  { name: "Pandas", level: 80, category: "ml-data" },
  { name: "NumPy", level: 75, category: "ml-data" },
  { name: "Scikit-learn", level: 70, category: "ml-data" },
  { name: "Matplotlib/Seaborn", level: 70, category: "ml-data" },
  { name: "Pythorch", level: 70, category: "ml-data" },
  { name: "Tensorflow", level: 70, category: "ml-data" },

  // Mobile Development
  { name: "Andorid App", level: 75, category: "mobile" },
  { name: "XML", level: 75, category: "mobile" },

  // Tools & DevOps
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
  { name: "Colab", level: 90, category: "tools" },
  { name: "Kaggle", level: 89, category: "tools" },
  { name: "Jupyter Notebook", level: 85, category: "tools" },
  { name: "Vercel/Netlify", level: 80, category: "tools" },
  { name: "Render/Heroku", level: 70, category: "tools" },
];


const categories = ["all", "frontend", "backend", "tools","ml-data", "mobile", "Programming language"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const filteredSkills= skills.filter((skill)=>
    activeCategory === "all" || skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              onClick={() => setActiveCategory(category)}
              key={key}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}{" "}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1s_ease-in-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {" "}
                  {skill.level}%{" "}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
