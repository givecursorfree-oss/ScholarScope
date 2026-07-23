import { hero } from "../data/content";
import BriefPreview from "./BriefPreview";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="dot" aria-hidden />
            {hero.eyebrow}
          </p>
          <h1>
            {hero.titleLine1}
            <br />
            <span className="hero-accent">{hero.titleLine2}</span>
          </h1>
          <p className="lede">{hero.except}</p>
          <div className="hero-actions">
            <a href={hero.primaryCta.href} className="btn btn-primary">
              {hero.primaryCta.label}
              <span aria-hidden>→</span>
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-ghost">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
        <BriefPreview />
      </div>
    </section>
  );
}
