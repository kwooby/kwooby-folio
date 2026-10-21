
import './App.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImage from './assets/kwooby.png';
import trackerPicture from './assets/trackerPicture.png';
import integrationPicture from './assets/integrationPicture.png';

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home">kwooby<span>.</span></a>

          <ul className="nav">
            <nav className="nav-links" aria-label="Main navigation">
              <a href="#projects">Projects</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>

              <a 
                href="https://github.com/kwooby"
                target="_blank"
                rel="noopener noreferrer" 
                aria-label="GitHub">
                <FaGithub />
              </a>

              <a 
                href="https://www.linkedin.com/in/alexcastela/"
                target="_blank"
                rel="noopener noreferrer" 
                aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </nav>
          </ul>
          
      </header>

      <main>
        <section className="hero-section" id="home">
          <p className="eyebrow">
            <span className="status-dot"></span>
            Welcome In
          </p>

          <h1>
            Portfolio |
            <span>Alex Davis</span>
          </h1>

          <p className="hero-description">
            I keep building things so I built this website to show them off.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Featured Projects
            </a>

            <a className="button button-secondary" href="#about">
              About Me
            </a>
            
            <a className="button button-terciary" href="#contact">
              Contact Me
            </a>
          </div>

          <p className="scroll-note">scroll or bowl dude</p>
        </section>

        <section className="project-section" id="projects">

          <div className="section-heading">
            <div>
              <p className="eyebrow">Projects</p>
              <h2>Featured</h2>
            </div>
            <p className="section-description">
              Live projects you can click through.
            </p>
          </div>

          <div className="project-grid">
            <article className="project-card integration-card">
              <div className="project-art" aria-hidden="true">

                <span className="project-number">01 / FULL STACK</span>

                <img className="project-image" src={integrationPicture} />
              </div>

              <div className="project-info">
                <div className="project-title-row">
                  <h3>Integration Hub</h3>
                </div>
                <p>
                  A full-stack dashboard for managing orders,
                  payments, shipments, and notifications in one place.
                </p>
                <div className="tech-list">
                  <span>React | </span>
                  <span>Flask | </span>
                  <span>PostgreSQL</span>
                </div>
              </div>
            </article>

            <article className="project-card tracker-card">
              <div className="project-art" aria-hidden="true">
                <span className="project-number">02 / WEB APP</span>
                <img className="project-image" src={trackerPicture} />
              </div>

              <div className="project-info">
                <div className="project-title-row">
                  <h3>Mile Tracker</h3>
                </div>
                <p>
                  A personal activity tracker for recording runs
                  and walks, reviewing mileage, and following progress.
                </p>
                <div className="tech-stack">
                  <span>Python | </span>
                  <span>Flask | </span>
                  <span>PostgreSQL</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="about-section" id="about">

          <div className="about-head">
            <p className="eyebrow">Hello,</p>
            <h2>My name is Alex!</h2>

            <p>
              I'm a software developer transitioning from a background in animation, 
              digital design, and illustration. I earned a BFA in Animation from Savannah 
              College of Art and Design where I developed an interest in creative 
              problem-solving and digital experiences.
            </p>

            <p>
            I've been building my programming and development skils through hands-on 
            projects, coursework, and continued self-directed learning.
            Currently, I'm focusing on backend technologies like Python, PostGreSQL, and 
            Flask while continuing to learn React and other frontend technologies. My goal 
            is to build a strong foundation across the full stack and continue growing as 
            an overall solid developer.
            </p>
          </div>


          <div>
            <div className="written-note">
              <p className="writing">This is Alex!</p>
              <span className="arrow-southeast">&#8690;</span>
            </div>

            <img className="profile-image" src={profileImage} alt="hi!" />
          </div>     
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">Have a cool idea?</p>
          <h2>Tell me about it</h2>
          <p>I'd love to work with you! Email me and we can talk.</p>
          <a className="button button-primary" href="mailto:alex.c.davis.dev@gmail.com">
            Contact Me
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#home">kwooby<span>.</span> Alex Davis</a>
        <p>Built with React.</p>
        <a href="#home">Back Up!</a>
      </footer>
    </>
  )
}

export default App
