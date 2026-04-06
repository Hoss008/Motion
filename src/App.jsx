import { useState, useEffect, useRef } from "react";
import "./index.css";
import { motion, useMotionValue, useSpring } from "motion/react";

/* ================================
   MAGNETIC CURSOR
   A smooth custom cursor that follows the mouse with spring physics.
   ================================ */
function MagneticCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 35 });
  const springY = useSpring(y, { stiffness: 400, damping: 35 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 10);
      y.set(e.clientY - 10);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <motion.div className="custom-cursor" style={{ x: springX, y: springY }} />;
}

/* ================================
   MAGNETIC WRAPPER
   Wrap any element with <Magnetic> to make it pull toward the cursor.
   ================================ */
function Magnetic({ children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 800, damping: 50 });
  const springY = useSpring(y, { stiffness: 800, damping: 50 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.35);
    y.set((e.clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, display: "inline-block" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <>
      <MagneticCursor />
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
  const [open, setOpen] = useState(false);

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

        {/* Desktop links */}
        <div className="navbar-links">
          <motion.a href="#projects" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>Projects</motion.a>
          <motion.a href="#about" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>About</motion.a>
          <motion.a href="#notes" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>Notes</motion.a>
          <motion.a href="#contact" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>Contact</motion.a>
          <motion.a href="#get-template" className="cta-link" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>Get template</motion.a>
        </div>

        {/* Hamburger button */}
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={`bar ${open ? "open" : ""}`} />
          <span className={`bar ${open ? "open" : ""}`} />
          <span className={`bar ${open ? "open" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#notes" onClick={() => setOpen(false)}>Notes</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <a href="#get-template" className="cta-link" onClick={() => setOpen(false)}>Get template</a>
        </motion.div>
      )}
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
            Hey, I'm Hossam <span>👋</span>
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
          a Front-end developer with focus on <em>great user experiences</em>
        </motion.h1>

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a href="https://github.com/Hoss008" target="_blank" rel="noreferrer" className="hero-preview github-pill">
            🔗 github.com/hossam
          </a>
          <button className="hero-cta-btn">
            Hire me →
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

function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <p className="cta-label">Get in touch</p>
        <motion.h2
          className="cta-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's build something <em>amazing</em> together
        </motion.h2>
        <motion.p
          className="cta-subtitle"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 , delay:0.2 }}
        >
          Have a project in mind? I'd love to hear about it.
        </motion.p>
        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Magnetic>
            <motion.button className="btn-primary" whileHover={{ scale: 1.05, y: -2 }}>Start a project</motion.button>
          </Magnetic>
          <Magnetic>
            <a href="/Hossam Hassan.pdf" target="_blank" rel="noreferrer">
              <motion.button className="btn-outline" whileHover={{ scale: 1.05, y: -2 }}>View resume</motion.button>
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <span className="footer-left">© 2026 MMS. All rights reserved.</span>
        <div className="footer-links">
          <a href="#">Twitter</a>
          <a href="#">Dribbble</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </motion.footer>
  );
}

export default App;
