'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Brain, Sparkles, Network, Lock, BarChart3, CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const metrics = [
    { value: '99.999%', label: 'Uptime SLA' },
    { value: '200+', label: 'PSP Connectors' },
    { value: '$50B+', label: 'Processed Annually' },
    { value: '150+', label: 'Enterprise Clients' },
  ];

  const aiCapabilities = [
    {
      icon: Brain,
      title: 'Payments Intelligence',
      description: 'AI that learns from billions of transactions to predict, optimize, and autonomously improve payment performance in real-time.',
      stats: [
        { value: '+23%', label: 'Authorization rates' },
        { value: '-40%', label: 'Processing costs' },
        { value: '99.8%', label: 'Fraud detection accuracy' },
      ],
    },
    {
      icon: Network,
      title: 'Intelligent Orchestration',
      description: 'Dynamic routing that considers 50+ variables per transaction—from card BIN to time-of-day patterns—to select the optimal payment path.',
      stats: [
        { value: '<100ms', label: 'Decision latency' },
        { value: '200+', label: 'PSP integrations' },
        { value: '14%', label: 'Revenue recovery' },
      ],
    },
    {
      icon: Lock,
      title: 'Merchant-Owned Data',
      description: 'True payment independence with universal tokenization. Your data, your control. Switch PSPs without re-tokenizing a single card.',
      stats: [
        { value: '90%', label: 'PCI scope reduction' },
        { value: '<24hrs', label: 'PSP migration time' },
        { value: '100%', label: 'Data portability' },
      ],
    },
  ];

  const products = [
    {
      icon: Brain,
      name: 'Payments Intelligence',
      tagline: 'Your Payment Brain',
      description: 'AI-powered analytics and optimization engine',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Network,
      name: 'Orchestration',
      tagline: 'Smart Routing at Scale',
      description: 'Multi-PSP orchestration with intelligent cascading',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Lock,
      name: 'Tokenization',
      tagline: 'Universal Vault',
      description: 'Merchant-owned, PSP-agnostic token management',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Shield,
      name: 'Fraud Management',
      tagline: 'Real-Time Protection',
      description: 'AI-driven fraud detection without false positives',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Zap,
      name: 'Connectors',
      tagline: 'Plug & Play Integrations',
      description: '200+ pre-built PSP and payment method adapters',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const enterpriseClients = [
    'Fortune 500 Retailer',
    'Global Marketplace Platform',
    'Leading Travel Company',
    'Top 10 FinTech Unicorn',
  ];

  const aiInsights = [
    {
      title: 'Predictive Authorization',
      description: 'AI forecasts which transactions will fail and automatically adjusts routing strategy before the attempt.',
      impact: '+8% approval rates',
    },
    {
      title: 'Autonomous Fee Optimization',
      description: 'Machine learning identifies cost-saving opportunities across PSPs and negotiates better interchange rates.',
      impact: '-32% processing fees',
    },
    {
      title: 'Behavioral Fraud Detection',
      description: 'Neural networks analyze transaction patterns to catch fraud while reducing false declines by 60%.',
      impact: '$12M fraud prevented',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Enhanced with better readability */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Dark base for better text contrast */}
        <div className="absolute inset-0 bg-black" />

        {/* Animated Gradient Background */}
        <div className="absolute inset-0 animated-gradient opacity-40" />

        {/* Floating orbs for depth */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ bottom: '20%', right: '10%' }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* AI Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white mb-8"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Powered by AI • Built for Enterprise • Ready for the Future</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                The Payment Brain
                <br />
                <span className="bg-gradient-to-r from-[var(--electric-blue)] via-purple-400 to-[var(--mint-green)] bg-clip-text text-transparent">
                  Your Enterprise Needs
                </span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              AI-powered payment intelligence that turns transactions into strategic advantage.
              <span className="block mt-2 text-cyan-300 font-semibold">
                Autonomous optimization. Predictive routing. Enterprise control.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button href="/contact" size="lg" className="shadow-2xl shadow-purple-500/50">
                Schedule Enterprise Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                href="/products"
                variant="secondary"
                size="lg"
                className="bg-white/10 backdrop-blur-xl border-white/30 text-white hover:bg-white/20"
              >
                Explore Platform
              </Button>
            </div>

            {/* Enhanced Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-4 hover:border-white/30 transition-all">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-300">{metric.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trusted by badge */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-sm text-gray-400 mt-12"
            >
              Trusted by Fortune 500 enterprises and high-growth platforms worldwide
            </motion.p>
          </motion.div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{ opacity }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1.5 h-2 bg-white/60 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* AI Capabilities - The Core Value */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 mb-6">
              <Brain className="w-4 h-4" />
              <span className="text-sm font-medium">Autonomous Intelligence</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Payments that <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">think, learn, and optimize</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every transaction is an opportunity for AI to make your business smarter. Real-time decisions. Continuous learning. Autonomous improvement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-300" />

                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-6">
                      <capability.icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">
                      {capability.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {capability.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-700/50">
                      {capability.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AI Insights Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              How AI Transforms Your Payments
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {aiInsights.map((insight, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent rounded-full" />
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">{insight.title}</h4>
                  <p className="text-gray-300 text-sm mb-3">{insight.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                    <TrendingUp className="w-3 h-3 text-green-400" />
                    <span className="text-xs font-medium text-green-300">{insight.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Components */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Five Pillars. <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">One Unified Platform.</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build, scale, and optimize enterprise payment operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-sm text-purple-300 mb-3 font-medium">{product.tagline}</p>
                  <p className="text-sm text-gray-400">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button href="/products" size="lg" className="shadow-2xl shadow-blue-500/30">
              Explore All Products <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Trust & Social Proof */}
      <section className="py-32 bg-gradient-to-b from-black via-purple-950/20 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Trusted by enterprises that <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">demand excellence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From Fortune 500 retailers to unicorn startups, leading companies choose IxoPay for mission-critical payment infrastructure.
            </p>
          </motion.div>

          {/* Enterprise Logos Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {enterpriseClients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <span className="text-gray-400 text-center font-medium">{client}</span>
              </motion.div>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-4">
                $50B+
              </div>
              <p className="text-gray-300 text-lg">
                Annual transaction volume processed securely
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-4">
                99.999%
              </div>
              <p className="text-gray-300 text-lg">
                Uptime SLA guaranteed for enterprise customers
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text mb-4">
                150+
              </div>
              <p className="text-gray-300 text-lg">
                Enterprise clients across 40+ countries
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA - Enterprise Focus */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 mb-8">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Enterprise-Grade Infrastructure</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Ready to transform payments
              <br />
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text">
                into your competitive edge?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join the enterprises using AI-powered payment intelligence to recover revenue, reduce costs, and scale globally.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                href="/contact"
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-2xl shadow-purple-500/50 px-10 py-5 text-lg"
              >
                Schedule Enterprise Demo <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
              <Button
                href="/solutions"
                variant="secondary"
                size="lg"
                className="bg-white/10 backdrop-blur-xl border-white/30 text-white hover:bg-white/20 px-10 py-5 text-lg"
              >
                Explore Solutions
              </Button>
            </div>

            {/* Value Props */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Shield, text: 'SOC 2 Type II & PCI DSS Level 1 Certified' },
                { icon: Zap, text: '24/7 Enterprise Support & Dedicated CSM' },
                { icon: CheckCircle, text: 'White-Glove Migration & Onboarding' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-purple-300" />
                  </div>
                  <p className="text-sm text-gray-300 text-center">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
