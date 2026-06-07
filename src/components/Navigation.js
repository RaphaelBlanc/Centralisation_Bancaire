'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, PieChart, PlusCircle, Settings } from 'lucide-react';
import './Navigation.css';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="mobile-nav">
      <Link href="/" className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
        <Home size={24} />
        <span>Accueil</span>
      </Link>
      
      <Link href="/budget" className={`nav-item ${pathname === '/budget' ? 'active' : ''}`}>
        <PieChart size={24} />
        <span>Budget</span>
      </Link>

      <div className="nav-item-center">
        <Link href="/add" className="add-btn">
          <PlusCircle size={32} />
        </Link>
      </div>

      <Link href="/accounts" className={`nav-item ${pathname === '/accounts' ? 'active' : ''}`}>
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>€</span>
        <span>Comptes</span>
      </Link>

      <Link href="/settings" className={`nav-item ${pathname === '/settings' ? 'active' : ''}`}>
        <Settings size={24} />
        <span>Profil</span>
      </Link>
    </nav>
  );
}
