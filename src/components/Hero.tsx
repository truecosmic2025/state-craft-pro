import { GlassCard } from "./GlassCard";
import { CTAButton } from "./CTAButton";
import { Sparkles, CheckCircle } from "lucide-react";
import { openClaudde } from "@/lib/claudde";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      <div className="container max-w-6xl mx-auto relative z-10 text-center">
        <div className="mb-6 flex justify-center animate-fade-in">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Your Transformation Starts Here</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight animate-fade-in-up">
          Make Your End a{" "}
          <span className="text-primary">Daily Reality</span>
          <br />— Starting Tonight
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{
        animationDelay: '0.1s'
      }}>
          Book a <strong className="text-primary">free 30‑minute 1:1 consultation</strong> with Truecosmic's imagination coach,{" "}
          <strong className="text-foreground">Robert Meade</strong>. In one focused session, you'll identify what's been blocking your progress, get clear on what you actually want, and leave with your next best step—And if you want momentum with guidance, we'll discuss the best way to support you moving forward.
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-10 text-sm animate-fade-in-up" style={{
        animationDelay: '0.2s'
      }}>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span>1,000+ Students Transformed</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>Designed If You're Stuck</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>Practical Next Steps</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-up" style={{
        animationDelay: '0.3s'
      }}>
          <CTAButton variant="primary" onClick={openClaudde} className="w-full sm:w-auto sm:min-w-[280px] max-w-full">
            Book Your Free 1:1 Session
          </CTAButton>
          <CTAButton variant="glass" onClick={openClaudde} className="w-full sm:w-auto sm:min-w-[280px] max-w-full">
            Watch Preview
          </CTAButton>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground/70 animate-fade-in-up" style={{
        animationDelay: '0.4s'
      }}>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Instant Access</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>30-Day Money Back Guarantee</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Lifetime Support</span>
          </div>
        </div>
      </div>

      {/* Cosmic floating orbs */}
      <div className="absolute top-1/4 left-0 md:left-10 w-48 md:w-64 h-48 md:h-64 bg-primary/20 rounded-full blur-3xl animate-float opacity-50 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 md:right-10 w-64 md:w-80 h-64 md:h-80 bg-secondary/20 rounded-full blur-3xl animate-float opacity-50 translate-x-1/2" style={{
      animationDelay: '2s'
    }} />
    </section>;
};