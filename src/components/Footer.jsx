import React from 'react';
import { Globe, Mail, Phone, MapPin, MessageSquare, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer card">
      <div className="footer-content">
        <div className="footer-section main">
          <div className="footer-logo">
            <div className="logo-icon">J</div>
            <span>Jeddah Season</span>
          </div>
          <p>Experience the magic of Jeddah with world-class events, entertainment, and culture.</p>
          <div className="social-links">
            <a href="#"><Globe size={20} /></a>
            <a href="#"><MessageSquare size={20} /></a>
            <a href="#"><Share2 size={20} /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Events Calendar</a></li>
            <li><a href="#">Ticket Info</a></li>
            <li><a href="#">Visitor Guide</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="contact-list">
            <li><Mail size={16} /> info@jeddahseason.sa</li>
            <li><Phone size={16} /> +966 12 345 6789</li>
            <li><MapPin size={16} /> Jeddah, Saudi Arabia</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Jeddah Season. All rights reserved.</p>
        <p className="made-by">Made for Jeddah Season with 💚</p>
      </div>

      <style jsx="true">{`
        .footer {
          margin-top: 2rem;
          padding: 3rem;
          background: var(--white);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-section h4 {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          color: var(--text-dark);
        }

        .footer-section.main p {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          max-width: 300px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--primary);
          margin-bottom: 1.5rem;
        }

        .logo-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          width: 40px;
          height: 40px;
          background: #f1f5f9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: var(--transition);
        }

        .social-links a:hover {
          background: var(--primary);
          color: white;
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-section ul li {
          margin-bottom: 0.75rem;
        }

        .footer-section ul li a {
          text-decoration: none;
          color: var(--text-muted);
          transition: var(--transition);
        }

        .footer-section ul li a:hover {
          color: var(--primary);
        }

        .contact-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid #f1f5f9;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .made-by {
          font-weight: 600;
          color: var(--secondary);
        }

        @media (max-width: 768px) {
          .footer-content { grid-template-columns: 1fr; gap: 2rem; }
          .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
