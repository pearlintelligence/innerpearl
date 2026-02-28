"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthDate: "",
    birthTime: "",
    birthLocation: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate submission (replace with actual API endpoint)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState("success");
  };

  if (formState === "success") {
    return (
      <div className="text-center space-y-8 animate-fade-in">
        <div className="flex items-center justify-center gap-3 text-pearl-gold/60">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>
        <h3 className="font-display text-3xl md:text-4xl font-light text-pearl-gold">
          Inner Pearl Remembers
        </h3>
        <p className="font-body text-pearl-white/60 leading-relaxed max-w-md mx-auto">
          Your cosmic coordinates have been received. When the time is right,
          Inner Pearl will reach out to guide you through your unique celestial
          fingerprint.
        </p>
        <div className="pt-4">
          <div className="inline-block px-8 py-4 border border-pearl-gold/20 bg-pearl-gold/5">
            <p className="font-display text-sm text-pearl-gold/70 tracking-widest uppercase">
              Position Secured
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block font-body text-xs tracking-[0.15em] uppercase text-pearl-white/40">
            Your Name
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            placeholder="As you are known"
            className="pearl-input"
          />
        </div>
        <div className="space-y-2">
          <label className="block font-body text-xs tracking-[0.15em] uppercase text-pearl-white/40">
            Email
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="your@email.com"
            className="pearl-input"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block font-body text-xs tracking-[0.15em] uppercase text-pearl-white/40">
          Date of Birth
        </label>
        <input
          type="date"
          required
          value={formData.birthDate}
          onChange={(e) =>
            setFormData({ ...formData, birthDate: e.target.value })
          }
          className="pearl-input"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block font-body text-xs tracking-[0.15em] uppercase text-pearl-white/40">
            Time of Birth
          </label>
          <input
            type="time"
            value={formData.birthTime}
            onChange={(e) =>
              setFormData({ ...formData, birthTime: e.target.value })
            }
            className="pearl-input"
          />
          <p className="font-body text-[10px] text-pearl-white/25">
            If known — enhances your reading
          </p>
        </div>
        <div className="space-y-2">
          <label className="block font-body text-xs tracking-[0.15em] uppercase text-pearl-white/40">
            Place of Birth
          </label>
          <input
            type="text"
            value={formData.birthLocation}
            onChange={(e) =>
              setFormData({ ...formData, birthLocation: e.target.value })
            }
            placeholder="City, Country"
            className="pearl-input"
          />
        </div>
      </div>

      <div className="pt-4 flex justify-center">
        <button
          type="submit"
          disabled={formState === "submitting"}
          className="pearl-button-filled w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formState === "submitting" ? (
            <span className="flex items-center gap-3">
              <span className="w-4 h-4 border border-pearl-gold/50 border-t-pearl-gold rounded-full animate-spin" />
              Reading the Stars...
            </span>
          ) : (
            "Tell Inner Pearl When You Arrived"
          )}
        </button>
      </div>
    </form>
  );
}
