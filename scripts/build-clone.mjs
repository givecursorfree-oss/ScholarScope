/**
 * Marketing HTML clone → ScholarScope content.
 * Preserves site CSS/JS runtime, IX animation gate, GSAP, Lenis — swaps copy/brand
 * and strips template chrome (agency credits, unused nav, platform labels).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { howMosaicHtml, howMosaicCss } from "./how-mosaic.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const scriptsParent = path.resolve(__dirname, "..");
const monorepoRoot = path.resolve(__dirname, "../..");
const isMonorepo = fs.existsSync(
  path.join(monorepoRoot, "toolify_webflow_io.html")
);
const root = isMonorepo ? monorepoRoot : scriptsParent;
const src = isMonorepo
  ? path.join(root, "toolify_webflow_io.html")
  : path.join(scriptsParent, "toolify_webflow_io.html");
const out = isMonorepo
  ? path.join(root, "site", "index.html")
  : path.join(scriptsParent, "index.html");
const publicDir = isMonorepo
  ? path.join(root, "site", "public")
  : path.join(scriptsParent, "public");

/** Production site origin — set SCHOLARSCOPE_SITE_URL when you deploy */
const SITE_URL = (
  process.env.SCHOLARSCOPE_SITE_URL || "https://scholar-scope-eight.vercel.app"
).replace(/\/$/, "");

const SEO = {
  title: "ScholarScope — Journal APC & OA Chrome Extension",
  description:
    "Free Chrome extension for researchers. Live journal APC, open access licenses, subjects, and OpenAlex metrics on SciMAGO and publisher sites. Verify SJR on SCImago.",
  ogImage: `${SITE_URL}/hero-scholarscope.png`,
  keywords:
    "journal APC, open access, DOAJ, SciMAGO, SCImago, OpenAlex, Chrome extension, article processing charge, where to publish, ISSN",
};

let html = fs.readFileSync(src, "utf8");

