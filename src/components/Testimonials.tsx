import { GlassCard } from "./GlassCard";
import { CTAButton } from "./CTAButton";
import { Star } from "lucide-react";
import { openClaudde } from "@/lib/claudde";
import testimonialAlison from "@/assets/testimonial-alison.jpg";
import testimonialCecil from "@/assets/testimonial-cecil.jpg";
import testimonialIzabelle from "@/assets/testimonial-izabelle.jpg";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "I finally had one clear plan instead of a dozen hacks. The nightly scene became the calmest part of my day.",
      author: "Alison J",
      rating: 5,
      avatar: testimonialAlison
    },
    {
      quote: "Robert caught a tiny phrase I kept repeating. Changing that inner line changed my week.",
      author: "Cecil J",
      rating: 5,
      avatar: testimonialCecil
    },
    {
      quote: "I stopped waiting for signs. Living in the end made me act from the end.",
      author: "Izabelle D",
      rating: 5,
      avatar: testimonialIzabelle
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container max-w-6xl mx-auto w-full">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Real Results</span>
          </h2>
          <p className="text-xl text-foreground/80">Short, Human Wins</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <GlassCard 
              key={index}
              className="p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="flex-1">
                  <div className="flex gap-1 mb-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <cite className="text-sm text-foreground/90 not-italic font-medium">{testimonial.author}</cite>
                </div>
              </div>
              <blockquote className="text-foreground/80 italic">
                "{testimonial.quote}"
              </blockquote>
            </GlassCard>
          ))}
        </div>

        <div className="text-center px-4">
          <CTAButton variant="secondary" onClick={openClaudde} className="inline-flex max-w-full">
            Book Now — Limited Spots This Week
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
