import { useState } from 'react'
import portrait from './assets/anuoluwa.jpeg'
import fashionImage from './assets/tailor.jpg'
import marketImage from './assets/oja.jpg'
import churchImage from './assets/church.jpg'
import weatherImage from './assets/weather.jpg'
import todoImage from './assets/todo.jpg'

const email = 'okeemmanuel61@gmail.com'
const github = 'https://github.com/holyboyclassic'
const linkedin = 'https://www.linkedin.com/in/anuoluwapo-emmanuel-ba14273a2'

const projects = [
  {
    number: '01',
    title: 'Anuoluwa Fashion World',
    image: fashionImage,
    type: 'Fashion & tailoring',
    description:
      'A welcoming digital home for a tailoring business—showcasing fashion services and designs while making it easy for customers to get in touch.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    visual: 'fashion',
    liveUrl: 'https://anu-oluwa-fash.vercel.app',
    sourceUrl: 'https://github.com/holyboyclassic/anu-oluwa-fash',
  },
  {
    number: '02',
    title: 'Oja Online Wholesale Market',
    image: marketImage,
    type: 'Marketplace concept',
    description:
      'An online wholesale marketplace concept focused on helping buyers discover products and connect with wholesale suppliers.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    visual: 'market',
    visualLabel: 'Wholesale marketplace website preview',
    note: 'Oja Market project screenshot.',
    liveUrl: 'https://oja-online-wholesales-market.vercel.app/',
    sourceUrl: 'https://github.com/holyboyclassic/Oja-online-wholesales-market',
  },
  {
    number: '03',
    title: 'CCC New Light Parish Church Website',
    image: churchImage,
    type: 'Community & information',
    description:
      'A clear, accessible online presence for a church, bringing essential church information together in one welcoming place.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    visual: 'church',
    liveUrl: 'https://ccc-parish-church.vercel.app',
    sourceUrl: 'https://github.com/holyboyclassic/ccc-parish-church',
  },
  {
    number: '04',
    title: 'Weather App',
    image: weatherImage,
    type: 'API-powered application',
    description:
      'A weather application that fetches and presents current weather information using an API.',
    technologies: [' HTML5', 'CSS3', 'JavaScript', 'Weather API'],
    visual: 'weather',
    liveUrl: 'https://weather-app-peach-xi-92.vercel.app',
    sourceUrl: 'https://github.com/holyboyclassic/weather-app',
  },
  {
    number: '05',
    title: 'React To-Do List',
    image: todoImage,
    type: 'React application',
    description:
      'A practical task manager where users can add tasks, mark them complete, and remove tasks as plans change.',
    technologies: ['CSS', 'JavaScript', 'React'],
    visual: 'todo',
    visualLabel: 'React to-do list application preview',
    note: 'To-do list screenshot.',
    liveUrl: 'https://to-do-list-tawny-tau-20.vercel.app',
    sourceUrl: 'https://github.com/holyboyclassic/to-do-list',
  },
]

const skills = [
  { name: 'HTML', detail: 'Semantic structure', mark: '5', color: 'orange' },
  { name: 'CSS', detail: 'Responsive styling', mark: '✳', color: 'blue' },
  { name: 'JavaScript', detail: 'Interactive experiences', mark: 'JS', color: 'yellow' },
  { name: 'React', detail: 'Component-based UI', mark: '⚛', color: 'cyan' },
  { name: 'Git', detail: 'Version control', mark: '⌘', color: 'red' },
  { name: 'GitHub', detail: 'Code collaboration', mark: '↗', color: 'light' },
  { name: 'Vercel', detail: 'Frontend deployment', mark: '▲', color: 'light' },
]

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h12m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? ' brand-footer' : ''}`} href="#home" aria-label="Back to home">
      <span className="brand-mark" aria-hidden="true">A</span>
      <span>Anuoluwapo<span className="brand-dot">.</span></span>
    </a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    ['About', '#about'],
    ['Work', '#projects'],
    ['Skills', '#skills'],
    ['Contact', '#contact'],
  ]

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav
          className={`primary-nav${menuOpen ? ' nav-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Let's talk <ArrowIcon diagonal />
          </a>
        </nav>
      </div>
    </header>
  )
}

