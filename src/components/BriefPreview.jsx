/** Journal brief product preview */
export default function BriefPreview() {
  return (
    <div className="preview" aria-label="Sample publishing brief">
      <div className="preview-bar">
        <span className="preview-dots" aria-hidden>
          <i /><i /><i />
        </span>
        <span className="preview-title">Publishing brief</span>
        <span className="preview-badge">live</span>
      </div>
      <div className="preview-body">
        <p className="preview-eyebrow">ScholarScope · SciMAGO</p>
        <h3>Nature Communications</h3>
        <p className="preview-meta">
          <code>ISSN 2041-1723</code>
          <span>Nature Portfolio</span>
        </p>

        <div className="preview-block preview-apc">
          <span className="k">APC</span>
          <p className="preview-price">USD 7,350 · EUR 6,150 · GBP 5,490</p>
        </div>
        <div className="preview-block">
          <span className="k">Open Access</span>
          <div className="chips">
            <span className="chip ok">In DOAJ</span>
            <span className="chip tag">CC BY</span>
          </div>
        </div>
        <div className="preview-metrics">
          <div>
            <span className="k">2yr citedness</span>
            <strong>16.36</strong>
          </div>
          <div>
            <span className="k">h-index</span>
            <strong>746</strong>
          </div>
        </div>
        <a className="preview-link" href="https://www.scimagojr.com/journalsearch.php?q=2041-1723" target="_blank" rel="noreferrer">
          Open SJR on SCImago →
        </a>
        <p className="preview-note">OpenAlex citedness · not Clarivate Impact Factor</p>
      </div>
    </div>
  );
}
