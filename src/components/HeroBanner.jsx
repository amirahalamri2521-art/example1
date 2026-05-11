import React from 'react';
import { Sparkles } from 'lucide-react';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <div className="hero-badge">
          <Sparkles size={16} />
          <span>Season 2026 is Live!</span>
        </div>
        <h1>Welcome to Jeddah Season Dashboard</h1>
        <p>Manage events, visitors, and tickets in one place with real-time analytics and AI insights.</p>
        <button className="hero-btn">Explore Events</button>
      </div>
      <div className="hero-visual">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <style jsx="true">{`
        .hero-banner {
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          border-radius: 24px;
          padding: 3rem;
          color: white;
          position: relative;
          overflow: hidden;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .hero-content {
          max-width: 600px;
          position: relative;
          z-index: 2;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(4px);
        }

        .hero-content h1 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .hero-content p {
          font-size: 1.1rem;
          opacity: 0.9;
          margin-bottom: 2rem;
        }

        .hero-btn {
          background: var(--accent-1);
          color: var(--primary);
          padding: 1rem 2rem;
          border-radius: var(--radius);
          font-weight: 700;
          font-size: 1rem;
          box-shadow: 0 4px 14px 0 rgba(158, 206, 71, 0.39);
        }

        .hero-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(158, 206, 71, 0.5);
        }

        .hero-visual {
          position: absolute;
          right: -50px;
          top: -50px;
          width: 400px;
          height: 400px;
          z-index: 1;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.6;
        }

        .blob-1 {
          width: 250px;
          height: 250px;
          background: var(--accent-1);
          top: 20%;
          right: 10%;
          animation: float 10s infinite alternate;
        }

        .blob-2 {
          width: 200px;
          height: 200px;
          background: var(--accent-2);
          bottom: 10%;
          right: 30%;
          animation: float 8s infinite alternate-reverse;
        }

        .blob-3 {
          width: 150px;
          height: 150px;
          background: var(--white);
          top: 10%;
          right: 50%;
          animation: float 12s infinite alternate;
        }

        @keyframes float {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }

        @media (max-width: 768px) {
          .hero-banner { padding: 2rem; text-align: center; flex-direction: column; }
          .hero-content h1 { font-size: 1.8rem; }
          .hero-visual { display: none; }
        }
      `}</style>
    </div>
  );
};

export default HeroBanner;
