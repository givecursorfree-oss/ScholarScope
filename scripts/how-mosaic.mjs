/** How-it-works features mosaic — dark theme, consistent cards, readable source marks. */
export const howMosaicHtml = `
                <div class="ss-how-mosaic" role="list">
                  <article class="ss-how-card ss-how-wide" role="listitem">
                    <div class="ss-how-copy">
                      <p class="ss-how-kicker">01 · Install ScholarScope</p>
                      <p class="ss-how-body">Download the ZIP, unzip once, then Load unpacked in Chrome or Edge. Pin it to your toolbar.</p>
                    </div>
                    <div class="ss-how-media">
                      <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&amp;fit=crop&amp;w=1200&amp;q=80" alt="Researchers reviewing work on laptops" width="1207" height="800" loading="lazy" />
                    </div>
                  </article>
                  <article class="ss-how-card ss-how-narrow" role="listitem">
                    <p class="ss-how-headline">02 · Open a journal page</p>
                    <p class="ss-how-sub">SciMAGO, publishers, PubMed, or Google Scholar — the panel detects ISSN or title.</p>
                    <div class="ss-how-media ss-how-media-sm">
                      <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&amp;fit=crop&amp;w=900&amp;q=80" alt="Library shelves of academic journals" width="900" height="700" loading="lazy" />
                    </div>
                  </article>
                  <article class="ss-how-card ss-how-narrow ss-how-center" role="listitem">
                    <p class="ss-how-headline">No ISSN on the page?</p>
                    <p class="ss-how-sub">Search by title or ISSN in the ScholarScope popup.</p>
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
                      <div class="ss-how-slot"><img src="/trusted/doaj.svg" alt="DOAJ" width="72" height="28" /><span>DOAJ</span></div>
                      <div class="ss-how-slot"><img src="/trusted/openalex.png" alt="OpenAlex" width="72" height="28" /><span>OpenAlex</span></div>
                      <div class="ss-how-slot"><img src="/trusted/scimago.svg" alt="SCImago" width="72" height="28" /><span>SCImago</span></div>
                      <div class="ss-how-slot"><img src="/trusted/nlm-pubmed.svg" alt="PubMed" width="72" height="28" /><span>PubMed</span></div>
                    </div>
                  </article>
                </div>
`;

export const howMosaicCss = `
      /* How it works — dark mosaic, even cards, readable logos */
      #how.use-cases-section,
      #how{
        background:#0c1211!important;
        color:#e8efec;
      }
      #how .section-title,
      #how .section-except,
      #how .section-info-text{
        color:#e8efec!important;
      }
      #how .section-except{opacity:.72}
      #how .cases-text-block{margin-bottom:28px}
      .ss-how-mosaic{
        display:grid;
        gap:10px;
        grid-template-columns:1fr;
        max-width:64rem;
        margin:0 auto;
      }
      @media (min-width:640px){
        .ss-how-mosaic{grid-template-columns:repeat(5,1fr);gap:10px}
        .ss-how-wide{grid-column:span 3}
        .ss-how-narrow{grid-column:span 2}
        .ss-how-wide:first-child{border-radius:16px 0 0 0}
        .ss-how-narrow:nth-child(2){border-radius:0 16px 0 0}
        .ss-how-narrow:nth-child(3){border-radius:0 0 0 16px}
        .ss-how-wide:last-child{border-radius:0 0 16px 0}
      }
      .ss-how-card{
        background:#141c1a;
        border:1px solid rgba(232,239,236,.12);
        overflow:hidden;
        min-height:44px;
        color:#e8efec;
        display:flex;
        flex-direction:column;
      }
      .ss-how-copy{padding:22px 22px 12px}
      .ss-how-kicker,.ss-how-headline{
        font-weight:650;
        margin:0 0 8px;
        font-size:1.05rem;
        color:#f3f7f5;
        letter-spacing:-.01em;
      }
      .ss-how-body,.ss-how-sub{
        margin:0;
        line-height:1.5;
        font-size:.92rem;
        color:#a8bbb6;
      }
      .ss-how-headline{
        padding:22px 22px 6px;
        text-align:center;
        text-wrap:balance;
        font-size:1.12rem;
      }
      .ss-how-sub{
        padding:0 22px 16px;
        text-align:center;
        text-wrap:balance;
      }
      .ss-how-center{display:flex;flex-direction:column;align-items:center;padding-bottom:28px}
      .ss-how-media{padding:0 0 0 22px;margin-top:auto}
      .ss-how-media img{
        display:block;
        width:100%;
        height:auto;
        border-radius:12px 0 0 0;
        border-top:1px solid rgba(232,239,236,.1);
        border-left:1px solid rgba(232,239,236,.1);
        object-fit:cover;
        aspect-ratio:3/2;
        min-height:180px;
      }
      .ss-how-media-sm{padding:0 0 18px 0}
      .ss-how-media-sm img{
        border-radius:0 12px 0 0;
        aspect-ratio:76/59;
        border-left:0;
        border-right:1px solid rgba(232,239,236,.1);
        min-height:160px;
      }
      .ss-how-keys{display:flex;gap:16px;justify-content:center;margin-top:4px}
      .ss-how-key{
        position:relative;
        width:64px;
        height:64px;
        border-radius:10px;
        border:1px solid rgba(232,239,236,.16);
        background:rgba(10,95,110,.4);
        display:flex;
        align-items:flex-end;
        justify-content:flex-start;
        padding:10px;
        color:#7ec8d4;
        box-shadow:0 8px 20px rgba(0,0,0,.35);
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
      /* Light pills so dark SVG wordmarks stay readable */
      .ss-how-slot{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:6px;
        min-height:72px;
        padding:10px 8px;
        border-radius:12px;
        border:1px solid rgba(232,239,236,.1);
        background:#f3f7f5;
      }
      .ss-how-slot img{
        width:auto;
        max-width:88px;
        height:28px;
        object-fit:contain;
        filter:none;
      }
      .ss-how-slot span{
        font-size:.65rem;
        font-weight:650;
        letter-spacing:.06em;
        text-transform:uppercase;
        color:#4a5c58;
      }
`;
