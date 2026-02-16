'use client';

import { motion } from 'framer-motion';
import { Book, Code, Zap, Shield, Globe, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function Docs() {
  const quickLinks = [
    {
      icon: Zap,
      title: 'Quick Start',
      description: 'Get up and running with IxoPay in under 10 minutes.',
      href: '/docs/quickstart',
    },
    {
      icon: Code,
      title: 'API Reference',
      description: 'Complete API documentation with examples in multiple languages.',
      href: '/docs/api',
    },
    {
      icon: Book,
      title: 'Integration Guides',
      description: 'Step-by-step guides for common integration scenarios.',
      href: '/docs/guides',
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'PCI compliance, security best practices, and data protection.',
      href: '/docs/security',
    },
    {
      icon: Globe,
      title: 'SDKs & Libraries',
      description: 'Official SDKs for Node.js, Python, PHP, Ruby, and more.',
      href: '/docs/sdks',
    },
  ];

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
              Documentation
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Everything you need to integrate IxoPay and start processing payments.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60">
                  ⌘K
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8 text-center">
            Popular Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <Card key={index} className="cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--deep-purple)] to-[var(--royal-blue)] flex items-center justify-center mb-4">
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                  {link.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  {link.description}
                </p>
                <Button href={link.href} variant="ghost" className="text-sm">
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder Notice */}
      <section className="py-16 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--deep-purple)]/10 mb-6 mx-auto">
              <Book className="w-8 h-8 text-[var(--deep-purple)]" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              Documentation Portal Coming Soon
            </h3>
            <p className="text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
              We're building a comprehensive documentation portal with interactive examples, API references, and integration guides. In the meantime, contact our team for technical documentation.
            </p>
            <Button href="/contact">
              Contact for Technical Docs
            </Button>
          </Card>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 text-center">
            Simple, Developer-Friendly APIs
          </h2>
          <div className="bg-[#1E293B] rounded-xl p-6 shadow-xl">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-gray-400 text-sm">example.js</span>
            </div>
            <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
              <code>{`// Initialize IxoPay
const ixopay = require('@ixopay/node')('your_api_key');

// Create a payment with smart routing
const payment = await ixopay.payments.create({
  amount: 10000,
  currency: 'USD',
  token: 'tok_universal_abc123',
  routing: 'smart',
  cascading: true,
  metadata: {
    order_id: 'order_12345'
  }
});

console.log(payment.status); // 'succeeded'`}</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}
