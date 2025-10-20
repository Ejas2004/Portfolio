import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Ani Verse',
      description:
        'An interactive app for anime enthusiasts, providing a platform to discover, track, and share their favorite anime series.',
      techStack: ['React', 'Node.js','tailwindcss','tmdb-api'] ,
      image: './ani-verse.png',
      github: 'https://github.com/Ejas2004/Anime-Stream-Db.git',
      live: 'https://anime-stream-db.vercel.app/',
    },
    {
      title: 'Portfolio',
      description:
        'A modern, responsive personal portfolio showcasing my skills, projects, and creative work, built with attention to design and user experience.',
      techStack: ['React', 'TypeScript', 'Node.js', 'Express','tailwindcss'],
      image: './portfolio-img.png',
      github: 'https://github.com/Ejas2004/Portfolio.git',
      live: 'https://portfolio-tau-livid-59.vercel.app/',
    },
    // {
    //   title: 'Medical Diagnosis App',
    //   description:
    //     'A medical diagnosis assistance tool that helps healthcare professionals with preliminary assessments. Includes symptom checker and medical history management.',
    //   techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS'],
    //   image: 'https://via.placeholder.com/600x400/4A5568/FFFFFF?text=Medical+Diagnosis',
    //   github: 'https://github.com/yourusername/medical-diagnosis',
    //   live: 'https://medical-diagnosis.demo.com',
    // },
    // {
    //   title: 'E-Commerce Platform',
    //   description:
    //     'A full-featured e-commerce platform with product management, shopping cart, payment integration, and order tracking. Includes admin dashboard for inventory management.',
    //   techStack: ['Next.js', 'Node.js', 'MongoDB', 'Stripe API'],
    //   image: 'https://via.placeholder.com/600x400/4A5568/FFFFFF?text=E-Commerce',
    //   github: 'https://github.com/yourusername/ecommerce',
    //   live: 'https://ecommerce.demo.com',
    // },
    // {
    //   title: 'Task Management System',
    //   description:
    //     'A collaborative task management tool with real-time updates, team collaboration features, and project tracking. Includes Kanban boards and Gantt charts.',
    //   techStack: ['React', 'Redux', 'Node.js', 'Socket.io', 'MongoDB'],
    //   image: 'https://via.placeholder.com/600x400/4A5568/FFFFFF?text=Task+Manager',
    //   github: 'https://github.com/yourusername/task-manager',
    //   live: 'https://task-manager.demo.com',
    // },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-20 bg-white dark:bg-dark-bg transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16 animate-fade-in">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-gray-50 dark:bg-dark-card rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 animate-scale-in hover:-translate-y-2"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <FaGithub size={18} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <FaExternalLinkAlt size={16} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
