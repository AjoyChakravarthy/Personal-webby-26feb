import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="notfound__content">
        <span className="notfound__code">4😵4</span>
        <h1 className="notfound__title">You broke my site!</h1>
        <p className="notfound__message">
          Just kidding. But this page doesn't exist — probably never did. Maybe you typed the URL with your elbow?
        </p>
        <Link to="/" className="notfound__btn">
          Take me back to Ajoy
        </Link>
      </div>
    </section>
  );
}
