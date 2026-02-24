import './TechStack.css';

const categories = [
  {
    name: 'Core Stack',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: [
      { name: 'React', desc: 'Component-driven UI development' },
      { name: 'Next.js', desc: 'App Router, SSR, SSG, routing & performance optimization' },
      { name: 'TypeScript', desc: 'Strong typing, scalable codebases & type-safe architecture' },
      { name: 'JavaScript (ES6+)', desc: 'Functional programming patterns & modern syntax' },
    ],
  },
  {
    name: 'Styling & UI',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    skills: [
      { name: 'Tailwind CSS', desc: 'Utility-first styling & responsive design systems' },
      { name: 'Styled Components', desc: 'Scoped, dynamic styling' },
      { name: 'SASS/SCSS', desc: 'Structured & maintainable styling architecture' },
      { name: 'Responsive Design', desc: 'Mobile-first development approach' },
    ],
  },
  {
    name: 'State & Data',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    skills: [
      { name: 'Zustand', desc: 'State management with persistence patterns' },
      { name: 'React Hooks', desc: 'Custom hooks architecture' },
      { name: 'React Hook Form + Zod', desc: 'Form handling with schema validation' },
      { name: 'LocalStorage', desc: 'Client-side data integration' },
    ],
  },
  {
    name: 'Architecture',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
    skills: [
      { name: 'Feature-based Structure', desc: 'Modular & scalable project organization' },
      { name: 'Reusable Components', desc: 'Component systems & design patterns' },
      { name: 'Provider Patterns', desc: 'Provider-based state management' },
      { name: 'API Integration', desc: 'Structured error handling & data fetching' },
    ],
  },
  {
    name: 'Testing & Quality',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    skills: [
      { name: 'Cypress', desc: 'End-to-end testing' },
      { name: 'Git Workflow', desc: 'Feature branches, PR reviews & rebasing' },
      { name: 'Code Quality', desc: 'Maintainability & refactoring practices' },
    ],
  },
  {
    name: 'Performance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    skills: [
      { name: 'Lazy Loading', desc: 'On-demand resource loading' },
      { name: 'Code Splitting', desc: 'Optimized bundle delivery' },
      { name: 'Asset Optimization', desc: 'Optimized asset handling' },
      { name: 'SEO', desc: 'SEO fundamentals with Next.js' },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="tech-stack">
      <div className="container">
        <div className="tech-stack__header">
          <h2 className="tech-stack__title">
            MY TECH <span className="tech-stack__title-accent">STACK</span>
          </h2>
          <p className="tech-stack__subtitle">
            Technologies & practices I use to build exceptional web experiences
          </p>
        </div>

        <div className="tech-stack__categories">
          {categories.map((category) => (
            <div key={category.name} className="tech-stack__category">
              <div className="tech-stack__category-header">
                <div className="tech-stack__category-icon">
                  {category.icon}
                </div>
                <h3 className="tech-stack__category-name">{category.name}</h3>
              </div>

              <div className="tech-stack__skills">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="tech-stack__skill">
                    <span className="tech-stack__skill-dot" />
                    <div className="tech-stack__skill-info">
                      <span className="tech-stack__skill-name">{skill.name}</span>
                      <span className="tech-stack__skill-desc">{skill.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
