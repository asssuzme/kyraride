import { motion } from "framer-motion";

const LegalSection = () => {
  return (
    <section id="legal" className="py-20 md:py-32 relative">
      <div className="kyra-container">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Privacy Policy */}
          <motion.div
            id="privacy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-24"
          >
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              Privacy Policy
            </h2>
            <div className="kyra-card prose prose-invert max-w-none">
              <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
                <p>
                  <strong className="text-foreground">Last Updated:</strong> January 2026
                </p>
                
                <p>
                  Kyra ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobility subscription service.
                </p>

                <h3 className="text-foreground font-semibold text-base mt-6 mb-3">Information We Collect</h3>
                <p>
                  We collect information you provide directly to us, including your name, phone number, email address, pickup and drop-off locations, and payment information. We may also collect location data when you use our service.
                </p>

                <h3 className="text-foreground font-semibold text-base mt-6 mb-3">How We Use Your Information</h3>
                <p>
                  We use the information we collect to provide, maintain, and improve our services, process transactions, send you notifications about your rides, and communicate with you about promotions and updates.
                </p>

                <h3 className="text-foreground font-semibold text-base mt-6 mb-3">Information Sharing</h3>
                <p>
                  We do not sell your personal information. We may share your information with our drivers to facilitate your rides, with service providers who assist in our operations, and as required by law.
                </p>

                <h3 className="text-foreground font-semibold text-base mt-6 mb-3">Data Security</h3>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h3 className="text-foreground font-semibold text-base mt-6 mb-3">Contact Us</h3>
                <p>
                  If you have any questions about this Privacy Policy, please contact us through WhatsApp or at the contact number provided on our website.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Terms of Service */}
          <motion.div
            id="terms"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-24"
          >
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              Terms of Service
            </h2>
            <div className="kyra-card prose prose-invert max-w-none">
              <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
                <p>
                  <strong className="text-foreground">Last Updated:</strong> January 2026
                </p>
                
                <p>
                  By accessing or using Kyra's services, you agree to be bound by these Terms of Service. Please read them carefully before using our service.
                </p>

                <h3 className="text-foreground font-semibold text-base mt-6 mb-3">Service Description</h3>
                <p>
                  Kyra provides a women-only mobility subscription service in Bengaluru. Our service connects female passengers with verified female drivers for safe and reliable transportation.
                </p>

                <h3 className="text-foreground font-semibold text-base mt-6 mb-3">Eligibility</h3>
                <p>
                  Our service is exclusively available to women. By using Kyra, you represent and warrant that you are female and at least 18 years of age.
                </p>

                <h3 className="text-foreground font-semibold text-base mt-6 mb-3">Subscription Terms</h3>
                <p>
                  Subscriptions are billed on a weekly basis. You may cancel your subscription at any time, but refunds will be processed according to our refund policy. Subscription fees are subject to change with prior notice.
                </p>

                <h3 className="text-foreground font-semibold text-base mt-6 mb-3">User Conduct</h3>
                <p>
                  You agree to treat our drivers with respect and courtesy. Any form of harassment, abuse, or misconduct may result in immediate termination of your account without refund.
                </p>

                <h3 className="text-foreground font-semibold text-base mt-6 mb-3">Limitation of Liability</h3>
                <p>
                  Kyra shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.
                </p>

                <h3 className="text-foreground font-semibold text-base mt-6 mb-3">Governing Law</h3>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
                </p>

                <h3 className="text-foreground font-semibold text-base mt-6 mb-3">Changes to Terms</h3>
                <p>
                  We reserve the right to modify these Terms at any time. We will notify you of any changes by updating the "Last Updated" date. Your continued use of the service constitutes acceptance of the modified Terms.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LegalSection;
