import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Linkedin, ChevronDown, Code, Bot, Cpu, Globe } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  category: 'ai' | 'robotics' | 'web';
}

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'ai' | 'robotics' | 'web'>('ai');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects: Project[] = [
    // AI Projects
    {
      id: 1,
      title: "Neural Style Transfer",
      description: "Deep learning model that applies artistic styles to images using convolutional neural networks and VGG-19 architecture.",
      tech: ["Python", "TensorFlow", "OpenCV", "NumPy"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
      category: "ai"
    },
    {
      id: 2,
      title: "NLP Sentiment Analyzer",
      description: "Real-time sentiment analysis system processing social media data with 94% accuracy using transformer models.",
      tech: ["Python", "BERT", "Hugging Face", "FastAPI"],
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
      category: "ai"
    },
    {
      id: 3,
      title: "Computer Vision Object Detection",
      description: "Real-time object detection system using YOLO v8 for autonomous vehicle navigation and safety applications.",
      tech: ["Python", "PyTorch", "YOLO", "OpenCV"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      github: "#",
      category: "ai"
    },
    // Robotics Projects
    {
      id: 4,
      title: "Autonomous Navigation Robot",
      description: "SLAM-based mobile robot with LiDAR and camera sensors for autonomous indoor navigation and mapping.",
      tech: ["ROS2", "Python", "C++", "Gazebo", "OpenCV"],
      image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
      category: "robotics"
    },
    {
      id: 5,
      title: "Robotic Arm Controller",
      description: "6-DOF robotic arm with inverse kinematics solver and computer vision for precise object manipulation tasks.",
      tech: ["Arduino", "C++", "OpenCV", "Servo Control"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      github: "#",
      category: "robotics"
    },
    {
      id: 6,
      title: "Drone Swarm Coordination",
      description: "Multi-agent system for coordinated drone flights using distributed algorithms and real-time communication.",
      tech: ["Python", "ROS", "PX4", "MAVLink", "Simulation"],
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
      category: "robotics"
    },
    // Web Dev Projects
    {
      id: 7,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
      category: "web"
    },
    {
      id: 8,
      title: "Real-time Chat Application",
      description: "Scalable chat app with WebSocket connections, file sharing, and end-to-end encryption features.",
      tech: ["React", "Socket.io", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
      category: "web"
    },
    {
      id: 9,
      title: "Data Visualization Dashboard",
      description: "Interactive analytics dashboard with real-time data processing and customizable chart components.",
      tech: ["React", "D3.js", "TypeScript", "Firebase"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      github: "#",
      category: "web"
    }
  ];

  const filteredProjects = projects.filter(project => project.category === activeSection);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="flex space-x-6">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Bot className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Engineer &amp; Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Building the future with artificial intelligence, robotics, and cutting-edge web technologies
            </p>
            <div className="flex justify-center space-x-4 mb-12">
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <button
            onClick={scrollToProjects}
            className="animate-bounce p-2 rounded-full bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 hover:bg-blue-600/30 transition-colors"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Explore my work across artificial intelligence, robotics, and web development
          </p>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800 rounded-full p-1 flex space-x-1">
              <button
                onClick={() => setActiveSection('ai')}
                className={`px-6 py-3 rounded-full flex items-center space-x-2 transition-all ${activeSection === 'ai'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                  }`}
              >
                <Bot className="w-4 h-4" />
                <span>AI Projects</span>
              </button>
              <button
                onClick={() => setActiveSection('robotics')}
                className={`px-6 py-3 rounded-full flex items-center space-x-2 transition-all ${activeSection === 'robotics'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                  }`}
              >
                <Cpu className="w-4 h-4" />
                <span>Robotics</span>
              </button>
              <button
                onClick={() => setActiveSection('web')}
                className={`px-6 py-3 rounded-full flex items-center space-x-2 transition-all ${activeSection === 'web'
                    ? 'bg-green-600 text-white'
                    : 'text-gray-400 hover:text-white'
                  }`}
              >
                <Globe className="w-4 h-4" />
                <span>Web Dev</span>
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    {project.github && (
                      <a href={project.github} className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors">
                        <Github className="w-4 h-4" />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            I'm a passionate AI engineer and full-stack developer with expertise in machine learning,
            robotics, and modern web technologies. I love creating intelligent systems that solve
            real-world problems and push the boundaries of what's possible with technology.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
              <Bot className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Artificial Intelligence</h3>
              <p className="text-gray-400 text-sm">Deep learning, computer vision, NLP, and neural networks</p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
              <Cpu className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Robotics</h3>
              <p className="text-gray-400 text-sm">ROS, autonomous systems, sensor fusion, and control systems</p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
              <Code className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-400 text-sm">React, TypeScript, Node.js, and cloud technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Interested in collaborating on AI, robotics, or web development projects?
            Let's discuss how we can build something amazing together.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:hello@example.com" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </a>
            <a href="#" className="px-8 py-4 border border-gray-600 rounded-full hover:bg-gray-800 transition-colors flex items-center space-x-2">
              <Github className="w-5 h-5" />
              <span>View GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2025 Portfolio. Built with React and TypeScript.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;