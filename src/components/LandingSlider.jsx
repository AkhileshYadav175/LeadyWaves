import { useState, useEffect } from "react";
import "../styles/landingSlider.css";

export default function LandingSlider() {
  

  const slides = [
    { img1: "/src/assets/Frame-2147228124-1.jpg", img2: "/src/assets/Frame-2147228123.jpg" },
    { img1: "/src/assets/Frame-2147228123.jpg", img2: "/src/assets/Frame-2147228125.jpg" },
    { img1: "/src/assets/Frame-2147228125.jpg", img2: "/src/assets/Frame-2147228122.jpg" },
    { img1: "/src/assets/Frame-2147228122.jpg", img2: "/src/assets/Frame-2147228128.jpg" },
    { img1: "/src/assets/Frame-2147228128.jpg", img2: "/src/assets/Frame-1.jpg" },
    { img1: "/src/assets/Frame-1.jpg", img2: "/src/assets/Frame-2.jpg" },
    { img1: "/src/assets/Frame-2.jpg", img2: "/src/assets/Frame-3.jpg" },
    { img1: "/src/assets/Frame-3.jpg", img2: "/src/assets/Frame-2147228125.jpg" },
    { img1: "/src/assets/Frame-2147228124-1.jpg", img2: "/src/assets/Frame-2147228123.jpg" },
    { img1: "/src/assets/Frame-2147228123.jpg", img2: "/src/assets/Frame-2147228125.jpg" },
    { img1: "/src/assets/Frame-2147228125.jpg", img2: "/src/assets/Frame-2147228122.jpg" },
    { img1: "/src/assets/Frame-2147228122.jpg", img2: "/src/assets/Frame-2147228128.jpg" },
    { img1: "/src/assets/Frame-2147228128.jpg", img2: "/src/assets/Frame-1.jpg" },
    { img1: "/src/assets/Frame-1.jpg", img2: "/src/assets/Frame-2.jpg" },
    { img1: "/src/assets/Frame-2.jpg", img2: "/src/assets/Frame-3.jpg" },
    { img1: "/src/assets/Frame-3.jpg", img2: "/src/assets/Frame-2147228125.jpg" },
    
  ];

  const [index, setIndex] = useState(0);


  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);


  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="landing-slider">

      <div className="container">

        <h2 className="slider-title">We’re Experts In Every Kind Of Landing Page</h2>
        <p className="slider-sub">You name the page type, we expertly design it.</p>

    
        <div className="slider-box">

          <button className="arrow-btn left" onClick={prev}>❮</button>

          <div className="slide">
            <img src={slides[index].img1} className="slide-img" alt="Image A" />
            <img src={slides[index].img2} className="slide-img" alt="Image B" />
          </div>

          <button className="arrow-btn right" onClick={next}>❯</button>

        </div>

  
        <div className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`dot ${i === index ? "active" : ""}`}
            ></span>
          ))}
        </div>

      </div>
    </section>
  );
}
