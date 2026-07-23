import { install } from "../data/content";
import { BRAND } from "../data/brand";

export default function Install() {
  return (
    <section className="section cta-section" id="install">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">Install</p>
          <h2>{install.title}</h2>
          <p className="section-lede">{install.body}</p>
          <ol className="install-list">
            {install.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </div>
        <div className="cta-card">
          <img
            className="logo-img logo-img-lg ss-brand-mark"
            src={BRAND.logo}
            width={40}
            height={40}
            alt=""
            decoding="async"
          />
          <h3>{BRAND.name}</h3>
          <p>{BRAND.tagline}</p>
          <a className="btn btn-primary" href="#top">
            Back to top →
          </a>
          <p className="cta-note">
            Free APIs only · DOAJ · OpenAlex · SCImago link
          </p>
        </div>
      </div>
    </section>
  );
}
