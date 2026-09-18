import { GlassCard } from "./GlassCard";
import { CTAButton } from "./CTAButton";
import { Heart, DollarSign, Smile } from "lucide-react";
import { openClaudde } from "@/lib/claudde";
import useCaseLove from "@/assets/use-case-love.jpg";
import useCaseCareer from "@/assets/use-case-career.jpg";
import useCasePeace from "@/assets/use-case-peace.jpg";

export const ChooseYourEnd = () => {
  const focuses = [
    {
      icon: Heart,
      title: "Love & Relationships",
      description: "Rekindle a connection or deepen the bond. We'll script a scene that feels like normal life after it's done—then rehearse it nightly.",
      color: "text-pink-400",
      image: useCaseLove
    },
    {
      icon: DollarSign,
      title: "Money & Career",
      description: "Stabilise identity around being chosen, paid, or promoted. We'll align inner speech with an identity that quietly expects the outcome.",
      color: "text-primary",
      image: useCaseCareer
    },
    {
      icon: Smile,
      title: "Peace & Confidence",
      description: "Less spiralling, more centred presence. We'll build a scene that proves to your nervous system: \"This is who I am now.\"",
      color: "text-secondary",
      image: useCasePeace
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Choose Your End</span>
          </h2>
          <p className="text-xl text-foreground/80">Pick One Focus to Start</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {focuses.map((focus, index) => {
            const Icon = focus.icon;
            return (
              <GlassCard 
                key={index}
                hover
                className="overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={focus.image} 
                    alt={focus.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-background/20" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center border-2 border-primary/20">
                    <Icon className={`w-8 h-8 ${focus.color}`} />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-3">{focus.title}</h3>
                  <p className="text-foreground/80">{focus.description}</p>
                </div>
              </GlassCard>
            );
          })}
        </div>

        <div className="text-center">
          <CTAButton variant="primary" onClick={openClaudde} className="inline-flex">
            Start with a Free 1:1
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
