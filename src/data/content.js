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
  except: `${BRAND.name} gives researchers a live publishing brief — APC, open access, subjects, indexing checks, and free impact metrics — while you browse SciMAGO and publisher sites.`,
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
    body: "Prefer fees shown on the publisher page, then DOAJ, then OpenAlex — not guesses.",
    code: "page → DOAJ → OpenAlex",
  },
  {
    title: "Open Access + license",
    body: "See OA status and Creative Commons licenses from DOAJ in one glance.",
    code: "license: CC BY · OA",
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
    title: "Indexing & verify",
    body: "DOAJ and MEDLINE/PubMed checks, plus one-click links to confirm SJR, Scopus, Scholar, and ISSN.",
    code: "DOAJ · MEDLINE · SCImago",
  },
  {
    title: "Works where you already search",
    body: "Auto-detect on SciMAGO, DOAJ, publishers, PubMed, and Scholar — or search by ISSN / title.",
    code: "ISSN · title match",
  },
];

export const useCases = [
  {
    tab: "01 Install",
    problem:
      "You need a clear publishing brief before you submit — without five open tabs.",
    solution:
      "Download ScholarScope-extension.zip, unzip once, then Load unpacked in Chrome or Edge. Pin it.",
    output: {
      title: "chrome://extensions",
      apc: "Load unpacked",
      oa: "Pin toolbar",
      impact: "Ready",
    },
  },
  {
    tab: "02 Detect",
    problem:
      "Jumping between DOAJ, OpenAlex, and SCImago wastes time on every title.",
    solution:
      "Open SciMAGO, a publisher site, PubMed, or Scholar. ScholarScope detects ISSN or title on the page.",
    output: {
      title: "Auto-detect",
      apc: "ISSN · title",
      oa: "30-min cache",
      impact: "Live lookup",
    },
  },
  {
    tab: "03 Brief",
    problem:
      "You found a title but don’t know APC, OA license, subjects, or free impact.",
    solution:
      "Read the brief: fees, OA, subjects, free metrics, indexing checks, and verify links — then decide.",
    output: {
      title: "Nature Communications",
      apc: "USD 7,350",
      oa: "In DOAJ · CC BY",
      impact: "2yr citedness 16.36",
    },
  },
  {
    tab: "04 Manual",
    problem:
      "The page has no ISSN, or you’re browsing a site without auto-detect.",
    solution:
      "Open the ScholarScope popup and search by journal title or ISSN for the same live brief.",
    output: {
      title: "Popup search",
      apc: "ISSN / title",
      oa: "Same brief",
      impact: "Verify on SCImago",
    },
  },
];

export const steps = [
  {
    n: "01",
    title: "Install ScholarScope",
    body: "Download the ZIP, unzip once, then Load unpacked in Chrome or Edge. Pin it to your toolbar.",
  },
  {
    n: "02",
    title: "Open a journal page",
    body: "Browse SciMAGO, a publisher site, PubMed, or Scholar — or search by ISSN / title in the popup.",
  },
  {
    n: "03",
    title: "Read the brief",
    body: "APC, OA, subjects, free impact, indexing checks, and a direct SCImago SJR link — then decide.",
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
  body: "Download ScholarScope-extension.zip → unzip → chrome://extensions → Load unpacked. Free APIs: DOAJ + OpenAlex. SJR opens on SCImago.",
  steps: [
    "Download and unzip ScholarScope-extension.zip",
    "Open chrome://extensions and enable Developer mode",
    "Load unpacked → select the unzipped folder",
    "Visit scimagojr.com and open the ScholarScope panel",
  ],
};
