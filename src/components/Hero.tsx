
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, Code, Zap, Cpu, Database, Globe, Smartphone, Monitor, Server, Wifi, Shield } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Only add mouse move listener on desktop
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 sm:pt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden"
    >
      {/* Simplified background for mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      
      {/* Reduced floating orbs - only show on desktop */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-10 left-10 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-400/15 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.5, 0.15],
              x: [0, -40, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}

      {/* Simplified tech icons - reduced count and slower animations */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-20 right-20 text-blue-400/20"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{ scale: 1.2, opacity: 0.4 }}
          >
            <Code size={60} />
          </motion.div>

          <motion.div
            className="absolute bottom-20 left-20 text-purple-400/20"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -180],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{ scale: 1.2, opacity: 0.4 }}
          >
            <Zap size={50} />
          </motion.div>

          <motion.div
            className="absolute top-1/3 left-1/4 text-indigo-400/20"
            animate={{
              x: [0, 30, 0],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.2, opacity: 0.4 }}
          >
            <Cpu size={45} />
          </motion.div>
        </>
      )}

      <div className="container mx-auto px-4 relative z-10 pt-8 sm:pt-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg text-blue-600 font-medium mb-2">Xin chào, tôi là</h2>
            
            {/* Simplified title animation - no flickering */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
              }}
            >
              Hồ Duy Vũ
            </motion.h1>
            
            <motion.h3 
              className="text-xl md:text-2xl text-gray-700 mb-6 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ 
                scale: 1.01,
                color: "#3B82F6"
              }}
            >
              Software Engineer
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ 
                scale: 1.01,
                color: "#374151"
              }}
            >
              Tôi là sinh viên Công nghệ thông tin định hướng chuyên sâu về phát triển Frontend với React.js và các công nghệ web hiện đại. Bên cạnh đó, tôi cũng tích cực tìm hiểu về backend và tích hợp AI nhằm xây dựng các sản phẩm thực tế hoàn thiện. Tôi yêu thích việc học hỏi công nghệ mới, làm việc nhóm và sẵn sàng thử thách bản thân trong môi trường thực tập để phát triển kỹ năng lập trình và tư duy hệ thống.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a 
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Ho_Duy_Vu_CV.pdf"
                whileHover={{ 
                  scale: isMobile ? 1.05 : 1.1,
                  y: isMobile ? -2 : -5,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-200 shadow-lg text-base sm:text-lg w-full sm:w-auto">
                  <Download size={18} />
                  Tải CV
                </Button>
              </motion.a>
              
              <motion.a 
                href="#contact"
                whileHover={{ 
                  scale: isMobile ? 1.05 : 1.1,
                  y: isMobile ? -2 : -5,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-200 text-base sm:text-lg w-full sm:w-auto">
                  <Mail size={18} />
                  Liên hệ
                </Button>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Simplified glow effects - only on desktop */}
              {!isMobile && (
                <>
                  <motion.div 
                    className="absolute -inset-6 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div 
                    className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-400/40 to-blue-400/40 blur-lg"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </>
              )}
              
              <motion.div 
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl"
                whileHover={{ 
                  scale: isMobile ? 1.02 : 1.1,
                  rotateY: isMobile ? 0 : 5,
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.img
                  src="images\z6085432107664_38a38bde84e799430c485471939973ea.jpg"
                  alt="Hồ Duy Vũ"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ 
                    filter: "brightness(1.1) contrast(1.05)",
                    scale: 1.05
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
