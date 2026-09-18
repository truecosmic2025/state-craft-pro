import { GlassCard } from "./GlassCard";
import { CTAButton } from "./CTAButton";
import { openClaudde } from "@/lib/claudde";

export const BookingSection = () => {

  return (
    <section id="book" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <GlassCard className="p-8 md:p-12 animate-fade-in text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Book Your 1:1 Consultation with Robert Meade</span>
          </h2>
          <p className="text-xl text-foreground/80 mb-6">You're in the right place.</p>
          <p className="text-lg text-foreground/70 mb-4 max-w-2xl mx-auto">
            Click the button below to start a short chat. We'll ask you a few quick questions and help you book your consultation with Robert.
          </p>
          <p className="text-md text-foreground/60 mb-8">It only takes a couple of minutes.</p>
          <CTAButton variant="primary" onClick={openClaudde} className="inline-flex max-w-full">
            Start the Chat & Book Your Consultation
          </CTAButton>
        </GlassCard>
      </div>
    </section>
  );
};
