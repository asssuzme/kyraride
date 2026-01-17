import { motion } from "framer-motion";
import { ShieldCheck, Users, MapPin, Calendar, ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/message/PWIMWJHRYGQRL1";

const features = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description: "Verified women drivers with enhanced safety protocols.",
    link: "#subscribe",
  },
  {
    icon: Users,
    title: "Women-Only",
    description: "A stress-free environment built for women, by women.",
    link: "#subscribe",
  },
  {
    icon: MapPin,
    title: "Bengaluru Wide",
    description: "Coverage across all major areas of the city.",
    link: "#subscribe",
  },
  {
    icon: Calendar,
    title: "Weekly Plans",
    description: "One price for unlimited rides. No surge pricing.",
    link: "#subscribe",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-card/30">
      <div className="kyra-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            Suggestions
          </h2>
        </motion.div>

        {/* Features Grid - Uber Style Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.a
              key={index}
              href={feature.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group block p-6 rounded-2xl bg-card border border-border/30 hover:border-accent/40 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Additional Info Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Left Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-kyra-maroon to-kyra-maroon-dark border border-border/30">
            <h3 className="font-display text-2xl font-semibold mb-3 text-foreground">
              Built by Women, for Women
            </h3>
            <p className="text-muted-foreground mb-6">
              Experience rides that understand your needs. Kyra prioritizes your safety and comfort at every step.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
            >
              Get started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Card */}
          <div className="p-8 rounded-2xl bg-card border border-border/30">
            <h3 className="font-display text-2xl font-semibold mb-3 text-foreground">
              Predictable Pricing
            </h3>
            <p className="text-muted-foreground mb-6">
              No hidden charges, no surge pricing. One weekly subscription covers all your commute needs.
            </p>
            <a
              href="#subscribe"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
            >
              View plans
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
