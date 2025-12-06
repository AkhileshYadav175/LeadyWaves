import "/src/styles/AidaSection.css";

export default function AidaSection() {
  return (
    <section className="aida-section reveal-aida">
      
      <div className="aida-inner container">

        <div className="aida-left">
          <img
            src="/src/assets/download.svg"
            alt="AIDA Funnel"
            className="aida-img"
          />
        </div>

  
        <div className="aida-right">

          <p className="aida-sub">
            Why Our Pages Generate More Business?
          </p>

          <h2 className="aida-title">
            Turning Visitors Into <br />
            Customers With AIDA <br />
            Model Strategies
          </h2>

          <p className="aida-desc">
            Every page we create is custom-built to drive results blending strategy,
            psychology, and design. From the first impression to the final click,
            your visitors move seamlessly toward conversion.
          </p>

          <ul className="aida-list">
            <li>✔ 3500+ Projects Delivered</li>
            <li>✔ 100% Custom Designs</li>
            <li>✔ Satisfaction Guaranteed</li>
          </ul>


          <a href="#book-call" className="aida-btn">
            Book a Free discovery Call
          </a>

        </div>

      </div>

    </section>
  );
}
