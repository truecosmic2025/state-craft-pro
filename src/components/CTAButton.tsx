import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass";
  children: React.ReactNode;
}

export const CTAButton = ({ 
  variant = "primary", 
  children, 
  className,
  ...props 
}: CTAButtonProps) => {
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 cosmic-glow-hover animate-pulse-glow px-4 sm:px-6 md:px-8 py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold rounded-xl font-bold",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/30 hover:shadow-xl hover:shadow-secondary/40 hover:scale-105 transition-all duration-300 px-4 sm:px-6 md:px-8 py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold rounded-xl",
    glass: "glass-card text-foreground hover:bg-white/[0.08] transition-all duration-300 px-4 sm:px-6 md:px-8 py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold rounded-xl border border-primary/20 hover:border-primary/40"
  };

  return (
    <Button
      className={cn(variants[variant], className)}
      {...props}
    >
      {children}
    </Button>
  );
};
