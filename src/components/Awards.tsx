
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="awards" className="py-20 bg-gradient-to-b from-white to-light-blue/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <h2 className="section-heading text-center mb-12">Giải thưởng & Thành tích</h2>

          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8">
            <motion.div
              variants={itemVariants}
              className="md:w-1/2"
            >
              <Card className="bg-white/80 backdrop-blur-sm overflow-hidden h-full border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-primary/10 to-blue-primary/5"></div>
                    <img
                      src="/lovable-uploads/e3e1370b-a569-4403-8455-2506071d1765.png"
                      alt="Giải tài năng trẻ"
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-blue-primary/80 text-white">
                      <h3 className="font-bold">IT GOT TALENT 2024</h3>
                      <p className="text-sm">Giải tài năng trẻ lĩnh vực Ứng dụng Website</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="md:w-1/2 space-y-6"
            >
              <h3 className="text-xl font-bold text-blue-primary">Giải thưởng nổi bật</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-primary text-white rounded-full p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2l3 6.3 7 1-5 4.8 1.2 6.9-6.2-3.2Z" /></svg>
                  </div>
                  <div>
                    <p className="font-medium">2024: Đạt giải tài năng trẻ trong hội thi tìm kiếm tài năng công nghệ thông tin</p>
                    <p className="text-gray-600 text-sm">Lĩnh vực Ứng dụng Website - IT GOT TALENT</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-primary text-white rounded-full p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2l3 6.3 7 1-5 4.8 1.2 6.9-6.2-3.2Z" /></svg>
                  </div>
                  <div>
                    <p className="font-medium">2025: Giải tài năng trẻ - Cuộc thi IT GOT TALENT</p>
                    <p className="text-gray-600 text-sm">Công nghệ thông tin</p>
                  </div>
                </li>
              </ul>
              
              <div className="border-t border-blue-100 pt-6 mt-6">
                <h3 className="text-xl font-bold text-blue-primary mb-4">Chứng chỉ</h3>
                <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-blue-100 shadow-sm">
                  <div className="p-2 bg-blue-primary/10 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-primary"><path d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3" /><path d="M14 2v6h6" /><path d="M3 15h6v6H3v-6Z" /><circle cx="9" cy="18" r=".5" /></svg>
                  </div>
                  <div>
                    <p className="font-medium">Cuộc thi IT GOT TALENT 2025</p>
                    <p className="text-gray-600 text-sm">Lĩnh vực Công nghệ thông tin</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
