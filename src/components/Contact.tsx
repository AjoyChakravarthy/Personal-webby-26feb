import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('SUBMITTING');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {

        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('ERROR');
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="contact__header">
          <h2 className="contact__title">
            Get In <span className="contact__title-accent">Touch</span>
          </h2>
          <p className="contact__subtitle">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="contact__info-label">Email</div>
                <a href="mailto:ajoy@example.com" className="contact__info-value">ajoy@example.com</a>
              </div>
            </div>

            <div className="contact__info-item">
              <div className="contact__info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="contact__info-label">Location</div>
                <div className="contact__info-value">India</div>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="contact__form-group">
                <input type="text" name="name" placeholder="Name" className="contact__input" required />
              </div>
              <div className="contact__form-group">
                <input type="email" name="email" placeholder="Email" className="contact__input" required />
              </div>
            </div>
            <div className="contact__form-group">
              <input type="text" name="subject" placeholder="Subject" className="contact__input" required />
            </div>
            <div className="contact__form-group">
              <textarea name="message" placeholder="Message" rows={4} className="contact__input contact__textarea" required />
            </div>
            
            <div className="contact__form-footer">
              <button 
                type="submit" 
                className="contact__submit" 
                disabled={status === 'SUBMITTING'}
              >
                {status === 'SUBMITTING' ? 'Sending...' : 'Send Message'}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>

              {status === 'SUCCESS' && (
                <p className="contact__status contact__status--success">
                  Message sent! I'll get back to you soon.
                </p>
              )}
              {status === 'ERROR' && (
                <p className="contact__status contact__status--error">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

