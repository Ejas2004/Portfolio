const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 bg-white dark:bg-dark-bg transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16 animate-fade-in">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center animate-slide-in-left">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-blue-600/20 dark:bg-blue-400/20 rounded-lg transform rotate-6 transition-transform duration-500 hover:rotate-12"></div>
                <div className="relative w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  {/* Replace with your actual image */}
                  <img
                    src="https://ui-avatars.com/api/?name=Your+Name&size=400&background=2563eb&color=fff&bold=true"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-6 animate-slide-in-right">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies.
                I specialize in building modern, scalable web applications that deliver exceptional user experiences.
              </p>

              <div className="space-y-4">
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Education
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Bachelor of Science in Computer Science
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">
                    Kerala University• 2020-2024
                  </p>
                </div>
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Internship
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                   Java Full Stack
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">
                    Qspiders• 2025-May-Sept
                  </p>
                </div>

                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Focus Area
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Full Stack Development with expertise in the MERN stack ,Java Full stack.
                    I'm dedicated to writing clean, maintainable code and creating intuitive user interfaces.
                  </p>
                </div>

                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    What I Do
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-center group">
                      <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3 transition-transform duration-300 group-hover:scale-150"></span>
                      Build responsive and performant web applications
                    </li>
                    <li className="flex items-center group">
                      <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3 transition-transform duration-300 group-hover:scale-150"></span>
                      Design and implement RESTful APIs
                    </li>
                    <li className="flex items-center group">
                      <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3 transition-transform duration-300 group-hover:scale-150"></span>
                      Create intuitive user interfaces with modern frameworks
                    </li>
                    <li className="flex items-center group">
                      <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3 transition-transform duration-300 group-hover:scale-150"></span>
                      Optimize applications for maximum speed and scalability
                    </li>
                    <li className="flex items-center group">
                      <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3 transition-transform duration-300 group-hover:scale-150"></span>
                      Creator of Vibe Coding, where code meets creativity. 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
