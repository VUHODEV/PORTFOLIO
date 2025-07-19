
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-light-blue/20 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg text-blue-primary font-medium mb-2">Xin chào, tôi là</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hồ Duy Vũ
            </h1>
            <h3 className="text-xl md:text-2xl text-gray-600 mb-6">
              Fullstack Developer
            </h3>
            <p className="text-gray-700 mb-8 max-w-lg">
              Hướng tới những công nghệ và những điều mới mẻ cần học hỏi. Luôn cố gắng tìm tòi và sáng tạo ra những điều nhỏ từ đó tạo ra những điều to lớn. Luôn cố gắng trong mọi công việc được giao.
            </p>
            <div className="flex space-x-4">
              <a href="#download">
                <Button className="flex items-center gap-2">
                  <Download size={16} />
                  Tải CV
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="flex items-center gap-2">
                  <Mail size={16} />
                  Liên hệ
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-blue-primary/10 blur-lg"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Hồ Duy Vũ"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
