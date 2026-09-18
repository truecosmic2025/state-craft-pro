import { GlassCard } from "./GlassCard";
import { CTAButton } from "./CTAButton";
import { X, Check } from "lucide-react";
import { openClaudde } from "@/lib/claudde";

export const ProblemPromise = () => {
  const problems = [
    "You've read about manifestation but struggle to be consistent.",
    "You're not sure if your inner conversations are helping or hurting.",
    "You've tried SATS, scripting, or revision…and ended up overthinking.",
    "You want results you can feel—in love, money, or peace of mind."
  ];

  const promises = [
    "A single, personalised plan based on Neville's Live in the End—tailored to your goal.",
    "A clear imaginal scene you can sink into nightly (no more guesswork).",
    "Daily prompts that keep you on track when doubt creeps in."
  ];

  const scrollToBooking = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Problem Side */}
          <GlassCard className="p-4 md:p-8 animate-fade-in">
            <h2 className="text-3xl font-display font-bold mb-6 text-secondary">Is this you?</h2>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                  <span className="text-foreground/90">{problem}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* Promise Side */}
          <GlassCard className="p-4 md:p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-display font-bold mb-6 text-primary">What changes here:</h2>
            <ul className="space-y-4 mb-8">
              {promises.map((promise, index) => (
                <li key={index} className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/90">{promise}</span>
                </li>
              ))}
            </ul>
            <CTAButton variant="primary" onClick={openClaudde} className="w-full">
              Book Your Free 1:1 Session
            </CTAButton>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
