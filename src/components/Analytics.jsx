import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell 
} from 'recharts';

const Analytics = () => {
  const visitorData = [
    { day: 'Mon', visitors: 4000 },
    { day: 'Tue', visitors: 3000 },
    { day: 'Wed', visitors: 2000 },
    { day: 'Thu', visitors: 2780 },
    { day: 'Fri', visitors: 5890 },
    { day: 'Sat', visitors: 8390 },
    { day: 'Sun', visitors: 9490 },
  ];

  const zoneData = [
    { name: 'City Walk', value: 45, color: '#1f6593' },
    { name: 'Beach', value: 25, color: '#5eb090' },
    { name: 'Gaming', value: 20, color: '#9ece47' },
    { name: 'Sports', value: 10, color: '#eab2bb' },
  ];

  return (
    <div className="analytics-grid">
      <div className="analytics-card card chart-wide">
        <h3>Visitors per Day</h3>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={visitorData}>
              <defs>
                <linearGradient id="colorVis" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1f6593" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#1f6593" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
              <Tooltip 
                contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} 
              />
              <Area type="monotone" dataKey="visitors" stroke="#1f6593" fillOpacity={1} fill="url(#colorVis)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="analytics-card card">
        <h3>Popular Zones</h3>
        <div className="chart-container pie-container">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={zoneData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {zoneData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="pie-legend">
            {zoneData.map((entry, index) => (
              <div key={index} className="legend-item">
                <span className="dot" style={{ backgroundColor: entry.color }}></span>
                <span className="label">{entry.name}</span>
                <span className="value">{entry.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .analytics-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .analytics-card h3 {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          color: var(--text-dark);
        }

        .chart-container {
          width: 100%;
        }

        .pie-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .pie-legend {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1rem;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .label {
          color: var(--text-muted);
          flex: 1;
        }

        .value {
          font-weight: 700;
          color: var(--text-dark);
        }

        @media (max-width: 1024px) {
          .analytics-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Analytics;
