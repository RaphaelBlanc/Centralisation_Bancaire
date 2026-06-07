'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', worth: 132000 },
  { month: 'Fév', worth: 135500 },
  { month: 'Mar', worth: 134200 },
  { month: 'Avr', worth: 138900 },
  { month: 'Mai', worth: 142100 },
  { month: 'Juin', worth: 145230 },
];

export default function DashboardChart() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorWorth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis 
            dataKey="month" 
            stroke="var(--text-muted)" 
            tick={{ fill: 'var(--text-muted)' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            stroke="var(--text-muted)" 
            tick={{ fill: 'var(--text-muted)' }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `€${value / 1000}k`}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', borderRadius: '8px' }}
            itemStyle={{ color: 'var(--text-main)' }}
            formatter={(value) => [`${value} €`, 'Patrimoine']}
          />
          <Area type="monotone" dataKey="worth" stroke="var(--primary)" fillOpacity={1} fill="url(#colorWorth)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
