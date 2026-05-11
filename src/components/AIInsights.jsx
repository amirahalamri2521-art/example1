import React from 'react';
import { Sparkles, TrendingUp, Info, Zap } from 'lucide-react';

const AIInsights = () => {
  const insights = [
    {
      icon: <TrendingUp size={20} />,
      title: 'Most Popular Event',
      description: 'City Walk Concert is trending with 45% more ticket searches this week.',
      tag: 'Viral',
      color: '#1f6593'
    },
    {
      icon: <Zap size={20} />,
      title: 'Expected Visitor Traffic',
      description: 'Friday peak expected at 8:00 PM. Recommend increasing security staff by 20%.',
      tag: 'Alert',
      color: '#eab2bb'
    },
    {
      icon: <Sparkles size={20} />,
      title: 'Recommended Action',
      description: 'Bundle "Beach Festival" with "Gaming Zone" to boost morning attendance.',
      tag: 'Strategy',
      color: '#5eb090'
    }
  ];

  return (
    <div className="ai-insights card">
      <div className="insights-header">
        <div className="header-title">
          <Sparkles className="sparkle-icon" size={24} />
          <h3>AI Smart Insights</h3>
        </div>
        <button className="refresh-btn">Refresh Analysis</button>
      </div>
      
      <div className="insights-list">
        {insights.map((insight, index) => (
          <div key={index} className="insight-item">
            <div className="insight-icon" style={{ backgroundColor: `${insight.color}15`, color: insight.color }}>
              {insight.icon}
            </div>
            <div className="insight-content">
              <div className="insight-top">
                <h4>{insight.title}</h4>
                <span className="insight-tag" style={{ backgroundColor: `${insight.color}15`, color: insight.color }}>
                  {insight.tag}
                </span>
              </div>
              <p>{insight.description}</p>
            </div>
            <button className="insight-action-btn">
              <Info size={18} />
            </button>
          </div>
        ))}
      </div>

      <style jsx="true">{`
        .ai-insights {
          margin-bottom: 2rem;
        }

        .insights-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .header-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .sparkle-icon {
          color: var(--primary);
        }

        .refresh-btn {
          background: #f1f5f9;
          color: var(--text-muted);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .insights-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .insight-item {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.25rem;
          background: #f8fafc;
          border-radius: 16px;
          transition: var(--transition);
        }

        .insight-item:hover {
          background: #eff6ff;
          transform: translateX(5px);
        }

        .insight-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .insight-content {
          flex: 1;
        }

        .insight-top {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.25rem;
        }

        .insight-top h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-dark);
        }

        .insight-tag {
          font-size: 0.7rem;
          font-weight: 800;
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .insight-content p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .insight-action-btn {
          background: transparent;
          color: #cbd5e1;
          padding: 0.5rem;
        }

        .insight-action-btn:hover {
          color: var(--primary);
        }
      `}</style>
    </div>
  );
};

export default AIInsights;
