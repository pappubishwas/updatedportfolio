import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutMe = () => {
  return (<section id="about" className="py-24 px-4 relative">
{""}
<div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        About <span className=" text-primary">Me</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>
            <p className="text-muted-foreground">
                I am a passionate web developer with a strong focus on creating
                innovative and user-friendly digital experiences. With expertise
                in modern web technologies, I thrive on building responsive and
                dynamic applications that not only meet client needs but also
                enhance user engagement. My journey in tech has been driven by a
                commitment to continuous learning and a desire to push the
                boundaries of what's possible in the digital realm.        
            </p>
            <p className="text-muted-foreground">
                My portfolio showcases a diverse range of projects, from sleek
                websites to complex web applications. Each project reflects my
                dedication to quality, attention to detail, and a passion for
                delivering exceptional results. I believe in the power of
                technology to transform ideas into reality, and I am excited to
                continue exploring new horizons in the ever-evolving world of web
                development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                    Get in Touch
                </a>
                <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                    Download CV
                </a>
            </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        <Code className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">Web Development</h4>
                        <p className="text-muted-foreground">
                            Creating responsive and dynamic web applications using modern technologies.
                        </p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        <User className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">Web Development</h4>
                        <p className="text-muted-foreground">
                            Creating responsive and dynamic web applications using modern technologies.
                        </p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        <Briefcase className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">Web Development</h4>
                        <p className="text-muted-foreground">
                            Creating responsive and dynamic web applications using modern technologies.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
  </section>);
};

export default AboutMe;
