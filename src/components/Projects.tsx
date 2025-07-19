import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Một nền tảng thương mại điện tử hiện đại với tính năng thanh toán online, quản lý kho hàng và hệ thống đánh giá sản phẩm.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/hoduyvu/ecommerce-platform",
    demoUrl: "https://ecommerce-demo.hoduyvu.dev",
    category: "Fullstack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Ứng dụng quản lý công việc với tính năng real-time collaboration, deadline tracking và notification system.",
    technologies: ["Vue.js", "Firebase", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/hoduyvu/task-manager",
    demoUrl: "https://tasks.hoduyvu.dev",
    category: "Frontend"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Dashboard dự báo thời tiết với data visualization, multiple locations tracking và weather alerts system.",
    technologies: ["Next.js", "Chart.js", "OpenWeather API", "Prisma"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/hoduyvu/weather-dashboard",
    demoUrl: "https://weather.hoduyvu.dev",
    category: "Frontend"
  },
  {
    id: 4,
    title: "Blog CMS",
    description: "Hệ thống quản lý nội dung blog với editor WYSIWYG, SEO optimization và multi-author support.",
    technologies: ["Laravel", "MySQL", "Redis", "Docker"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/hoduyvu/blog-cms",
    demoUrl: "https://blog.hoduyvu.dev",
    category: "Backend"
  },
  {
    id: 5,
    title: "Real Estate Platform",
    description: "Nền tảng bất động sản với tính năng tìm kiếm thông minh, virtual tour và mortgage calculator.",
    technologies: ["React Native", "Expo", "Supabase", "MapBox"],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/hoduyvu/realestate-app",
    demoUrl: "https://realestate.hoduyvu.dev",
    category: "Mobile"
  },
  {
    id: 6,
    title: "Data Analytics Dashboard",
    description: "Dashboard phân tích dữ liệu với real-time charts, data export và custom report generation.",
    technologies: ["Python", "Django", "PostgreSQL", "D3.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/hoduyvu/analytics-dashboard",
    demoUrl: "https://analytics.hoduyvu.dev",
    category: "Data Science"
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-light-blue/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading text-center">Dự Án Nổi Bật</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Tổng hợp các dự án đã thực hiện với đa dạng công nghệ và lĩnh vực khác nhau
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Công nghệ sử dụng:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="text-xs border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-4 flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4">
            Muốn xem thêm dự án khác?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="https://github.com/hoduyvu" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Xem tất cả trên GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;