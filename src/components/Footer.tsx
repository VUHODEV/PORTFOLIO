
import { Facebook, Mail, Phone, Github, Linkedin, MapPin, Calendar } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-10 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      
            <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Personal Info */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-3xl mb-4">Hồ Duy Vũ</h3>
            <p className="text-gray-300 text-lg mb-4">Software Engineer</p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-4 h-4" />
                <span>TP.HCM, Việt Nam</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Calendar className="w-4 h-4" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-xl mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors">Về tôi</a>
              <a href="#skills" className="block text-gray-300 hover:text-white transition-colors">Kỹ năng</a>
              <a href="#projects" className="block text-gray-300 hover:text-white transition-colors">Dự án</a>
              <a href="#awards" className="block text-gray-300 hover:text-white transition-colors">Giải thưởng</a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-xl mb-4">Liên hệ</h4>
            <div className="space-y-2 text-sm text-gray-300 mb-4">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:duyvu11092004@gmail.com" className="hover:text-white transition-colors">
                  duyvu11092004@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:0932694273" className="hover:text-white transition-colors">
                  0932 694 273
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-end gap-4">
              <a 
                href="https://github.com/VUHODEV" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ho-duy-vu-977235330" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://fb.com/topcv.vn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="mailto:duyvu11092004@gmail.com" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 hover:scale-110"
                aria-label="Mail"
              >
                <Mail size={18} />
              </a>
              <a 
                href="tel:0932694273" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 hover:scale-110"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {currentYear} Hồ Duy Vũ. All rights reserved.
            </p>
            <div id="download">
              <a 
                href="/CV.pdf" 
                download 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <span>Tải CV của tôi</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
