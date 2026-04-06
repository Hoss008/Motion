import "./App.css";

const projects = [
  {
    title: "Aster Studio",
    summary: "Brand-led portfolio site with immersive editorial sections.",
    role: "Design + Frontend",
    year: "2026",
    tags: ["React", "Headless CMS", "WebGL"],
  },
  {
    title: "Northline Labs",
    summary: "Conversion-focused product landing for a B2B analytics suite.",
    role: "UX + UI Development",
    year: "2025",
    tags: ["Figma", "React", "A/B Testing"],
  },
  {
    title: "Field Notes",
    summary:
      "Digital magazine layout balancing long reads and product stories.",
    role: "Art Direction",
    year: "2025",
    tags: ["Editorial", "Design System", "Motion"],
  },
];

const services = [
  {
    title: "Landing Pages",
    text: "Sharp messaging, visual hierarchy, and reusable sections that convert.",
  },
  {
    title: "Portfolio Sites",
    text: "Distinctive personal and studio websites with a strong creative voice.",
  },
  {
    title: "Product Storytelling",
    text: "Feature narratives, launch pages, and experience-focused micro-sites.",
  },
];

const process = [
  {
    title: "Discover",
    text: "Audit your goals, audience, and references to shape the structure.",
  },
  {
    title: "Design",
    text: "Craft high-fidelity layouts with a clear content and component system.",
  },
  {
    title: "Deliver",
    text: "Ship responsive React-ready sections optimized for motion enhancements.",
  },
];

const testimonials = [
  {
    quote:
      "The layout direction was crisp, thoughtful, and incredibly easy to animate in production.",
    name: "Maya Chen",
    title: "Product Designer, Ardent",
  },
  {
    quote:
      "We launched in under two weeks with a polished front-end that already felt premium.",
    name: "Ibrahim Nassar",
    title: "Founder, Northline Labs",
  },
];

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <a className="brand" href="#home">
          Portfolite
        </a>
        <nav className="menu" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="ghost-btn" href="#contact">
          Let&apos;s Talk
        </a>
      </header>

      <main>
        <section className="section hero" id="home">
          <div className="hero-copy motion-target">
            <p className="kicker">Creative Developer Portfolio</p>
            <h1>Layout-first websites crafted for expressive motion.</h1>
            <p className="hero-text">
              A clean, flexible portfolio structure built in React so you can
              focus on bringing it to life with Framer Motion.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#work">
                Explore Projects
              </a>
              <a className="text-link" href="#process">
                View Process
              </a>
            </div>
            <ul className="hero-stats" aria-label="Highlights">
              <li>
                <strong>24</strong>
                <span>Projects shipped</span>
              </li>
              <li>
                <strong>9</strong>
                <span>Countries reached</span>
              </li>
              <li>
                <strong>6 yrs</strong>
                <span>Industry experience</span>
              </li>
            </ul>
          </div>

          <div className="hero-visual motion-target" aria-hidden="true">
            <div className="portrait-card">
              <div className="portrait-glow"></div>
              <div className="portrait-grid"></div>
              <div className="portrait-caption">
                <span>UI Layout</span>
                <strong>Motion-ready sections</strong>
              </div>
            </div>
            <div className="floating-chip chip-one">
              Available for freelance
            </div>
            <div className="floating-chip chip-two">Open to remote teams</div>
          </div>
        </section>

        <section className="section work" id="work">
          <div className="section-head">
            <p className="kicker">Selected Work</p>
            <h2>Recent projects built for strong visual stories.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article
                className="project-card motion-target"
                key={project.title}
              >
                <div className="project-thumb" aria-hidden="true"></div>
                <div className="project-meta">
                  <span>{project.role}</span>
                  <span>{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul
                  className="tag-list"
                  aria-label={`${project.title} tech stack`}
                >
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-head compact">
            <p className="kicker">Services</p>
            <h2>Design systems and polished UI foundations.</h2>
          </div>
          <div className="service-grid">
            {services.map((item) => (
              <article className="service-card motion-target" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="about">
          <div className="about-copy motion-target">
            <p className="kicker">About</p>
            <h2>
              I build elegant front-end layouts that make animation feel
              natural, not forced.
            </h2>
          </div>
          <aside className="about-panel motion-target">
            <p>
              Based in Cairo, collaborating globally. I care about strong
              spacing, typography rhythm, and components that are easy to
              animate.
            </p>
            <div className="metric-grid" aria-label="Key metrics">
              <div>
                <strong>38%</strong>
                <span>Avg. bounce drop</span>
              </div>
              <div>
                <strong>+54%</strong>
                <span>Engagement lift</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="section process" id="process">
          <div className="section-head compact">
            <p className="kicker">Process</p>
            <h2>A simple path from blank canvas to launch.</h2>
          </div>
          <ol className="process-list">
            {process.map((step, index) => (
              <li className="process-item motion-target" key={step.title}>
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section testimonials" id="testimonials">
          <div className="section-head compact">
            <p className="kicker">Testimonials</p>
            <h2>Trusted by founders, designers, and product teams.</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <blockquote className="quote-card motion-target" key={item.name}>
                <p>\"{item.quote}\"</p>
                <cite>
                  <strong>{item.name}</strong>
                  <span>{item.title}</span>
                </cite>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="section cta" id="contact">
          <p className="kicker">Start A Project</p>
          <h2>Want this layout to move beautifully? Animate it your way.</h2>
          <a className="primary-btn" href="mailto:hello@portfolite.dev">
            hello@portfolite.dev
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>Portfolite Layout Practice</p>
        <p>Built with React - Ready for Motion</p>
      </footer>
    </div>
  );
}

export default App;
