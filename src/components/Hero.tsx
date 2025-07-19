
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, Code, Zap, Cpu, Database, Globe, Smartphone, Monitor, Server, Wifi, Shield } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden"
    >
      {/* Massive animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      
      {/* Giant floating orbs */}
      <motion.div
        className="absolute top-10 left-10 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.8, 0.2],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-400/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.15, 0.7, 0.15],
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-400/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.8, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Additional massive orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-green-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.6, 0.2],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-orange-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.15, 0.5, 0.15],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Massive floating tech icons */}
      <motion.div
        className="absolute top-20 right-20 text-blue-400/20"
        animate={{
          y: [0, -40, 0],
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Code size={80} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 text-purple-400/20"
        animate={{
          y: [0, 40, 0],
          rotate: [0, -360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Zap size={70} />
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-1/4 text-indigo-400/20"
        animate={{
          x: [0, 50, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Cpu size={60} />
      </motion.div>

      <motion.div
        className="absolute top-1/4 right-1/3 text-green-400/20"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Database size={65} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/4 text-orange-400/20"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Globe size={55} />
      </motion.div>

      <motion.div
        className="absolute top-2/3 left-1/3 text-pink-400/20"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Smartphone size={50} />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-1/6 text-cyan-400/20"
        animate={{
          x: [0, 40, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Monitor size={45} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/2 text-yellow-400/20"
        animate={{
          y: [0, 35, 0],
          x: [0, -30, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Server size={55} />
      </motion.div>

      <motion.div
        className="absolute top-1/6 left-1/2 text-red-400/20"
        animate={{
          y: [0, -45, 0],
          x: [0, 25, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Wifi size={40} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/6 left-1/6 text-emerald-400/20"
        animate={{
          y: [0, 50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Shield size={50} />
      </motion.div>
              <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg text-blue-600 font-medium mb-2">Xin chào, tôi là</h2>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 0 40px rgba(99, 102, 241, 0.8)",
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Hồ Duy Vũ
              </motion.h1>
              <motion.h3 
                className="text-xl md:text-2xl text-gray-700 mb-6 font-semibold"
                animate={{
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.02, 1],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Software Engineer
              </motion.h3>
              <p className="text-gray-600 mb-8 max-w-lg leading-relaxed">
                Tôi là sinh viên Công nghệ thông tin định hướng chuyên sâu về phát triển Frontend với React.js và các công nghệ web hiện đại. Bên cạnh đó, tôi cũng tích cực tìm hiểu về backend và tích hợp AI nhằm xây dựng các sản phẩm thực tế hoàn thiện. Tôi yêu thích việc học hỏi công nghệ mới, làm việc nhóm và sẵn sàng thử thách bản thân trong môi trường thực tập để phát triển kỹ năng lập trình và tư duy hệ thống.
              </p>
              <motion.div 
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.a 
                  href="#download"
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 10px 20px rgba(59, 130, 246, 0.2)",
                      "0 15px 30px rgba(99, 102, 241, 0.4)",
                      "0 10px 20px rgba(59, 130, 246, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg text-lg">
                    <Download size={20} />
                    Tải CV
                  </Button>
                </motion.a>
                <motion.a 
                  href="#contact"
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 10px 20px rgba(59, 130, 246, 0.1)",
                      "0 15px 30px rgba(59, 130, 246, 0.3)",
                      "0 10px 20px rgba(59, 130, 246, 0.1)",
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Button variant="outline" className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 text-lg">
                    <Mail size={20} />
                    Liên hệ
                  </Button>
                </motion.a>
              </motion.div>
            </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -inset-8 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.8, 0.2],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                className="absolute -inset-6 rounded-full bg-gradient-to-r from-indigo-400/40 to-blue-400/40 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.9, 0.3],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-400/50 to-pink-400/50 blur-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl"
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 10,
                  rotateX: 5,
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.img
                  src="images\z6085432107664_38a38bde84e799430c485471939973ea.jpg"
                  alt="Hồ Duy Vũ"
                  className="w-full h-full object-cover"
                  animate={{
                    scale: [1, 1.05, 1],
                    filter: [
                      "brightness(1) contrast(1)",
                      "brightness(1.1) contrast(1.1)",
                      "brightness(1) contrast(1)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
