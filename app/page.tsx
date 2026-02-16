'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import Button from '@/components/ui/Button';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

function CodeBlock() {
  return (
    <div className="code-block rounded-xl p-6 text-sm leading-relaxed overflow-hidden">
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-white/30 text-xs">Terminal</span>
      </div>
      <div className="space-y-1">
        <p><span className="code-comment"># Create an intelligent payment</span></p>
        <p>
          <span className="text-white">curl </span>
          <span className="code-url">https://api.ixopay.com/v1/transactions</span>
          <span className="text-white"> \</span>
        </p>
        <p>
          <span className="text-white">  </span>
          <span className="code-flag">-H</span>
          <span className="text-white"> </span>
          <span className="code-string">&quot;Authorization: Bearer sk_live_...&quot;</span>
          <span className="text-white"> \</span>
        </p>
        <p>
          <span className="text-white">  </span>
          <span className="code-flag">-d</span>
          <span className="text-white"> amount</span>
          <span className="text-white">=</span>
          <span className="code-keyword">4999</span>
          <span className="text-white"> \</span>
        </p>
        <p>
          <span className="text-white">  </span>
          <span className="code-flag">-d</span>
          <span className="text-white"> currency</span>
          <span className="text-white">=</span>
          <span className="code-string">eur</span>
          <span className="text-white"> \</span>
        </p>
        <p>
          <span className="text-white">  </span>
          <span className="code-flag">-d</span>
          <span className="text-white"> routing</span>
          <span className="text-white">=</span>
          <span className="code-string">intelligent</span>
        </p>
        <p className="mt-4">
          <span className="code-comment"># Response — routed to optimal PSP in 47ms</span>
        </p>
        <p><span className="text-white">{'{'}</span></p>
        <p><span className="text-white">  </span><span className="code-flag">&quot;id&quot;</span><span className="text-white">: </span><span className="code-string">&quot;txn_8f2a...&quot;</span><span className="text-white">,</span></p>
        <p><span className="text-white">  </span><span className="code-flag">&quot;status&quot;</span><span className="text-white">: </span><span className="code-string">&quot;approved&quot;</span><span className="text-white">,</span></p>
        <p><span className="text-white">  </span><span className="code-flag">&quot;psp&quot;</span><span className="text-white">: </span><span className="code-string">&quot;adyen_eu&quot;</span><span className="text-white">,</span></p>
        <p><span className="text-white">  </span><span className="code-flag">&quot;latency_ms&quot;</span><span className="text-white">: </span><span className="code-keyword">47</span><span className="text-white">,</span></p>
        <p><span className="text-white">  </span><span className="code-flag">&quot;routing_reason&quot;</span><span className="text-white">: </span><span className="code-string">&quot;highest approval rate for DE Visa&quot;</span></p>
        <p><span className="text-white">{'}'}</span><span className="terminal-cursor text-white">▋</span></p>
      </div>
    </div>
  );
}

