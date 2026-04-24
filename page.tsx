'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, ExternalLink, Code, Layers, Zap } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  icon: string;
}

interface Contribution {
  type: string;
  count: string;
  description: string;
}

interface SkillGroup {
  category: string;
  items: string[];
}

const Portfolio = () => {
  // Custom GitHub Icon
  const GithubIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 .3 6 1.5 6 6.5v4"></path>
      <path d="M9 22v-4a4.8 4.8 0 0 0-1-3.5c-3 .3-6 1.5-6 6.5v4"></path>
      <path d="M18 8a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2"></path>
      <circle cx="12" cy="13" r="3"></circle>
    </svg>
  );

  // Custom LinkedIn Icon
  const LinkedinIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const projects: Project[] = [
    {
      title: 'GameBuilder',
      description: 'Interactive game/project building platform with three games. Frontend-focused product development with user-centric architecture and clean UI design.',
      tech: ['React', 'JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/dolliecoder',
      demo: '#',
      icon: '🎮'
    },
    {
      title: 'Recipe Book App',
      description: 'Full-stack recipe management application with recipe creation, saving, filtering, search, and step-by-step cooking instructions for real-world product use.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/dolliecoder',
      demo: '#',
      icon: '👨‍🍳'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application with API integration and dynamic frontend UI. Responsive and user-friendly product with live weather data.',
      tech: ['JavaScript', 'API Integration', 'HTML', 'CSS'],
      github: 'https://github.com/dolliecoder',
      demo: '#',
      icon: '⛅'
    },
    {
      title: 'CSV Report Generator',
      description: 'Automated CSV report generation system with data handling and reporting workflows. Backend logic for practical business utility and data processing.',
      tech: ['Python', 'Pandas', 'NumPy'],
      github: 'https://github.com/dolliecoder',
      demo: '#',
      icon: '📊'
    },
    {
      title: 'Game Dashboard',
      description: 'Modern analytics/dashboard interface with interactive frontend components and clean UI. Data-driven architecture for insights and metrics visualization.',
      tech: ['React', 'JavaScript', 'SQL'],
      github: 'https://github.com/dolliecoder',
      demo: '#',
      icon: '📈'
    }
  ];

  const skills: SkillGroup[] = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'Python', 'SQL'] },
    { category: 'Databases', items: ['MongoDB', 'MySQL', 'Supabase'] },
    { category: 'Data Tools', items: ['NumPy', 'Pandas'] }
  ];

  const contributions: Contribution[] = [
    { type: 'Pull Requests', count: '12+', description: 'Backend improvements and feature implementations' },
    { type: 'Issues Solved', count: '8+', description: 'Production bug fixes and GitHub integration work' },
    { type: 'Contributions', count: '20+', description: 'Supabase optimization and real-world debugging' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/30 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Dolly
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors duration-300 capitalize"
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:block px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              Hire Me
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-3 animate-fadeIn">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <div className="space-y-8 animate-fadeInUp">
            {/* Animated Name */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-gradientShift">
                  Dolly Chahar
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-light text-gray-300 max-w-2xl">
                Software Developer | Frontend Developer | AI Systems Builder
              </h2>
              
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                Building impactful digital products through scalable development, intuitive frontend experiences, and practical AI-powered systems.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </button>
              <button
                onClick={() => window.open('mailto:dollychahar27@gmail.com')}
                className="px-8 py-4 border-2 border-purple-500 rounded-lg font-semibold text-purple-300 hover:bg-purple-500/10 transition-all duration-300"
              >
                Contact Me
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-pink-500 rounded-lg font-semibold text-pink-300 hover:bg-pink-500/10 transition-all duration-300"
              >
                View Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-8">
              <a
                href="https://github.com/dolliecoder"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-110"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/dolly-chahar-b517b337b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-pink-500/10 border border-pink-500/30 hover:border-pink-500 hover:bg-pink-500/20 transition-all duration-300 transform hover:scale-110"
              >
                <LinkedinIcon />
              </a>
              <a
                href="mailto:dollychahar27@gmail.com"
                className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={24} className="text-purple-400" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                I'm a software developer passionate about building products that matter. With expertise across frontend development, backend systems, and AI applications, I approach every project with a product-first mindset and a focus on scalable solutions.
              </p>
              <p>
                My journey spans full-stack application development, from crafting intuitive user interfaces to designing robust backend architectures. I specialize in translating complex problems into elegant, maintainable code that scales with real-world demands.
              </p>
              <p>
                Beyond traditional software development, I'm deeply invested in practical AI systems that solve tangible problems. I believe in building technology that creates genuine impact through thoughtful design and principled engineering.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="font-semibold text-purple-400 mb-3 flex items-center gap-2">
                  <Code size={20} /> Frontend Development
                </h3>
                <p className="text-gray-300 text-sm">React, JavaScript, HTML/CSS - building responsive, user-centric interfaces</p>
              </div>
              <div className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="font-semibold text-pink-400 mb-3 flex items-center gap-2">
                  <Layers size={20} /> Backend Systems
                </h3>
                <p className="text-gray-300 text-sm">Node.js, Express, databases - designing scalable server architectures</p>
              </div>
              <div className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="font-semibold text-purple-400 mb-3 flex items-center gap-2">
                  <Zap size={20} /> AI Systems
                </h3>
                <p className="text-gray-300 text-sm">Building practical AI solutions and automation workflows</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className="grid gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{project.icon}</div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/40 transition-colors"
                      >
                        <div className="text-purple-400 w-[18px] h-[18px]">
                          <GithubIcon />
                        </div>
                      </a>
                      {project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-pink-500/20 hover:bg-pink-500/40 transition-colors"
                        >
                          <ExternalLink size={18} className="text-pink-400" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-500/30 text-purple-200 group-hover:border-purple-500/60 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-6">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/30 text-purple-200 text-sm font-medium hover:border-purple-500 hover:bg-purple-600/40 transition-all duration-300 transform hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Open Source Impact
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {contributions.map((contrib, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 text-center hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
                  {contrib.count}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{contrib.type}</h3>
                <p className="text-gray-400 text-sm">{contrib.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="p-12 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-8 flex-col md:flex-row gap-6">
              <div>
                <h2 className="text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    GitHub Presence
                  </span>
                </h2>
                <p className="text-gray-400">Consistent contributions and active development</p>
              </div>
              <a
                href="https://github.com/dolliecoder"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                Visit GitHub
              </a>
            </div>
            
            <div className="bg-slate-900/50 rounded-lg p-6 border border-purple-500/20">
              <div className="space-y-3">
                <p className="text-sm text-gray-400">💚 Open source contributions • 🔧 Production improvements • 🐛 Bug fixes</p>
                <p className="text-sm text-gray-400">Supabase optimization • GitHub integration work • Real-world debugging</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Let's Build Together
                </span>
              </h2>
              <p className="text-xl text-gray-400">
                Let's build something impactful together.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="https://github.com/dolliecoder"
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="text-purple-400 w-[32px] h-[32px] mb-4">
                  <GithubIcon />
                </div>
                <h3 className="font-bold text-white mb-2">GitHub</h3>
                <p className="text-sm text-gray-400">@dolliecoder</p>
              </a>

              <a
                href="https://www.linkedin.com/in/dolly-chahar-b517b337b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="text-pink-400 w-[32px] h-[32px] mb-4">
                  <LinkedinIcon />
                </div>
                <h3 className="font-bold text-white mb-2">LinkedIn</h3>
                <p className="text-sm text-gray-400">Dolly Chahar</p>
              </a>

              <a
                href="mailto:dollychahar27@gmail.com"
                className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/20"
              >
                <Mail size={32} className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white mb-2">Email</h3>
                <p className="text-sm text-gray-400">dollychahar27@gmail.com</p>
              </a>
            </div>

            <div className="text-center pt-12 border-t border-purple-500/20">
              <p className="text-gray-400 mb-6">Ready to collaborate on innovative projects?</p>
              <button
                onClick={() => window.open('mailto:dollychahar27@gmail.com')}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Send Me an Email
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-purple-500/20 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Dolly Chahar
              </h3>
              <p className="text-gray-500 text-sm mt-1">Software Developer • Frontend Engineer • AI Systems Builder</p>
            </div>
            
            <div className="flex gap-4">
              <a
                href="https://github.com/dolliecoder"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-purple-400 transition-colors"
              >
                <div className="w-[20px] h-[20px]">
                  <GithubIcon />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/dolly-chahar-b517b337b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-pink-400 transition-colors"
              >
                <div className="w-[20px] h-[20px]">
                  <LinkedinIcon />
                </div>
              </a>
              <a
                href="mailto:dollychahar27@gmail.com"
                className="p-2 rounded-lg text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <p className="text-gray-500 text-sm">© 2024 All rights reserved</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradientShift {
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;