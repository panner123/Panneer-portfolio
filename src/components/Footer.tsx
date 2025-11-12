import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/panner123', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/panneer-selvam-e-b92656306', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm mb-4 md:mb-0"
          >
            <p className="flex items-center gap-2">
              © 2025 Panneer Selvam. Made with <FaHeart className="text-red-500" /> and React
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-500 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
