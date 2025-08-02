import AboutMe from "../components/AboutMe";
import ContactSection from "../components/ContactSection";
import { Footer } from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectSection from "../components/ProjectSection";
import ResearchSection from "../components/ResearchSection";
import SkillsSection from "../components/SkillsSection";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground/>
      {/* Navber */}
      <Navbar/>
      {/* Main Content */}
      <main>
        <HeroSection/>
        <AboutMe/>
        <SkillsSection/>
        <ProjectSection/>
        <ResearchSection/>
        <ContactSection/>
      </main>
      {/* Footer */}
      <Footer/>
    </div>
  );
};
