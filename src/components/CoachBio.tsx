import { GlassCard } from "./GlassCard";
import { CTAButton } from "./CTAButton";
import { CheckCircle } from "lucide-react";
import robertMeadeImage from "@/assets/robert-meade.jpg";
import { openClaudde } from "@/lib/claudde";

export const CoachBio = () => {
  const coachingPoints = [
    { label: "Practical first", description: "clear scene, clear routine, clear check-ins" },
    { label: "Gentle correction", description: "we fine-tune inner speech and state without shame" },
    { label: "Results-minded", description: "you'll leave with a plan that fits real life" }
  ];

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container max-w-6xl mx-auto w-full">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Meet Your Guide
          </h2>
          <h3 className="text-3xl md:text-4xl font-display mb-2">
            Learn from <span className="text-primary">Robert Meade</span>
          </h3>
        </div>

        <GlassCard className="p-4 md:p-8 lg:p-12 animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Coach Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-primary/30 shadow-2xl mx-auto max-w-sm cosmic-glow">
                <img 
                  src={robertMeadeImage} 
                  alt="Robert Meade - Manifestation Expert and Imagination Coach" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bio Content */}
            <div>
              <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                I'm Robert, an imagination coach at Truecosmic Academy. My specialty is translating Neville Goddard's{" "}
                <strong className="text-primary">Live in the End</strong> into a simple, daily practice you can start{" "}
                <strong className="text-foreground">tonight</strong>.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-semibold mb-4 text-primary">How I coach:</h4>
                {coachingPoints.map((point, index) => (
                  <div key={index} className="flex gap-3 glass-card p-4 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">{point.label}:</span>{" "}
                      <span className="text-foreground/70">{point.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-card p-6 mb-8 border-l-4 border-primary rounded-lg">
                <p className="italic text-foreground/90 text-lg">
                  "Assume the feeling of the wish fulfilled and continue feeling it is fulfilled until that which you feel objectifies itself."
                </p>
                <p className="text-sm text-primary mt-3 font-semibold">— Neville Goddard</p>
              </div>

              <CTAButton variant="primary" onClick={openClaudde} className="w-full text-sm md:text-base">
                Book with Robert — Free 30 Minutes
              </CTAButton>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