/** Safe text/content swaps only — never touch animation CSS/JS bootstraps */
const reps = [
  [
    /Toolify - Webflow HTML Website Template/g,
    SEO.title,
  ],
  [
    /Toolify is a premium landing page template built for AI tools, developer products, and APIs—featuring syntax-highlighted code blocks with a language switcher to convert technical buyers\./g,
    SEO.description,
  ],
  [/alt="Toolify"/g, 'alt="ScholarScope"'],
  [/Copyright © 2026 Toolify/g, "Copyright © 2026 ScholarScope"],

  [
    /&#34;Toolify cut my development time in half\. The docs are actually readable and the API is intuitive\. Finally, a developer tool that doesn&#39;t waste my time\.&#34;/g,
    "&#34;ScholarScope showed APC and OA without five tabs. The SCImago link keeps rankings honest.&#34;",
  ],
  [
    /“This is the first tool that actually feels like proper developer infrastructure\. The API is clean, the docs make sense, and integration took less than 10 minutes\.”/g,
    "“We tell students: never trust a bare impact-factor claim. ScholarScope labels free metrics correctly.”",
  ],
  [
    /“We replaced two tools with this\. The SDKs are solid, and everything just works without unnecessary complexity\.”/g,
    "“DOAJ + OpenAlex in one panel is exactly what our lab needed during journal selection week.”",
  ],

  // Hero — keep <br /> for SplitText / layout
  [
    /Launch Your AI Tool\s*<br \/>\s*Website In Days/,
    "Know the journal<br />before you submit",
  ],
  [
    /Designed for AI API companies, developer platforms, and AI SaaS startups who want to look like a serious infrastructure brand from day one\./g,
    "Chrome extension for researchers. Live APC, OA licenses, subjects, indexing checks, and free impact metrics while you browse SciMAGO and publisher sites.",
  ],

  [/Get Started/g, "Install Extension"],
  [/Learn More/g, "How it works"],

  [/Discover Our Features/g, "Built for researchers"],
  [
    /Developer tools that don’t get in your way—just clean, reliable APIs and thoughtfully crafted documentation so you can build faster with confidence\./g,
    "Live APC, OA licenses, subjects, indexing checks, and free OpenAlex metrics — with SJR verified on SCImago.",
  ],

  [/API-First Design/g, "Real APC &amp; fees"],
  [
    /RESTful API with predictable responses\. Built for developers who value simplicity\./g,
    "Prefer fees on the publisher page, then DOAJ, then OpenAlex — USD, EUR, GBP when listed.",
  ],
  [
    /RESTful API with responses\. Built for developers who value simplicity\./g,
    "Prefer fees on the publisher page, then DOAJ, then OpenAlex when listed.",
  ],
  [/Multi-Language SDKs/g, "Open Access + license"],
  [
    /Native SDKs for JavaScript, Python, and more\. Type-safe and well-documented\./g,
    "See OA status and Creative Commons licenses from DOAJ in one glance.",
  ],
  [/Lightning Fast/g, "Themes &amp; subjects"],
  [
    /Average response time under 1\.5s\. Edge-optimized with global CDN coverage\./g,
    "Subject terms and OpenAlex topics so you know if the venue fits your field.",
  ],
  [/Secure by Default/g, "Free impact metrics"],
  [
    /Industry-standard OAuth2, API keys, rate limiting, and request signing built-in\./g,
    "OpenAlex 2-year mean citedness, h-index, and i10 — labeled as not Clarivate Impact Factor.",
  ],
  [/Auto-Scaling/g, "Indexing &amp; verify"],
  [
    /From 10 to 10M requests\. Infrastructure that grows with your product\./g,
    "DOAJ and MEDLINE/PubMed checks, plus one-click links to confirm SJR, Scopus, Scholar, and ISSN.",
  ],
  [/Easy Integration/g, "Works where you search"],
  [
    /One-line setup\. Works with Next\.js, Express, Flask, and any modern framework\./g,
    "Auto-detect on SciMAGO, DOAJ, publishers, PubMed, and Scholar — or search by ISSN / title.",
  ],

  [/Build For Real Use Cases/g, "Three steps to a publishing brief"],
  [/AI Apps/g, "01 Install"],
  [/Chrome Extensions/g, "02 Detect"],
  [/SaaS Tools/g, "03 Brief"],
  [/Automation Scripts/g, "04 Manual"],
  [
    /Building AI features from scratch is time-consuming/g,
    "PLACEHOLDER_PROBLEM",
  ],
  [
    /Ready-to-use AI endpoints for text generation, analysis, and more/g,
    "PLACEHOLDER_SOLUTION",
  ],

  [/Request Input/g, "Journal lookup"],
  [/AI Response/g, "Publishing brief"],

  [
    /(<div class="section-info-text">)\s*Integrations\s*(<\/div>)/g,
    "$1Where it works$2",
  ],
  [/Works With Your Stack/g, "Works where you already search"],
  [
    /Native SDKs and ready-to-use examples for every popular framework, so you can integrate faster without reinventing the wheel\./g,
    "Auto-detect on SciMAGO, DOAJ, major publishers, PubMed, and Google Scholar — or search by ISSN / title in the popup.",
  ],
  [
    /Native SDKs and ready-to-use examples for every popular framework/g,
    "Install the Chrome extension and decide where to publish — with evidence",
  ],
  [/Explore All/g, "See how it works"],
  [/alt="Integrations Logo"/g, 'alt="Supported research site"'],
  [/alt="Integrations"/g, 'alt="ScholarScope"'],

  [/Loved By Developers/g, "Trusted by researchers"],
  [/Indie Hacker/g, "Postdoc, materials science"],
  [/Backend Engineer/g, "Research methods lead"],
  [/SaaS Founder/g, "PhD candidate"],
  [/Sarah Chen/g, "Dr. Amina Rahman"],
  [/Ethan Carter/g, "Prof. James Okeke"],
  [/Olivia Bennett/g, "Sofia Martins"],

  [/Build AI With Toolify/g, "Scope journals with ScholarScope"],
  [/Build AI/g, "Research"],
  [
    /(<a aria-label="Text Link" href="\/blog" class="hero-info-link">)\s*Blog\s*(<\/a>)/,
    `$1Chrome extension$2`,
  ],
  [/\/ Blog Details/g, "/ Journal briefs"],
  [/Subscribe newsletter/g, "Get ScholarScope updates"],

  [/Trusted by the world leaders/g, "Built on trusted open sources"],
  [/Trusted by more than 500\+ Company/g, "Trusted open sources"],

  [/Designed by TNCFlow/g, "Chrome extension for researchers"],
  [/Powered by Webflow/g, "Free APIs · DOAJ · OpenAlex"],
  [/Buy Now/g, "Install"],
  [
    /Great Job on choosing the right template! Just one more step to start building\./g,
    "Download ScholarScope-extension.zip, unzip once, then Load unpacked in Chrome or Edge. No project repo needed.",
  ],
  [/Buy on Webflow  \(Official\)/g, "Download extension (.zip)"],
  [/Buy on Webflow \(Official\)/g, "Download extension (.zip)"],
  [/Buy from TNCFlow/g, "Install guide"],
  [/Save 10%/g, "v" + (process.env.SCHOLARSCOPE_EXT_VERSION || "1.9.3")],
  [/Request Customization/g, "How it works"],
  [/Questions\/Support/g, "DOAJ · OpenAlex"],

  // Demo code strings (scoped phrases only — no bare numbers)
  [/\bDevAPI\b/g, "ScholarScope"],
  [/&#34;gpt-4&#34;/g, "&#34;openalex&#34;"],
  [/"gpt-4"/g, '"openalex"'],
  [/@devapi\/sdk/g, "@scholarscope/brief"],
  [/gen_8xKj2mP9/g, "issn-2041-1723"],
  [/&#34;Summarize this article&#34;/g, "&#34;Nature Communications&#34;"],
  [/"Summarize this article"/g, '"Nature Communications"'],
  [
    /&#34;This article discusses\.\.\.&#34;/g,
    "&#34;APC USD 7350 · OA DOAJ&#34;",
  ],
  [/promptTokens/g, "has_apc"],
  [/completionTokens/g, "citedness"],
  [/totalTokens/g, "h_index"],
];

for (const [from, to] of reps) {
  html = html.replace(from, to);
}

html = html.replace(/>\s*Toolify\s*</g, ">ScholarScope<");
html = html.replace(/\bToolify\b/g, "ScholarScope");
html = html.replace(
  'data-wf-domain="toolify.webflow.io"',
  'data-wf-domain="scholarscope.local"'
);

/**
 * Brand lockup — mark + name + product line.
 * Webflow caps .header-brand at 104px (Toolify wordmark); override so
 * ScholarScope lockup has professional padding and isn’t crushed.
 */
const BRAND = {
  name: "ScholarScope",
  tagline: "Decide where to publish — with evidence",
  navTag: "Journal briefs for researchers",
  logo: "/scholarscope-logo.png",
};

const brandLockup = (variant) =>
  `<span class="ss-brand-lockup">` +
  `<img class="${variant}-logo ss-brand-mark" src="${BRAND.logo}" width="32" height="32" alt="" decoding="async" />` +
  `<span class="ss-brand-copy">` +
  `<span class="ss-brand-name">${BRAND.name}</span>` +
  `<span class="ss-brand-tag">${BRAND.navTag}</span>` +
  `</span></span>`;

html = html.replace(
  /<a aria-label="Brand" href="\/" aria-current="page" class="header-brand w-nav-brand w--current">\s*<img loading="eager" src="https:\/\/cdn\.prod\.website-files\.com\/69e73a2d97786bbb24018dff\/69e748cb33e7fd9481b20cc2_Logo\.svg" alt="ScholarScope" class="header-logo" \/>\s*<\/a>/g,
  `<a aria-label="${BRAND.name} — home" href="/" aria-current="page" class="header-brand ss-brand w-nav-brand w--current">${brandLockup("header")}</a>`
);
html = html.replace(
  /<a aria-label="Brand" href="\/" aria-current="page" class="footer-brand w-nav-brand w--current">\s*<img loading="eager" src="https:\/\/cdn\.prod\.website-files\.com\/69e73a2d97786bbb24018dff\/69e748cb33e7fd9481b20cc2_Logo\.svg" alt="ScholarScope" class="footer-logo" \/>\s*<\/a>/g,
  `<a aria-label="${BRAND.name} — home" href="/" aria-current="page" class="footer-brand ss-brand w-nav-brand w--current">${brandLockup("footer")}</a>`
);

// Footer except already swapped to tagline-ish copy; keep brand.tagline aligned
html = html.replace(
  /Install the Chrome extension and decide where to publish — with evidence/g,
  BRAND.tagline
);

// Hero product shot — replace Journal lookup / Publishing brief code panels with promo image
html = html.replace(
  /<div class="home-card">[\s\S]*?<div class="home-info">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*(<div text-animation="" class="home-trusted">)/,
  `<div class="home-card ss-hero-shot">
                    <img
                      class="ss-hero-product"
                      src="/hero-scholarscope.png"
                      width="1280"
                      height="800"
                      alt="ScholarScope Chrome extension — search any journal by ISSN or title for a live APC, OA, and metrics brief"
                      decoding="async"
                      fetchpriority="high"
                    />
                  </div>
                </div>
              </div>
              $1`
);

// In-page anchors (structure preserved)
html = html.replace(/href="\/privacy-policy"/g, 'href="/privacy.html"');
html = html.replace(/href="\/about"/g, 'href="#how"');
html = html.replace(/href="\/features"/g, 'href="#features"');
html = html.replace(/href="\/documentation"/g, 'href="#features"');
html = html.replace(/href="\/pricing"/g, 'href="#install"');
html = html.replace(/href="\/blog"/g, 'href="#top"');
html = html.replace(/href="\/changelog"/g, 'href="#top"');
html = html.replace(/href="\/contact"/g, 'href="#install"');

html = html.replace(
  '<section data-wf--hero-section--variant="all" class="hero-section">',
  '<section id="top" data-wf--hero-section--variant="all" class="hero-section">'
);
html = html.replace(
  '<section class="features-section">',
  '<section id="features" class="features-section">'
);
html = html.replace(
  '<section class="use-cases-section">',
  '<section id="how" class="use-cases-section">'
);
html = html.replace(
  '<section class="apps-section">',
  '<section id="where" class="apps-section">'
);
html = html.replace(
  '<section class="rate-section">',
  '<section id="stories" class="rate-section">'
);
html = html.replace(
  '<div class="buy-now">',
  '<div id="install" class="buy-now">'
);

// Primary install CTAs → Chrome Web Store when set, else downloadable extension ZIP
const CHROME_STORE_URL = process.env.SCHOLARSCOPE_CHROME_STORE_URL || "";
const DOWNLOAD_URL = "/downloads/ScholarScope-extension.zip";
const INSTALL_GUIDE_URL = "/install.html";
/** Badge must link to the live CWS listing when published (Google branding rules). */
const CWS_BADGE_HREF = CHROME_STORE_URL || INSTALL_GUIDE_URL;

if (CHROME_STORE_URL) {
  html = html.replace(
    /(data-wf--button--variant="linear"[^>]*href=")#install"/g,
    `$1${CHROME_STORE_URL}"`,
  );
} else {
  html = html.replace(
    /(data-wf--button--variant="linear"[^>]*href=")#install"/g,
    `$1${DOWNLOAD_URL}" download="ScholarScope-extension.zip"`,
  );
}

// Official “Available in the Chrome Web Store” badge — unmodified asset per
// https://developer.chrome.com/docs/webstore/branding
html = html.replace(
  /(<div class="hero-button-block">[\s\S]*?<\/div>\s*<\/div>\s*)(<\/div>\s*<\/div>\s*<\/section>\s*<section class="home-section">)/,
  `$1
              <div class="ss-cws-badge-wrap">
                <a
                  class="ss-cws-badge"
                  href="${CWS_BADGE_HREF}"
                  ${CHROME_STORE_URL ? 'target="_blank" rel="noopener noreferrer"' : ""}
                  aria-label="Available in the Chrome Web Store"
                >
                  <img
                    src="/chrome-web-store-badge-white.png"
                    width="206"
                    height="58"
                    alt="Available in the Chrome Web Store"
                    decoding="async"
                  />
                </a>
                <p class="ss-cws-note">Google Chrome is a trademark of Google LLC.</p>
              </div>
            $2`
);

html = html.replace(
  /href="https:\/\/webflow\.com\/dashboard\/marketplace-checkout[^"]*"/g,
  `href="${DOWNLOAD_URL}" download="ScholarScope-extension.zip"`
);
html = html.replace(
  /href="https:\/\/tncflow\.com\/checkout\/[^"]*"/g,
  `href="${INSTALL_GUIDE_URL}"`
);
html = html.replace(
  /href="https:\/\/tncflow\.com\/request-a-quote\/[^"]*"/g,
  'href="#how"'
);
html = html.replace(
  /href="https:\/\/tncflow\.com\/contact-us"/g,
  'href="https://doaj.org/api/docs"'
);
html = html.replace(
  /(<a aria-label="Link Block" href="https:\/\/doaj\.org\/api\/docs")(\s+target="_blank")?/g,
  '$1 target="_blank" rel="noopener"'
);

/**
 * Animation integrity:
 * - DO NOT remove the Webflow visibility:hidden gate
 * - DO NOT force w-mod-ix3 early (that skips entrance animations)
 * Fallback only if IX never marks ready (broken CDN / offline)
 */
const fallback = `
    <script type="text/javascript">
      (function () {
        function revealIfStuck() {
          var html = document.documentElement;
          if (html.classList.contains("w-mod-ix3")) return;
          html.classList.add("w-mod-ix3");
          var sel = "[text-animation],[hero-animation],[apps-animation],[animated-step],[card-animation],[image-animation],[hero-title]";
          document.querySelectorAll(sel).forEach(function (el) {
            el.style.visibility = "visible";
            el.style.opacity = "1";
            el.style.transform = "none";
          });
        }
        window.addEventListener("load", function () {
          setTimeout(revealIfStuck, 2800);
        });
        // Help Lenis + ScrollTrigger after fonts
        window.addEventListener("load", function () {
          setTimeout(function () {
            if (window.ScrollTrigger) ScrollTrigger.refresh();
          }, 600);
        });
      })();
    </script>`;

html = html.replace("</body>", fallback + "\n  </body>");

// Plus Jakarta Sans for brand wordmark (avoid Inter/system-only look)
html = html.replace(
  /families: \[&#34;Lato:[^&#]+&#34;,&#34;Space Mono:[^&#]+&#34;\]/,
  'families: [&#34;Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic&#34;,&#34;Space Mono:300,400,500,600,700&#34;,&#34;Plus Jakarta Sans:500,600,700&#34;]'
);

// Skip link + professional brand lockup CSS (overrides Webflow 104px brand cap)
html = html.replace(
  "<body>",
  `<body>
    <a class="ss-skip" href="#top">Skip to content</a>
    <style>
      .ss-skip{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;z-index:100000}
      .ss-skip:focus{left:12px;top:12px;width:auto;height:auto;padding:10px 14px;background:#0A5F6E;color:#fff;border-radius:8px;outline:2px solid #fff;outline-offset:2px}
      /* Brand lockup — fix Toolify max-width:104px crush + logo stretch */
      .header-brand-block{max-width:none!important;width:auto!important;flex:none}
      .header-brand.ss-brand,
      .footer-brand.ss-brand{
        display:inline-flex!important;
        align-items:center;
        float:none;
        max-width:none!important;
        width:auto!important;
        min-height:44px;
        padding:4px 8px 4px 0!important;
        gap:0;
        text-decoration:none;
        transition:opacity .45s cubic-bezier(.32,.72,0,1);
      }
      .header-brand.ss-brand:hover,
      .footer-brand.ss-brand:hover{opacity:.82}
      .header-brand.ss-brand:focus-visible,
      .footer-brand.ss-brand:focus-visible{
        outline:2px solid #0A5F6E;
        outline-offset:4px;
        border-radius:10px;
      }
      .ss-brand-lockup{
        display:inline-flex;
        align-items:center;
        gap:12px;
        min-width:0;
      }
      .ss-brand-mark,
      .header-logo.ss-brand-mark,
      .footer-logo.ss-brand-mark{
        width:32px!important;
        height:32px!important;
        max-width:32px!important;
        flex-shrink:0;
        display:block;
        margin:0!important;
        border-radius:9px;
        object-fit:cover;
        box-shadow:0 0 0 1px rgba(10,95,110,.14);
      }
      .footer-brand .ss-brand-mark{
        width:36px!important;
        height:36px!important;
        max-width:36px!important;
        border-radius:10px;
      }
      .ss-brand-copy{
        display:flex;
        flex-direction:column;
        justify-content:center;
        gap:4px;
        min-width:0;
        padding:2px 0;
      }
      .ss-brand-name{
        font-family:"Plus Jakarta Sans",Lato,system-ui,sans-serif;
        font-weight:700;
        font-size:1.0625rem;
        letter-spacing:-.03em;
        line-height:1.05;
        color:#0A5F6E;
        white-space:nowrap;
      }
      .ss-brand-tag{
        font-family:"Plus Jakarta Sans",Lato,system-ui,sans-serif;
        font-weight:600;
        font-size:.625rem;
        letter-spacing:.06em;
        text-transform:uppercase;
        line-height:1.15;
        color:#5B6B7A;
        opacity:1;
        white-space:nowrap;
      }
      /* Footer often sits on dark Toolify chrome — keep readable contrast */
      .footer-brand .ss-brand-name{color:#F8FAFC}
      .footer-brand .ss-brand-tag{color:rgba(248,250,252,.72)}
      .header-section.w-nav{
        border-bottom:1px solid rgba(10,95,110,.08);
      }
      .header-menu-link.w-nav-link{
        font-family:"Plus Jakarta Sans",Lato,system-ui,sans-serif;
        font-weight:500;
      }
      .header-menu-link.w-nav-link.w--current,
      .header-menu-link.w-nav-link:hover{
        color:#0A5F6E!important;
      }
      /* Hero journal boards — consistent teal accents */
      .home-heading{
        font-family:"Plus Jakarta Sans",Lato,system-ui,sans-serif;
        font-weight:600;
        letter-spacing:-.02em;
      }
      .home-code .moss-green{color:#0A5F6E!important}
      .home-code .sky-blue{color:#0E7490!important}
      .home-code .sage-green{color:#0F766E!important}
      .home-run{
        background:#0A5F6E!important;
        color:#F8FAFC!important;
        border-radius:10px;
      }
      .home-run-text{color:#F8FAFC!important}
      .home-run-icon{color:#F8FAFC!important}
      @media (max-width:991px){
        .ss-brand-lockup{gap:10px}
        .ss-brand-mark,
        .header-logo.ss-brand-mark{
          width:28px!important;
          height:28px!important;
          max-width:28px!important;
          border-radius:8px;
        }
        .ss-brand-name{font-size:1rem;color:#0A5F6E}
        .ss-brand-tag{display:none}
      }
      /* Official source logos in trusted marquee */
      .home-trusted .home-sitelogo{
        height:32px!important;
        width:auto!important;
        max-width:220px;
        object-fit:contain;
      }
      /* Hero product image (replaces code panels) */
      .home-card.ss-hero-shot{
        padding:0!important;
        overflow:hidden;
        background:#0b1220;
      }
      .ss-hero-product{
        display:block;
        width:100%;
        height:auto;
        max-width:100%;
        margin:0;
        vertical-align:middle;
        object-fit:cover;
        object-position:center;
      }
      .home-card.ss-hero-shot .home-bar{display:none!important}
      /* Chrome Web Store badge — Google branding guidelines */
      .ss-cws-badge-wrap{
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        gap:10px;
        margin-top:22px;
      }
      .ss-cws-badge{
        display:inline-block;
        line-height:0;
        transition:opacity .3s ease;
      }
      .ss-cws-badge:hover{opacity:.9}
      .ss-cws-badge img{
        display:block;
        width:206px;
        height:auto;
        max-width:100%;
      }
      .ss-cws-note{
        margin:0;
        font-family:"Plus Jakarta Sans",Lato,system-ui,sans-serif;
        font-size:11px;
        line-height:1.4;
        color:#94a3b8;
        max-width:36rem;
      }
      .ss-cws-note a{color:#7ec8d4;text-decoration:underline}
    </style>`
);


// ── Residue cleanup: no Webflow / TNCFlow / template chrome in UI ──
html = html.replace(
  /<!-- This site was created in Webflow\. https:\/\/webflow\.com -->\s*/i,
  "<!-- ScholarScope marketing site -->\n"
);
html = html.replace(/<!-- Last Published:[^>]*-->\s*/i, "");
html = html.replace(/\s*<meta content="Webflow" name="generator"\s*\/>/i, "");
html = html.replace(
  /\/\* Brand lockup — fix Toolify max-width:104px crush \+ logo stretch \*\//,
  "/* Brand lockup — override template max-width so mark + wordmark fit */"
);

// Clean header nav: Home · Features · How it works (drop Docs/Contact/Blog/Pages)
html = html.replace(
  /(<div class="header-menu">)[\s\S]*?(<div class="header-button-block display-show-for-mobile">)/,
  `$1
                <a aria-label="Home" href="/" aria-current="page" class="header-menu-link w-nav-link w--current">Home</a>
                <a aria-label="Features" href="#features" class="header-menu-link w-nav-link">Features</a>
                <a aria-label="How it works" href="#how" class="header-menu-link w-nav-link">How it works</a>
                <a aria-label="Journal APC guide" href="/journal-apc.html" class="header-menu-link w-nav-link">APC guide</a>
                $2`
);

// Footer subscribe privacy line
html = html.replace(
  /<div class="footer-text">\s*By subscribing you agree to our\s*<a[^>]*>\s*Privacy Policy\s*<\/a>\s*<\/div>/i,
  `<div class="footer-text">Updates on the extension and open research sources. No spam.</div>`
);

// Remove TNCFlow social placeholders
html = html.replace(
  /<a aria-label="Social Link" href="https:\/\/www\.x\.com\/TNCFlow"[^>]*>[\s\S]*?<\/a>/i,
  ""
);
html = html.replace(
  /<a aria-label="Social Link" href="https:\/\/www\.linkedin\.com\/company\/tncflow"[^>]*>[\s\S]*?<\/a>/i,
  ""
);
html = html.replace(
  /href="https:\/\/www\.github\.com"/g,
  'href="https://github.com" rel="noopener"'
);

// Footer nav → Product + Sources only (keep footer-menu closing intact)
html = html.replace(
  /<div class="footer-nav-block">[\s\S]*?<\/div>(?=\s*<\/div>\s*<div class="footer-line-block">)/,
  `<div class="footer-nav-block">
                <div animated-step="" class="footer-nav">
                  <div class="footer-nav-title">Product</div>
                  <div class="footer-nav-wrap">
                    <a aria-label="Home" href="#top" class="footer-nav-link">Home</a>
                    <a aria-label="Features" href="/features.html" class="footer-nav-link">Features</a>
                    <a aria-label="How it works" href="/how-it-works.html" class="footer-nav-link">How it works</a>
                    <a aria-label="Journal APC guide" href="/journal-apc.html" class="footer-nav-link">Journal APC guide</a>
                    <a aria-label="Install" href="/install.html" class="footer-nav-link">Install</a>
                    <a aria-label="Privacy" href="/privacy.html" class="footer-nav-link">Privacy</a>
                  </div>
                </div>
                <div animated-step="" class="footer-nav">
                  <div class="footer-nav-title">Sources</div>
                  <div class="footer-nav-wrap">
                    <a aria-label="DOAJ" href="https://doaj.org/" target="_blank" rel="noopener" class="footer-nav-link">DOAJ</a>
                    <a aria-label="OpenAlex" href="https://docs.openalex.org/" target="_blank" rel="noopener" class="footer-nav-link">OpenAlex</a>
                    <a aria-label="SCImago" href="https://www.scimagojr.com/" target="_blank" rel="noopener" class="footer-nav-link">SCImago</a>
                    <a aria-label="GitHub" href="https://github.com/givecursorfree-oss/ScholarScope" target="_blank" rel="noopener" class="footer-nav-link">GitHub</a>
                  </div>
                </div>
              </div>`
);

// Copyright only — strip Designed by / Powered by / Privacy Policy
html = html.replace(
  /<div step-animation="" class="footer-copy-block">[\s\S]*?<\/div>(?=\s*<\/div>\s*<div class="buy-now">)/,
  `<div step-animation="" class="footer-copy-block">
              <div animated-step="" class="footer-copy-wrap">
                <div class="footer-copy-text">Copyright © 2026 ScholarScope</div>
              </div>
            </div>`
);

// Buy-now Webflow icon → ScholarScope mark
html = html.replace(
  /src="https:\/\/cdn\.prod\.website-files\.com\/69e73a2d97786bbb24018dff\/69fab7251efe5653b92cc867_Webflow\.svg"/g,
  'src="/scholarscope-logo.png"'
);

// Scrub remaining visible agency / platform names
html = html.replace(/>\s*Webflow\s*</g, "><");
html = html.replace(/>\s*TNCFlow\s*</g, "><");
html = html.replace(/\bPowered by\s*/gi, "");
html = html.replace(/\bDesigned by\s*/gi, "");
html = html.replace(/Adapted from Toolify structure/gi, "Chrome extension for researchers");
html = html.replace(/\bTNCFlow\b/g, "ScholarScope");
html = html.replace(/href="https:\/\/tncflow\.com\/?"/gi, 'href="#top"');
html = html.replace(/href="https:\/\/webflow\.com\/?"/gi, 'href="#top"');
html = html.replace(/href="https:\/\/www\.x\.com\/TNCFlow"/gi, 'href="#top"');
html = html.replace(
  /href="https:\/\/www\.linkedin\.com\/company\/tncflow"/gi,
  'href="#top"'
);

// Trusted open-source logos (replace placeholder wordmarks)
const trustedLogos = [
  {
    from: "https://cdn.prod.website-files.com/69e73a2d97786bbb24018dff/69eb4f54158be667e3fc2bb0_051e0882fdc7a979853969fbc3143f6d_Trusted%20Logo%2001.svg",
    to: "/trusted/doaj.svg",
    alt: "DOAJ",
  },
  {
    from: "https://cdn.prod.website-files.com/69e73a2d97786bbb24018dff/69eb4f54158be667e3fc2bb3_42947fc19816d9a4fd432f4e80ff38af_Trusted%20Logo%2002.svg",
    to: "/trusted/openalex.png",
    alt: "OpenAlex",
  },
  {
    from: "https://cdn.prod.website-files.com/69e73a2d97786bbb24018dff/69eb4f54158be667e3fc2bb2_030bc9b99a320b2cb22f3d5024badb51_Trusted%20Logo%2003.svg",
    to: "/trusted/scimago.svg",
    alt: "SCImago Journal & Country Rank",
  },
  {
    from: "https://cdn.prod.website-files.com/69e73a2d97786bbb24018dff/69eb4f54158be667e3fc2bb1_e42f5219c4e573b2e5416aa33579da19_Trusted%20Logo%2004.svg",
    to: "/trusted/nlm-pubmed.svg",
    alt: "PubMed",
  },
];

for (const logo of trustedLogos) {
  html = html.split(logo.from).join(logo.to);
  // Per-logo alt on each img that now points at this source
  const imgRe = new RegExp(
    `(<img\\s+src="${logo.to.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^>]*?alt=")([^"]*)(")`,
    "g"
  );
  html = html.replace(imgRe, `$1${logo.alt}$3`);
}

html = html.replace(
  /href="https:\/\/cdn\.prod\.website-files\.com\/69e73a2d97786bbb24018dff\/69f077e888aa1ed4211875ff_Favicon\.png"/g,
  'href="/favicon.svg"'
);
html = html.replace(
  /href="https:\/\/cdn\.prod\.website-files\.com\/69e73a2d97786bbb24018dff\/69f077e59dd2e4f9fb838e39_Webclip\.png"/g,
  'href="/scholarscope-logo.png"'
);

// ── How it works + use-case demos (extension-accurate) ──
html = html.replace(
  /(<div class="section-info-text">)\s*Use Cases\s*(<\/div>)/,
  "$1How it works$2"
);
html = html.replace(
  /(<section id="how"[\s\S]*?<div text-animation="" class="section-except">)\s*Live APC, OA licenses, subjects, indexing checks, and free OpenAlex metrics — with SJR verified on SCImago\.\s*(<\/div>)/,
  "$1Install once, open a journal page, read the brief — or search by ISSN / title anytime.$2"
);

// Features-style mosaic for How it works (ScholarScope product data)
html = html.replace(
  /<div class="cases-tabs-block">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/,
  `<div class="cases-tabs-block">${howMosaicHtml}</div>
            </div>
          </div>
        </div>
        </section>`
);

html = html.replace(/PLACEHOLDER_PROBLEM/g, "");
html = html.replace(/PLACEHOLDER_SOLUTION/g, "");

// Feature code chips — extension-accurate (desktop + mobile cards)
const featureSnippets = [
  "page → DOAJ → OpenAlex",
  "license: CC BY · OA",
  "subject · topics[]",
  "2yr_mean_citedness · h_index",
  "DOAJ · MEDLINE · SCImago",
  "ISSN · title match",
];
let featureCodeIdx = 0;
html = html.replace(/<div class="features-code">[\s\S]*?<\/div>/g, () => {
  const code = featureSnippets[featureCodeIdx % featureSnippets.length];
  featureCodeIdx += 1;
  return `<div class="features-code">${code}</div>`;
});

// Apps CTA → how it works (not dead external-link)
html = html.replace(
  /(<a aria-label="Link Block" data-wf--button--variant="linear"[^>]*href=")\/utility\/external-link"(\s+target="_blank")?/g,
  '$1#how"'
);
html = html.replace(
  /(<a aria-label="Link Block" href="#how")\s+target="_blank"/g,
  "$1"
);

// Testimonials lede — drop SaaS leftover
html = html.replace(
  /(<section id="stories"[\s\S]*?<div text-animation="" class="section-except">)[\s\S]*?(<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<div class="rate-wrap-block">)/,
  `$1Honest free metrics and source links — so labs and students decide where to publish with evidence.$2`
);

// Hero eyebrow clarity
html = html.replace(
  /(<div class="hero-info-text">)\s*Chrome extension\s*(<\/div>)/,
  "$1Chrome extension$2"
);

// ── Professional SEO head (canonical, OG, Twitter, JSON-LD) ──
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "ScholarScope",
      url: SITE_URL,
      logo: `${SITE_URL}/scholarscope-logo.png`,
      description: SEO.description,
      sameAs: [
        "https://github.com/givecursorfree-oss/ScholarScope",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "ScholarScope",
      description: SEO.description,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: SEO.title,
      description: SEO.description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#software` },
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: "ScholarScope",
      applicationCategory: "BrowserApplication",
      operatingSystem: "Chrome, Edge",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description: SEO.description,
      url: SITE_URL,
      downloadUrl: `${SITE_URL}/downloads/ScholarScope-extension.zip`,
      image: `${SITE_URL}/scholarscope-logo.png`,
      featureList: [
        "Live APC and publishing fees from page, DOAJ, and OpenAlex",
        "Open access status and Creative Commons licenses",
        "Subjects and OpenAlex topics",
        "Free impact metrics (not Clarivate IF)",
        "Indexing checks and SCImago SJR verify links",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What does ScholarScope show for a journal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A live publishing brief: article processing charges (APC), open access and license, subjects, free OpenAlex impact metrics, indexing checks, and links to verify SJR on SCImago.",
          },
        },
        {
          "@type": "Question",
          name: "Where does ScholarScope get APC and OA data?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fees prefer amounts listed on the publisher page, then DOAJ, then OpenAlex when available. Open access and Creative Commons licenses come from DOAJ when the journal is indexed.",
          },
        },
        {
          "@type": "Question",
          name: "Does ScholarScope show Clarivate Journal Impact Factor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. ScholarScope shows free OpenAlex metrics (2-year mean citedness, h-index, i10), clearly labeled as not Clarivate IF. SJR opens on the official SCImago page for you to confirm.",
          },
        },
        {
          "@type": "Question",
          name: "How do I install ScholarScope?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Download ScholarScope-extension.zip, unzip once, open chrome://extensions (or edge://extensions), enable Developer mode, and Load unpacked. Full steps are on the install guide.",
          },
        },
        {
          "@type": "Question",
          name: "How do I check a journal APC before I submit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Confirm fees on the publisher page, cross-check open access in DOAJ, and verify SJR on SCImago. ScholarScope builds this brief live while you browse, or read the journal APC guide on the site.",
          },
        },
      ],
    },
  ],
};

