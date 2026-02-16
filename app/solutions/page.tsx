'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Globe, ShieldCheck, Database, AlertTriangle, Zap } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function Solutions() {
  const solutions = [
    {
      icon: TrendingUp,
      title: 'Authorization Optimization',
      description: 'Maximize approval rates with AI-powered smart routing that analyzes 30+ factors per transaction in real-time.',
      benefits: ['3-5% auth rate lift', 'Dynamic cascading', 'Network token support'],
      href: '/solutions/authorization-optimization',
    },
    {
      icon: DollarSign,
      title: 'Revenue Acceleration',
      description: 'Recover 14% of failed payments through intelligent retry logic and account updater integration.',
      benefits: ['Automated retry strategies', 'Account updater', 'Fee optimization'],
      href: '/solutions/revenue-acceleration',
    },
    {
      icon: Globe,
      title: 'Global Expansion',
      description: 'Launch in new markets faster with 200+ PSP integrations and 300+ local payment methods.',
      benefits: ['Multi-currency support', 'Local payment methods', 'Regional compliance'],
      href: '/solutions/global-expansion',
    },
    {
      icon: ShieldCheck,
      title: 'Compliance & Security',
      description: 'Reduce PCI scope by 90% with merchant-owned tokenization and automated compliance management.',
      benefits: ['PCI DSS Level 1', 'PSD2/SCA ready', 'Data residency controls'],
      href: '/solutions/compliance',
    },
    {
      icon: Database,
      title: 'Data Ownership',
      description: 'True data portability with PSP-agnostic universal tokens that you own forever.',
      benefits: ['Universal tokens', 'Switch PSPs in hours', 'Export anytime'],
      href: '/solutions/data-ownership',
    },
    {
      icon: AlertTriangle,
      title: 'Fraud Reduction',
      description: 'Real-time fraud scoring and prevention without sacrificing legitimate transactions.',
      benefits: ['AI fraud detection', '3DS2 authentication', 'Chargeback prevention'],
      href: '/solutions/fraud-reduction',
    },
    {
      icon: Zap,
      title: 'Agentic Commerce',
      description: 'Protocol-agnostic infrastructure ready for autonomous AI agent transactions.',
      benefits: ['AI agent-ready APIs', 'Autonomous transactions', 'Future-proof architecture'],
      href: '/solutions/agentic-commerce',
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
              Solutions for Every Payment Challenge
            </h1>
            <p className="text-xl text-white/90">
              From authorization optimization to global expansion, IxoPay transforms payment complexity into competitive advantage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index}>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--deep-purple)] to-[var(--royal-blue)] flex items-center justify-center mb-6">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                  {solution.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-[var(--text-secondary)] flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--mint-green)] mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button href={solution.href} variant="ghost" className="text-sm">
                  Learn More →
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
            Ready to solve your payment challenges?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Schedule a demo to see how IxoPay can transform your payment operations.
          </p>
          <Button href="/contact" size="lg">
            Contact Sales
          </Button>
        </div>
      </section>
    </div>
  );
}
