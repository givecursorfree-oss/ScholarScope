import { trusted, features } from "../data/content";

export default function Features() {
  return (
    <>
      <section className="trusted">
        <div className="container">
          <p className="trusted-label">{trusted.label}</p>
          <div className="trusted-row">
            {trusted.logos.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className="trusted-logo"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Features</p>
            <h2>Everything you need before you submit</h2>
            <p className="section-lede">
              Clear product sections for researchers. Free live
              data from DOAJ and OpenAlex; SJR stays on SCImago.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((f) => (
              <article key={f.title} className="feature-card">
                <h3>{f.title}</h3>
                <p>{f.body}</p>
                <code className="feature-code">{f.code}</code>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
