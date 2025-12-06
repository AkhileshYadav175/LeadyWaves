import "../styles/guarantee.css";
import { useEffect, useRef } from "react";

export default function GuaranteeBanner() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sec = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sec.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sec);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="guarantee-section reveal" ref={sectionRef}>
      <div className="guarantee-inner container">

      
        <div className="g-left">
          <img
            src="/src/assets/moneyback-img.png"
            className="g-show"
            alt="Guarantee"
          />
        </div>

    
        <div className="g-right">
          
    
          <img 
            src="/src/assets/money-back.png"
            alt=""
            className="corner-img"
          />

          <h2 className="g-title">
            We Guarantee You’ll <br /> Love Your New Design.
          </h2>

        
          <a href="#book-call" className="btn-primary g-btn">
            Book a Free discovery Call
          </a>

          <img src="/src/assets/badge.png" alt="" className="badge" />

        </div>

      </div>
    </section>
  );
}
