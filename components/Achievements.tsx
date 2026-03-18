import FadeIn from './FadeIn';

const achievements = [
  {
    title: 'JEE Mains 99%iler',
    description: 'Scored in the 99th percentile in JEE Mains examination.',
    icon: '🎯',
  },
  {
    title: 'JEE Advanced AIR 6561',
    description: 'Secured All India Rank 6561 in JEE Advanced.',
    icon: '🏆',
  },
  {
    title: 'WBJEE AIR 387',
    description: 'Achieved All India Rank 387 in WBJEE.',
    icon: '⭐',
  },
  {
    title: 'ISI B.Stat Category Rank 27',
    description: 'Category Rank 27 in ISI B.Stat entrance examination.',
    icon: '📊',
  },
  {
    title: 'ICPC 2025–26 Regionalist',
    description:
      'Team ApexAlgo, IIT Dharwad — competed at the regional level of the International Collegiate Programming Contest.',
    icon: '💻',
  },
  {
    title: 'Quantum Computing Certification',
    description:
      'IIT Delhi, mentored by Prof. Kolin Paul. Quantum Error Correction + Stabilizer Formalism.',
    icon: '⚛',
  },
  {
    title: 'Smart India Hackathon Finalist',
    description:
      'College Level — Team HashLock, hardware tampering detection for industrial instruments.',
    icon: '🚀',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 bg-dark-100/50">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Achievements
          </h2>
          <div className="w-16 h-1 bg-accent mb-12 rounded-full" />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 80}>
              <div className="bg-dark border border-dark-border rounded-xl p-6 hover:border-accent/30 transition-colors duration-300 h-full">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
