
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-light-blue/30 to-white"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
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
                <Button className="flex items-center gap-2 bg-blue-primary hover:bg-blue-600 transition-all">
                  <Download size={16} />
                  Tải CV
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="flex items-center gap-2 border-blue-primary text-blue-primary hover:bg-blue-50">
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
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="/lovable-uploads/85e00591-312b-4690-88b2-6b10c394940a.png"
                  alt="Hồ Duy Vũ"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-blue-primary text-white p-3 rounded-full shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
