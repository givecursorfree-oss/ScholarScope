import { useState } from "react";
import { BRAND } from "../data/brand";
import { navLinks } from "../data/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          href="#top"
          className="logo ss-brand"
          aria-label={`${BRAND.name} — home`}
          onClick={() => setOpen(false)}
        >
          <img
            className="logo-img ss-brand-mark"
            src={BRAND.logo}
            width={32}
            height={32}
            alt=""
            decoding="async"
          />
          <span className="ss-brand-copy">
            <span className="logo-text ss-brand-name">{BRAND.name}</span>
            <span className="ss-brand-tag">{BRAND.navTag}</span>
          </span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? "is-open" : ""}`}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#install"
            className="btn btn-primary nav-cta"
            onClick={() => setOpen(false)}
          >
            Install Extension
          </a>
        </nav>
      </div>
    </header>
  );
}
