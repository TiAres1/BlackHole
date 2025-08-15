const HeroSection = () => {
  return (
    <section id="hero" className="hero-section min-h-screen flex items-center justify-center relative z-10 pt-20">
      <div className="container mx-auto px-6 text-center relative z-20">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-primary text-glow fade-in">
          Black Hole
        </h1>
        <div className="mt-6 w-32 h-1 bg-primary mx-auto fade-in fade-in-delay-1"></div>
      </div>
    </section>
  );
};

export default HeroSection;