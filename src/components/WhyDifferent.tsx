import { GlassCard } from "./GlassCard";
import { CTAButton } from "./CTAButton";
import { Zap, Clock, Ban, Lightbulb } from "lucide-react";
import { openClaudde } from "@/lib/claudde";

export const WhyDifferent = () => {
  const differences = [
    {
      icon: Zap,
      title: "Not theory-heavy",
      description: "We keep it simple and relevant to where you are right now."
    },
    {
      icon: Clock,
      title: "Not overwhelming",
      description: "Small actions you can realistically stick to."
    },
    {
      icon: Ban,
      title: "Not awkward or pushy",
      description: "You'll be offered guidance only if you ask for it."
    },
    {
      icon: Lightbulb,
      title: "Low time, high clarity",
      description: "Most clients report the feeling of \"Oh, I finally know what to do now.\""
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Why This Call Is <span className="text-gradient">Different</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {differences.map((item, index) => {
            const Icon = item.icon;
            return (
              <GlassCard 
                key={index}
                hover
                className="p-6 flex gap-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-foreground/80">{item.description}</p>
                </div>
              </GlassCard>
            );
          })}
        </div>

        <div className="text-center">
          <CTAButton variant="primary" onClick={openClaudde} className="inline-flex">
            Get Your Free Next-Step Session
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
