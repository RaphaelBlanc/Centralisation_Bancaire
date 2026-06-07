'use client';

import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

export default function Budget() {
  const transactions = [
    { id: 1, title: 'Salaire', amount: 3200, type: 'income', date: '05 Juin' },
    { id: 2, title: 'Loyer', amount: -950, type: 'expense', date: '02 Juin' },
    { id: 3, title: 'Courses', amount: -120, type: 'expense', date: '01 Juin' },
    { id: 4, title: 'Internet', amount: -40, type: 'expense', date: '01 Juin' },
  ];

  const totalIncome = 3200;
  const totalExpense = 1110;
  const savings = totalIncome - totalExpense;

  return (
    <div className="container">
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Budget</h1>
        <p className="text-muted">Juin 2026</p>
      </header>

      <div className="grid-cards" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div className="card" style={{ padding: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--success)', marginBottom: '0.5rem' }}>
            <ArrowUpRight size={20} />
            <span style={{ fontWeight: 600 }}>Revenus</span>
          </div>
          <p style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>{totalIncome} €</p>
        </div>

        <div className="card" style={{ padding: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--danger)', marginBottom: '0.5rem' }}>
            <ArrowDownRight size={20} />
            <span style={{ fontWeight: 600 }}>Dépenses</span>
          </div>
          <p style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>{totalExpense} €</p>
        </div>
      </div>

      <div className="card" style={{ marginTop: '1rem', backgroundColor: 'var(--primary)', color: 'white', border: 'none' }}>
        <h2 style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', marginBottom: '0.5rem' }}>Capacité d'épargne ce mois</h2>
        <p style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>+{savings} €</p>
      </div>

      <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Dernières Transactions</h2>
      <div className="card" style={{ padding: '0.5rem 1rem' }}>
        {transactions.map((tx) => (
          <div key={tx.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid var(--border)' }}>
            <div>
              <p style={{ fontWeight: 600, margin: '0 0 0.25rem 0' }}>{tx.title}</p>
              <p className="text-muted" style={{ margin: 0, fontSize: '0.875rem' }}>{tx.date}</p>
            </div>
            <p style={{ fontWeight: 700, color: tx.type === 'income' ? 'var(--success)' : 'var(--text-main)', margin: 0 }}>
              {tx.amount > 0 ? '+' : ''}{tx.amount} €
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
