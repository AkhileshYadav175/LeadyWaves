import { useRef, useState, useEffect } from "react";
import "../styles/testimonials.css";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(null);
  const videoRefs = useRef([]);
  const sectionRef = useRef(null);

  const people = [
    {
      video: "/src/assets/WhatsApp-Video-2025-09-26-at-17.05.46-2 (1).mp4",
      thumbnail: "/src/assets/WhatsApp-Video-2025-09-26-at-17.05.46-2 (1).mp4",
      name: "Silviu",
      role: "CEO Of Aha Moments",
    },
    {
      video: "/src/assets/IMG_6422-1.mp4",
      thumbnail: "/src/assets/IMG_6422-1.mp4",
      name: "Scott",
      role: "Founder Of Fillungo",
    },
    {
      video: "/src/assets/Sublime-Text-File-size-limit-17-October-2025 (1).mp4",
      thumbnail: "/src/assets/Sublime-Text-File-size-limit-17-October-2025 (1).mp4",
      name: "Li Xia",
      role: "Marketing Head At Sondar.Ai",
    },
    {
      video: "/src/assets/shakhar-2-2.mp4",
      thumbnail: "/src/assets/Video-3.jpg",
      name: "Steve Janin",
      role: "Coo At Found Me",
    },
  ];


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

  const handlePlay = (index) => {
    setActiveIndex(index);

    videoRefs.current.forEach((vid, i) => {
      if (vid && i !== index) vid.pause();
    });
  };

  return (
    <section className="testimonial-section reveal" ref={sectionRef}>
      <div className="container">
        <h2 className="testi-title">
          See How We've Helped Businesses <br /> Like Yours Grow
        </h2>

        <p className="testi-sub">
          Trusted by 3,500+ brands since 2013. You could be next.
        </p>

        <div className="testi-grid">
          {people.map((p, i) => (
            <div key={i} className="testi-card">

              <div className="video-wrapper">
                <video
                  className="testi-video"
                  src={p.video}
                  poster={p.thumbnail}
                  controls
                  ref={(el) => (videoRefs.current[i] = el)}
                  onPlay={() => handlePlay(i)}
                />

                {activeIndex !== i && (
                  <div className="play-btn-overlay">▶</div>
                )}
              </div>

              <h3 className="testi-name">{p.name}</h3>
              <p className="testi-role">{p.role}</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
