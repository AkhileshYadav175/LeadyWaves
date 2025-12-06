import React from 'react'
import '../styles/footer.css'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} LeadyWaves </div>
        <div className="footer-links">
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}