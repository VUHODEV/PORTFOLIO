
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Công cụ & Phần mềm",
    skills: ["Visual Studio", "SQL Server", "VMware", "MongoDB", "Apache NetBean", "Cursor"]
  },
  {
    category: "Ngôn ngữ & Framework",
    skills: ["HTML5", "CSS", "JavaScript", "SCSS", "C#", "Python", "React", "Vue.js"]
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Kỹ Năng</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="mb-10"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-primary">{category.category}</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-wrap"
              >
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    variants={itemVariants}
                    className="skill-tag"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto"
        >
          <div className="bg-light-blue/20 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-blue-primary">Giải thưởng</h3>
            <ul className="space-y-3">
              <li className="p-3 bg-white rounded-md shadow-sm">
                <p className="font-medium">Đạt giải tài năng trẻ trong hội thi tìm kiếm tài năng công nghệ thông tin</p>
                <p className="text-gray-500 text-sm">2024</p>
              </li>
              <li className="p-3 bg-white rounded-md shadow-sm">
                <p className="font-medium">Giải tài năng trẻ - Cuộc thi IT GOT TALENT</p>
                <p className="text-gray-500 text-sm">2025</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-light-blue/20 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-blue-primary">Sở thích & Chứng chỉ</h3>
            <div className="mb-4">
              <h4 className="font-medium mb-2">Sở thích</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>Đá bóng</li>
                <li>Tham gia hoạt động bóng đá hàng tuần</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Chứng chỉ</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>Cuộc thi IT GOT TALENT 2025</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
