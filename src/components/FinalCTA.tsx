import { GlassCard } from "./GlassCard";
import { CTAButton } from "./CTAButton";
import { Sparkles } from "lucide-react";
import { openClaudde } from "@/lib/claudde";

export const FinalCTA = () => {

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container max-w-4xl mx-auto w-full">
        <GlassCard className="p-6 md:p-12 text-center animate-fade-in relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Ready to Begin?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              The End You Want Already Exists—<br />
              <span className="text-gradient">Let's Practice Living There</span>
            </h2>

            <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
              Book your <strong className="text-primary">free, no-pressure</strong> 30-minute session with Robert Meade 
              and leave with clarity and a plan for your next best step.
            </p>

            <CTAButton variant="primary" onClick={openClaudde} className="inline-flex max-w-full">
              Book Your Free 1:1 with Robert
            </CTAButton>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