const seoHead = `
    <meta name="description" content="${SEO.description}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="keywords" content="${SEO.keywords}" />
    <meta name="author" content="ScholarScope" />
    <meta name="theme-color" content="#0A5F6E" />
    <link rel="canonical" href="${SITE_URL}/" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="ScholarScope" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:url" content="${SITE_URL}/" />
    <meta property="og:title" content="${SEO.title}" />
    <meta property="og:description" content="${SEO.description}" />
    <meta property="og:image" content="${SEO.ogImage}" />
    <meta property="og:image:alt" content="ScholarScope — journal publishing briefs for researchers" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${SEO.title}" />
    <meta name="twitter:description" content="${SEO.description}" />
    <meta name="twitter:image" content="${SEO.ogImage}" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="/scholarscope-logo.png" />
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
`;

// Replace existing description + social metas with professional SEO block
html = html.replace(
  /<meta content="[^"]*" name="description"\s*\/>\s*<meta content="[^"]*" property="og:title"\s*\/>\s*<meta content="[^"]*" property="og:description"\s*\/>\s*<meta content="[^"]*" property="og:image"\s*\/>\s*<meta content="[^"]*" name="twitter:title"\s*\/>\s*<meta content="[^"]*" name="twitter:description"\s*\/>\s*<meta property="og:type" content="website"\s*\/>\s*<meta content="summary_large_image" name="twitter:card"\s*\/>/,
  seoHead.trim()
);

