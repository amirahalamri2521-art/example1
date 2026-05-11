import React from 'react';
import { Calendar, Users, Ticket, Wallet, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const StatCard = ({ title, value, growth, icon, color }) => (
  <div className="stat-card card">
    <div className="stat-header">
      <div className="stat-icon" style={{ backgroundColor: `${color}20`, color: color }}>
        {icon}
      </div>
      <div className={`stat-growth ${growth >= 0 ? 'positive' : 'negative'}`}>
        {growth >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        <span>{Math.abs(growth)}%</span>
      </div>
    </div>
    <div className="stat-body">
      <h3 className="stat-value">{value}</h3>
      <p className="stat-title">{title}</p>
    </div>
    <div className="stat-progress-bg">
      <div className="stat-progress-bar" style={{ backgroundColor: color, width: '70%' }}></div>
    </div>
  </div>
);

const StatsCards = () => {
  const stats = [
    { title: 'Total Events', value: '24', growth: 12, icon: <Calendar size={20} />, color: '#1f6593' },
    { title: 'Total Visitors', value: '1.2M', growth: 8, icon: <Users size={20} />, color: '#5eb090' },
    { title: 'Tickets Sold', value: '450K', growth: 15, icon: <Ticket size={20} />, color: '#9ece47' },
    { title: 'Total Revenue', value: '$8.5M', growth: -2, icon: <Wallet size={20} />, color: '#eab2bb' },
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}

      <style jsx="true">{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          position: relative;
          overflow: hidden;
        }

        .stat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-growth {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: 20px;
        }

        .stat-growth.positive { color: #10b981; background: #ecfdf5; }
        .stat-growth.negative { color: #ef4444; background: #fef2f2; }

        .stat-value {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 0.25rem;
        }

        .stat-title {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .stat-progress-bg {
          height: 4px;
          background: #f1f5f9;
          border-radius: 2px;
          margin-top: 1.5rem;
          overflow: hidden;
        }

        .stat-progress-bar {
          height: 100%;
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
};

export default StatsCards;
