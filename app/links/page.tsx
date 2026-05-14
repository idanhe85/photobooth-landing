import Image from 'next/image'

const links = [
  {
    label: 'Bezoek onze website',
    sub: 'thephotodude.nl',
    href: '/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <path d="M4.5 9.5 Q12 8 19.5 9.5" strokeWidth="1"/>
        <path d="M4.5 14.5 Q12 16 19.5 14.5" strokeWidth="1"/>
        <path d="M12 3 Q9.5 12 12 21" strokeWidth="1"/>
        <path d="M12 3 Q14.5 12 12 21" strokeWidth="1"/>
      </svg>
    ),
    primary: true,
  },
  {
    label: 'Volg ons op Instagram',
    sub: '@thephotodude.nl',
    href: 'https://www.instagram.com/thephotodude.nl/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
      </svg>
    ),
    primary: false,
  },
  {
    label: 'WhatsApp Direct',
    sub: '+31 6 21360019',
    href: 'https://wa.me/31621360019',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
    primary: false,
    whatsapp: true,
  },
]

export default function LinksPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-start px-5 py-16"
      style={{
        background: '#000033',
        backgroundImage:
          'linear-gradient(rgba(204,153,51,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(204,153,51,0.04) 1px,transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    >
      {/* Logo */}
      <div className="flex flex-col items-center mb-12">
        <Image
          src="/LOGO.png"
          alt="The PhotoDUDE"
          width={260}
          height={34}
          priority
          className="object-contain mb-6"
        />

        <p className="text-sm" style={{ color: 'rgba(204,153,51,0.7)', letterSpacing: '0.1em' }}>
          Premium Photobooth · Heel Nederland
        </p>

        {/* Stats */}
        <div className="flex gap-8 mt-6">
          {[
            { num: '150+', label: 'Events' },
            { num: '20K+', label: 'Prints' },
            { num: '100%', label: 'Tevreden' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="text-base font-extrabold" style={{ color: '#CC9933' }}>{s.num}</div>
              <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="w-full max-w-sm flex flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: link.primary
                ? '#CC9933'
                : link.whatsapp
                  ? 'rgba(37,211,102,0.1)'
                  : 'rgba(255,255,255,0.05)',
              border: link.primary
                ? 'none'
                : link.whatsapp
                  ? '1px solid rgba(37,211,102,0.3)'
                  : '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: link.primary
                  ? 'rgba(0,0,51,0.15)'
                  : link.whatsapp
                    ? 'rgba(37,211,102,0.15)'
                    : 'rgba(204,153,51,0.1)',
                color: link.primary ? '#000033' : link.whatsapp ? '#25D366' : '#CC9933',
              }}
            >
              {link.icon}
            </div>

            <div className="flex-1 min-w-0">
              <div
                className="font-semibold text-sm leading-tight"
                style={{ color: link.primary ? '#000033' : '#ffffff' }}
              >
                {link.label}
              </div>
              <div
                className="text-xs mt-0.5"
                style={{
                  color: link.primary
                    ? 'rgba(0,0,51,0.55)'
                    : link.whatsapp
                      ? 'rgba(37,211,102,0.65)'
                      : 'rgba(255,255,255,0.4)',
                }}
              >
                {link.sub}
              </div>
            </div>

            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke={link.primary ? 'rgba(0,0,51,0.4)' : 'rgba(255,255,255,0.2)'}
              strokeWidth="2" strokeLinecap="round"
              className="flex-shrink-0"
            >
              <path d="M9 18L15 12L9 6"/>
            </svg>
          </a>
        ))}
      </div>

      {/* Footer */}
      <p className="mt-14 text-xs" style={{ color: 'rgba(255,255,255,0.18)', letterSpacing: '0.2em' }}>
        THEPHOTODUDE.NL
      </p>
    </main>
  )
}
