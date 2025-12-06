import "../styles/navbar.css";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">

      
        <div className="brand">
          <img src="/src/assets/header-logo .png" alt="logo" />
        </div>

    
        <a href="#book-call" className="nav-cta">
          Book a Free discovery Call
        </a>

      </div>
    </header>
  );
}
