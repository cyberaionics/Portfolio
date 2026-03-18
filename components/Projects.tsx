import FadeIn from './FadeIn';

const projects = [
  {
    title: 'Post-Quantum Cryptography: Ring-LWE',
    description:
      'From-scratch Ring-LWE scheme modeled after CRYSTALS-Kyber for post-quantum key encapsulation.',
    tags: ['Cryptography', 'Python', 'Quantum'],
  },
  {
    title: 'Quantum Optimization: QUBO & QAOA',
    description:
      'Applied QUBO formulations to differential equations and investigated QAOA performance on NISQ hardware.',
    tags: ['Qiskit', 'Quantum', 'Optimization'],
  },
  {
    title: 'Bayes Frontier: Autonomous Drone Station',
    description:
      'Autonomous docking via Bayesian inference with firmware for charging cycles.',
    tags: ['Embedded', 'Raspberry Pi', 'Bayesian'],
  },
  {
    title: 'HashLock (SIH 2025)',
    description:
      'Tamper-detection for industrial instruments using cryptographic hashing.',
    tags: ['Cryptography', 'Hardware', 'Security'],
  },
  {
    title: 'Deepfake Detection System',
    description:
      'ML pipeline for detecting facial inconsistencies in manipulated media.',
    tags: ['ML', 'PyTorch', 'CV'],
  },
  {
    title: 'Eureka: sEMG Interpretation',
    description:
      'Signal processing pipeline for sEMG data for HCI improvement.',
    tags: ['Signal Processing', 'HCI', 'ML'],
  },
  {
    title: 'BadUSB HID PoC',
    description:
      'Arduino-based keystroke injection for security awareness training.',
    tags: ['Arduino', 'Security', 'Hardware'],
  },
  {
    title: 'Robotic Arm Plotter',
    description: 'Multi-axis arm with inverse kinematics on Arduino.',
    tags: ['Arduino', 'Robotics', 'C++'],
  },
  {
    title: 'Morris AI',
    description:
      'AI HR Manager using multi agentic workflows for intelligent recruitment automation.',
    tags: ['Agentic AI', 'RAG Pipeline', 'Multi Agent Workflows'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Projects
          </h2>
          <div className="w-16 h-1 bg-accent mb-12 rounded-full" />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <FadeIn key={project.title} delay={idx * 80}>
              <div className="group bg-dark-100 border border-dark-border rounded-xl p-6 hover:border-accent/30 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-accent mt-1 text-lg">◆</span>
                  <h3 className="font-heading text-lg font-semibold text-white group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono bg-accent/10 text-accent rounded-md"
                    >
                      {tag}
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
