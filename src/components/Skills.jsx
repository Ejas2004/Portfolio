import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaDatabase,
  FaPython ,FaJava 
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  
  SiPostgresql,
  SiRedux,
  SiNextdotjs,
  SiDocker
} from 'react-icons/si';
import { LuBrainCircuit } from "react-icons/lu";

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: FaHtml5, color: 'text-orange-600' },
        { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-600' },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
        { name: 'React', icon: FaReact, color: 'text-cyan-500' },
        // { name: 'Redux', icon: SiRedux, color: 'text-purple-600' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
        { name: 'Vibe Coding', icon: LuBrainCircuit, color: 'text-blue-900' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Java', icon: FaJava, color: 'text-[#E76F00]' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
        { name: 'Express', icon: SiExpress, color: 'text-gray-700 dark:text-gray-300' },
        { name: 'Python', icon: FaPython, color: 'text-blue-500' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
        { name: 'SQL', icon: FaDatabase, color: 'text-gray-600' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
        { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-20 bg-gray-50 dark:bg-dark-card transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16 animate-fade-in">
            Skills & Technologies
          </h2>

          <div className="space-y-12">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="group bg-white dark:bg-dark-bg rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 flex flex-col items-center justify-center space-y-3 animate-scale-in"
                      style={{ animationDelay: `${(idx * 0.1) + (skillIdx * 0.05)}s` }}
                    >
                      <skill.icon 
                        className={`text-5xl ${skill.color} transition-all duration-300 group-hover:scale-125 group-hover:rotate-6`} 
                      />
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
