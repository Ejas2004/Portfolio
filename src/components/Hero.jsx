import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-dark-bg dark:to-dark-card transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Ejas S</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animate-delay-100">
            Full Stack Developer
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in animate-delay-200">
            I build exceptional digital experiences that combine clean code with elegant design.
            Specializing in modern web technologies and user-centric solutions.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-slide-up animate-delay-300">
            <a
              href="https://github.com/Ejas2004"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/ejas-s-603b28296"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:ejas.connect@gmail.com"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-scale-in animate-delay-400"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
