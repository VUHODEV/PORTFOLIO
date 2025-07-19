import { Badge } from "@/components/ui/badge";
import { Star, FileText, ExternalLink, Facebook, Award, Trophy, Image, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface Award {
  id: number;
  year: string;
  title: string;
  description: string;
  category: "award" | "certificate";
  icon: React.ReactNode;
  image?: string;
  organization?: string;
}

const awards: Award[] = [
  {
    id: 1,
    year: "2024",
    title: "Giải tài năng trẻ lĩnh vực Ứng dụng Website",
    description: "IT GOT TALENT 2024 - Cuộc thi tìm kiếm tài năng công nghệ thông tin",
    category: "award",
    icon: <Trophy className="w-5 h-5 text-yellow-500" />,
    image: "/images/awards/Hồ Duy Vũ.png",
    organization: "HUTECH University"
  },
];

const certificateImages = [
  {
    id: 1,
    title: "Chứng nhận tham gia cuộc thi",
    image: "/images/awards/chungnhan_131617 (1).png",
    description: "Chứng nhận tham gia cuộc thi IT GOT TALENT 2024"
  },
  {
    id: 2,
    title: "Chứng nhận tham gia cuộc thi",
    image: "/images/awards/chungnhan_119807.png",
    description: "Chứng nhận tham gia các cuộc thi công nghệ thông tin"
  },
  {
    id: 3,
    title: "Chứng nhận hoàn thành cuộc thi",
    image: "/images/awards/chungnhan_123442.png",
    description: "Chứng nhận đạt thành tích xuất sắc trong cuộc thi"
  },
  {
    id: 4,
    title: "Chứng nhận hoàn thành cuộc thi",
    image: "/images/awards/chungnhan_106990.png",
    description: "Chứng nhận kỹ năng và kiến thức trong cuộc thi"
  },
  {
    id: 5,
    title: "Chứng nhận hoàn thành cuộc thi",
    image: "/images/awards/chungnhan_106616.png",
    description: "Chứng nhận hoàn thành các cuộc thi chuyên môn"
  },
  {
    id: 6,
    title: "Chứng nhận hoàn thành cuộc thi",
    image: "/images/awards/Hồ Duy Vũ.png",
    description: "Bảng điểm và thành tích cuộc thi"
  },
  {
    id: 7,
    title: "Chứng nhận hoàn thành cuộc thi",
    image: "/images/awards/Hồ Duy Vũ Bảng C2.jpg",
    description: "Bảng điểm các môn chuyên môn cuộc thi"
  },
  {
    id: 8,
    title: "Chứng nhận hoàn thành cuộc thi",
    image: "/images/awards/Hồ Duy Vũ 2280603726Artboard 1.png",
    description: "Tổng hợp thành tích và chứng nhận cuộc thi"
  }
];

const Awards = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const outstandingAwards = awards.filter(award => award.category === "award");
  const certificates = awards.filter(award => award.category === "certificate");

  return (
    <section id="awards" className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 to-yellow-600/5"></div>
      <motion.div 
        className="absolute top-20 right-10 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.6, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.15, 0.5, 0.15],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3],
          rotate: [0, 360],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Giải thưởng & Chứng nhận Cuộc thi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những giải thưởng và chứng nhận đạt được từ các cuộc thi công nghệ thông tin
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Main Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="relative group">
                <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                  <img 
                    src="/images/Vuho.jpg" 
                    alt="Hồ Duy Vũ - IT GOT TALENT 2024" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="space-y-4">
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/90 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        Giải thưởng Cuộc thi
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                        IT GOT TALENT 2024
                      </h3>
                      
                      {/* Description */}
                      <p className="text-lg text-white/90 font-medium">
                        Giải tài năng trẻ lĩnh vực Ứng dụng Website
                      </p>
                      
                      {/* Additional info */}
                      <div className="flex items-center gap-4 text-white/80 text-sm">
                        <span>🏆 Giải tài năng trẻ lĩnh vực Ứng dụng Website</span>
                      </div>
                      
                      {/* News and social links */}
                      <div className="pt-2 flex flex-wrap gap-3">
                        <a 
                          href="https://www.saostar.vn/sao-hoc-duong/kham-pha-giang-duong-day-cam-hung-cua-sinh-vien-it-hutech-202507121050287663.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium hover:bg-white/30 transition-colors duration-300 group/link"
                        >
                          <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-200" />
                          Xem báo chí đưa tin
                        </a>
                        <a 
                          href="https://www.facebook.com/reel/404997759270690"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/90 backdrop-blur-sm rounded-lg text-white text-sm font-medium hover:bg-blue-700/90 transition-colors duration-300 group/link"
                        >
                          <Facebook className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-200" />
                          Xem trên Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Awards list */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Award Summary Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Thành tích Nổi bật</h3>
                    <p className="text-sm text-gray-600">IT GOT TALENT 2024</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">Giải</div>
                    <div className="text-gray-600">Tài năng trẻ lĩnh vực Ứng dụng Website</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">2024</div>
                    <div className="text-gray-600">Năm đạt giải</div>
                  </div>
                </div>
              </motion.div>
              {/* Outstanding Awards */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  Giải thưởng Cuộc thi
                </h3>
                <div className="space-y-4">
                  {outstandingAwards.map((award, index) => (
                    <motion.div
                      key={award.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {award.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs font-medium bg-yellow-50 text-yellow-700 border-yellow-200">
                            {award.year}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {award.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {award.description}
                        </p>
                        {award.organization && (
                          <p className="text-xs text-gray-500">
                            {award.organization}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Award Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-6"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                    <img
                      src="/images/awards/z6559023410131_6a1941e6229d47a35b2ffe12c5d469b5.jpg"
                      alt="Giải thưởng cuộc thi công nghệ"
                      className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h4 className="font-semibold text-xl mb-2">Giải thưởng Cuộc thi</h4>
                      <p className="text-base opacity-90">Chứng nhận tham gia cuộc thi công nghệ thông tin</p>
                    </div>
                  </div>
                </motion.div>
              </div>

                              {/* Certificates */}
                <div>
                 
                  <div className="space-y-4">
                    {certificates.map((certificate, index) => (
                      <motion.div
                        key={certificate.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                        className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="flex-shrink-0 mt-1">
                          {certificate.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs font-medium bg-blue-50 text-blue-700 border-blue-200">
                              {certificate.year}
                            </Badge>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {certificate.title}
                          </h4>
                          <p className="text-sm text-gray-600 mb-2">
                            {certificate.description}
                          </p>
                          {certificate.organization && (
                            <p className="text-xs text-gray-500">
                              {certificate.organization}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
            </motion.div>
          </div>
        </div>

        {/* Certificate Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Image className="w-8 h-8 text-blue-600" />
              Chứng nhận tham gia cuộc thi học thuật
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Xem chi tiết các chứng nhận và thành tích từ các cuộc thi học thuật
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certificateImages.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer h-full"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full flex flex-col">
                  <div className="flex-shrink-0">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 pointer-events-none" />
                  </div>
                  
                  <div className="p-4 relative z-10 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm line-clamp-2">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-3">
                        {cert.description}
                      </p>
                    </div>
                    
                    {/* Chi tiết button */}
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedImage(cert.image);
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 group/btn relative z-20 cursor-pointer mt-auto"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <ExternalLink className="w-3 h-3 group-hover/btn:scale-110 transition-transform duration-200" />
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Image */}
            <img
              src={selectedImage}
              alt="Chi tiết chứng nhận"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            
            {/* Close on backdrop click */}
            <div 
              className="absolute inset-0 -z-10"
              onClick={() => setSelectedImage(null)}
            />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Awards; 