import "../styles/DeliverResults.css";
import { useEffect, useRef } from "react";

export default function DeliverResults() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sec = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sec.classList.add("show");

          const counters = sec.querySelectorAll(".deliver-number");
          counters.forEach((counter) => startCount(counter));
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sec);
    return () => observer.disconnect();
  }, []);

  function startCount(elm) {
    const target = parseInt(elm.getAttribute("data-target"));
    let current = 0;

    const speed = target > 1000 ? 20 : 50;

    const update = () => {
      if (current < target) {
        current += Math.ceil(target / 60);
        elm.textContent = current + (elm.dataset.suffix || "");
        requestAnimationFrame(update);
      } else {
        elm.textContent = target + (elm.dataset.suffix || "");
      }
    };

    update();
  }

  return (
    <section className="deliver-sec reveal" ref={sectionRef}>
      <div className="deliver-container">

        <h2 className="deliver-title">
          We Don’t Just Design. We Deliver Results.
        </h2>

        <div className="deliver-grid">

        
          <div className="deliver-item">
            <img src="/src/assets/icons/exp.png" className="deliver-icon-img" alt="" />
            <h3 className="deliver-number" data-target="15" data-suffix="+">0</h3>
            <p className="deliver-text">Years Experience</p>
          </div>

      
          <div className="deliver-item">
            <img src="/src/assets/icons/rocket.png" className="deliver-icon-img" alt="" />
            <h3 className="deliver-number" data-target="3500" data-suffix="+">0</h3>
            <p className="deliver-text">Projects Delivered</p>
          </div>

          
          <div className="deliver-item">
            <img src="/src/assets/icons/globe.png" className="deliver-icon-img" alt="" />
            <h3 className="deliver-number" data-target="20" data-suffix="+">0</h3>
            <p className="deliver-text">Clients in 20+ Countries</p>
          </div>

          
          <div className="deliver-item">
            <img src="/src/assets/icons/custom.png" className="deliver-icon-img" alt="" />
            <h3 className="deliver-number" data-target="100" data-suffix="%">0</h3>
            <p className="deliver-text">Custom Design Approach</p>
          </div>

        </div>
      </div>
    </section>
  );
}
