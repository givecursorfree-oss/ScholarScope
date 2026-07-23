import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Researchers</p>
          <h2>Built for people who publish</h2>
        </div>
        <div className="quote-grid">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="quote-card">
              <p>“{t.quote}”</p>
              <footer>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
