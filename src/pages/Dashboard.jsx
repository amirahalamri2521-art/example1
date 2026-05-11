import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import StatsCards from '../components/StatsCards';
import EventsSection from '../components/EventsSection';
import Analytics from '../components/Analytics';
import AIInsights from '../components/AIInsights';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="main-content">
        <Navbar />
        <div className="dashboard-container">
          <HeroBanner />
          <StatsCards />
          
          <div className="dashboard-grid">
            <div className="grid-left">
              <Analytics />
              <EventsSection />
            </div>
            <div className="grid-right">
              <AIInsights />
              <div className="quick-actions card">
                <h3>Quick Actions</h3>
                <div className="actions-list">
                  <button className="action-btn">Create New Event</button>
                  <button className="action-btn outline">Export Reports</button>
                  <button className="action-btn outline">Manage Staff</button>
                </div>
              </div>
            </div>
          </div>
          
          <Footer />
        </div>
      </main>

      <style jsx="true">{`
        .dashboard-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 1.5rem;
        }

        .quick-actions h3 {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          color: var(--text-dark);
        }

        .actions-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .action-btn {
          width: 100%;
          padding: 0.75rem;
          border-radius: var(--radius);
          font-weight: 600;
          background: var(--primary);
          color: white;
        }

        .action-btn.outline {
          background: transparent;
          border: 1px solid #e2e8f0;
          color: var(--text-muted);
        }

        .action-btn.outline:hover {
          background: #f8fafc;
          border-color: var(--primary);
          color: var(--primary);
        }

        @media (max-width: 1200px) {
          .dashboard-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
