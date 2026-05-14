import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The PhotoDUDE — Professional Photo Booth for Events',
  description: 'Premium photo booth experience for weddings, corporate events, bar mitzvahs & parties. We bring the magic that makes your event unforgettable.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-navy">{children}</body>
    </html>
  )
}
