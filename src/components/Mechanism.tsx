import { GlassCard } from "./GlassCard";
import { CTAButton } from "./CTAButton";
import { Target, Image, Moon, MessageSquare, RotateCcw } from "lucide-react";
import { openClaudde } from "@/lib/claudde";

export const Mechanism = () => {
  const steps = [{
    icon: Target,
    title: "Define the End",
    description: "One specific, already-done outcome."
  }, {
    icon: Image,
    title: "Build the Scene",
    description: "Brief, sensory-rich moment after it's achieved."
  }, {
    icon: Moon,
    title: "Feel It Real — Nightly",
    description: "5–10m SATS wind-down."
  }, {
    icon: MessageSquare,
    title: "Daytime Inner Speech",
    description: "Swap old story for aligned phrases."
  }, {
    icon: RotateCcw,
    title: "Revision",
    description: "Re-assign meaning to wobble moments."
  }];
  return <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Why Neville's <span className="text-gradient">"Live in the End"</span> Works
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">The Simple Frame Robert Teaches His Students</p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 mb-12">
          {steps.map((step, index) => {
          const Icon = step.icon;
          return <GlassCard key={index} hover className="p-6 text-center animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{index + 1}</div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-foreground/70">{step.description}</p>
              </GlassCard>;
        })}
        </div>

        <GlassCard className="p-8 text-center animate-fade-in">
          <p className="text-xl mb-6 text-foreground/90">
            <strong>Result:</strong> A daily rhythm that <span className="text-primary font-semibold">stabilises state</span>, 
            so behaviour and opportunities naturally align.
          </p>
          <CTAButton variant="primary" onClick={openClaudde}>
            Book Your Consultation
          </CTAButton>
        </GlassCard>
      </div>
    </section>;
};