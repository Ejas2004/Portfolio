import Lanyard from './lanyard/Lanyard';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-12 md:py-20 bg-white dark:bg-dark-bg transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-16 animate-fade-in">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Profile Image - ReactBits Lanyard Component */}
            <div className="flex justify-center items-center animate-slide-in-left h-[400px] sm:h-[450px] md:h-[700px] order-1 md:order-1">
              <Lanyard position={[0, 0, 35]} gravity={[0, -40, 0]} />
            </div>

            {/* About Text */}
            <div className="space-y-4 md:space-y-6 animate-slide-in-right order-2 md:order-2">
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies.
                I specialize in building modern, scalable web applications that deliver exceptional user experiences.
              </p>

              <div className="space-y-3 md:space-y-4">
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Education
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Bachelor of Science in Computer Science
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">
                    Kerala University• 2022-2025
                  </p>
                </div>
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
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
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Focus Area
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Full Stack Development with expertise in the MERN stack ,Java Full stack.
                    I'm dedicated to writing clean, maintainable code and creating intuitive user interfaces.
                  </p>
                </div>

                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
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
