import "./App.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const clients = ["Oasis", "Asterisk", "Eooks", "Opal"];
const skills = [
  "Product Design",
  "Brand Identity Design",
  "UX Design",
  "Branding",
  "Packaging Design",
  "Figma",
  "Photoshop",
];

function App() {
  const aboutSectionRef = useRef(null);
  const { scrollYProgress: aboutScrollYProgress } = useScroll({
    target: aboutSectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(aboutScrollYProgress, [0, 1], [180, -180]);
  // Variants for TASK 2: Mosaic Gallery Stagger Animation
  const mosaicContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const mosaicCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const recentContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const recentCardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 16 },
    },
  };

  return (
    <div className="app-shell">
      <header className="navbar">
        <a className="brand-link" href="#home">
          <span className="logo-mark" aria-hidden="true"></span>
          <span>Portfolite</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="template-btn" href="#contact">
          Get Template
        </a>
      </header>

      <main className="content-wrap">
        {/* 
TASK 1: HERO SECTION - Fade & Stagger Animation
Challenge: Animate the hero section elements with a fade-in effect on page load
1. Wrap hero-chip in motion.p 
2. Wrap h1 in motion.h1 with a delay
3. Wrap hero-subtitle in motion.p with more delay
Expected: Elements fade in and slide up one after another (stagger effect)
Hint: Use initial={{ opacity: 0, y: 20 }}, animate={{ opacity: 1, y: 0 }}, transition={{ delay: 0.X }}
        */}
        <section className="hero-section" id="home">
          <div className="smoke smoke-left" aria-hidden="true"></div>
          <div className="smoke smoke-right" aria-hidden="true"></div>

          <motion.p
            className="hero-chip"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            Crafting Unique Brand Identities
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Branding that you need Indeed
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Elevate your brand with custom identity and package design. Showcase
            your story through bold visuals and strategic design solutions.
          </motion.p>

          <div className="hero-buttons">
            <a className="glow-btn" href="#projects">
              Get Started Now
            </a>
            <a className="ghost-btn" href="#projects">
              See Projects
            </a>
          </div>

          <div className="scroll-row" aria-label="Scroll indicator">
            <span>Scroll down</span>
            <span className="scroll-mouse">0</span>
            <span>to see projects</span>
          </div>
        </section>

        <ul className="client-row" aria-label="Clients">
          {clients.map((client) => (
            <li key={client}>{client}</li>
          ))}
        </ul>

        {/*
          TASK 2: MOSAIC GALLERY - Staggered Card Reveals
          Challenge: Animate all 9 cards with a staggered entrance using whileInView
          1. Wrap the entire mosaic-grid in motion.div
          2. Wrap each motion.article in motion.motion.article
3. Use StaggerContainer with staggerChildren
Expected: Cards appear one by one in sequence when scrolling into view
Hint: Use whileInView={{ opacity: 1, scale: 1 }}, initial={{ opacity: 0, scale: 0.9 }}, viewport={{ once: true }}
Extra Challenge: Add a hover scale effect to individual cards
        */}
        <section className="mosaic-section" id="projects">
          <motion.div
            className="mosaic-grid"
            variants={mosaicContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.article
              className="mosaic-card card-a"
              variants={mosaicCardVariants}
              whileHover={{ scale: 1.1 }}
              style={{
                backgroundImage:
                  'url("https://images.pexels.com/photos/3062518/pexels-photo-3062518.jpeg?auto=compress&cs=tinysrgb&w=500")',
              }}
            >
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </motion.article>

            <motion.article
              className="mosaic-card card-b"
              variants={mosaicCardVariants}
              whileHover={{ scale: 1.1 }}
              style={{
                backgroundImage:
                  'url("https://images.pexels.com/photos/3874361/pexels-photo-3874361.jpeg?auto=compress&cs=tinysrgb&w=500")',
              }}
            >
              <span className="small-pill">About Me</span>
              <a className="case-btn" href="#about">
                View Casestudy -&gt;
              </a>
            </motion.article>

            <motion.article
              className="mosaic-card card-c"
              variants={mosaicCardVariants}
              whileHover={{ scale: 1.1 }}
              style={{
                backgroundImage:
                  'url("https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=500")',
              }}
            >
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </motion.article>

            <motion.article
              className="mosaic-card card-d"
              variants={mosaicCardVariants}
              whileHover={{ scale: 1.1 }}
              style={{
                backgroundImage:
                  'url("https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500")',
              }}
            >
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </motion.article>

            <motion.article
              className="mosaic-card card-e"
              variants={mosaicCardVariants}
              whileHover={{ scale: 1.1 }}
              style={{
                backgroundImage:
                  'url("https://images.pexels.com/photos/4546548/pexels-photo-4546548.jpeg?auto=compress&cs=tinysrgb&w=500")',
              }}
            >
              <span className="focus-dot" aria-hidden="true"></span>
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </motion.article>

            <motion.article
              className="mosaic-card card-f"
              variants={mosaicCardVariants}
              whileHover={{ scale: 1.1 }}
              style={{
                backgroundImage:
                  'url("https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=500")',
              }}
            >
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </motion.article>

            <motion.article
              className="mosaic-card card-g"
              variants={mosaicCardVariants}
              whileHover={{ scale: 1.1 }}
              style={{
                backgroundImage:
                  'url("https://images.pexels.com/photos/3624360/pexels-photo-3624360.jpeg?auto=compress&cs=tinysrgb&w=500")',
              }}
            >
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </motion.article>

            <motion.article
              className="mosaic-card card-h"
              variants={mosaicCardVariants}
              whileHover={{ scale: 1.1 }}
              style={{
                backgroundImage:
                  'url("https://images.pexels.com/photos/3621957/pexels-photo-3621957.jpeg?auto=compress&cs=tinysrgb&w=500")',
              }}
            >
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </motion.article>

            <motion.article
              className="mosaic-card card-i"
              variants={mosaicCardVariants}
              whileHover={{ scale: 1.1 }}
              style={{
                backgroundImage:
                  'url("https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=500")',
              }}
            >
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </motion.article>
          </motion.div>
        </section>

        <section className="project-cta-row">
          <a className="all-projects" href="#projects">
            All Projects
          </a>
          <a className="glow-btn" href="#contact">
            Book a Free Call
          </a>
        </section>

        {/*
TASK 3: ABOUT SECTION - Parallax & Slide In
Challenge: Animate the about section with parallax effect and slide-in layout
1. Wrap about-copy in motion.div with slideInLeft effect
2. Wrap about-image in motion.div with parallax using useScroll hook
Expected: Left text slides in, right image moves with scroll parallax
Hint: Use useScroll() and useTransform() to create parallax. For slide: initial={{ x: -100, opacity: 0 }}, whileInView={{ x: 0, opacity: 1 }}
Extra Challenge: Add a reveal animation to the skill tags list items
        */}
        <section className="about-section" id="about" ref={aboutSectionRef}>
          <motion.div
            className="about-copy"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2>Meet Meily</h2>
            <p>
              I am Meily, a passionate Brand Identity and Package Designer based
              in tokyo. I specialize in crafting bold visual identities and
              packaging that captivate and inspire, blending creativity with
              strategy to elevate brands.
            </p>

            <motion.ul
              className="skill-tags"
              aria-label="Skills"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              {skills.map((skill) => (
                <motion.li
                  key={skill}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="about-image"
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/1493112/pexels-photo-1493112.jpeg?auto=compress&cs=tinysrgb&w=800")',
              y: imageY,
            }}
            aria-hidden="true"
          >
            <span className="focus-dot"></span>
          </motion.div>
        </section>

        {/*
          TASK 4: RECENT WORKS - Horizontal Reveal Pattern
          Challenge: Animate the 4 recent work cards with a sequential reveal
          1. Wrap each recent-card in motion.motion.article
          2. Create a container with staggerChildren effect (offset by 0.1s)
          Expected: Cards appear left to right with a wave motion effect
          Hint: Use initial={{ opacity: 0, x: -50 }}, whileInView={{ opacity: 1, x: 0 }}, transition={{ type: "spring", stiffness: 100 }}
          Extra Challenge: Add image zoom effect on hover for each card
        */}
        <section className="recent-section">
          <h2 className="line-title">Recent Works o</h2>

          <motion.div
            className="recent-grid"
            variants={recentContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.article
              className="recent-card"
              variants={recentCardVariants}
              whileHover={{ scale: 1.05 }}
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=500&h=400&fit=crop")',
              }}
            >
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </motion.article>
            <motion.article
              className="recent-card"
              variants={recentCardVariants}
              whileHover={{ scale: 1.05 }}
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1596394516093-35fda4abbee6?w=500&h=400&fit=crop")',
              }}
            >
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </motion.article>
            <motion.article
              className="recent-card"
              variants={recentCardVariants}
              whileHover={{ scale: 1.05 }}
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=400&fit=crop")',
              }}
            >
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </motion.article>
            <motion.article
              className="recent-card"
              variants={recentCardVariants}
              whileHover={{ scale: 1.05 }}
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop")',
              }}
            >
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </motion.article>
          </motion.div>
        </section>

        {/*
          TASK 5: SERVICES SECTION - Dual Layout Reveal
          Challenge: Animate both the portfolio entries list and image with opposite directions
          1. Wrap portfolio-entries in motion.div with slide from right
          2. Wrap services-image in motion.div with slide from left
          Expected: Two panels slide in from opposite sides, meet in the middle
          Hint: Use initial={{ x: 100 }}, whileInView={{ x: 0 }} for right panel, initial={{ x: -100 }}, whileInView={{ x: 0 }} for left
          Extra Challenge: Add a line animation to draw borders under each entry as it appears
        */}
        <section className="services-section" id="services">
          <motion.div
            className="portfolio-entries"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div
              className="entry"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.12 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <span className="entry-title">Brand Designer</span>
              <span className="entry-company">UrbanFit Studio</span>
              <span className="entry-date">2023-24</span>
            </motion.div>
            <motion.div
              className="entry"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.24 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <span className="entry-title">Package Designer</span>
              <span className="entry-company">GreenK Studio</span>
              <span className="entry-date">2020-22</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="services-image"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.25 }}
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1611339555312-e607c90352fd?w=600&h=500&fit=crop")',
            }}
            aria-hidden="true"
          ></motion.div>
        </section>

        {/*
          TASK 6: TESTIMONIALS - 3D Flip Card Effect
          Challenge: Create an interactive 3D flip effect for each testimonial card
          1. Wrap each motion.article in motion.motion.article with 3D transforms
          2. Add whileHover={{ rotateY: 10, rotateX: 5 }} for 3D tilt
          3. Add whileInView to fade in on scroll
          Expected: Cards appear with a fade-in on scroll, then tilt on hover with 3D perspective
          Hint: Use perspective: 1200, rotateY, rotateX. Combine initial={{ opacity: 0, rotateY: -20 }}, whileInView={{ opacity: 1, rotateY: 0 }}
          Extra Challenge: Add a shadow that follows the mouse position for enhanced 3D effect
        */}
        <section className="testimonials-section" id="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonial-grid" style={{ perspective: 1200 }}>
            <motion.article
              initial={{ opacity: 0, rotateY: -20 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              whileHover={{ rotateY: 10, rotateX: 5, scale: 1.02 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p>
                The visual language feels premium and intentional. Every section
                reads like a polished case-study experience.
              </p>
              <span>Studio North</span>
            </motion.article>
            <motion.article
              initial={{ opacity: 0, rotateY: -20 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              whileHover={{ rotateY: 10, rotateX: 5, scale: 2.02 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p>
                We loved how the dark aesthetic and card rhythm made our brand
                feel modern without losing clarity.
              </p>
              <span>Oasis Labs</span>
            </motion.article>
            <motion.article
              initial={{ opacity: 0, rotateY: -20 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              whileHover={{ rotateY: 10, rotateX: 5, scale: 1.02 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.24 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p>
                Strong hierarchy, clear story, and a layout that is perfect for
                adding scroll and reveal animations.
              </p>
              <span>Asterisk Team</span>
            </motion.article>
          </div>
        </section>

        {/*
          TASK 7: CONTACT CTA - Scale & Pulse Effect
          Challenge: Create an attention-grabbing call-to-action with pulse animation
          1. Wrap the entire contact-section in motion.section
          2. Animate h2 with a scale-up effect on scroll
          3. Add a pulsing animation to the template-btn
          Expected: Heading scales up when entering view, button pulses to draw attention
          Hint: Use whileInView={{ scale: 1 }}, initial={{ scale: 0.8 }}, animate={{ boxShadow: ["0px 0px 0px rgba(255,255,255,0.5)", "0px 0px 20px rgba(255,255,255,0.8)"] }}, transition={{ duration: 2, repeat: Infinity }}
          Extra Challenge: Add a bounce effect to the button on hover combined with the pulse animation
        */}
        <motion.section
          className="contact-section"
          id="contact"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Ready to elevate your brand?
          </motion.h2>
          <p>
            Let us shape your next product story with a visual system built for
            attention and conversion.
          </p>
          <motion.a
            className="template-btn"
            href="mailto:hello@portfolite.dev"
            animate={{
              boxShadow: [
                "0px 0px 0px rgba(255,255,255,0.28)",
                "0px 0px 18px rgba(255,255,255,0.5)",
                "0px 0px 0px rgba(255,255,255,0.28)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Free Call
          </motion.a>
        </motion.section>
      </main>
    </div>
  );
}

export default App;
