import { motion } from "framer-motion";
import { MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import kyraLogo from "@/assets/kyra-logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_LINK = "https://wa.me/message/PWIMWJHRYGQRL1";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 md:pt-0 bg-background"
    >
      <div className="kyra-container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="py-12 lg:py-0"
          >
            {/* Location Badge */}
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-foreground font-medium">Bengaluru, IN</span>
              <span className="text-muted-foreground text-sm ml-1">• Women-Only Service</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] mb-6 text-foreground">
              Go anywhere with{" "}
              <span className="text-gradient">Kyra</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8">
              Safe, predictable commutes. Unlimited rides. One weekly price. 
              Bengaluru's first women-only mobility subscription.
            </p>

            {/* CTA Area */}
            <div className="space-y-4">
              {/* Primary CTA Button */}
              <Button
                variant="hero"
                size="xl"
                className="w-full sm:w-auto group"
                asChild
              >
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  Subscribe via WhatsApp
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </a>
              </Button>

              {/* Secondary Link */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="#about"
                  className="text-foreground/80 hover:text-foreground underline underline-offset-4 transition-colors"
                >
                  Learn more about Kyra
                </a>
              </div>
            </div>

            {/* Feature Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mt-10 pt-10 border-t border-border/30"
            >
              {["Women-Only Drivers", "Weekly Subscription", "Unlimited Rides"].map((feature, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-card/50 border border-border/30 text-sm font-medium text-foreground/80"
                >
                  {feature}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBg})` }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-kyra-maroon/60 via-transparent to-kyra-maroon-light/40" />
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-card/90 backdrop-blur-md border border-border/50"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground font-semibold">Ready to travel?</p>
                    <p className="text-muted-foreground text-sm">Start your safe commute today</p>
                  </div>
                  <Button variant="hero" size="sm" asChild>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      Subscribe
                    </a>
                  </Button>
                </div>
              </motion.div>

              {/* Logo Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute top-6 right-6 p-3 rounded-xl bg-card/80 backdrop-blur-sm border border-border/30"
              >
                <img src={kyraLogo} alt="Kyra" className="h-8" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
