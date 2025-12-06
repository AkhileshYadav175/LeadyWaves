import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner container">

        <h1 className="hero-title">
          We Build High Converting Websites & Landing Pages
        </h1>

        <p className="hero-sub">
          Leadywaves helps brands scale profitably with{" "}
          <strong>Conversion Rate Optimization.</strong>
        </p>

        
        <a href="#book-call" className="hero-btn glow-green">
          Book a Free discovery Call
        </a>

        <div className="hero-stats">
          <div className="stat"><span>✔</span> 3500 + Successful Projects</div>
          <div className="stat"><span>✔</span> Deal in all industries</div>
          <div className="stat"><span>✔</span> 15+ Years of CRO-Driven Design Expertise</div>
        </div>

      </div>
    </section>
  );
}
