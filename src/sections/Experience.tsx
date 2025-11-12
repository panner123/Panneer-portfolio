import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      type: 'work',
      year: '2023 - Present',
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      description: 'Leading the frontend development team, architecting scalable React applications, and mentoring junior developers.',
      icon: Briefcase
    },
    {
      type: 'work',
      year: '2021 - 2023',
      title: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Built responsive web applications using React, TypeScript, and modern CSS frameworks. Collaborated with design team to implement pixel-perfect UIs.',
      icon: Briefcase
    },
    {
      type: 'education',
      year: '2020 - 2021',
      title: 'Full Stack Web Development',
      company: 'Code Academy',
      description: 'Completed intensive bootcamp covering modern web development technologies including React, Node.js, and databases.',
      icon: GraduationCap
    },
    {
      type: 'work',
      year: '2019 - 2021',
      title: 'Junior Web Developer',
      company: 'StartUp Ventures',
      description: 'Developed and maintained company websites, implemented new features, and optimized performance for better user experience.',
      icon: Briefcase
    },
    {
      type: 'education',
      year: '2016 - 2019',
      title: 'Bachelor of Computer Science',
      company: 'University of Technology',
      description: 'Graduated with honors. Focused on software engineering, algorithms, and web technologies.',
      icon: GraduationCap
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            My journey in web development and continuous learning.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                } md:w-1/2`}
              >
                <div className="flex items-center gap-4 mb-4 md:hidden">
                  <div className={`p-3 rounded-full ${
                    exp.type === 'work' ? 'bg-cyan-500' : 'bg-purple-500'
                  }`}>
                    <exp.icon size={20} className="text-white" />
                  </div>
                  <span className="text-cyan-500 font-semibold">{exp.year}</span>
                </div>

                <div className={`absolute hidden md:flex items-center justify-center w-16 h-16 rounded-full ${
                  exp.type === 'work' ? 'bg-cyan-500' : 'bg-purple-500'
                } left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-black`}
                  style={{ top: '2rem' }}
                >
                  <exp.icon size={24} className="text-white" />
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-${
                    exp.type === 'work' ? 'cyan' : 'purple'
                  }-500/50 transition-all ml-12 md:ml-0`}
                >
                  <span className={`hidden md:inline-block text-${
                    exp.type === 'work' ? 'cyan' : 'purple'
                  }-500 font-semibold mb-2`}>
                    {exp.year}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className={`text-${
                    exp.type === 'work' ? 'cyan' : 'purple'
                  }-400 mb-3`}>
                    {exp.company}
                  </p>
                  <p className="text-gray-400 text-sm">{exp.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
