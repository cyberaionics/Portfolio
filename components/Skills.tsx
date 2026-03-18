import FadeIn from './FadeIn';

const skillCategories = [
  {
    title: 'Languages',
    icon: '⟨/⟩',
    skills: ['C/C++', 'Python', 'Rust', 'Bash', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Quantum & AI',
    icon: '⟨ψ⟩',
    skills: ['Qiskit', 'Cirq', 'PyTorch', 'TensorFlow', 'ML', 'Signal Processing'],
  },
  {
    title: 'Security & Systems',
    icon: '🛡',
    skills: [
      'Kali Linux', 'Metasploit', 'Burp Suite', 'Wireshark',
      'Ghidra', 'Arduino', 'Raspberry Pi', 'ESP32',
    ],
  },
  {
    title: 'Specializations',
    icon: '◈',
    skills: [
      'Post-Quantum Cryptography', 'Quantum Algorithms',
      'Cybersecurity', 'Embedded Systems', 'Digital Forensics',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-dark-100/50">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills
          </h2>
          <div className="w-16 h-1 bg-accent mb-12 rounded-full" />
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <FadeIn key={cat.title} delay={idx * 100}>
              <div className="bg-dark border border-dark-border rounded-xl p-6 hover:border-accent/30 transition-colors duration-300 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-heading text-xl font-semibold text-white">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-mono bg-dark-200 text-gray-300 rounded-lg border border-dark-border hover:border-accent/40 hover:text-accent transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
