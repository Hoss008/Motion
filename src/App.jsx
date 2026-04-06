import "./index.css";
import { motion } from "motion/react";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <CTA />
      <Footer />
    </>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <motion.div
          className="navbar-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          MMS
        </motion.div>
        <div className="navbar-links">
          <motion.a
            href="#projects"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            Projects
          </motion.a>
          <motion.a
            href="#about"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            About
          </motion.a>
          <motion.a
            href="#notes"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Notes
          </motion.a>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Contact
          </motion.a>
          <motion.a
            href="#get-template"
            className="cta-link"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            Get template
          </motion.a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-meta">
          <motion.span
            className="hero-meta-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Hey, I'm Nick <span>👋</span>
          </motion.span>
          <span className="availability">
            <span className="availability-dot"></span>
            available for new projects
          </span>
        </div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.2 }}
        >
          a product design partner with focus on <em>no-code websites</em>
        </motion.h1>

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="hero-preview">
            <img src="/Proj Img1.png" alt="preview" />
          </div>
          <button className="hero-cta-btn">
            Remix for free
            <span className="new-badge">NEW</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

const projects = [
  {
    year: "2025",
    type: "Personal Project",
    title: "bizz buzz",
    image: "/Hero Image.png",
    color: "orange",
  },
  {
    year: "2024",
    type: "Client Work",
    title: "villa sumera",
    image: "/Proj Img2.png",
    color: "blue",
  },
  {
    year: "2024",
    type: "Concept Design",
    title: "twin land",
    image: "/Proj Img3.png",
    color: "green",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className={`project-card ${project.color}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            // viewport={{ amount: 0.3 }}
            // viewport={{ once: 0.3 }}
          >
            <div className="project-card-header">
              <div>
                <span className="project-card-meta">
                  {project.year} — {project.type}
                </span>
                <h2 className="project-card-title">{project.title}</h2>
              </div>
              <motion.div
                className="project-card-arrow"
                whileHover={{ scale: 1.1, rotate: 45 }}
              >
                →
              </motion.div>
            </div>
            <motion.div
              className="project-card-image"
              whileHover={{ scale: 1.03 }}
            >
              <img src={project.image} alt={project.title} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.p
          className="about-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          About
        </motion.p>
        <div className="about-grid">
          <motion.h2
            className="about-heading"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            Designing digital experiences that feel <em>effortless</em> and look
            stunning
          </motion.h2>
          <div>
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <p>
                With over 8 years of experience in product design, I specialize
                in creating clean, functional, and visually compelling websites
                and applications. My approach combines minimalist aesthetics
                with user-centered thinking.
              </p>
              <p>
                I work closely with startups and established brands to bring
                their vision to life through thoughtful design and seamless
                interactions. Every pixel serves a purpose.
              </p>
            </motion.div>
            <div className="about-stats">
              <motion.div
                className="stat"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3>50+</h3>
                <p>Projects completed</p>
              </motion.div>
              <motion.div
                className="stat"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3>8+</h3>
                <p>Years experience</p>
              </motion.div>
              <motion.div
                className="stat"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3>30+</h3>
                <p>Happy clients</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================
   CTA SECTION
   TODO: Add animations!
   - Heading: fade up on scroll (whileInView)
   - Subtitle: fade up with delay
   - Buttons: fade up with more delay
   - Buttons: whileHover={{ scale: 1.05, y: -2 }}
   ================================ */
function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <p className="cta-label">Get in touch</p>
        <h2 className="cta-heading">
          Let's build something <em>amazing</em> together
        </h2>
        <p className="cta-subtitle">
          Have a project in mind? I'd love to hear about it.
        </p>
        <div className="cta-buttons">
          <button className="btn-primary">Start a project</button>
          <button className="btn-outline">View resume</button>
        </div>
      </div>
    </section>
  );
}

/* ================================
   FOOTER
   TODO: Add animations!
   - Fade in on scroll (whileInView)
   ================================ */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span className="footer-left">© 2026 nitro. All rights reserved.</span>
        <div className="footer-links">
          <a href="#">Twitter</a>
          <a href="#">Dribbble</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default App;