// Ensure <title> matches SEO title
html = html.replace(
  /<title>\s*[\s\S]*?\s*<\/title>/,
  `<title>\n      ${SEO.title}\n    </title>`
);

// Visible FAQ block (content depth + matches FAQ schema) — before stories
const faqHtml = `
        <section id="faq" class="ss-faq-section" aria-labelledby="ss-faq-title">
          <div class="section-space">
            <div class="w-layout-blockcontainer main-container w-container">
              <div class="ss-faq">
                <p class="ss-faq-eyebrow">FAQ</p>
                <h2 id="ss-faq-title" class="ss-faq-title">Common questions about ScholarScope</h2>
                <p class="ss-faq-lede">Straight answers about APC, open access, metrics, and install — matched to what the extension actually does.</p>
                <div class="ss-faq-list">
                  <details class="ss-faq-item" open>
                    <summary>What does ScholarScope show for a journal?</summary>
                    <p>A live publishing brief: APC and fees, open access and license, subjects, free OpenAlex impact metrics, indexing checks, and links to verify SJR on SCImago.</p>
                  </details>
                  <details class="ss-faq-item">
                    <summary>Where do APC and OA data come from?</summary>
                    <p>Fees prefer amounts listed on the publisher page, then DOAJ, then OpenAlex when available. OA status and Creative Commons licenses come from DOAJ when the journal is indexed.</p>
                  </details>
                  <details class="ss-faq-item">
                    <summary>Does it show Clarivate Journal Impact Factor?</summary>
                    <p>No. ScholarScope shows free OpenAlex metrics (2-year mean citedness, h-index, i10), clearly labeled as not Clarivate IF. SJR opens on the official SCImago page.</p>
                  </details>
                  <details class="ss-faq-item">
                    <summary>How do I install it in Chrome or Edge?</summary>
                    <p>Download the ZIP, unzip once, open chrome://extensions or edge://extensions, enable Developer mode, then Load unpacked. See the <a href="/install.html">install guide</a>.</p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </section>
`;

