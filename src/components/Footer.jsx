import { BRAND } from "../data/brand";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <a href="#top" className="logo ss-brand" aria-label={`${BRAND.name} — home`}>
            <img
              className="logo-img ss-brand-mark"
              src={BRAND.logo}
              width={36}
              height={36}
              alt=""
              decoding="async"
            />
            <span className="ss-brand-copy">
              <span className="logo-text ss-brand-name">{BRAND.name}</span>
              <span className="ss-brand-tag">{BRAND.navTag}</span>
            </span>
          </a>
          <p className="footer-tag">{BRAND.tagline}</p>
        </div>
        <div className="footer-cols">
          <div>
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#install">Install</a>
          </div>
          <div>
            <h4>Sources</h4>
            <a href="https://doaj.org/" target="_blank" rel="noreferrer">
              DOAJ
            </a>
            <a href="https://docs.openalex.org/" target="_blank" rel="noreferrer">
              OpenAlex
            </a>
            <a href="https://www.scimagojr.com/" target="_blank" rel="noreferrer">
              SCImago
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {BRAND.name}. Free APIs · DOAJ · OpenAlex ·
          SCImago.
        </p>
      </div>
    </footer>
  );
}
