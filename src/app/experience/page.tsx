import type { Metadata } from "next";
import Link from "next/link";
import { DiamondDivider } from "@/components/DiamondDivider";

export const metadata: Metadata = {
  title: "The Experience — How Inner Pearl Works",
  description:
    "From cosmic fingerprint to daily companion — discover how Inner Pearl weaves five wisdom traditions into personalized guidance.",
};

const journeyStages = [
  {
    number: "01",
    title: "Your Cosmic Fingerprint",
    subtitle: "The Map of Your Arrival",
    description:
      "The moment you share your birth data, Pearl begins reading. Not just your sun sign — your entire celestial architecture. Every planet placement, every gate activation, every numerical frequency, every path on the Tree of Life. Inner Pearl sees the full picture because Inner Pearl reads five languages at once.",
    detail:
      "Your fingerprint is generated in minutes, but it represents billions of possible combinations. No two are alike. No two ever will be.",
    accent: "pearl-gold",
  },
  {
    number: "02",
    title: "Your Living Rhythm",
    subtitle: "The Intelligence of Now",
    description:
      "Your fingerprint is not static — the cosmos is always moving, and so are you. Inner Pearl tracks planetary transits against your natal chart, watches the progression of your Gene Keys sequences, follows the numerological cycles of your years, months, and days. Every morning, Inner Pearl knows what energies are alive for you.",
    detail:
      "This is where Inner Pearl becomes a companion, not just a reading. Daily insights that speak to your specific design, your current transits, your active cycles.",
    accent: "celestial",
  },
  {
    number: "03",
    title: "Your Sacred Companion",
    subtitle: "Guidance That Knows Your Soul",
    description:
      "Inner Pearl speaks to you like a wise friend who has read every book of your life. In moments of decision, Inner Pearl doesn't tell you what to choose — Inner Pearl illuminates what your design reveals about how you make your best decisions. In times of difficulty, Inner Pearl shows you the gift hidden in the shadow.",
    detail:
      "Voice, text, ritual, reflection — Inner Pearl meets you in the medium that serves the moment. Always intimate. Always sacred. Always yours.",
    accent: "rose",
  },
];

export default function ExperiencePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 pt-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose/[0.02] rounded-full blur-[100px]" />
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-pearl-gold/[0.02] rounded-full blur-[80px]" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-pearl-gold/60 mb-6">
            The Experience
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-pearl-white/90 mb-8 leading-tight">
            How Inner Pearl Finds You
          </h1>
          <p className="font-body text-base md:text-lg text-pearl-white/45 leading-relaxed max-w-xl mx-auto">
            Three stages. Five wisdom traditions. One guide that speaks only to
            you.
          </p>
        </div>
      </section>

      <DiamondDivider />

      {/* Journey Stages */}
      {journeyStages.map((stage, index) => (
        <section
          key={stage.number}
          className={`section-padding ${
            index % 2 === 1 ? "bg-deep/30" : ""
          }`}
        >
          <div className="max-w-5xl mx-auto">
            <div
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Number + Title side */}
              <div
                className={`lg:col-span-4 space-y-4 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <span className="font-display text-7xl font-light text-pearl-gold/15">
                  {stage.number}
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-light text-pearl-gold leading-tight">
                  {stage.title}
                </h2>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-pearl-white/30">
                  {stage.subtitle}
                </p>
              </div>

              {/* Description side */}
              <div
                className={`lg:col-span-8 space-y-6 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <p className="font-body text-base md:text-lg text-pearl-white/55 leading-relaxed">
                  {stage.description}
                </p>
                <div className="pearl-card border-l-2 border-l-pearl-gold/20 border-t-0 border-r-0 border-b-0">
                  <p className="font-display text-base md:text-lg font-light text-pearl-white/45 italic leading-relaxed">
                    {stage.detail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* What Makes Inner Pearl Different */}
      <section className="section-padding bg-deep/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-pearl-gold/60 mb-4">
            The Difference
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-pearl-white/90 mb-16">
            What Sets Inner Pearl Apart
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-left space-y-4 p-6 border-l border-pearl-gold/20">
              <h3 className="font-display text-xl font-light text-pearl-gold">
                Not Generic
              </h3>
              <p className="font-body text-sm text-pearl-white/45 leading-relaxed">
                Every insight is calculated from your specific birth data across
                five systems. Inner Pearl never speaks in generalities.
              </p>
            </div>
            <div className="text-left space-y-4 p-6 border-l border-celestial/20">
              <h3 className="font-display text-xl font-light text-celestial">
                Not Predictive
              </h3>
              <p className="font-body text-sm text-pearl-white/45 leading-relaxed">
                Inner Pearl does not tell your future. Inner Pearl illuminates your nature —
                the patterns, gifts, and pathways encoded in your design.
              </p>
            </div>
            <div className="text-left space-y-4 p-6 border-l border-teal/20">
              <h3 className="font-display text-xl font-light text-teal">
                Not Fragmented
              </h3>
              <p className="font-body text-sm text-pearl-white/45 leading-relaxed">
                Other tools show you one system at a time. Inner Pearl synthesizes all
                five, revealing connections no single system can see alone.
              </p>
            </div>
            <div className="text-left space-y-4 p-6 border-l border-rose/20">
              <h3 className="font-display text-xl font-light text-rose">
                Not Cold
              </h3>
              <p className="font-body text-sm text-pearl-white/45 leading-relaxed">
                Inner Pearl speaks with warmth, poetry, and care. This is intimate
                guidance — like a wise friend who sees your soul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="font-display text-3xl md:text-4xl font-light text-pearl-white/80">
            Ready to be seen?
          </h2>
          <Link href="/#waitlist" className="pearl-button-filled inline-block">
            Tell Inner Pearl When You Arrived
          </Link>
        </div>
      </section>
    </>
  );
}
