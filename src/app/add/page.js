'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddAsset() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    type: 'real_estate',
    value: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log('Asset added:', formData);
    alert('Actif ajouté avec succès (Simulation) !');
    router.push('/');
  };

  return (
    <div className="container">
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Ajouter un actif manuel</h1>
        <p className="text-muted">Renseignez la valeur de vos biens immobiliers, montres, cryptos hors-ligne, etc.</p>
      </header>

      <form onSubmit={handleSubmit} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="name" style={{ fontWeight: 600 }}>Nom de l'actif</label>
          <input 
            type="text" 
            id="name" 
            placeholder="Ex: Appartement Paris 11" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            style={{ 
              padding: '0.75rem', 
              borderRadius: '8px', 
              border: '1px solid var(--border)', 
              backgroundColor: 'var(--background)',
              color: 'var(--text-main)'
            }} 
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="type" style={{ fontWeight: 600 }}>Catégorie</label>
          <select 
            id="type"
            value={formData.type}
            onChange={(e) => setFormData({...formData, type: e.target.value})}
            style={{ 
              padding: '0.75rem', 
              borderRadius: '8px', 
              border: '1px solid var(--border)', 
              backgroundColor: 'var(--background)',
              color: 'var(--text-main)'
            }}
          >
            <option value="real_estate">Immobilier</option>
            <option value="crypto">Crypto (Cold Wallet)</option>
            <option value="startup">Startup & Private Equity</option>
            <option value="custom">Autre</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="value" style={{ fontWeight: 600 }}>Valeur estimée (€)</label>
          <input 
            type="number" 
            id="value" 
            placeholder="Ex: 350000" 
            value={formData.value}
            onChange={(e) => setFormData({...formData, value: e.target.value})}
            required
            min="0"
            style={{ 
              padding: '0.75rem', 
              borderRadius: '8px', 
              border: '1px solid var(--border)', 
              backgroundColor: 'var(--background)',
              color: 'var(--text-main)'
            }} 
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Ajouter au patrimoine
        </button>

      </form>
    </div>
  );
}
