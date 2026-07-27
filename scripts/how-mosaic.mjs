/** How-it-works bento mosaic (screenshot layout) — seamless site black. */
export const howMosaicHtml = `
                <div class="ss-how-mosaic" role="list">
                  <article class="ss-how-card ss-how-wide" role="listitem">
                    <div class="ss-how-copy">
                      <p class="ss-how-kicker">01 · Install ScholarScope</p>
                      <p class="ss-how-body">Add ScholarScope from the Chrome Web Store, pin it, then open a journal page on SciMAGO or a publisher site.</p>
                    </div>
                    <div class="ss-how-media">
                      <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&amp;fit=crop&amp;w=1200&amp;q=80" alt="Researchers reviewing work on laptops" width="1207" height="800" loading="lazy" />
                    </div>
                  </article>
                  <article class="ss-how-card ss-how-narrow" role="listitem">
                    <p class="ss-how-headline">02 · Open a journal page — SciMAGO, publishers, PubMed, or Scholar.</p>
                    <div class="ss-how-media ss-how-media-sm">
                      <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&amp;fit=crop&amp;w=900&amp;q=80" alt="Library shelves of academic journals" width="900" height="700" loading="lazy" />
                    </div>
                  </article>
                  <article class="ss-how-card ss-how-narrow ss-how-center" role="listitem">
                    <p class="ss-how-headline">No ISSN on the page? Search by title or ISSN in the popup.</p>
                    <div class="ss-how-keys" aria-hidden="true">
                      <div class="ss-how-key"><span>SS</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></div>
                      <div class="ss-how-key ss-how-key-book"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div>
                    </div>
                  </article>
                  <article class="ss-how-card ss-how-wide" role="listitem">
                    <div class="ss-how-copy">
                      <p class="ss-how-kicker">03 · Read the brief</p>
                      <p class="ss-how-body">APC, OA license, subjects, free OpenAlex metrics, indexing checks, and a SCImago SJR verify link — then decide.</p>
                    </div>
                    <div class="ss-how-logos" aria-label="Data sources">
                      <div class="ss-how-slot"><img src="/trusted/doaj-white.svg" alt="DOAJ" width="72" height="28" /><span>DOAJ</span></div>
                      <div class="ss-how-slot"><img class="ss-how-logo-light" src="/trusted/openalex.png" alt="OpenAlex" width="72" height="28" /><span>OpenAlex</span></div>
                      <div class="ss-how-slot"><img class="ss-how-logo-invert" src="/trusted/scimago.svg" alt="SCImago" width="72" height="28" /><span>SCImago</span></div>
                      <div class="ss-how-slot"><img class="ss-how-logo-invert" src="/trusted/nlm-pubmed.svg" alt="PubMed" width="72" height="28" /><span>PubMed</span></div>
                    </div>
                  </article>
                </div>
`;

export const howMosaicCss = `
      /* How it works bento — one black plane matching site neutrals */
      #how.use-cases-section,
      #how,
      #how .section-space,
      #how .main-container,
      #how .cases-block,
      #how .cases-tabs-block{
        background:var(--color-style--neutral-02,#0b0b0b)!important;
        color:var(--color-style--gray,#ededed);
      }
      #how .section-title,
      #how .section-except,
      #how .section-info-text{
        color:var(--color-style--gray,#ededed)!important;
      }
      #how .section-except{opacity:.78}
      #how .cases-text-block{margin-bottom:28px}
      .ss-how-mosaic{
        display:grid;
        gap:1px;
        grid-template-columns:1fr;
        max-width:64rem;
        margin:0 auto;
        background:var(--color-style--stroke,#272727);
        border:1px solid var(--color-style--stroke,#272727);
        border-radius:16px;
        overflow:hidden;
      }
      @media (min-width:640px){
        .ss-how-mosaic{grid-template-columns:repeat(5,1fr)}
        .ss-how-wide{grid-column:span 3}
        .ss-how-narrow{grid-column:span 2}
      }
      .ss-how-card{
        background:var(--color-style--neutral-02,#0b0b0b);
        border:0;
        border-radius:0;
        overflow:hidden;
        min-height:44px;
        color:var(--color-style--gray,#ededed);
        display:flex;
        flex-direction:column;
      }
      .ss-how-copy{padding:22px 22px 12px}
      .ss-how-kicker,.ss-how-headline{
        font-weight:650;
        margin:0 0 8px;
        font-size:1.05rem;
        color:#fff;
        letter-spacing:-.01em;
      }
      .ss-how-body{
        margin:0;
        line-height:1.5;
        font-size:.92rem;
        color:var(--color-style--ash,#949494);
      }
      .ss-how-headline{
        padding:22px 22px 16px;
        text-align:center;
        text-wrap:balance;
        font-size:1.12rem;
        line-height:1.35;
      }
      .ss-how-center{display:flex;flex-direction:column;align-items:center;justify-content:center;padding-bottom:28px;min-height:220px}
      .ss-how-media{padding:0 0 0 22px;margin-top:auto}
      .ss-how-media img{
        display:block;
        width:100%;
        height:auto;
        border-radius:12px 0 0 0;
        border-top:1px solid var(--color-style--stroke-02,#ffffff1a);
        border-left:1px solid var(--color-style--stroke-02,#ffffff1a);
        object-fit:cover;
        aspect-ratio:3/2;
        min-height:180px;
      }
      .ss-how-media-sm{padding:0 0 18px 0}
      .ss-how-media-sm img{
        border-radius:0 12px 0 0;
        aspect-ratio:76/59;
        border-left:0;
        border-right:1px solid var(--color-style--stroke-02,#ffffff1a);
        min-height:160px;
      }
      .ss-how-keys{display:flex;gap:16px;justify-content:center;margin-top:8px}
      .ss-how-key{
        position:relative;
        width:64px;
        height:64px;
        border-radius:10px;
        border:1px solid var(--color-style--stroke,#272727);
        background:var(--color-style--neutral-01,#181818);
        display:flex;
        align-items:flex-end;
        justify-content:flex-start;
        padding:10px;
        color:#7ec8d4;
      }
      .ss-how-key span{position:absolute;top:6px;right:8px;font-size:.75rem;font-weight:650;color:#9ad4dc}
      .ss-how-key-book{align-items:center;justify-content:center}
      .ss-how-logos{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap:10px;
        padding:8px 22px 22px;
        margin-top:auto;
      }
      @media (min-width:640px){
        .ss-how-logos{grid-template-columns:repeat(4,1fr)}
      }
      @media (min-width:768px){
        .ss-how-logos{padding:8px 36px 28px}
        .ss-how-copy{padding:28px 36px 12px}
      }
      .ss-how-slot{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:6px;
        min-height:72px;
        padding:10px 8px;
        border-radius:12px;
        border:1px solid var(--color-style--stroke,#272727);
        background:var(--color-style--neutral-01,#181818);
      }
      .ss-how-slot img{
        width:auto;
        max-width:88px;
        height:28px;
        object-fit:contain;
      }
      .ss-how-slot img.ss-how-logo-invert{
        filter:brightness(0) invert(1);
        opacity:.92;
      }
      .ss-how-slot img.ss-how-logo-light{
        filter:brightness(1.15) contrast(1.05);
      }
      .ss-how-slot span{
        font-size:.65rem;
        font-weight:650;
        letter-spacing:.06em;
        text-transform:uppercase;
        color:var(--color-style--ash,#949494);
      }
`;
