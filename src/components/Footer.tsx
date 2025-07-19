
import { Facebook, Mail, Phone, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-2xl mb-2">Hồ Duy Vũ</h3>
            <p className="text-blue-primary-foreground">Fullstack Developer</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6 md:mb-0">
            <a 
              href="https://fb.com/topcv.vn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-100 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="mailto:duyuvi1092004@gmail.com" 
              className="hover:text-blue-100 transition-colors"
              aria-label="Mail"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:0932694273" 
              className="hover:text-blue-100 transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
            <a 
              href="#" 
              className="hover:text-blue-100 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="hover:text-blue-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-blue-300/30 mt-8 pt-8 text-center text-sm text-blue-primary-foreground">
          <p>© {currentYear} Hồ Duy Vũ. All rights reserved.</p>
          <p id="download" className="mt-2">
            <a 
              href="/CV_HoDuyVu.pdf" 
              download 
              className="underline hover:text-white transition-colors"
            >
              Tải CV của tôi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
