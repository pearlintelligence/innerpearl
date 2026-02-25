import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-dusk/40 bg-void">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-display text-xl font-light tracking-pearl text-pearl-gold">
                PEARL
              </span>
            </Link>
            <p className="font-body text-sm text-pearl-white/40 leading-relaxed max-w-xs">
              Your personal spirit guide, weaving ancient wisdom into daily
              meaning.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-pearl-white/30">
              Explore
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="/about"
                className="font-body text-sm text-pearl-white/50 hover:text-pearl-gold transition-colors duration-300"
              >
                About Pearl
              </Link>
              <Link
                href="/experience"
                className="font-body text-sm text-pearl-white/50 hover:text-pearl-gold transition-colors duration-300"
              >
                The Experience
              </Link>
              <Link
                href="/wisdom"
                className="font-body text-sm text-pearl-white/50 hover:text-pearl-gold transition-colors duration-300"
              >
                Wisdom Systems
              </Link>
              <Link
                href="/#waitlist"
                className="font-body text-sm text-pearl-gold/70 hover:text-pearl-gold transition-colors duration-300"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-pearl-white/30">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@innerpearl.ai"
                className="font-body text-sm text-pearl-white/50 hover:text-pearl-gold transition-colors duration-300"
              >
                hello@innerpearl.ai
              </a>
              <span className="font-body text-sm text-pearl-white/30">
                innerpearl.ai
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-dusk/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-pearl-white/20">
            &copy; {new Date().getFullYear()} Pearl Intelligence, Inc. All
            rights reserved.
          </p>
          <div className="flex items-center gap-2 text-pearl-gold/30">
            <span className="text-xs">✦</span>
            <span className="text-xs">✦</span>
            <span className="text-xs">✦</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
