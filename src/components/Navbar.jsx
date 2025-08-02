import React, { useEffect } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];
const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration--300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            {""}
            <span className="text-glow text-foreground">
              Pappu Bishwas
            </span>{" "}
            Portfolio
          </span>
        </a>

        {/* Dekstop nav */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {navItems.map((item, key) => (
            <a href={item.href} key={key} className="text-foreground">
              {" "}
              {item.name}{" "}
            </a>
          ))}
        </div>
        {/* Mobile nav */}
        <button
          className="md:hidden p-2 text-foreground z-50"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {" "}
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl text-semibold">
            {navItems.map((item, key) => (
              <a
                href={item.href}
                key={key}
                className="text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {" "}
                {item.name}{" "}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
