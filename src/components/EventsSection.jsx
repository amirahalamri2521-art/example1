import React from 'react';
import { MapPin, Calendar, Heart } from 'lucide-react';

const EventCard = ({ name, location, date, category, imageColor }) => (
  <div className="event-card card">
    <div className="event-image" style={{ background: `linear-gradient(45deg, ${imageColor}, #ffffff)` }}>
      <div className="category-tag">{category}</div>
      <button className="interest-btn">
        <Heart size={18} />
      </button>
    </div>
    <div className="event-details">
      <h3>{name}</h3>
      <div className="event-info">
        <div className="info-item">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
        <div className="info-item">
          <Calendar size={16} />
          <span>{date}</span>
        </div>
      </div>
      <div className="event-actions">
        <button className="btn-secondary-outline">Interested</button>
        <button className="btn-primary">Book Now</button>
      </div>
    </div>
  </div>
);

const EventsSection = () => {
  const events = [
    { name: 'City Walk Concert', location: 'City Walk Area', date: 'May 15, 2026', category: 'Music', imageColor: '#1f6593' },
    { name: 'Jeddah Gaming Zone', location: 'Jeddah Pier', date: 'May 18, 2026', category: 'Gaming', imageColor: '#5eb090' },
    { name: 'Beach Festival', location: 'Obhur Waterfront', date: 'May 22, 2026', category: 'Lifestyle', imageColor: '#9ece47' },
    { name: 'Formula Race Experience', location: 'Corniche Circuit', date: 'May 28, 2026', category: 'Sports', imageColor: '#eab2bb' },
  ];

  return (
    <section className="events-section">
      <div className="section-header">
        <h2>Featured Events</h2>
        <a href="#" className="view-all">View All Events</a>
      </div>
      <div className="events-grid">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>

      <style jsx="true">{`
        .events-section {
          margin-bottom: 2rem;
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .section-header h2 {
          font-size: 1.5rem;
          color: var(--text-dark);
        }

        .view-all {
          color: var(--primary);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .event-card {
          padding: 0;
          overflow: hidden;
        }

        .event-image {
          height: 180px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(0,0,0,0.1);
          font-weight: 800;
          font-size: 2rem;
        }

        .category-tag {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(255, 255, 255, 0.9);
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-dark);
        }

        .interest-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ef4444;
          box-shadow: var(--shadow);
        }

        .event-details {
          padding: 1.5rem;
        }

        .event-details h3 {
          font-size: 1.1rem;
          margin-bottom: 0.75rem;
          color: var(--text-dark);
        }

        .event-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .event-actions {
          display: flex;
          gap: 1rem;
        }

        .event-actions button {
          flex: 1;
          padding: 0.6rem;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 8px;
        }

        .btn-secondary-outline {
          background: transparent;
          border: 1px solid #e2e8f0;
          color: var(--text-muted);
        }

        .btn-secondary-outline:hover {
          background: #f8fafc;
          border-color: var(--primary);
          color: var(--primary);
        }
      `}</style>
    </section>
  );
};

export default EventsSection;
export { EventCard };
