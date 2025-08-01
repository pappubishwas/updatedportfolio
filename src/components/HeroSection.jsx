import { ArrowDown } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Pappu
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Bishwas
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl opacity-0 animate-fade-in-delay-3">
            A Full Stack Developer, Data Scientist, Android App Developer, and
            Machine Learning Engineer with over 2+ years of hands-on experience
            delivering impactful, end-to-end digital solutions. I specialize in
            building powerful web and mobile applications while also developing
            data-driven systems using advanced AI/ML models. My strength lies in
            bridging the gap between software engineering and data science —
            helping businesses solve complex problems, make smarter decisions,
            and scale efficiently.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
                View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">
            Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary"/>
      </div>
    </section>
  );
};

export default HeroSection;
