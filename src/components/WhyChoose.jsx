import "../styles/whychoose.css";
import { useEffect, useRef } from "react";

export default function WhyChoose() {
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

  const items = [
    {
      title: "Improved Conversions & Leads",
      desc: "Content tailored for each customer boosts engagement.",
      img: "/src/assets/brand1.svg",
    },
    {
      title: "Better User Understanding",
      desc: "Fast-loading, ad-optimized designs enhance experience.",
      img: "/src/assets/brand2.svg",
    },
    {
      title: "Data-Driven Decisions",
      desc: "Fast-loading, ad-optimized designs enhance experience.",
      img: "/src/assets/brand3.svg",
    },
    {
      title: "Higher Conversion Rates",
      desc: "Built to convert visitors into loyal customers.",
      img: "/src/assets/brand4.svg",
    },
  ];

  return (
    <section className="why-section reveal" ref={sectionRef}>
      <div className="container">

        <h2 className="why-title">Why Brands Choose Leadywaves?</h2>

        <div className="why-grid">
          {items.map((box, i) => (
            <div
              key={i}
              className="why-card fade-item"
              style={{ "--d": `${i * 0.15}s` }}
            >
              <img src={box.img} className="why-img" alt="icon" />

              <h3 className="why-heading">{box.title}</h3>
              <p className="why-desc">{box.desc}</p>
            </div>
          ))}
        </div>

        
        <a href="#book-call" className="why-btn">
          Book a Free discovery Call
        </a>

      </div>
    </section>
  );
}
