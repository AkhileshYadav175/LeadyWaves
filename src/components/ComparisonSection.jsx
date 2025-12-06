import "../styles/Comparison.css";

export default function ComparisonSection() {
  return (
    <section className="comp-section">
      <div className="container">

        <h2 className="comp-title">
          Why a high-converting website is the smartest investment for growth?
        </h2>

        <p className="comp-sub">
          Maximize your existing traffic and scale profitably.
        </p>

        <div className="comp-table">

        
          <div className="comp-row comp-head">
            <div className="head-title">Features</div>

            <div className="brand-col">
              <img src="/src/assets/header-logo .png" className="brand-logo" />
            </div>

            <div className="head-title b">Generic Solutions</div>
          </div>

        
          {[
            "Brand-Focused Design",
            "Designed for ROI",
            "Faster Performance",
            "Clear User journey",
            "Easily Scalable",
            "High ROI",
            "Growth & Results"
          ].map((feature, i) => (
            <div className="comp-row" key={i}>
              <div className="feat">{feature}</div>
              <div className="tick-col">✔</div>
              <div className="cross-col">✕</div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
