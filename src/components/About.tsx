
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Calendar, Mail, Phone, MapPin, Globe } from "lucide-react";

const AboutItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string | React.ReactNode }) => {
  return (
    <div className="flex items-start gap-3 mb-4">
      <div className="text-blue-primary mt-1">{icon}</div>
      <div>
        <p className="text-xs sm:text-sm text-gray-500">{label}</p>
        <p className="font-medium text-sm sm:text-base">{value}</p>
      </div>
    </div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Simplified background for mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
      {/* Reduced background animations - only on desktop */}
      {!isMobile && (
        <>
          <motion.div 
            className="absolute top-10 right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute bottom-10 left-20 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, -90, -180],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Về Tôi</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Thông tin cá nhân và mục tiêu nghề nghiệp của tôi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Thông tin cá nhân</h3>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 h-full">
              <AboutItem 
                icon={<Calendar size={18} className="sm:w-5 sm:h-5" />} 
                label="Ngày sinh" 
                value="11/09/2004" 
              />
              <AboutItem 
                icon={<Mail size={18} className="sm:w-5 sm:h-5" />} 
                label="Email" 
                value={<a href="mailto:duyvu11092004@gmail.com" className="hover:text-blue-primary transition-colors">duyvu11092004@gmail.com</a>} 
              />
              <AboutItem 
                icon={<Phone size={18} className="sm:w-5 sm:h-5" />} 
                label="Số điện thoại" 
                value={<a href="tel:0932694273" className="hover:text-blue-primary transition-colors">0932694273</a>} 
              />
              <AboutItem 
                icon={<MapPin size={18} className="sm:w-5 sm:h-5" />} 
                label="Địa chỉ" 
                value="20 Đường 904, Phường Hiệp Phú, Quận Thủ Đức" 
              />
              <AboutItem 
                icon={<Globe size={18} className="sm:w-5 sm:h-5" />} 
                label="Website / Facebook" 
                value={<a href="https://www.facebook.com/hoduy.vu.72" target="_blank" rel="noopener noreferrer" className="hover:text-blue-primary transition-colors">https://www.facebook.com/hoduy.vu.72</a>} 
              />
            </div>
          </motion.div>

          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Mục tiêu nghề nghiệp</h3>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 h-full shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Tôi là sinh viên Công nghệ thông tin định hướng chuyên sâu về phát triển Frontend với React.js và các công nghệ web hiện đại. Bên cạnh đó, tôi cũng tích cực tìm hiểu về backend và tích hợp AI nhằm xây dựng các sản phẩm thực tế hoàn thiện. Tôi yêu thích việc học hỏi công nghệ mới, làm việc nhóm và sẵn sàng thử thách bản thân trong môi trường thực tập để phát triển kỹ năng lập trình và tư duy hệ thống.
              </p>

              <div className="mt-6 sm:mt-8">
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Học vấn</h4>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 sm:p-4 shadow-md border border-blue-200">
                  <p className="font-medium text-sm sm:text-base">Công nghệ thông tin</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Đại học Công Nghệ TP.HCM (2022 - 2026)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
