import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from '../components/Button';
import AnimatedText from '../components/AnimatedText';

export default function Hero() {
  const roles = ['Full Stack Developer', 'Front End Specialist', 'TypeScript Enthusiast'];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-black" />

      {/* Floating cyan dots */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-cyan-500/20 rounded-full"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Profile image with animated gradient */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-2xl opacity-50"></div>

              {/* Profile image */}
              <img
                src="/image.jpg"
                alt="Panneer Selvam — Profile photo"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "/fallback.jpg";
                }}
                className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white shadow-lg mx-auto"
              />
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left flex-1"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-cyan-500 text-lg md:text-xl mb-4"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent"
            >
              Panneer Selvam
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 h-12"
            >
              <AnimatedText texts={roles} className="font-semibold" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-gray-400 text-base md:text-lg max-w-xl mx-auto md:mx-0 mb-8"
            >
              Crafting beautiful, responsive web experiences with modern technologies.
              Passionate about clean code and user-centric design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button href="#projects">View Projects</Button>
              <Button variant="secondary" href="#contact">
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Chevron down to scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-cyan-500 hover:text-cyan-400 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ChevronDown size={40} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
