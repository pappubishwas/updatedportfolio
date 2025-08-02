import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {""}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className=" text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>
            <p className="text-muted-foreground">
              I'm a versatile full-stack developer with hands-on experience in
              building modern web and mobile applications using technologies
              like React, Angular, Node.js, and MongoDB. I enjoy crafting clean,
              responsive UIs and integrating them seamlessly with robust backend
              systems. I also explore Machine Learning and Data Analytics, using
              data to drive smarter solutions.
            </p>
            <p className="text-muted-foreground">
              My portfolio includes a range of projects—from e-commerce
              platforms and recipe blogs to ML-powered dashboards—each
              reflecting my focus on performance, scalability, and user
              experience. I'm passionate about solving real-world problems
              through technology and constantly evolving with new tools and
              frameworks in the development ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
              <a
                href="/Pappu_Bishwas_Updated_Resume_Ov_06.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {/* Web Development */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building fast, responsive, and scalable web applications
                    using modern tech stacks like React, Node.js, and more.
                  </p>
                </div>
              </div>
            </div>

            {/* App Development */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">App Development</h4>
                  <p className="text-muted-foreground">
                    Creating native Android apps with seamless UI/UX and robust
                    backend integration using Java and REST APIs.
                  </p>
                </div>
              </div>
            </div>

            {/* Machine Learning & Data Analytics */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Machine Learning & Data Analytics
                  </h4>
                  <p className="text-muted-foreground">
                    Delivering insights and intelligent solutions through ML
                    models, data visualization, and predictive analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
