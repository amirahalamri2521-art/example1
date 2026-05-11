import React from 'react';
import { Search, Bell, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <div className="logo-icon-small">J</div>
        <span>Jeddah Season</span>
      </div>
      <div className="search-container">
        <Search className="search-icon" size={20} />
        <input type="text" placeholder="Search events, tickets, or visitors..." />
      </div>
      
      <div className="nav-actions">
        <button className="icon-btn">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>
        <div className="user-profile">
          <div className="user-info">
            <span className="user-name">Ahmed Ali</span>
            <span className="user-role">Event Manager</span>
          </div>
          <div className="avatar">
            <User size={20} />
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .navbar {
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          background: transparent;
          margin-bottom: 1rem;
        }

        .nav-brand {
          display: none;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
          color: var(--primary);
        }

        .logo-icon-small {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .nav-brand { display: flex; }
        }

        .search-container {
          background: var(--white);
          display: flex;
          align-items: center;
          padding: 0.5rem 1rem;
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          width: 400px;
          gap: 0.75rem;
        }

        .search-container input {
          border: none;
          outline: none;
          width: 100%;
          font-size: 0.95rem;
          color: var(--text-dark);
        }

        .search-icon {
          color: var(--text-muted);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .icon-btn {
          position: relative;
          background: var(--white);
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          box-shadow: var(--shadow);
          color: var(--text-muted);
        }

        .notification-dot {
          position: absolute;
          top: 10px;
          right: 12px;
          width: 8px;
          height: 8px;
          background: var(--accent-2);
          border-radius: 50%;
          border: 2px solid white;
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.5rem;
          background: var(--white);
          border-radius: 30px;
          box-shadow: var(--shadow);
          padding-left: 1.25rem;
        }

        .user-info {
          display: flex;
          flex-direction: column;
          text-align: right;
        }

        .user-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-dark);
        }

        .user-role {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .avatar {
          width: 35px;
          height: 35px;
          background: #f1f5f9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: var(--white);
            z-index: 90;
            padding: 0 1rem;
            box-shadow: var(--shadow);
          }
          .search-container { width: auto; flex: 1; }
          .user-info { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
