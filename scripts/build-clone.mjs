/**
 * Marketing HTML clone → ScholarScope content.
 * Preserves site CSS/JS runtime, IX animation gate, GSAP, Lenis — swaps copy/brand
 * and strips template chrome (agency credits, unused nav, platform labels).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");
const src = path.join(root, "toolify_webflow_io.html");
const out = path.join(root, "site", "index.html");

let html = fs.readFileSync(src, "utf8");

/** Safe text/content swaps only — never touch animation CSS/JS bootstraps */
const reps = [
  [
    /Toolify - Webflow HTML Website Template/g,
    "ScholarScope — Know the journal before you submit",
  ],
  [
    /Toolify is a premium landing page template built for AI tools, developer products, and APIs—featuring syntax-highlighted code blocks with a language switcher to convert technical buyers\./g,
    "ScholarScope helps researchers decide where to publish — live APC, open access, subjects, and free impact metrics from DOAJ and OpenAlex, with SJR links to SCImago.",
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
    "Chrome extension for researchers. Live APC, OA licenses, subjects, and free impact metrics while you browse SciMAGO and publisher sites.",
  ],

  [/Get Started/g, "Install Extension"],
  [/Learn More/g, "How it works"],

  [/Discover Our Features/g, "Built for researchers"],
  [
    /Developer tools that don’t get in your way—just clean, reliable APIs and thoughtfully crafted documentation so you can build faster with confidence\./g,
    "Free live data from DOAJ and OpenAlex. SJR opens on SCImago — no fabricated ranks, no Clarivate scrape.",
  ],

  [/API-First Design/g, "Real APC &amp; fees"],
  [
    /RESTful API with predictable responses\. Built for developers who value simplicity\./g,
    "DOAJ-reported article processing charges for the journal on screen — USD, EUR, GBP when listed.",
  ],
  [
    /RESTful API with responses\. Built for developers who value simplicity\./g,
    "DOAJ-reported APCs for the journal on screen — clear amounts when the venue declares them.",
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
  [/Auto-Scaling/g, "SJR on SCImago"],
  [
    /From 10 to 10M requests\. Infrastructure that grows with your product\./g,
    "One click to the official SCImago journal page for SJR and quartile — legit link only.",
  ],
  [/Easy Integration/g, "Works where you search"],
  [
    /One-line setup\. Works with Next\.js, Express, Flask, and any modern framework\./g,
    "Auto-detects journals on SciMAGO, publishers, PubMed, and Scholar — or search by ISSN/title.",
  ],

  [/client\.generate\(\{prompt: "\.\.\."\}\)/g, "bibjson.apc → USD / EUR"],
  [/client\.generate \(\{prompt: "\.\.\."\}\)/g, "bibjson.apc → USD / EUR"],
  [/npm install @devapi\/sdk/g, "license: CC BY · OA"],
  [/latency: "1\.2s"/g, 'subject · topics[]'],
  [/apiKey: process\.env\.SECRET/g, "2yr_mean_citedness"],
  [/scale: "automatic"/g, "scimagojr.com/search"],
  [/new DevAPI\(\{ apiKey \}\)/g, "ISSN · title match"],

  [/Build For Real Use Cases/g, "Built for real research workflows"],
  [/AI Apps/g, "SciMAGO"],
  [/Chrome Extensions/g, "Chrome"],
  [/SaaS Tools/g, "Labs"],
  [/Automation Scripts/g, "Manual"],
  [
    /Building AI features from scratch is time-consuming/g,
    "You found a title but don’t know APC or the OA model",
  ],
  [
    /Ready-to-use AI endpoints for text generation, analysis, and more/g,
    "ScholarScope matches ISSN/title and returns a live publishing brief",
  ],

  [/Request Input/g, "Journal lookup"],
  [/AI Response/g, "Publishing brief"],

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
  [
    /Native SDKs and ready-to-use examples for every popular framework/g,
    "Install the Chrome extension and decide where to publish — with evidence",
  ],
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

// First hero code panel → journal brief (preserve surrounding animated wrappers)
html = html.replace(
  /(<div class="home-embade">)[\s\S]*?(<\/div>\s*<\/div>\s*<div class="home-divider">)/,
  `$1
                          <div class="home-code">
                            <span class="moss-green">01</span>
                            <span class="sky-blue">title</span>
                            :
                            <span class="coral">&#34;Nature Communications&#34;</span>,
                            <br />
                          </div>
                          <div class="home-code">
                            <span class="moss-green">02</span>
                            <span class="light-gold">issn</span>
                            :
                            <span class="coral">&#34;2041-1723&#34;</span>,
                            <br />
                          </div>
                          <div class="home-code">
                            <span class="moss-green">03</span>
                            <span class="light-gold">apc</span>
                            :
                            <span class="coral">&#34;USD 7350&#34;</span>,
                          </div>
                          <div class="home-code">
                            <span class="moss-green">04</span>
                            <span class="light-gold">oa</span>
                            :
                            <span class="sage-green">&#34;DOAJ · CC BY&#34;</span>
                            <br />
                          </div>
                          <div class="home-code">
                            <span class="moss-green">05</span>
                            <span class="light-gold">citedness_2yr</span>
                            :
                            <span class="pale-blue">16.36</span>
                          </div>
                        $2`
);

// In-page anchors (structure preserved)
html = html.replace(/href="\/contact"/g, 'href="#install"');
html = html.replace(/href="\/about"/g, 'href="#how"');
html = html.replace(/href="\/features"/g, 'href="#features"');
html = html.replace(/href="\/documentation"/g, 'href="#features"');
html = html.replace(/href="\/pricing"/g, 'href="#install"');
html = html.replace(/href="\/blog"/g, 'href="#top"');
html = html.replace(/href="\/changelog"/g, 'href="#top"');
html = html.replace(/href="\/privacy-policy"/g, 'href="#top"');

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
  '<section class="rate-section">',
  '<section id="install" class="rate-section">'
);

// Primary install CTAs → Chrome Web Store when set, else downloadable extension ZIP
const CHROME_STORE_URL = process.env.SCHOLARSCOPE_CHROME_STORE_URL || "";
const DOWNLOAD_URL = "/downloads/ScholarScope-extension.zip";
const INSTALL_GUIDE_URL = "/install.html";

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
        color:inherit;
        white-space:nowrap;
      }
      .ss-brand-tag{
        font-family:"Plus Jakarta Sans",Lato,system-ui,sans-serif;
        font-weight:500;
        font-size:.625rem;
        letter-spacing:.08em;
        text-transform:uppercase;
        line-height:1;
        opacity:.5;
        white-space:nowrap;
      }
      @media (max-width:991px){
        .ss-brand-lockup{gap:10px}
        .ss-brand-mark,
        .header-logo.ss-brand-mark{
          width:28px!important;
          height:28px!important;
          max-width:28px!important;
          border-radius:8px;
        }
        .ss-brand-name{font-size:1rem}
        .ss-brand-tag{display:none}
      }
      /* Official source logos in trusted marquee */
      .home-trusted .home-sitelogo{
        height:32px!important;
        width:auto!important;
        max-width:220px;
        object-fit:contain;
      }
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
                    <a aria-label="Features" href="#features" class="footer-nav-link">Features</a>
                    <a aria-label="How it works" href="#how" class="footer-nav-link">How it works</a>
                    <a aria-label="Install" href="#install" class="footer-nav-link">Install</a>
                  </div>
                </div>
                <div animated-step="" class="footer-nav">
                  <div class="footer-nav-title">Sources</div>
                  <div class="footer-nav-wrap">
                    <a aria-label="DOAJ" href="https://doaj.org/" target="_blank" rel="noopener" class="footer-nav-link">DOAJ</a>
                    <a aria-label="OpenAlex" href="https://docs.openalex.org/" target="_blank" rel="noopener" class="footer-nav-link">OpenAlex</a>
                    <a aria-label="SCImago" href="https://www.scimagojr.com/" target="_blank" rel="noopener" class="footer-nav-link">SCImago</a>
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

fs.writeFileSync(out, html, "utf8");
console.log("Wrote", out, "(" + Math.round(html.length / 1024) + " KB) — animations preserved");
