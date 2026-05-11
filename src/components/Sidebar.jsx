import React from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Ticket, 
  TrendingUp, 
  Sparkles, 
  Settings 
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
    { icon: <Calendar size={20} />, label: 'Events' },
    { icon: <Users size={20} />, label: 'Visitors' },
    { icon: <Ticket size={20} />, label: 'Tickets' },
    { icon: <TrendingUp size={20} />, label: 'Revenue' },
    { icon: <Sparkles size={20} />, label: 'AI Insights' },
    { icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">J</div>
        <span>Jeddah Season</span>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <a 
            key={index} 
            href="#" 
            className={`nav-item ${item.active ? 'active' : ''}`}
          >
            {item.icon}
            <span className="nav-label">{item.label}</span>
          </a>
        ))}
      </nav>
      
      <style jsx="true">{`
        .sidebar {
          width: 260px;
          height: 100vh;
          background: var(--white);
          border-right: 1px solid #e2e8f0;
          position: fixed;
          left: 0;
          top: 0;
          display: flex;
          flex-direction: column;
          z-index: 100;
          transition: var(--transition);
        }

        .sidebar-logo {
          padding: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--primary);
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          font-size: 1.5rem;
        }

        .sidebar-nav {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1rem;
          text-decoration: none;
          color: var(--text-muted);
          border-radius: var(--radius);
          transition: var(--transition);
        }

        .nav-item:hover {
          background: #f1f5f9;
          color: var(--primary);
        }

        .nav-item.active {
          background: #eff6ff;
          color: var(--primary);
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .sidebar { width: 80px; }
          .nav-label, .sidebar-logo span { display: none; }
          .sidebar-logo { padding: 1.5rem; justify-content: center; }
          .nav-item { justify-content: center; padding: 1rem; }
        }

        @media (max-width: 768px) {
          .sidebar { transform: translateX(-100%); }
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
