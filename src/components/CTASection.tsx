import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Smartphone } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/message/PWIMWJHRYGQRL1";

const CTASection = () => {
  return (
    <section id="subscribe" className="py-16 md:py-24 bg-background">
      <div className="kyra-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-foreground">
              Ready to <span className="text-gradient">subscribe</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Join Kyra today and experience safe, worry-free commutes with our weekly subscription. No app download needed.
            </p>

            {/* WhatsApp Button */}
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

            {/* Features List */}
            <div className="mt-8 space-y-3">
              {[
                "Unlimited rides within your zone",
                "Verified women drivers only",
                "No surge pricing ever",
                "Cancel anytime",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - QR Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="p-8 rounded-3xl bg-card border border-border/30 text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Smartphone className="w-5 h-5 text-accent" />
                <span className="text-foreground font-medium">Scan to subscribe</span>
              </div>
              
              {/* QR Code */}
              <div className="inline-block p-5 bg-kyra-cream rounded-2xl mb-6">
                <QRCodeSVG
                  value={WHATSAPP_LINK}
                  size={180}
                  bgColor="#E8D8C4"
                  fgColor="#561C24"
                  level="M"
                  includeMargin={false}
                />
              </div>

              <p className="text-muted-foreground text-sm max-w-[200px] mx-auto">
                Point your phone's camera at the QR code to open WhatsApp
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
