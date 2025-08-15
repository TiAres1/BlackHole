import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 header-glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="text-2xl font-bold text-primary cursor-pointer hover:text-glow transition-all duration-300"
            onClick={() => scrollToSection('hero')}
          >
            Black Hole
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-colors duration-300 text-lg"
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-primary transition-colors duration-300 text-lg"
            >
              المميزات
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors duration-300 text-lg"
            >
              التواصل
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/50">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-foreground hover:text-primary transition-colors duration-300 text-lg text-right"
              >
                الرئيسية
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-foreground hover:text-primary transition-colors duration-300 text-lg text-right"
              >
                المميزات
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors duration-300 text-lg text-right"
              >
                التواصل
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;