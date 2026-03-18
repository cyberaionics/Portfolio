import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-dark to-dark" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <FadeIn>
          <p className="font-mono text-accent text-sm mb-4 tracking-widest uppercase">
            Hello, I&apos;m
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Ankush Tarafdar
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Mathematics &amp; Computing &bull; IIT Dharwad
            <br />
            Exploring the Intersection of Quantum Computing, Cryptography &amp;
            Cybersecurity
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-dark font-semibold rounded-lg hover:bg-accent-dark transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/30"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-dark-border text-gray-300 rounded-lg hover:border-accent/50 hover:text-accent transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
}
