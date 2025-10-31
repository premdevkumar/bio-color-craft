import { useState } from "react";
import { Menu, X, Mail, Phone, Github, Linkedin, Code, Award } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold gradient-text">PDK</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item}
                </button>
              ))}
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity">
                Open to Opportunities
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4 animate-fade-in">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-5xl mx-auto text-center animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8">
            <span className="text-2xl">👋</span>
            <span className="text-sm text-muted-foreground">Welcome to my portfolio</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Prem Dev Kumar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            B.Tech Computer Science Student passionate about{" "}
            <span className="text-primary font-semibold">Backend Development</span> and building{" "}
            <span className="text-secondary font-semibold">innovative solutions</span>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: "8.56", label: "CGPA" },
              { value: "5+", label: "Projects" },
              { value: "6+", label: "Languages" },
              { value: "3", label: "Certifications" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:scale-105"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href="mailto:gpremdevkumar@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={18} />
              <span className="text-sm">gpremdevkumar@gmail.com</span>
            </a>
            <a
              href="tel:+918712322815"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm">+91-8712322815</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity">
              Get In Touch
            </button>
            <button className="px-8 py-3 rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all">
              Download Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            {[
              { icon: Github, label: "GitHub", href: "https://github.com/premdevkumar" },
              { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/premdevkumar-kumar-24ba1529b" },
              { icon: Code, label: "LeetCode", href: "https://leetcode.com/23r01a05u8" },
              { icon: Award, label: "CodeChef", href: "https://www.codechef.com/users/c23r01a05u8" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:scale-105"
              >
                <social.icon size={18} />
                <span className="text-sm hidden sm:inline">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Passionate developer on a mission to create impactful solutions
          </p>
          
          <div className="space-y-6 text-lg text-foreground/90 mb-12">
            <p>
              I'm a B.Tech Computer Science student at CMR Institute of Technology, Hyderabad,
              currently excelling with an 8.56 CGPA in my first year.
            </p>
            <p>
              My journey into technology is fueled by an insatiable curiosity and a desire to
              solve real-world problems through code. I specialize in building modern applications
              using Flutter, React, and maintaining strong fundamentals in Data Structures & Algorithms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Problem Solver", desc: "Strong foundation in DSA and algorithmic thinking" },
              { title: "Quick Learner", desc: "Rapidly adapting to new technologies and frameworks" },
              { title: "Passionate Coder", desc: "Building projects that make a difference" },
              { title: "Tech Enthusiast", desc: "Always exploring the latest innovations" },
            ].map((trait, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all"
              >
                <h3 className="text-xl font-bold mb-2 gradient-text">{trait.title}</h3>
                <p className="text-muted-foreground">{trait.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground mb-12">
            A comprehensive toolkit for building modern applications
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Languages */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Languages</h3>
              {[
                { name: "Java", level: 85 },
                { name: "Python", level: 80 },
                { name: "C", level: 75 },
                { name: "HTML/CSS", level: 90 },
              ].map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-card rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Frameworks & Tools */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Frameworks & Tools</h3>
              {[
                { name: "Flutter", level: 80 },
                { name: "React", level: 75 },
                { name: "Git", level: 85 },
                { name: "VS Code", level: 90 },
              ].map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-card rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Building solutions that make a difference
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((project) => (
              <div
                key={project}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:scale-105"
              >
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Code size={48} className="text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                <p className="text-muted-foreground mb-4">
                  A brief description of this amazing project and the technologies used.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">React</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm">TypeScript</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-muted/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Always open to discussing new opportunities and collaborations
          </p>
          
          <button className="px-12 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-lg font-medium hover:opacity-90 transition-opacity">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-5xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Prem Dev Kumar. Built with passion and code.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
