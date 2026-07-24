/**
 * How-it-works — native Toolify/Webflow cases-tabs (3 steps = headline).
 */

function codeLine(n, html) {
  return `<div class="cases-code"><span class="moss-green">${n}</span> ${html}<br /></div>`;
}

function tabPane(tab, active, { problem, solution, outputJson, codeLines }) {
  const activeClass = active ? " w--tab-active" : "";
  return `
                        <div data-w-tab="${tab}" class="cases-tab-pane w-tab-pane${activeClass}">
                          <div class="cases-wrapp">
                            <div class="cases-grid">
                              <div class="cases-card">
                                <div class="cases-name">You need</div>
                                <div class="cases-except">${problem}</div>
                              </div>
                              <div class="cases-card">
                                <div class="cases-name">Do this</div>
                                <div class="cases-except">${solution}</div>
                              </div>
                              <div class="case-inform">
                                <div class="cases-info">
                                  <div class="cases-name">Result</div>
                                </div>
                                <div class="cases-emb">
                                  <div class="cases-code">${outputJson}</div>
                                </div>
                              </div>
                            </div>
                            <div class="cases-grid">
                              <div class="case-inform">
                                <div class="cases-info">
                                  <div class="cases-dot red"></div>
                                  <div class="cases-dot yellow"></div>
                                  <div class="cases-dot green"></div>
                                </div>
                                <div class="cases-emb apple">
                                  ${codeLines}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>`;
}

const steps = [
  {
    tab: "Tab 1",
    title: "01 Install",
    problem: "A publishing brief before you submit — without juggling five tabs.",
    solution: "Download the ZIP, Load unpacked in Chrome or Edge, then pin ScholarScope.",
    outputJson: `{
                                    <br />
                                    <span class="light-gold">&#34;status&#34;</span>
                                    :
                                    <span class="coral">&#34;installed&#34;</span>
                                    ,
                                    <br />
                                    <span class="light-gold">&#34;browser&#34;</span>
                                    :
                                    <span class="coral">&#34;Chrome / Edge&#34;</span>
                                    <br />
                                    }`,
    codeLines: [
      codeLine("1", `<span class="sky-blue">open</span> chrome://extensions`),
      codeLine("2", `<span class="sky-blue">enable</span> Developer mode`),
      codeLine("3", `<span class="lavender">Load unpacked</span> → unzipped folder`),
      codeLine("4", `<span class="teal">pin</span> ScholarScope`),
    ].join("\n"),
  },
  {
    tab: "Tab 2",
    title: "02 Open page",
    problem: "APC, OA license, and indexing are scattered across journal sites.",
    solution:
      "Open SciMAGO, a publisher page, PubMed, or Scholar. No ISSN? Search title or ISSN in the popup.",
    outputJson: `{
                                    <br />
                                    <span class="light-gold">&#34;issn&#34;</span>
                                    :
                                    <span class="coral">&#34;2041-1723&#34;</span>
                                    ,
                                    <br />
                                    <span class="light-gold">&#34;source&#34;</span>
                                    :
                                    <span class="coral">&#34;page | popup&#34;</span>
                                    <br />
                                    }`,
    codeLines: [
      codeLine("1", `<span class="sky-blue">visit</span> journal page`),
      codeLine("2", `<span class="pale-blue">detect</span>(issn || title)`),
      codeLine("3", `<span class="sky-blue">or</span> popup.<span class="pale-blue">search</span>(…)`),
      codeLine("4", `<span class="lavender">await</span> brief.fetch()`),
    ].join("\n"),
  },
  {
    tab: "Tab 3",
    title: "03 Read brief",
    problem: "Fees and impact claims are easy to misread without source links.",
    solution:
      "Read APC, OA license, subjects, free OpenAlex metrics, and SCImago SJR verify links — then decide.",
    outputJson: `{
                                    <br />
                                    <span class="light-gold">&#34;apc&#34;</span>
                                    :
                                    <span class="coral">&#34;USD …&#34;</span>
                                    ,
                                    <br />
                                    <span class="light-gold">&#34;license&#34;</span>
                                    :
                                    <span class="coral">&#34;CC BY&#34;</span>
                                    ,
                                    <br />
                                    <span class="light-gold">&#34;metrics&#34;</span>
                                    :
                                    <span class="coral">&#34;OpenAlex&#34;</span>
                                    <br />
                                    }`,
    codeLines: [
      codeLine("1", `<span class="pale-blue">brief</span>.apc`),
      codeLine("2", `<span class="pale-blue">brief</span>.oa + license`),
      codeLine("3", `<span class="pale-blue">brief</span>.openalex`),
      codeLine("4", `<span class="pale-blue">brief</span>.scimagoSjr`),
    ].join("\n"),
  },
];

export const howTabsHtml = `
                  <div text-animation="" class="cases-wrapper">
                    <div class="cases-wrap">
                      <div class="cases-bg"></div>
                    </div>
                    <div data-current="Tab 1" data-easing="ease-in-out-quad" data-duration-in="300" data-duration-out="100" class="cases-tabs w-tabs">
                      <div class="cases-tabs-menu w-tab-menu">
${steps
  .map(
    (s, i) =>
      `                        <a data-w-tab="${s.tab}" class="cases-tab-link w-inline-block w-tab-link${i === 0 ? " w--current" : ""}"><div class="cases-title">${s.title}</div></a>`
  )
  .join("\n")}
                      </div>
                      <div class="cases-tabs-wrapp w-tab-content">
${steps.map((s, i) => tabPane(s.tab, i === 0, s)).join("\n")}
                      </div>
                    </div>
                  </div>
`;
