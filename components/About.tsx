import FadeIn from './FadeIn';

const metaItems = [
  { label: 'Institution', value: 'IIT Dharwad' },
  { label: 'Program', value: 'B.Tech Mathematics & Computing' },
  { label: 'Batch', value: '2025 – 2029' },
  { label: 'Focus', value: 'Quantum Computing, Post-Quantum Cryptography' },
  { label: 'Location', value: 'Kolkata, West Bengal' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-accent mb-12 rounded-full" />
        </FadeIn>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <FadeIn delay={100}>
              <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                I&apos;m a B.Tech student in Mathematics &amp; Computing at IIT
                Dharwad (2025–2029), driven by a deep curiosity for the
                mathematical foundations of computation and their real-world
                applications.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                My work spans quantum computing, post-quantum cryptography, and
                cybersecurity — from building lattice-based cryptographic schemes
                modeled after CRYSTALS-Kyber to developing autonomous drone
                systems and security tools. I believe in bridging theory and
                practice to build systems that are both mathematically elegant
                and practically robust.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                When I&apos;m not coding or reading papers, you&apos;ll find me
                competing in ICPC, tinkering with embedded hardware, or
                exploring the latest in quantum error correction.
              </p>
            </FadeIn>
          </div>

          <div className="md:col-span-2">
            <FadeIn delay={200}>
              <div className="bg-dark-100 border border-dark-border rounded-xl p-6 space-y-5">
                {metaItems.map((item) => (
                  <div key={item.label}>
                    <span className="font-mono text-xs text-accent uppercase tracking-wider">
                      {item.label}
                    </span>
                    <p className="text-gray-300 mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
