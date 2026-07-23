import { useState } from "react";
import { useCases } from "../data/content";

export default function UseCases() {
  const [active, setActive] = useState(0);
  const item = useCases[active];

  return (
    <section className="section section-alt" id="use-cases">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Use cases</p>
          <h2>Built for real research workflows</h2>
          <p className="section-lede">
            Workflow tabs for real research contexts —
            SciMAGO, Chrome, and labs.
          </p>
        </div>

        <div className="tabs">
          {useCases.map((u, i) => (
            <button
              key={u.tab}
              type="button"
              className={`tab ${i === active ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              {u.tab}
            </button>
          ))}
        </div>

        <div className="usecase-grid">
          <div className="usecase-copy">
            <div className="usecase-block">
              <span className="k">Problem</span>
              <p>{item.problem}</p>
            </div>
            <div className="usecase-block">
              <span className="k">Solution</span>
              <p>{item.solution}</p>
            </div>
          </div>
          <div className="usecase-card">
            <span className="k">Output</span>
            <h3>{item.output.title}</h3>
            <ul>
              <li>
                <span>APC</span>
                <strong>{item.output.apc}</strong>
              </li>
              <li>
                <span>OA</span>
                <strong>{item.output.oa}</strong>
              </li>
              <li>
                <span>Impact</span>
                <strong>{item.output.impact}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
