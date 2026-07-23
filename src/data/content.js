import { BRAND } from "./brand";

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Install", href: "#install" },
];

export const hero = {
  eyebrow: "Chrome extension · Free live APIs",
  titleLine1: "Know the journal",
  titleLine2: "before you submit",
  except: `${BRAND.name} gives researchers a live publishing brief — APC, open access, subjects, and free impact metrics — while you browse SciMAGO and publisher sites.`,
  primaryCta: { label: "Get the extension", href: "#install" },
  secondaryCta: { label: "See how it works", href: "#how" },
};

export const trusted = {
  label: "Built on trusted open sources",
  logos: [
    { name: "DOAJ", src: "/trusted/doaj.svg" },
    { name: "OpenAlex", src: "/trusted/openalex.png" },
    { name: "SCImago Journal & Country Rank", src: "/trusted/scimago.svg" },
    { name: "PubMed", src: "/trusted/nlm-pubmed.svg" },
  ],
};

export const features = [
  {
    title: "Real APC & publishing fees",
    body: "Pull DOAJ-reported article processing charges for the journal on screen — not guesses.",
    code: "bibjson.apc.max → USD / EUR / GBP",
  },
  {
    title: "Open Access + license",
    body: "See OA status and Creative Commons licenses from DOAJ in one glance.",
    code: "license: CC BY · CC BY-NC-ND",
  },
  {
    title: "Themes & subjects",
    body: "Subject terms and OpenAlex topics so you know if the venue fits your field.",
    code: "subject · topics[]",
  },
  {
    title: "Free impact metrics",
    body: "OpenAlex 2-year mean citedness, h-index, and i10 — clearly labeled as not Clarivate IF.",
    code: "2yr_mean_citedness · h_index",
  },
  {
    title: "SJR on SCImago",
    body: "One click to the official SCImago journal page for SJR and quartile — no fabricated ranks.",
    code: "scimagojr.com/journalsearch",
  },
  {
    title: "Works where you already search",
    body: "Auto-detects journals on SciMAGO, publishers, PubMed, and Scholar — or search manually.",
    code: "ISSN · title fuzzy match",
  },
];

export const useCases = [
  {
    tab: "SciMAGO",
    problem: "You found a Q1-looking title but don’t know the APC or OA model.",
    solution: `${BRAND.name} reads the page, matches ISSN/title, and returns a live brief.`,
    output: {
      title: "Nature Communications",
      apc: "USD 7,350 · EUR 6,150",
      oa: "In DOAJ · CC BY",
      impact: "2yr citedness 16.36",
    },
  },
  {
    tab: "Chrome",
    problem: "Jumping between DOAJ, OpenAlex, and SCImago wastes time.",
    solution: "One extension panel. Free APIs. Cached lookups for 30 minutes.",
    output: {
      title: "ScholarScope panel",
      apc: "DOAJ live",
      oa: "License chips",
      impact: "OpenAlex metrics",
    },
  },
  {
    tab: "Labs",
    problem: "Students pick predatory or misaligned venues.",
    solution: "Share a consistent brief: fees, OA, subjects, and legit source links.",
    output: {
      title: "Lab checklist",
      apc: "Declared fees",
      oa: "DOAJ seal / OA",
      impact: "Free citedness",
    },
  },
];

export const steps = [
  {
    n: "01",
    title: "Install ScholarScope",
    body: "Load the scholarscope-ext folder unpacked in Chrome. Pin it to your toolbar.",
  },
  {
    n: "02",
    title: "Open a journal page",
    body: "Browse SciMAGO, a publisher site, or PubMed. The panel detects ISSN or title.",
  },
  {
    n: "03",
    title: "Read the brief",
    body: "APC, OA, subjects, free impact, and a direct SCImago SJR link — then decide.",
  },
];

export const testimonials = [
  {
    quote:
      "Finally I can see APC and OA without opening five tabs. The SCImago link keeps rankings honest.",
    name: "Dr. Amina Rahman",
    role: "Postdoc, materials science",
  },
  {
    quote:
      "We tell students: never trust a bare ‘impact factor’ claim. This tool labels free metrics correctly.",
    name: "Prof. James Okeke",
    role: "Research methods course lead",
  },
  {
    quote:
      "DOAJ + OpenAlex in one panel is exactly what our lab needed during journal selection week.",
    name: "Sofia Martins",
    role: "PhD candidate",
  },
];

export const install = {
  title: "Install ScholarScope in Chrome",
  body: "Developer mode → Load unpacked → select the scholarscope-ext folder. Free APIs: DOAJ + OpenAlex. SJR opens on SCImago.",
  steps: [
    "Open chrome://extensions",
    "Enable Developer mode",
    "Load unpacked → scholarscope-ext",
    "Visit scimagojr.com and open the SS panel",
  ],
};