function ProductVideo() {
  return (
    <div className="relative rounded-xl overflow-hidden border border-white/10 bg-gray-950">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-white/30 text-xs">IxoPay Dashboard</span>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full aspect-video object-cover"
        poster="/demo-poster.jpg"
      >
        <source src="/demo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      tab: 'Intelligent Routing',
      headline: 'Every transaction finds its optimal path',
      description:
        'Our AI evaluates 50+ signals per transaction — card BIN, issuer patterns, time-of-day, historical approval rates — and routes to the PSP most likely to approve, in under 100ms.',
      stats: [
        { value: '+23%', label: 'Approval rates' },
        { value: '<100ms', label: 'Routing latency' },
        { value: '200+', label: 'PSP connectors' },
      ],
    },
    {
      tab: 'Merchant-Owned Data',
      headline: 'Your tokens. Your data. Zero lock-in.',
      description:
        'Universal tokenization that lives above any PSP. Switch providers without re-tokenizing a single card. Your customer data stays yours — portable, secure, and fully under your control.',
      stats: [
        { value: '100%', label: 'Data portability' },
        { value: '<24hrs', label: 'PSP migration' },
        { value: '90%', label: 'PCI scope reduction' },
      ],
    },
    {
      tab: 'Fraud Intelligence',
      headline: 'Catch fraud without blocking revenue',
      description:
        'Neural networks trained on billions of transactions detect fraud patterns while reducing false declines by 60%. Protect revenue, not just against losses.',
      stats: [
        { value: '99.8%', label: 'Detection accuracy' },
        { value: '-60%', label: 'False declines' },
        { value: '$12M+', label: 'Fraud prevented' },
      ],
    },
  ];

  const showcases = [
    {
      headline: 'One API. 200+ payment providers.',
      description:
        'A single integration connects you to every major PSP, acquirer, and payment method globally. Add new providers in hours, not months. No vendor lock-in, ever.',
      visual: 'code',
    },
    {
      headline: 'See the intelligence at work.',
      description:
        'Watch how IxoPay routes, optimizes, and protects transactions in real time. The dashboard gives your team full visibility into every decision the platform makes.',
      visual: 'video',
    },
  ];

  return (
    <div className="min-h-screen bg-black">

      {/* ===================== HERO ===================== */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 hero-gradient" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.h1
              variants={fadeUp}
              custom={0}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white mb-8 leading-[1.08] tracking-tight"
            >
              Payment infrastructure
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                for the AI era
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.1}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Intelligent routing, merchant-owned tokenization, and autonomous optimization — so every transaction drives revenue.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.2}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button href="/contact" size="lg">
                Start with IxoPay <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                href="/products"
                variant="secondary"
                size="lg"
                className="bg-white/5 border-white/10 text-white hover:bg-white/10 border"
              >
                Read the docs
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===================== METRICS ===================== */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
          >
            {[
              { value: '$50B+', label: 'Processed annually' },
              { value: '99.999%', label: 'Uptime SLA' },
              { value: '200+', label: 'PSP connectors' },
              { value: '150+', label: 'Enterprise clients' },
            ].map((metric, i) => (
              <motion.div key={i} variants={fadeUp} custom={i * 0.05} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-500">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== TABBED PRODUCT SHOWCASE ===================== */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Built for how payments actually work
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Three capabilities that compound. Each one drives measurable impact on its own — together, they transform payments from a cost center into a growth engine.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex gap-1 mb-12 border-b border-white/10">
            {features.map((feature, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 text-sm font-medium transition-colors relative ${
                  activeTab === i
                    ? 'text-white'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {feature.tab}
                {activeTab === i && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                {features[activeTab].headline}
              </h3>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                {features[activeTab].description}
              </p>
              <div className="grid grid-cols-3 gap-8">
                {features[activeTab].stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <CodeBlock />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== FEATURE SHOWCASES (alternating) ===================== */}
      {showcases.map((showcase, i) => (
        <section key={i} className="py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                i % 2 === 1 ? 'lg:[direction:rtl]' : ''
              }`}
            >
              <motion.div variants={fadeUp} custom={0} className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                  {showcase.headline}
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  {showcase.description}
                </p>
                <Button href={i === 0 ? '/docs' : '/contact'} variant="ghost" className="text-indigo-400 hover:text-indigo-300 p-0">
                  {i === 0 ? 'Explore the API' : 'Request a demo'} <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} custom={0.15} className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                {showcase.visual === 'code' ? <CodeBlock /> : <ProductVideo />}
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* ===================== SOCIAL PROOF ===================== */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-12">
              Trusted by enterprises worldwide
            </motion.p>

            <motion.div variants={fadeUp} custom={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {['Fortune 500 Retailer', 'Global Marketplace', 'Leading Travel Co.', 'Top 10 FinTech'].map(
                (client, i) => (
                  <div
                    key={i}
                    className="py-8 px-6 border border-white/5 rounded-lg flex items-center justify-center"
                  >
                    <span className="text-gray-500 text-sm font-medium">{client}</span>
                  </div>
                )
              )}
            </motion.div>

            <motion.div variants={fadeUp} custom={0.2} className="grid md:grid-cols-3 gap-16">
              {[
                { value: '$50B+', label: 'Annual transaction volume' },
                { value: '99.999%', label: 'Guaranteed uptime' },
                { value: '150+', label: 'Enterprise clients globally' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">
                    {stat.value}
                  </div>
                  <p className="text-gray-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="py-32 border-t border-white/5 relative">
        <div className="absolute inset-0 hero-gradient opacity-50" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.08]"
            >
              Ready to own
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                your payments?
              </span>
            </motion.h2>

            <motion.p variants={fadeUp} custom={0.1} className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join the enterprises using AI-powered payment intelligence to recover revenue, cut costs, and scale globally.
            </motion.p>

            <motion.div variants={fadeUp} custom={0.2} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button href="/contact" size="lg">
                Schedule a demo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                href="/solutions"
                variant="secondary"
                size="lg"
                className="bg-white/5 border-white/10 text-white hover:bg-white/10 border"
              >
                Explore solutions
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500"
            >
              {[
                { icon: Shield, text: 'SOC 2 Type II & PCI DSS Level 1' },
                { icon: Zap, text: '24/7 enterprise support' },
                { icon: CheckCircle, text: 'White-glove onboarding' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-gray-600" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
