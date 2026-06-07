'use client';

import { Wallet, TrendingUp, Landmark, Plus } from 'lucide-react';
import DashboardChart from '@/components/DashboardChart';
import './globals.css';

export default function Home() {
  // Mock data to preview the UI
  const netWorth = 145230.50;
  const monthlyVariation = 2300.00;
  const percentVariation = 1.6;

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">WealthTracker</div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="/login" className="btn btn-secondary">
            Connexion
          </a>
        </div>
      </nav>

      <main>
        <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h2 className="text-muted" style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Patrimoine Net</h2>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
              <h1 style={{ margin: 0, fontSize: '3rem' }}>
                {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(netWorth)}
              </h1>
              <span className="amount-positive" style={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                <TrendingUp size={16} style={{ marginRight: '4px' }} />
                +{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(monthlyVariation)} (+{percentVariation}%)
              </span>
            </div>
          </div>
          <button className="btn btn-primary">
            <Plus size={18} />
            Ajouter un actif
          </button>
        </header>

        <div className="grid-cards">
          <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ padding: '0.75rem', backgroundColor: '#1e3a8a', borderRadius: '12px', color: '#60a5fa' }}>
                <Landmark size={24} />
              </div>
              <h2 style={{ margin: 0 }}>Comptes Bancaires</h2>
            </div>
            <p style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0 }}>
              {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(12450.00)}
            </p>
          </div>

          <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ padding: '0.75rem', backgroundColor: '#064e3b', borderRadius: '12px', color: '#34d399' }}>
                <Wallet size={24} />
              </div>
              <h2 style={{ margin: 0 }}>Investissements</h2>
            </div>
            <p style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0 }}>
              {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(132780.50)}
            </p>
          </div>
        </div>

        {/* Section Graphique Placeholder */}
        <div className="card" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Évolution du Patrimoine</h2>
          <DashboardChart />
        </div>
      </main>
    </div>
  );
}
