import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MidnightHealthVault - Operation Midnight',
  description: 'Safely and securely pass medical records without revealing too much information. Verify records and build trust between patients and doctors.',
  keywords: ['medical records', 'healthcare', 'security', 'privacy', 'patient', 'doctor'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="min-h-screen midnight-gradient">
          {children}
        </div>
      </body>
    </html>
  )
}