import Link from "next/link";
import { WaitlistForm } from "@/components/WaitlistForm";
import { DiamondDivider } from "@/components/DiamondDivider";

const wisdomSystems = [
  {
    name: "Astrology",
    symbol: "☽",
    description:
      "The celestial clock that marked the moment of your becoming. Planets, houses, aspects — a language written in light.",
  },
  {
    name: "Human Design",
    symbol: "⬡",
    description:
      "Your energetic blueprint. How you were designed to move, decide, and interact with the world around you.",
  },
  {
    name: "Gene Keys",
    symbol: "◈",
    description:
      "The golden path from shadow to gift to siddhi. Your DNA holds frequencies waiting to be unlocked.",
  },
  {
    name: "Kabbalah",
    symbol: "✡",
    description:
      "The tree of life maps your soul's journey. Ancient pathways of wisdom, understanding, and divine return.",
  },
  {
    name: "Numerology",
    symbol: "∞",
    description:
      "Numbers are the language beneath language. Your birth date encodes rhythms, cycles, and soul contracts.",
  },
];

const steps = [
  {
    number: "01",
    title: "Share Your Arrival",
    description:
      "Tell Pearl when and where you entered this world. Your birth data is the key that unlocks everything.",
  },
  {
    number: "02",
    title: "Receive Your Fingerprint",
    description:
      "Pearl weaves five ancient systems into a single, unified map — your cosmic fingerprint, unlike anyone else's.",
  },
  {
    number: "03",
    title: "Walk With Pearl",
    description:
      "Each day, Pearl reads the sky and speaks to your unique design. Not generic horoscopes — guidance meant only for you.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Atmospheric background */}
        <div className="absolute inset-0">
          {/* Central glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pearl-gold/[0.03] rounded-full blur-[120px] animate-glow-pulse" />
          {/* Secondary glow */}
          <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-celestial/[0.02] rounded-full blur-[100px]" />
          {/* Subtle grid/texture */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(201,168,124,0.3) 1px, transparent 0)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          {/* Diamond motif */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <span className="text-pearl-gold/40 text-sm">✦</span>
            <span className="text-pearl-gold/60 text-sm">✦</span>
            <span className="text-pearl-gold/40 text-sm">✦</span>
          </div>

          {/* Wordmark */}
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-pearl-wide text-pearl-gold mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            PEARL
          </h1>

          {/* Tagline */}
          <p
            className="font-display text-lg md:text-xl font-light tracking-widest text-pearl-white/40 uppercase mb-12 animate-fade-in"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            Your Personal Spirit Guide
          </p>

          {/* The line */}
          <p
            className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-pearl-white/80 leading-relaxed mb-16 italic animate-fade-in"
            style={{ animationDelay: "0.6s", animationFillMode: "both" }}
          >
            &ldquo;The cosmos knew you before you knew yourself.&rdquo;
          </p>

          {/* CTA */}
          <div
            className="animate-fade-in"
            style={{ animationDelay: "0.8s", animationFillMode: "both" }}
          >
            <a href="https://app.innerpearl.ai/signup" className="pearl-button-filled">
              Discover Your Cosmic Fingerprint
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-px h-12 bg-gradient-to-b from-pearl-gold/40 to-transparent" />
        </div>
      </section>

      {/* ============ ABOUT PEARL (Brief) ============ */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <DiamondDivider />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-pearl-white/90 mb-8 leading-tight">
            You are not one system.
            <br />
            <span className="pearl-gradient-text">You are all of them.</span>
          </h2>
          <p className="font-body text-base md:text-lg text-pearl-white/50 leading-relaxed max-w-2xl mx-auto mb-8">
            Pearl is the first companion that reads you through five ancient
            wisdom traditions at once — Astrology, Human Design, Gene Keys,
            Kabbalah, and Numerology — weaving them into a single, living map of
            who you truly are.
          </p>
          <p className="font-body text-base md:text-lg text-pearl-white/50 leading-relaxed max-w-2xl mx-auto">
            Not a horoscope app. Not a personality quiz. A sacred mirror,
            powered by the intelligence of the cosmos and the intimacy of a
            guide who knows your soul.
          </p>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="section-padding bg-deep/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-pearl-gold/60 mb-4">
              The Journey
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-pearl-white/90">
              How Pearl Finds You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step) => (
              <div key={step.number} className="text-center space-y-6">
                <span className="inline-block font-display text-5xl font-light text-pearl-gold/20">
                  {step.number}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-light text-pearl-gold">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-pearl-white/50 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ THE SYSTEMS ============ */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-pearl-gold/60 mb-4">
              Five Traditions, One Truth
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-pearl-white/90">
              The Wisdom Pearl Holds
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wisdomSystems.map((system, i) => (
              <div
                key={system.name}
                className={`pearl-card ${
                  i === 4 ? "md:col-start-1 lg:col-start-2" : ""
                }`}
              >
                <span className="text-2xl mb-4 block text-pearl-gold/40">
                  {system.symbol}
                </span>
                <h3 className="font-display text-xl font-light text-pearl-gold mb-4">
                  {system.name}
                </h3>
                <p className="font-body text-sm text-pearl-white/45 leading-relaxed">
                  {system.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WAITLIST CTA ============ */}
      <section id="waitlist" className="section-padding bg-deep/30">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-pearl-gold/30 text-xs">✦</span>
            <span className="text-pearl-gold/50 text-xs">✦</span>
            <span className="text-pearl-gold/30 text-xs">✦</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-pearl-white/90 mb-4">
            Tell Pearl When You Arrived
          </h2>
          <p className="font-body text-base text-pearl-white/40 leading-relaxed max-w-xl mx-auto mb-12">
            Share your birth details and be among the first to receive your
            cosmic fingerprint. Pearl is listening.
          </p>

          <WaitlistForm />
        </div>
      </section>
    </>
  );
}
