import { NAME_OPTIONS, BRAND } from "../data/brand";

export default function Names() {
  return (
    <section className="section" id="names">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Brand names</p>
          <h2>Professional researcher-feel names</h2>
          <p className="section-lede">
            Site is currently branded <strong>{BRAND.name}</strong>. Change{" "}
            <code>src/data/brand.js</code> to switch. Pick what fits your
            audience.
          </p>
        </div>
        <div className="name-grid">
          {NAME_OPTIONS.map((n) => (
            <article
              key={n.name}
              className={`name-card ${n.recommended ? "is-recommended" : ""}`}
            >
              <div className="name-top">
                <h3>{n.name}</h3>
                {n.recommended ? <span className="chip ok">Recommended</span> : null}
              </div>
              <p>{n.why}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
