import './Gallery.css';

const paintings = [
  { title: 'Painting 1', medium: 'Oil on Canvas', src: '/gallery/painting-1.jpg' },
  { title: 'Painting 2', medium: 'Acrylic on Canvas', src: '/gallery/painting-2.jpg' },
  { title: 'Painting 3', medium: 'Watercolor', src: '/gallery/painting-3.jpg' },
  { title: 'Painting 4', medium: 'Oil on Canvas', src: '/gallery/painting-4.jpg' },
  { title: 'Painting 5', medium: 'Acrylic on Canvas', src: '/gallery/painting-5.jpg' },
  { title: 'Painting 6', medium: 'Oil on Canvas', src: '/gallery/painting-6.jpg' },
  { title: 'Painting 7', medium: 'Watercolor', src: '/gallery/painting-7.jpg' },
  { title: 'Painting 8', medium: 'Oil on Canvas', src: '/gallery/painting-8.jpg' },
  { title: 'Painting 9', medium: 'Acrylic on Canvas', src: '/gallery/painting-9.jpg' },
  { title: 'Painting 10', medium: 'Oil on Canvas', src: '/gallery/painting-10.jpg' },
  { title: 'Painting 11', medium: 'Watercolor', src: '/gallery/painting-11.jpg' },
  { title: 'Painting 12', medium: 'Oil on Canvas', src: '/gallery/painting-12.jpg' },
  { title: 'Painting 13', medium: 'Acrylic on Canvas', src: '/gallery/painting-13.jpg' },
  { title: 'Painting 15', medium: 'Watercolor', src: '/gallery/painting-15.jpg' },
  { title: 'Painting 16', medium: 'Oil on Canvas', src: '/gallery/painting-16.jpg' },
];

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery__header">
          <h2 className="gallery__title">
            Art <span className="gallery__title-accent">Gallery</span>
          </h2>
          <p className="gallery__subtitle">
            A collection of my paintings and artwork.
          </p>
        </div>

        <div className="gallery__grid">
          {paintings.map((painting) => (
            <div key={painting.src} className="gallery__item">
              <img src={painting.src} alt={painting.title} loading="lazy" />
              <div className="gallery__overlay">
                <span className="gallery__item-title">{painting.title}</span>
                <span className="gallery__item-medium">{painting.medium}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
