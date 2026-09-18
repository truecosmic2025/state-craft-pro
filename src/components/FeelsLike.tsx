import { GlassCard } from "./GlassCard";
import { CTAButton } from "./CTAButton";
import { CheckCircle } from "lucide-react";
import { openClaudde } from "@/lib/claudde";

export const FeelsLike = () => {
  const feelings = [
    {
      title: "Naturalness over theatrics",
      description: "the scene feels like a regular Tuesday after the win"
    },
    {
      title: "Fewer words, more texture",
      description: "the weight of a hand, a voice tone, a familiar room"
    },
    {
      title: "Short and repeatable",
      description: "the same 10–20 seconds looped calmly"
    },
    {
      title: "Proof in your day",
      description: "quieter self-talk, easier action, less checking"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            What <span className="text-gradient">"Live in the End"</span> Feels Like
          </h2>
        </div>

        <GlassCard className="p-8 mb-8 animate-fade-in">
          <div className="space-y-6">
            {feelings.map((feeling, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">{feeling.title}</h3>
                  <p className="text-foreground/70">{feeling.description}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <div className="text-center">
          <CTAButton variant="primary" onClick={openClaudde} className="inline-flex">
            Experience It Tonight — Book Free
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
