
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ExperienceItem {
  title: string;
  company?: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Development",
    period: "03/2015 - Hiện tại",
    description: [
      "Quản lý khách sạn (WinForms C#, SQL Server)",
      "Git, thiết kế UI với Guna, xử lý API, v.v."
    ]
  },
  {
    title: "Frontend Developer, API Developer",
    period: "03/2015 - Hiện tại",
    description: [
      "Google Map API, AI Camera, quản lý trạng thái phòng bằng màu sắc",
      "Sử dụng React.js, Vue.js, HTML5, CSS3, JavaScript",
      "Các thư viện: react-router-dom, socket.io, formik, yup, leaflet.js"
    ]
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-light-blue/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Kinh Nghiệm Làm Việc</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="timeline-item"
            >
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-semibold text-blue-primary">{exp.title}</h3>
                  <span className="text-gray-500 text-sm">{exp.period}</span>
                </div>
                {exp.company && <p className="text-gray-600 mb-3">{exp.company}</p>}
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
