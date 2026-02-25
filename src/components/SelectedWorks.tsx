import { useState } from 'react';
import './SelectedWorks.css';

const projects = [
  {
    title: 'Movies Now',
    description:
      'A modern movie discovery platform featuring a clean UI, real-time search, and responsive grid layouts for an immersive browsing experience.',
    tags: ['React', 'API'],
    url: 'https://movies-now-4xqe.onrender.com/',
    github: '#',
  },
  {
    title: 'Studio E-Commerce',
    description:
      'A premium e-commerce storefront with a focus on elegant typography, product discovery, and seamless mobile responsiveness.',
    tags: ['React', 'Styling'],
    url: 'https://ajoychakravarthy.github.io/studio_ecommerce-frontend/',
    github: '#',
  },
  {
    title: 'Escape & Explore',
    description:
      'A vibrant travel exploration platform designed for discoverability, featuring immersive visual storytelling and modern web animations.',
    tags: ['React', 'Vite'],
    url: 'https://ajoychakravarthy.github.io/escape-and-explore/',
    github: '#',
  },
];

export default function SelectedWorks() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="works">
      <div className="container">
        <div className="works__header">
          <h2 className="works__title">
            My <span className="works__title-accent">Works</span>
          </h2>
          <p className="works__subtitle">
            A selection of projects I've worked on recently.
          </p>
        </div>

        <div className="works__github">
          <span className="works__github-label">GitHub Contributions</span>
          <img
            src="https://ghchart.rshah.org/AjoyChakravarthy"
            alt="Ajoy Chakravarthy's GitHub contribution graph"
            className="works__github-img"
          />
        </div>

        <div className="works__list">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`works__card${activeIndex === index ? ' works__card--active' : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="works__card-content">
                <h3 className={`works__card-title${activeIndex === index ? ' works__card-title--active' : ''}`}>
                  {project.title}
                </h3>
                <p className="works__card-desc">{project.description}</p>
                <div className="works__card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="works__card-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="works__card-actions">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="works__card-icon" aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="works__card-icon" aria-label="External link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
