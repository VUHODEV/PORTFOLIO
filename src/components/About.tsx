
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Mail, Phone, MapPin, Globe } from "lucide-react";

const AboutItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string | React.ReactNode }) => {
  return (
    <div className="flex items-start gap-3 mb-4">
      <div className="text-blue-primary mt-1">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Về Tôi</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Thông tin cá nhân</h3>
            <div className="bg-light-blue/20 rounded-lg p-6 shadow-sm">
              <AboutItem 
                icon={<Calendar size={20} />} 
                label="Ngày sinh" 
                value="11/09/2004" 
              />
              <AboutItem 
                icon={<Mail size={20} />} 
                label="Email" 
                value={<a href="mailto:duyuvi1092004@gmail.com" className="hover:text-blue-primary transition-colors">duyuvi1092004@gmail.com</a>} 
              />
              <AboutItem 
                icon={<Phone size={20} />} 
                label="Số điện thoại" 
                value={<a href="tel:0932694273" className="hover:text-blue-primary transition-colors">0932694273</a>} 
              />
              <AboutItem 
                icon={<MapPin size={20} />} 
                label="Địa chỉ" 
                value="20 Đường 904, Phường Hiệp Phú, Quận Thủ Đức" 
              />
              <AboutItem 
                icon={<Globe size={20} />} 
                label="Website / Facebook" 
                value={<a href="https://fb.com/topcv.vn" target="_blank" rel="noopener noreferrer" className="hover:text-blue-primary transition-colors">facebook.com/topcv.vn</a>} 
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">Mục tiêu nghề nghiệp</h3>
            <div className="bg-light-blue/20 rounded-lg p-6 h-full shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                Hướng tới những công nghệ và những điều mới mẻ cần học hỏi. Luôn cố gắng tìm tòi và sáng tạo ra những điều nhỏ từ đó tạo ra những điều to lớn. Luôn cố gắng trong mọi công việc được giao.
              </p>

              <div className="mt-8">
                <h4 className="font-semibold mb-2">Học vấn</h4>
                <div className="bg-white rounded p-4 shadow-sm">
                  <p className="font-medium">Công nghệ thông tin</p>
                  <p className="text-gray-600">Đại học Công Nghệ TP.HCM (2022 - 2026)</p>
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
