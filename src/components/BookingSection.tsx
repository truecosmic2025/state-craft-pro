import { useEffect } from "react";
import { GlassCard } from "./GlassCard";
import { MessageSquare } from "lucide-react";

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
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Book Your 1:1 Consultation with Robert Meade</span>
          </h2>
          <p className="text-xl text-foreground/80">You're in the right place.</p>
        </div>

        <GlassCard className="p-8 md:p-12 animate-fade-in">
          <div className="text-center max-w-2xl mx-auto">
            <MessageSquare className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Start the Chat & Book Your Consultation
            </h3>
            <p className="text-lg text-foreground/70 mb-8">
              Click the button below to start a short chat. We'll ask you a few quick questions and help you book your consultation with Robert.
            </p>
            <p className="text-md text-foreground/60 mb-8">
              It only takes a couple of minutes.
            </p>
            <div className="glass-card p-6 text-left">
              <p className="text-sm font-semibold text-foreground/90 mb-3">What to expect:</p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Quick qualifying questions about your goals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Personalized recommendations based on your needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Direct calendar access to book your free session</span>
                </li>
              </ul>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
