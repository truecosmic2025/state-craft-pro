import { useEffect } from "react";
import { GlassCard } from "./GlassCard";
import { CTAButton } from "./CTAButton";
import { openChatbot } from "@/lib/chatbot";

export const BookingSection = () => {
  useEffect(() => {
    // Load BotPenguin chatbot script only if not already present
    let added = false;
    if (!document.getElementById("messenger-widget-b")) {
      const script = document.createElement("script");
      script.id = "messenger-widget-b";
      script.src = "https://cdn.botpenguin.com/website-bot.js";
      script.defer = true;
      script.textContent = "6880c7ac63793209fdd9fbf7,6862add8833c9f93263e210e";
      document.body.appendChild(script);
      added = true;
    }

    return () => {
      // Cleanup only if we added it here
      if (added) {
        const existingScript = document.getElementById("messenger-widget-b");
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      }
    };
  }, []);

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
          <CTAButton variant="primary" onClick={openChatbot} className="inline-flex max-w-full">
            Start the Chat & Book Your Consultation
          </CTAButton>
        </GlassCard>
      </div>
    </section>
  );
};
