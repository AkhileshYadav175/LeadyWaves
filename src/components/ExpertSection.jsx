import "../styles/expertSection.css";

export default function ExpertSection() {
  return (
    <section className="expert-section">

      <div className="expert-card">

    
        <div className="expert-left">
          <h2 className="expert-title">
            Not Sure What You Need? Ask Our Expert Designer
          </h2>

          <ul className="expert-list">
            <li>✔ No-Pressure Discussion</li>
            <li>✔ Clear Design Direction</li>
            <li>✔ Results-Driven Advice</li>
          </ul>

          <a href="#book-call" className="expert-btn">
            Speak with Our Expert Designer <span>➜</span>
          </a>
        </div>

        
        <div className="expert-right">
          <img
            src="/src/assets/cro-expert-img.png"
            alt="expert designer"
            className="expert-img"
          />
        </div>

      </div>

    </section>
  );
}
