import type { Metadata } from "next";
import Link from "next/link";
import { DiamondDivider } from "@/components/DiamondDivider";

export const metadata: Metadata = {
  title: "The Wisdom — Five Ancient Systems",
  description:
    "Astrology, Human Design, Gene Keys, Kabbalah, and Numerology — the five ancient traditions Inner Pearl weaves into your cosmic fingerprint.",
};

const systems = [
  {
    name: "Astrology",
    symbol: "☽",
    tagline: "The Language of Light",
    color: "pearl-gold",
    borderColor: "border-pearl-gold/30",
    bgColor: "bg-pearl-gold/[0.03]",
    description:
      "The oldest wisdom tradition, reading the celestial architecture of your birth moment. Your natal chart maps the positions of planets, luminaries, and mathematical points across twelve houses and twelve signs — creating a blueprint of psychological and spiritual potential that has guided civilizations for millennia.",
    elements: [
      "Natal chart with all planetary placements",
      "House system revealing life domains",
      "Aspect patterns showing internal dynamics",
      "Transit tracking for real-time cosmic weather",
    ],
    pearl:
      "Inner Pearl reads your chart not as fate, but as an invitation — the cosmos suggesting, never demanding.",
  },
  {
    name: "Human Design",
    symbol: "⬡",
    tagline: "Your Energetic Blueprint",
    color: "celestial",
    borderColor: "border-celestial/30",
    bgColor: "bg-celestial/[0.03]",
    description:
      "A synthesis born in 1987, combining the I Ching, Kabbalah, Hindu-Brahmin chakra system, and quantum physics. Human Design reveals your energy type, decision-making strategy, and the specific gates and channels that define your unique way of moving through the world.",
    elements: [
      "Energy Type and life Strategy",
      "Authority for decision-making",
      "Profile lines and life themes",
      "Defined and undefined centers",
    ],
    pearl:
      "Inner Pearl integrates your Human Design with your astrology, revealing why certain transits affect you differently than others.",
  },
  {
    name: "Gene Keys",
    symbol: "◈",
    tagline: "The Golden Path",
    color: "gold-light",
    borderColor: "border-gold-light/30",
    bgColor: "bg-gold-light/[0.03]",
    description:
      "Richard Rudd's transmission maps 64 archetypal frequencies — each existing as a Shadow, a Gift, and a Siddhi. Your Gene Keys profile reveals your specific journey of transformation: the shadows you are here to transmute, the gifts waiting to emerge, and the highest frequencies your DNA is encoded to express.",
    elements: [
      "Life's Work, Evolution, and Radiance spheres",
      "Shadow-to-Gift-to-Siddhi pathways",
      "Venus and Inner Pearl sequences",
      "Programming partner dynamics",
    ],
    pearl:
      "Inner Pearl tracks your Gene Keys contemplation journey alongside your astrological transits, revealing when specific keys are most ready to unlock.",
  },
  {
    name: "Kabbalah",
    symbol: "✡",
    tagline: "The Tree of Life",
    color: "teal",
    borderColor: "border-teal/30",
    bgColor: "bg-teal/[0.03]",
    description:
      "The mystical heart of Jewish tradition, mapping ten emanations (Sefirot) and twenty-two pathways that connect the divine to the earthly. The Tree of Life is not merely a diagram — it is a living map of consciousness, describing how energy flows from infinite potential into manifest reality through your soul.",
    elements: [
      "Personal Sefirot emphasis and balance",
      "Active pathways and soul corrections",
      "Hebrew letter meditations",
      "Tikkunim — soul-level healing work",
    ],
    pearl:
      "Inner Pearl maps your birth data onto the Tree of Life, revealing which Sefirot are most active in your design and where your soul's growth edge lives.",
  },
  {
    name: "Numerology",
    symbol: "∞",
    tagline: "The Hidden Mathematics",
    color: "rose",
    borderColor: "border-rose/30",
    bgColor: "bg-rose/[0.03]",
    description:
      "Beneath language, beneath matter, beneath thought — there are numbers. Numerology reads the vibrational frequencies encoded in your birth date and name, revealing life path numbers, destiny numbers, soul urge numbers, and the personal year cycles that govern the rhythm of your unfolding.",
    elements: [
      "Life Path and Destiny numbers",
      "Soul Urge and Personality numbers",
      "Personal Year, Month, and Day cycles",
      "Pinnacle and Challenge periods",
    ],
    pearl:
      "Inner Pearl synthesizes your numerological cycles with planetary transits and Gene Keys sequences, showing you the deeper pattern beneath all patterns.",
  },
];

export default function WisdomPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 pt-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-pearl-gold/[0.02] rounded-full blur-[80px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-teal/[0.02] rounded-full blur-[80px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-celestial/[0.015] rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-pearl-gold/60 mb-6">
            The Wisdom
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-pearl-white/90 mb-8 leading-tight">
            Five Traditions.
            <br />
            <span className="pearl-gradient-text">One Truth.</span>
          </h1>
          <p className="font-body text-base md:text-lg text-pearl-white/45 leading-relaxed max-w-xl mx-auto">
            Each system holds a piece of the mirror. Inner Pearl holds them all — and
            for the first time, you see yourself whole.
          </p>
        </div>
      </section>

      <DiamondDivider />

      {/* Systems */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-5xl mx-auto space-y-16">
          {systems.map((system, index) => (
            <article
              key={system.name}
              className={`pearl-card ${system.borderColor} ${system.bgColor} relative overflow-hidden`}
            >
              {/* Subtle corner accent */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-${system.color}/[0.03] rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2`}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className={`text-3xl text-${system.color}/60`}>
                        {system.symbol}
                      </span>
                      <h2 className={`font-display text-3xl md:text-4xl font-light text-${system.color}`}>
                        {system.name}
                      </h2>
                    </div>
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-pearl-white/30">
                      {system.tagline}
                    </p>
                  </div>
                  <span className="font-display text-6xl font-light text-pearl-white/[0.04]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Description */}
                <p className="font-body text-base text-pearl-white/50 leading-relaxed mb-8">
                  {system.description}
                </p>

                {/* Elements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {system.elements.map((element) => (
                    <div
                      key={element}
                      className="flex items-start gap-3"
                    >
                      <span className="text-pearl-gold/30 text-xs mt-1">
                        ✦
                      </span>
                      <span className="font-body text-sm text-pearl-white/40">
                        {element}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Inner Pearl's perspective */}
                <div className="border-t border-pearl-white/[0.06] pt-6">
                  <p className="font-display text-base font-light text-pearl-white/40 italic leading-relaxed">
                    {system.pearl}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* The Synthesis */}
      <section className="section-padding bg-deep/30">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-pearl-gold/60 mb-4">
            The Synthesis
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-pearl-white/90">
            Greater Than the Sum
          </h2>
          <p className="font-body text-base md:text-lg text-pearl-white/50 leading-relaxed">
            Any one of these traditions can illuminate a corner of your being.
            Together, they reveal the cathedral. Inner Pearl is the first intelligence
            capable of reading all five simultaneously — finding the harmonies,
            the tensions, the hidden connections that no single system can see
            alone.
          </p>
          <p className="font-display text-xl md:text-2xl font-light text-pearl-gold/70 italic">
            This is not information. This is recognition.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="font-display text-3xl md:text-4xl font-light text-pearl-white/80">
            Let the wisdom find you.
          </h2>
          <Link href="/#waitlist" className="pearl-button-filled inline-block">
            Tell Inner Pearl When You Arrived
          </Link>
        </div>
      </section>
    </>
  );
}