function SectionHeading({ eyebrow, title, description, side, id }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow"><span className="eyebrow-line" />{eyebrow}</span>
        <h2 id={id}>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {side && <p className="heading-side">{side}</p>}
    </div>
  )
}

function ProjectPreview({ project }) {
  return (
    <div className={`project-preview preview-${project.visual}`}>
      {project.image ? (
        <img className="project-image" src={project.image} alt={project.visualLabel} />
      ) : (
        <div className="preview-browser" role="img" aria-label={project.visualLabel}>
          <div className="browser-bar">
            <span /><span /><span />
            <div className="browser-address" />
          </div>
          <div className="preview-content">
            {project.visual === 'fashion' && (
              <div className="fashion-mock">
                <span className="mock-kicker">TAILORING & DESIGN</span>
                <b className="fashion-title">Anuoluwa Fashion World</b>
                <div className="fashion-tiles"><i>01</i><i>02</i><i>03</i></div>
              </div>
            )}
            {project.visual === 'market' && (
              <div className="market-mock">
                <div className="mock-nav"><b>OJA<span>MARKET</span></b><i>Search products...</i></div>
                <span className="mock-kicker">WHOLESALE, MADE SIMPLE</span>
                <b className="market-title">Find your next<br />best seller.</b>
                <div className="market-tiles"><i>01</i><i>02</i><i>03</i></div>
              </div>
            )}
            {project.visual === 'church' && (
              <div className="church-mock">
                <span className="church-cross">✳</span>
                <span className="mock-kicker">A PLACE TO BELONG</span>
                <b>Faith. Hope.<br />Community.</b>
                <span className="church-pill">PLAN A VISIT&nbsp; ↗</span>
              </div>
            )}
            {project.visual === 'weather' && (
              <div className="weather-mock">
                <div><span className="mock-kicker">LAGOS, NG</span><b>Thursday, 18 June</b></div>
                <span className="weather-sun">☀</span>
                <strong>28°</strong>
                <span className="weather-condition">Partly cloudy</span>
                <div className="weather-stats"><span>HUMIDITY <b>68%</b></span><span>WIND <b>12 km/h</b></span></div>
              </div>
            )}
            {project.visual === 'todo' && (
              <div className="todo-mock">
                <span className="mock-kicker">MONDAY, 09:41</span>
                <b className="todo-title">A little progress<br />goes a long way.</b>
                <div className="todo-row"><i className="checked">✓</i><s>Sketch out new ideas</s></div>
                <div className="todo-row"><i />Build something useful</div>
                <div className="todo-row"><i />Take a proper break</div>
                <div className="todo-add">+&nbsp; Add a task</div>
              </div>
            )}
          </div>
        </div>
      )}
      <span className="preview-caption">{project.note}</span>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectPreview project={project} />
      <div className="project-info">
        <div className="project-topline">
          <span className="project-number">{project.number} / 05</span>
          <span className="project-type">{project.type}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label="Technologies">
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-links">
          {project.liveUrl ? (
            <a className="placeholder-link" href={project.liveUrl} target="_blank" rel="noreferrer">
              Live preview <span>{project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
            </a>
          ) : (
            <span className="placeholder-link">
              Live preview <span>URL to be added</span>
            </span>
          )}
          {project.sourceUrl ? (
            <a className="placeholder-link" href={project.sourceUrl} target="_blank" rel="noreferrer">
              Source code <span>{project.sourceUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
            </a>
          ) : (
            <span className="placeholder-link">
              Source code <span>GitHub URL to be added</span>
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

function ContactLink({ label, value, href, note }) {
  const content = (
    <>
      <span className="contact-label">{label}</span>
      <span className="contact-value">{value}<ArrowIcon diagonal /></span>
      <span className="contact-note">{note}</span>
    </>
  )

  return href ? (
    <a className="contact-card" href={href}>{content}</a>
  ) : (
    <div className="contact-card contact-placeholder" aria-label={`${label}: ${value}`}>
      {content}
    </div>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Brand footer />
        <p>Designed with intention. Built to keep learning.</p>
        <a href="#home" className="back-top">Back to top ↑</a>
        <span className="copyright">© {new Date().getFullYear()} Anuoluwapo</span>
      </div>
    </footer>
  )
}

export default function Portfolio() {
  const mailto = email ? `mailto:${email}` : null

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section className="hero container" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow"><span className="status-dot" /> FRONTEND DEVELOPER</span>
            <h1 id="hero-title">Thoughtful code.<br /><span>Meaningful</span> interfaces.</h1>
            <p className="hero-description">
              I build responsive websites and interactive experiences that make the web feel a little more human.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Let’s Work Together <ArrowIcon diagonal /></a>
              <a className="button button-secondary" href="#projects">View My Projects <ArrowIcon /></a>
            </div>
            <div className="hero-footnote"><span>Open to opportunities worldwide</span></div>
          </div>
          <div className="hero-photo-frame">
            <img
              className="hero-photo"
              src={portrait}
              alt="Portrait of Anuoluwa, Frontend developer"
            />
            <span className="photo-caption">HELLO, I'M Anuoluwapo</span>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="about-section section-pad" id="about" aria-labelledby="about-title">
          <div className="container about-grid">
            <div className="about-aside">
              <span className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT ME</span>
              <span className="about-index">01 <i>— 04</i></span>
            </div>
            <div className="about-copy">
              <h2 id="about-title">I'm a<br /><span>Developer</span> who loves turning ideals into reality.</h2>
              <p>
                I'm a passsionate web Developer focused on building modern, responsive, and user-friendly web experiences.
              </p>
              <p>
                I learn by building practical projects, working through problems, and improving with every iteration. Along the way, i work  with HTML, CSS, JavaScript, React, to transform ideals into functional digital solution.                I'm early in my career, always open to feedback, and excited to contribute to a team while continuing to grow as a developer, i believe in learning by building, solving real-world problems.
              </p>
              <p>
                My Mission: To build impactful digital experiences, solve meaningful problems through technology, and grow into a well-rounded Full-Stack Developer.
              </p>
              <a href="#skills" className="text-link">A few things I work with <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="projects-section section-pad" id="projects" aria-labelledby="projects-title">
          <div className="container">
            <SectionHeading
              eyebrow="SELECTED WORK"
              title="Learning by building."
              description="Explore my projects, showcasing my frontend development skills, problem-solving abilities, and commitment to building responsive, user-friendly web experiences."
              side="FIVE PROJECTS"
              id="projects-title"
            />
            <div className="project-grid">
              {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
            </div>
            
          </div>
        </section>

        <section className="skills-section section-pad" id="skills" aria-labelledby="skills-title">
          <div className="container">
            <SectionHeading
              eyebrow="MY TOOLKIT"
              title="The tools I'm growing with."
              description="A developing skill set, built one project and one problem at a time."
              side="ALWAYS LEARNING"
              id="skills-title"
            />
            <div className="skills-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.name}>
                  <span className={`skill-mark mark-${skill.color}`} aria-hidden="true">{skill.mark}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-detail">{skill.detail}</span>
                  <span className="skill-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title">
          <div className="container">
            <div className="contact-panel">
              <div className="contact-heading">
                <span className="eyebrow"><span className="eyebrow-line" /> WHAT’S NEXT</span>
                <h2 id="contact-title">Let's make something<br /><span>good together.</span></h2>
                <p>
                  I'm looking for frontend internships, junior developer opportunities, and thoughtful website projects. If you’re building something, I’d love to hear about it.
                </p>
                {mailto ? (
                  <a className="button button-light" href={mailto}>Let’s Work Together <ArrowIcon diagonal /></a>
                ) : (
                  <button className="button button-light" type="button" disabled title="Add your email address in src/App.jsx to enable this email link">
                    okeemmanuel61@gmail.com<ArrowIcon diagonal />
                  </button>
                )}
              </div>
              <div className="contact-details">
                <ContactLink
                  label="EMAIL"
                  value={email || 'okeemmanuel61@gmail.com'}
                  href={mailto}
                  note={email ? 'Say hello' : 'okeemmanuel61@gmail.com'}
                />
                <ContactLink
                  label="LINKEDIN"
                  value={linkedin || 'https://www.linkedin.com/in/anuoluwapo-emmanuel-ba14273a2'}
                  href={linkedin || undefined}
                  note={linkedin ? 'Connect professionally' : 'Set the LinkedIn constant in src/App.jsx'}
                />
                <ContactLink
                  label="GITHUB"
                  value={github || 'https://github.com/holyboyclassic'}
                  href={github || undefined}
                  note={github ? 'Explore my code' : 'Set the GitHub constant in src/App.jsx'}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
