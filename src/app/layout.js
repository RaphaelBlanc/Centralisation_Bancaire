import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'WealthTracker',
  description: 'Your personal finance dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Navigation />
      </body>
    </html>
  )
}
