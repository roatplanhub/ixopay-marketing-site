'use client';

import { motion } from 'framer-motion';
import { Brain, Network, Lock, Shield, Zap, ArrowRight, Check } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Products() {
  const products = [
    {
      id: 'intelligence',
      icon: Brain,
      title: 'Payments Intelligence',
      tagline: 'Your Payment Brain',
      description: 'AI-powered analytics engine that continuously learns from billions of transactions to predict outcomes, optimize performance, and autonomously improve authorization rates.',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Predictive authorization modeling',
        'Autonomous fee optimization',
        'Real-time performance analytics',
        'Behavioral pattern recognition',
        'Continuous machine learning',
      ],
      stats: [
        { value: '+23%', label: 'Auth rate improvement' },
        { value: '$12M+', label: 'Fraud prevented' },
        { value: '-40%', label: 'Processing costs' },
      ],
    },
    {
      id: 'orchestration',
      icon: Network,
      title: 'Orchestration',
      tagline: 'Smart Routing at Scale',
      description: 'Intelligent multi-PSP orchestration with dynamic routing that considers 50+ variables per transaction to select the optimal payment path in sub-100ms.',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Smart routing across 200+ PSPs',
        'Dynamic cascading & retries',
        'Geographic optimization',
        'Cost-based intelligent routing',
        'Real-time PSP health monitoring',
      ],
      stats: [
        { value: '<100ms', label: 'Routing decision time' },
        { value: '14%', label: 'Revenue recovery' },
        { value: '200+', label: 'PSP integrations' },
      ],
    },
    {
      id: 'tokenization',
      icon: Lock,
      title: 'Tokenization',
      tagline: 'Universal Vault',
      description: 'Merchant-owned, PSP-agnostic token management. True payment independence with universal tokens that work across any provider. Switch PSPs without re-tokenizing.',
      color: 'from-emerald-500 to-teal-500',
      features: [
        'Universal PSP-agnostic tokens',
        'Network tokenization (Visa, MC)',
        '90% PCI scope reduction',
        'Account updater integration',
        '<24hr PSP migration',
      ],
      stats: [
        { value: '90%', label: 'PCI scope reduction' },
        { value: '<24hrs', label: 'PSP migration' },
        { value: '100%', label: 'Data portability' },
      ],
    },
    {
      id: 'fraud',
      icon: Shield,
      title: 'Fraud Management',
      tagline: 'Real-Time Protection',
      description: 'AI-driven fraud detection using neural networks to analyze transaction patterns, catching fraud while reducing false positives by 60%.',
      color: 'from-orange-500 to-red-500',
      features: [
        'Real-time fraud scoring',
        '3DS2 authentication',
        'Behavioral analytics',
        'Chargeback prevention',
        'Device fingerprinting',
      ],
      stats: [
        { value: '99.8%', label: 'Detection accuracy' },
        { value: '-60%', label: 'False positives' },
        { value: '<50ms', label: 'Fraud decision' },
      ],
    },
    {
      id: 'connectors',
      icon: Zap,
      title: 'Connectors',
      tagline: 'Plug & Play Integrations',
      description: '200+ pre-built PSP and payment method adapters. Launch new payment methods in hours, not months. Certified integrations with enterprise-grade reliability.',
      color: 'from-indigo-500 to-purple-500',
      features: [
        '200+ PSP integrations',
        '300+ payment methods',
        'Regional payment methods',
        'Pre-certified compliance',
        'Auto-updates & maintenance',
      ],
      stats: [
        { value: '200+', label: 'PSP connectors' },
        { value: '300+', label: 'Payment methods' },
        { value: '40+', label: 'Countries' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Five Pillars.
              <br />
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
                One Unified Platform.
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Everything you need to build, scale, and optimize enterprise payment operations. Modular architecture. Seamless integration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="scroll-mt-24"
              >
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 md:p-12 overflow-hidden group hover:border-gray-600 transition-all">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl" style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />

                  <div className="relative grid md:grid-cols-2 gap-12">
                    {/* Left column */}
                    <div>
                      <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} items-center justify-center mb-6`}>
                        <product.icon className="w-8 h-8 text-white" />
                      </div>

                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                        {product.title}
                      </h2>
                      <p className="text-xl text-purple-300 font-medium mb-6">
                        {product.tagline}
                      </p>
                      <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        {product.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {product.stats.map((stat, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-1">
                              {stat.value}
                            </div>
                            <div className="text-xs text-gray-400">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      <Button href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600">
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>

                    {/* Right column - Features */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-lg font-semibold text-white mb-6">Key Capabilities</h3>
                      <ul className="space-y-4">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See the platform in action
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo to see how all five pillars work together to transform your payment operations.
            </p>
            <Button href="/contact" size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600">
              Schedule Enterprise Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
