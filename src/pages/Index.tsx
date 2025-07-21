
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { X, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    document.title = "Hồ Duy Vũ - Software Engineer";
  }, []);

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        {showWelcome && (
          <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100/60 via-indigo-100/60 to-purple-100/60 backdrop-blur-sm z-50">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 pt-14 max-w-lg w-full text-center border border-blue-100 animate-fade-in">
              <motion.div
                className="flex justify-center mb-2"
                initial={{ rotate: -10, scale: 1 }}
                animate={{ rotate: [ -10, 10, -10 ], scale: [1, 1.2, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Zap size={40} className="text-yellow-400 drop-shadow-lg" />
              </motion.div>
              <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Cảm ơn bạn đã ghé thăm Portfolio của Vũ!
              </h2>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Rất mong nhận được đánh giá, góp ý của bạn ở phần <span className="font-semibold text-blue-600">Liên hệ</span> phía dưới trang.<br/>Chúc bạn một ngày tốt lành!
              </p>
              {/* Nút Khám phá ngay ở dưới cùng */}
              <Button
                className="mt-8 w-full sm:w-auto px-8 py-3 rounded-xl text-base font-semibold shadow hover:scale-105 transition-transform bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                variant="default"
                onClick={() => {
                  setShowWelcome(false);
                  const home = document.getElementById("home");
                  if (home) home.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Khám phá ngay
              </Button>
            </div>
          </div>
        )}
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Awards />
        <ContactForm />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Index;
