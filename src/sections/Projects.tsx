import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Dear Database',
      description: 'A symbol of elegance and agility, the deer embodies grace in motion and serenity in nature.',
      image: 'src/dear image.webp',
      technologies: ['HTML', 'CSS', 'JavaScript',],
      liveUrl: '#',
      githubUrl: '',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '',
      technologies: ['React', 'Firebase', 'Material-UI'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Social Media Analytics',
      description: 'Comprehensive analytics dashboard for social media metrics with data visualization and export capabilities.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Portfolio Builder',
      description: 'No-code portfolio builder allowing users to create stunning portfolios with drag-and-drop interface.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Framer Motion', 'Supabase'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      title: 'AI Writing Assistant',
      description: 'Smart writing assistant powered by AI to help with content creation, grammar checking, and style suggestions.',
      image: 'https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'OpenAI', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Here are some of my recent projects showcasing my skills in web development,
            UI/UX design, and problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-cyan-500 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
