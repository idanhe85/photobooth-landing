import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Photobooth Huren Overijssel | The PhotoDUDE',
  description: 'Photobooth huren in Overijssel? The PhotoDUDE verzorgt professionele photobooths voor bruiloften, bedrijfsfeesten, verjaardagen & bar mitswa. Actief in Zwolle, Enschede, Deventer en heel Overijssel.',
  keywords: [
    'photobooth huren Overijssel',
    'photobooth huren',
    'photobooth bruiloft Overijssel',
    'photobooth bedrijfsfeest Overijssel',
    'photobooth huren Zwolle',
    'photobooth huren Enschede',
    'photobooth huren Deventer',
    'photo booth huren Nederland',
    'photobooth verjaardag',
    'photobooth bar mitswa',
  ],
  authors: [{ name: 'The PhotoDUDE' }],
  creator: 'The PhotoDUDE',
  metadataBase: new URL('https://thephotodude.nl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://thephotodude.nl',
    siteName: 'The PhotoDUDE',
    title: 'Photobooth Huren Overijssel | The PhotoDUDE',
    description: 'Photobooth huren in Overijssel? Professionele photobooths voor bruiloften, bedrijfsfeesten & feesten. Actief in Zwolle, Enschede, Deventer en heel Overijssel.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photobooth Huren Overijssel | The PhotoDUDE',
    description: 'Professionele photobooth voor jouw event in Overijssel.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-navy">{children}</body>
    </html>
  )
}
