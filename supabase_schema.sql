-- Script pour initialiser la base de données Supabase "WealthTracker"
-- A exécuter dans l'onglet "SQL Editor" de votre projet Supabase

-- 1. Activer l'extension pgcrypto pour générer des UUIDs
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. Création de la table Accounts (Comptes et Actifs)
CREATE TABLE public.accounts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    type TEXT NOT NULL, -- ex: 'bank', 'real_estate', 'crypto'
    balance NUMERIC NOT NULL DEFAULT 0,
    is_manual BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Création de la table Transactions (pour le suivi du budget)
CREATE TABLE public.transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    account_id UUID NOT NULL REFERENCES public.accounts(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    amount NUMERIC NOT NULL,
    title TEXT NOT NULL,
    category TEXT,
    date DATE NOT NULL,
    type TEXT NOT NULL, -- 'income' ou 'expense'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Sécurité (Row Level Security - RLS)
-- C'est CRUCIAL car l'application est multi-utilisateurs. 
-- Cela empêche un utilisateur A de voir les données de l'utilisateur B.

ALTER TABLE public.accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

-- Politiques pour la table Accounts
CREATE POLICY "Les utilisateurs peuvent voir uniquement leurs propres comptes" 
ON public.accounts FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Les utilisateurs peuvent insérer leurs propres comptes" 
ON public.accounts FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Les utilisateurs peuvent modifier leurs propres comptes" 
ON public.accounts FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Les utilisateurs peuvent supprimer leurs propres comptes" 
ON public.accounts FOR DELETE USING (auth.uid() = user_id);

-- Politiques pour la table Transactions
CREATE POLICY "Les utilisateurs peuvent voir uniquement leurs propres transactions" 
ON public.transactions FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Les utilisateurs peuvent insérer leurs propres transactions" 
ON public.transactions FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Les utilisateurs peuvent modifier leurs propres transactions" 
ON public.transactions FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Les utilisateurs peuvent supprimer leurs propres transactions" 
ON public.transactions FOR DELETE USING (auth.uid() = user_id);
