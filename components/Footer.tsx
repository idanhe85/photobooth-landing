export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="flex items-center gap-2 text-white/60 text-sm">
          <span className="text-white font-black">The Photo</span>
          <span className="text-gold font-black">DUDE</span>
          <span className="text-white/20 mx-2">·</span>
          <span>© {new Date().getFullYear()} All rights reserved</span>
        </div>
        <div className="text-white/30 text-xs">
          Professional photo booth for events that deserve to be remembered
        </div>
      </div>
    </footer>
  )
}
