import React from "react";
import "../styles/showcase.css";

export default function Showcase() {
  const items = [
    { title: "Landing page", img: "/src/assets/iPhone-16-24.png" },
    { title: "High Conversion", img: "/src/assets/sputtek-.png" },
    { title: "B2B Customs", img: "/src/assets/3-1.png" },
    { title: "Increase in Sales", img: "/src/assets/4.png" },
    { title: "40% More Add-to-Carts", img: "/src/assets/2.png" },
    { title: "2x More Bookings", img: "/src/assets/3.png" },
    { title: "Better ROI", img: "/src/assets/5.png" },
  ];

  const infiniteItems = [...items, ...items]; 

  return (
    <section className="showcase" id="work">

    
      <div className="scroll-wrapper">
        <div className="scroll-track">
          {infiniteItems.map((it, idx) => (
            <div className="pair-box" key={idx}>
              <div className="tag">{it.title}</div>
              <div
                className="case-img"
                style={{ backgroundImage: `url(${it.img})` }}
              ></div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
