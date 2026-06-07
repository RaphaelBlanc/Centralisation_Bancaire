'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { Landmark } from 'lucide-react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate auth logic if keys aren't set yet
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      console.log('Simulation connexion réussie:', email);
      router.push('/');
      return;
    }

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        alert('Inscription réussie ! Vérifiez vos emails.');
      }
      router.push('/');
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: '100px' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '16px', color: 'var(--primary)', marginBottom: '1rem' }}>
          <Landmark size={48} />
        </div>
        <h1 className="logo" style={{ fontSize: '2.5rem' }}>WealthTracker</h1>
        <p className="text-muted">Votre patrimoine centralisé.</p>
      </div>

      <form onSubmit={handleAuth} className="card" style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h2 style={{ textAlign: 'center', margin: 0 }}>
          {isLogin ? 'Connexion' : 'Créer un compte'}
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="email" style={{ fontWeight: 600 }}>Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="vous@email.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <label htmlFor="password" style={{ fontWeight: 600 }}>Mot de passe</label>
          <input 
            type="password" 
            id="password" 
            placeholder="••••••••" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Chargement...' : (isLogin ? 'Se connecter' : "S'inscrire")}
        </button>

        <p style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          {isLogin ? "Pas encore de compte ?" : "Déjà un compte ?"}
          <button 
            type="button" 
            onClick={() => setIsLogin(!isLogin)}
            style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: 600, cursor: 'pointer', marginLeft: '0.5rem' }}
          >
            {isLogin ? "S'inscrire" : 'Se connecter'}
          </button>
        </p>
      </form>
    </div>
  );
}