html = html.replace(
  '<section id="stories" class="rate-section">',
  `${faqHtml}\n        <section id="stories" class="rate-section">`
);

// FAQ styles inside existing brand <style> block
html = html.replace(
  /\/\* Official source logos in trusted marquee \*\//,
  `${howMosaicCss}
      /* FAQ — scannable, no card chrome beyond interaction */
      .ss-faq-section{background:transparent}
      .ss-faq{max-width:720px;margin:0 auto;padding:8px 0 24px}
      .ss-faq-eyebrow{font-family:"Plus Jakarta Sans",Lato,system-ui,sans-serif;font-size:.6875rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;opacity:.55;margin:0 0 10px}
      .ss-faq-title{font-family:"Plus Jakarta Sans",Lato,system-ui,sans-serif;font-size:clamp(1.5rem,3vw,2rem);letter-spacing:-.03em;line-height:1.15;margin:0 0 10px}
      .ss-faq-lede{opacity:.72;line-height:1.5;margin:0 0 22px;max-width:38rem}
      .ss-faq-list{display:flex;flex-direction:column;gap:10px}
      .ss-faq-item{border-top:1px solid rgba(15,28,26,.12);padding:14px 0}
      .ss-faq-item:last-child{border-bottom:1px solid rgba(15,28,26,.12)}
      .ss-faq-item summary{cursor:pointer;font-weight:650;font-size:1.05rem;list-style:none;min-height:44px;display:flex;align-items:center}
      .ss-faq-item summary::-webkit-details-marker{display:none}
      .ss-faq-item p{margin:10px 0 4px;line-height:1.55;opacity:.82}
      .ss-faq-item a{color:#0A5F6E}
      /* Official source logos in trusted marquee */`
);

