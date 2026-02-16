'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Users, MapPin } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--deep-purple)] to-[var(--royal-blue)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's build the future of payments together
            </h1>
            <p className="text-xl text-white/90">
              Get in touch with our team to learn how IxoPay can transform your payment operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[var(--deep-purple)] to-[var(--royal-blue)] mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                Sales Inquiry
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Talk to our sales team about how IxoPay can help your business.
              </p>
              <a href="mailto:sales@ixopay.com" className="text-[var(--deep-purple)] hover:underline">
                sales@ixopay.com
              </a>
            </Card>

            <Card className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[var(--deep-purple)] to-[var(--royal-blue)] mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                Support
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Need help? Our support team is here for you.
              </p>
              <a href="mailto:support@ixopay.com" className="text-[var(--deep-purple)] hover:underline">
                support@ixopay.com
              </a>
            </Card>

            <Card className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[var(--deep-purple)] to-[var(--royal-blue)] mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                Partnerships
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Interested in partnering with IxoPay?
              </p>
              <a href="mailto:partners@ixopay.com" className="text-[var(--deep-purple)] hover:underline">
                partners@ixopay.com
              </a>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                Get in Touch
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--deep-purple)] focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--deep-purple)] focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--deep-purple)] focus:border-transparent"
                    placeholder="Acme Inc."
                  />
                </div>

                <div>
                  <label htmlFor="usecase" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Use Case *
                  </label>
                  <select
                    id="usecase"
                    name="usecase"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--deep-purple)] focus:border-transparent"
                  >
                    <option value="">Select a use case</option>
                    <option value="platform">Platform / Marketplace</option>
                    <option value="ecommerce">Ecommerce / Retail</option>
                    <option value="subscription">Subscription / SaaS</option>
                    <option value="fintech">Fintech</option>
                    <option value="travel">Travel / Hospitality</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--deep-purple)] focus:border-transparent"
                    placeholder="Tell us about your payment needs..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>

                <p className="text-sm text-[var(--text-tertiary)] text-center">
                  By submitting this form, you agree to our privacy policy. We'll be in touch within 24 hours.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Location (Optional) */}
      <section className="py-16 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="w-12 h-12 text-[var(--deep-purple)] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
            Global Presence, Local Support
          </h2>
          <p className="text-[var(--text-secondary)]">
            With teams across North America, Europe, and Asia-Pacific, we provide 24/7 support for your payment operations.
          </p>
        </div>
      </section>
    </div>
  );
}
