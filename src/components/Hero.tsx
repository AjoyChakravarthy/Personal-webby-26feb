import { Link } from 'react-router-dom';
import './Hero.css';

const IS_AVAILABLE = false;

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content fade-in-up">
          <div className="hero__badge">
            <span className={`hero__badge-dot${IS_AVAILABLE ? '' : ' hero__badge-dot--offline'}`} />
            {IS_AVAILABLE ? 'Available for Work' : 'Currently Working'}
          </div>

          <h1 className="hero__title">
            <span>FRONTEND</span>
            <span className="hero__title-accent">DEVELOPER</span>
          </h1>

          <p className="hero__description">
            I build modern, scalable web applications.
          </p>

          <div className="hero__specializing">
            <span className="hero__specializing-label">Specializing in</span>
            <div className="hero__tags">
              <span className="hero__tag">React</span>
              <span className="hero__tag">Next.js</span>
              <span className="hero__tag">TypeScript</span>
            </div>
          </div>

          <div className="hero__buttons">
            <Link to="/works" className="hero__btn hero__btn--primary">
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a href="/AjoyChakravarthyResume.pdf" download className="hero__btn hero__btn--secondary">
              Download CV
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__mockup">
            <div className="hero__mockup-bar">
              <span className="hero__mockup-dot" />
              <span className="hero__mockup-dot" />
              <span className="hero__mockup-dot" />
              <span className="hero__mockup-url">portfolio.ajoy.dev</span>
            </div>
            <div className="hero__mockup-body">
              <div>
                <span className="code-comment">{'// Building something amazing'}</span>
              </div>
              <div>
                <span className="code-keyword">{'const '}</span>
                <span className="code-function">{'Developer'}</span>
                <span className="code-bracket">{' = () => {'}</span>
              </div>
              <div style={{ paddingLeft: '1.5rem' }}>
                <span className="code-keyword">{'return '}</span>
                <span className="code-bracket">{'('}</span>
              </div>
              <div style={{ paddingLeft: '2.5rem' }}>
                <span className="code-tag">{'<'}</span>
                <span className="code-function">{'Portfolio'}</span>
              </div>
              <div style={{ paddingLeft: '3.5rem' }}>
                <span className="code-attr">{'name'}</span>
                <span className="code-bracket">{'='}</span>
                <span className="code-string">{'"Ajoy Chakravarthy"'}</span>
              </div>
              <div style={{ paddingLeft: '3.5rem' }}>
                <span className="code-attr">{'role'}</span>
                <span className="code-bracket">{'='}</span>
                <span className="code-string">{'"Frontend Developer"'}</span>
              </div>
              <div style={{ paddingLeft: '3.5rem' }}>
                <span className="code-attr">{'passion'}</span>
                <span className="code-bracket">{'='}</span>
                <span className="code-string">{'"Building UIs"'}</span>
              </div>
              <div style={{ paddingLeft: '3.5rem' }}>
                <span className="code-attr">{'location'}</span>
                <span className="code-bracket">{'='}</span>
                <span className="code-string">{'"Trivandrum, Kerala"'}</span>
              </div>
              <div style={{ paddingLeft: '2.5rem' }}>
                <span className="code-tag">{'/'}</span>
                <span className="code-bracket">{'>'}</span>
              </div>
              <div style={{ paddingLeft: '1.5rem' }}>
                <span className="code-bracket">{')'}</span>
              </div>
              <div>
                <span className="code-bracket">{'}'}</span>
              </div>
            </div>
          </div>

          <div className="hero__grade">
            <img 
              src="/profile.jpg" 
              alt="Ajoy Chakravarthy" 
              className="hero__grade-avatar"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
