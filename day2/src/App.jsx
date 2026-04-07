import "./App.css";

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
        <section className="hero-section" id="home">
          <div className="smoke smoke-left" aria-hidden="true"></div>
          <div className="smoke smoke-right" aria-hidden="true"></div>

          <p className="hero-chip">Crafting Unique Brand Identities</p>
          <h1>Branding that you need Indeed</h1>
          <p className="hero-subtitle">
            Elevate your brand with custom identity and package design. Showcase
            your story through bold visuals and strategic design solutions.
          </p>

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

        <section className="mosaic-section" id="projects">
          <div className="mosaic-grid">
            <article className="mosaic-card card-a tone-1">
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </article>

            <article className="mosaic-card card-b tone-2">
              <span className="small-pill">About Me</span>
              <a className="case-btn" href="#about">
                View Casestudy -&gt;
              </a>
            </article>

            <article className="mosaic-card card-c tone-3">
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </article>

            <article className="mosaic-card card-d tone-4">
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </article>

            <article className="mosaic-card card-e tone-color">
              <span className="focus-dot" aria-hidden="true"></span>
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </article>

            <article className="mosaic-card card-f tone-5">
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </article>

            <article className="mosaic-card card-g tone-6">
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </article>

            <article className="mosaic-card card-h tone-7">
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </article>

            <article className="mosaic-card card-i tone-8">
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </article>
          </div>
        </section>

        <section className="project-cta-row">
          <a className="all-projects" href="#projects">
            All Projects
          </a>
          <a className="glow-btn" href="#contact">
            Book a Free Call
          </a>
        </section>

        <section className="about-section" id="about">
          <div className="about-copy">
            <h2>Meet Meily</h2>
            <p>
              I am Meily, a passionate Brand Identity and Package Designer based
              in tokyo. I specialize in crafting bold visual identities and
              packaging that captivate and inspire, blending creativity with
              strategy to elevate brands.
            </p>

            <ul className="skill-tags" aria-label="Skills">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="about-image" aria-hidden="true">
            <span className="focus-dot"></span>
          </div>
        </section>

        <section className="recent-section">
          <h2 className="line-title">Recent Works o</h2>

          <div className="recent-grid">
            <article className="recent-card tone-6">
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </article>
            <article className="recent-card tone-7">
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </article>
            <article className="recent-card tone-8">
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </article>
            <article className="recent-card tone-3">
              <a className="case-btn" href="#projects">
                View Casestudy -&gt;
              </a>
            </article>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="portfolio-entries">
            <div className="entry">
              <span className="entry-title">Brand Designer</span>
              <span className="entry-company">UrbanFit Studio</span>
              <span className="entry-date">2023-24</span>
            </div>
            <div className="entry">
              <span className="entry-title">Package Designer</span>
              <span className="entry-company">GreenK Studio</span>
              <span className="entry-date">2020-22</span>
            </div>
          </div>

          <div className="services-image" aria-hidden="true"></div>
        </section>

        <section className="testimonials-section" id="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonial-grid">
            <article>
              <p>
                The visual language feels premium and intentional. Every section
                reads like a polished case-study experience.
              </p>
              <span>Studio North</span>
            </article>
            <article>
              <p>
                We loved how the dark aesthetic and card rhythm made our brand
                feel modern without losing clarity.
              </p>
              <span>Oasis Labs</span>
            </article>
            <article>
              <p>
                Strong hierarchy, clear story, and a layout that is perfect for
                adding scroll and reveal animations.
              </p>
              <span>Asterisk Team</span>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <h2>Ready to elevate your brand?</h2>
          <p>
            Let us shape your next product story with a visual system built for
            attention and conversion.
          </p>
          <a className="template-btn" href="mailto:hello@portfolite.dev">
            Book a Free Call
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
