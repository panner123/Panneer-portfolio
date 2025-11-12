import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Database } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'HTML & CSS', level: 100, icon: Code2, color: 'from-cyan-500 to-blue-500' },
    { name: 'JavaScript', level: 75, icon: Palette, color: 'from-purple-500 to-pink-500' },
    { name: 'React', level: 85, icon: Zap, color: 'from-yellow-500 to-orange-500' },
    { name: 'Performance Optimization', level: 80, icon: Database, color: 'from-green-500 to-teal-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            I'm a passionate frontend developer with a keen eye for design and a love for building
            exceptional digital experiences. With expertise in modern web technologies, I transform
            ideas into elegant, performant applications that users love.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-cyan-500/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color}`}>
                  <skill.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">{skill.name}</h3>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className={`h-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </div>
                <span className="text-cyan-500 font-semibold">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex gap-8 text-center">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-cyan-500 mb-2"
              >
                5+
              </motion.div>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold text-purple-500 mb-2"
              >
                2+
              </motion.div>
              <p className="text-gray-400">Years Experience</p>
            </div>
            {/* <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-4xl font-bold text-cyan-500 mb-2"
              >
                30+
              </motion.div>
              <p className="text-gray-400">Happy Clients</p>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