// Sync robots.txt + sitemap.xml to configured SITE_URL
const today = new Date().toISOString().slice(0, 10);
const sitemapPages = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/install.html", priority: "0.9", changefreq: "monthly" },
  { path: "/how-it-works.html", priority: "0.9", changefreq: "monthly" },
  { path: "/features.html", priority: "0.85", changefreq: "monthly" },
  { path: "/journal-apc.html", priority: "0.95", changefreq: "weekly" },
  { path: "/privacy.html", priority: "0.4", changefreq: "yearly" },
];
const robotsTxt = `# ScholarScope marketing site
User-agent: *
Allow: /

Disallow: /downloads/*.zip
Disallow: /downloads/*.json

Sitemap: ${SITE_URL}/sitemap.xml
`;
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPages
  .map(
    (p) => `  <url>
    <loc>${SITE_URL}${p.path === "/" ? "/" : p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(publicDir, "robots.txt"), robotsTxt, "utf8");
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf8");

// Keep absolute URLs in sync when SITE_URL changes
const seoPages = [
  "privacy.html",
  "install.html",
  "how-it-works.html",
  "features.html",
  "journal-apc.html",
  "404.html",
  ".well-known/security.txt",
];
for (const page of seoPages) {
  const pagePath = path.join(publicDir, page);
  if (!fs.existsSync(pagePath)) continue;
  let pageHtml = fs.readFileSync(pagePath, "utf8");
  pageHtml = pageHtml.replace(/https:\/\/scholarscope\.app/g, SITE_URL);
  fs.writeFileSync(pagePath, pageHtml, "utf8");
}

fs.writeFileSync(out, html, "utf8");
console.log(
  "Wrote",
  out,
  "(" + Math.round(html.length / 1024) + " KB) — SEO + animations preserved @",
  SITE_URL
);
