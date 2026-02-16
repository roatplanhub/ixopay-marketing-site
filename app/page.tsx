'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield, Zap, CheckCircle, Globe, Lock, BarChart3, RefreshCw, Brain, Network, ShieldCheck } from 'lucide-react';
import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

/* ─── Animated routing flow visualization ─── */
function RoutingFlow() {
  const [activeRoute, setActiveRoute] = useState(0);

  const routes = [
    { region: 'Europe', card: 'Visa', psp: 'Adyen', reason: 'Highest approval rate for EU Visa', approved: true },
    { region: 'North America', card: 'Amex', psp: 'Braintree', reason: 'Lowest fees for US Amex', approved: true },
    { region: 'Asia Pacific', card: 'Mastercard', psp: 'Stripe', reason: 'Local acquiring in JP', approved: true },
    { region: 'Europe', card: 'Mastercard', psp: 'Checkout.com', reason: 'Declined → auto-retry via Adyen', approved: false },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoute((prev) => (prev + 1) % routes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const r = routes[activeRoute];

  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0b0f] p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">Smart Routing Engine</span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-subtle" />
          <span className="text-emerald-400/80 text-[10px] font-medium">LIVE</span>
        </div>
      </div>

      {/* Flow visualization */}
      <div className="flex items-center justify-between gap-3 mb-8">
        {/* Step 1: Transaction */}
        <div className="flex-1 bg-white/[0.04] border border-white/10 rounded-xl p-4 text-center">
          <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">Transaction</div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRoute}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="text-sm font-medium text-white">{r.card}</div>
              <div className="text-xs text-gray-500">{r.region}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrow */}
        <motion.div
          key={`arrow1-${activeRoute}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="hidden sm:block w-12 h-px bg-gradient-to-r from-indigo-500/60 to-indigo-500/20 origin-left"
        />

        {/* Step 2: IxoPay AI */}
        <div className="flex-1 bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4 text-center">
          <div className="text-[10px] text-indigo-400 uppercase tracking-wider mb-2">IxoPay AI</div>
          <div className="text-sm font-medium text-white">50+ signals</div>
          <div className="text-xs text-gray-500">analyzed</div>
        </div>

        {/* Arrow */}
        <motion.div
          key={`arrow2-${activeRoute}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="hidden sm:block w-12 h-px bg-gradient-to-r from-indigo-500/60 to-emerald-500/20 origin-left"
        />

        {/* Step 3: Optimal PSP */}
        <div className="flex-1 bg-white/[0.04] border border-white/10 rounded-xl p-4 text-center">
          <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">Routed To</div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRoute}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, delay: 0.6 }}
            >
              <div className="text-sm font-medium text-white">{r.psp}</div>
              <div className={`text-xs ${r.approved ? 'text-emerald-400' : 'text-amber-400'}`}>
                {r.approved ? 'Approved' : 'Retrying...'}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Reason bar */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeRoute}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] rounded-lg border border-white/5"
        >
          <RefreshCw className="w-3 h-3 text-indigo-400 flex-shrink-0" />
          <span className="text-xs text-gray-400">{r.reason}</span>
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="flex justify-center gap-1.5 mt-6">
        {routes.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i === activeRoute ? 'bg-indigo-400' : 'bg-white/10'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Animated live dashboard ─── */
const txnData = [
  { id: 'txn_9f3b', amount: '€249.00', card: 'Visa •••• 4242', region: 'DE', psp: 'Adyen', status: 'approved', latency: '34ms' },
  { id: 'txn_7a1c', amount: '£89.99', card: 'MC •••• 8521', region: 'UK', psp: 'Stripe', status: 'approved', latency: '52ms' },
  { id: 'txn_2d8e', amount: '$1,200', card: 'Amex •••• 1003', region: 'US', psp: 'Braintree', status: 'approved', latency: '41ms' },
  { id: 'txn_5k2f', amount: '€67.50', card: 'Visa •••• 9187', region: 'FR', psp: 'Adyen', status: 'approved', latency: '29ms' },
  { id: 'txn_8m4a', amount: '$430.00', card: 'MC •••• 3344', region: 'US', psp: 'Checkout', status: 'declined', latency: '61ms' },
  { id: 'txn_8m4b', amount: '$430.00', card: 'MC •••• 3344', region: 'US', psp: 'Stripe', status: 'approved', latency: '38ms' },
  { id: 'txn_1p7g', amount: '¥15,800', card: 'Visa •••• 6601', region: 'JP', psp: 'Adyen', status: 'approved', latency: '47ms' },
  { id: 'txn_3q9h', amount: 'A$320', card: 'Visa •••• 2290', region: 'AU', psp: 'Stripe', status: 'approved', latency: '55ms' },
];

function LiveDashboard() {
  const [tick, setTick] = useState(0);
  const [approvalRate, setApprovalRate] = useState(96.2);
  const [volume, setVolume] = useState(2847);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((prev) => (prev + 1) % txnData.length);
      setApprovalRate((prev) => {
        const delta = (Math.random() - 0.3) * 0.3;
        return Math.min(99.9, Math.max(96.0, prev + delta));
      });
      setVolume((prev) => prev + Math.floor(Math.random() * 12) + 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const displayed = [];
  for (let i = 0; i < 5; i++) {
    displayed.push(txnData[(tick + i) % txnData.length]);
  }

  const barHeights = [65, 72, 58, 80, 75, 88, 82, 91, 85, 78, 92, 87];

  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0b0f]">
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/[0.02]">
        <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">Payment Analytics</span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-subtle" />
          <span className="text-emerald-400/80 text-[10px] font-medium">LIVE</span>
        </div>
      </div>

      <div className="p-5">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-5">
          <div className="bg-white/[0.03] rounded-lg p-3 border border-white/5">
            <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Approval Rate</div>
            <div className="text-xl font-bold text-emerald-400 tabular-nums">{approvalRate.toFixed(1)}%</div>
          </div>
          <div className="bg-white/[0.03] rounded-lg p-3 border border-white/5">
            <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Transactions</div>
            <div className="text-xl font-bold text-white tabular-nums">{volume.toLocaleString()}</div>
          </div>
          <div className="bg-white/[0.03] rounded-lg p-3 border border-white/5">
            <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Revenue Saved</div>
            <div className="text-xl font-bold text-white">$48.2K</div>
          </div>
        </div>

        {/* Mini chart */}
        <div className="bg-white/[0.03] rounded-lg p-3 border border-white/5 mb-5">
          <div className="flex items-end justify-between h-16 gap-1">
            {barHeights.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm bg-indigo-500/60"
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: 'easeOut' }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-[9px] text-gray-600">12:00</span>
            <span className="text-[9px] text-gray-600">Now</span>
          </div>
        </div>

        {/* Transaction feed */}
        <div>
          <div className="grid grid-cols-[1fr_70px_36px_70px_58px] gap-2 px-2 py-1.5 text-[9px] text-gray-600 uppercase tracking-wider border-b border-white/5">
            <span>Transaction</span>
            <span>Amount</span>
            <span>Rgn</span>
            <span>Provider</span>
            <span>Status</span>
          </div>
          <AnimatePresence mode="popLayout">
            {displayed.map((txn, i) => (
              <motion.div
                key={`${txn.id}-${tick}-${i}`}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="grid grid-cols-[1fr_70px_36px_70px_58px] gap-2 px-2 py-2 text-[11px] border-b border-white/[0.03]"
              >
                <span className="text-gray-400 font-mono">{txn.id}</span>
                <span className="text-white font-medium">{txn.amount}</span>
                <span className="text-gray-500">{txn.region}</span>
                <span className="text-gray-400">{txn.psp}</span>
                <span className={`font-medium ${txn.status === 'approved' ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {txn.status === 'approved' ? 'Approved' : 'Retry →'}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ─── Orchestration flow visual ─── */
function OrchestrationVisual() {
  const steps = [
    { label: 'Checkout', sublabel: 'Web / App / Agent' },
    { label: 'Tokenize', sublabel: 'PCI-free capture' },
    { label: 'Risk Check', sublabel: '3DS & fraud rules' },
    { label: 'Smart Route', sublabel: 'AI-optimized' },
    { label: 'Process', sublabel: '200+ acquirers' },
    { label: 'Reconcile', sublabel: 'Auto-matched' },
  ];

  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0b0f] p-6 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">Transaction Lifecycle</span>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative"
          >
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-3 text-center hover:border-indigo-500/30 transition-colors">
              <div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-2">
                <span className="text-xs font-bold text-indigo-400">{i + 1}</span>
              </div>
              <div className="text-xs font-medium text-white mb-0.5">{step.label}</div>
              <div className="text-[10px] text-gray-500">{step.sublabel}</div>
            </div>
            {i < steps.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                className="hidden md:block absolute top-1/2 -right-3 w-3 h-px bg-white/10 origin-left"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      tab: 'Orchestration',
      headline: 'One integration. Infinite payment possibilities.',
      description:
        'Orchestrate your entire global payment stack through a single platform. Smart routing forwards each transaction to the best-suited provider based on card data, geography, risk classification, and cost — increasing conversions and reducing fees automatically.',
      stats: [
        { value: '200+', label: 'Acquirers connected' },
        { value: '300+', label: 'Payment methods' },
        { value: '+14%', label: 'Revenue recovered' },
      ],
    },
    {
      tab: 'Tokenization',
      headline: 'Own your payment data. Break free from lock-in.',
      description:
        'Our universal tokenization layer sits above any PSP, giving you total control over customer payment data. Switch or add providers without re-tokenizing a single card. Reduce PCI scope by 90% while maintaining full data portability across every channel.',
      stats: [
        { value: '90%', label: 'PCI scope reduction' },
        { value: '100%', label: 'Data portability' },
        { value: '<24hrs', label: 'PSP migration time' },
      ],
    },
    {
      tab: 'AI Intelligence',
      headline: 'Turn payment data into actionable growth.',
      description:
        'Powered by Congrify, our AI engine unifies data from every PSP into a single source of truth. Real-time analytics, AI-driven recommendations, automated reconciliation, and fee intelligence — so your payments team sees everything and optimizes continuously.',
      stats: [
        { value: '+23%', label: 'Approval rate lift' },
        { value: '-32%', label: 'Processing costs' },
        { value: 'Real-time', label: 'Anomaly detection' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black">

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 hero-gradient" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
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

            <motion.h2
              variants={fadeUp}
              custom={0.1}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-normal"
            >
              Enterprise-grade orchestration, merchant-owned tokenization, and AI-powered intelligence — unified in one platform for the world&apos;s leading merchants.
            </motion.h2>

            <motion.div
              variants={fadeUp}
              custom={0.2}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button href="/contact" size="lg">
                Talk to our experts <ArrowRight className="ml-2 w-5 h-5" />
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
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ TRUSTED BY ═══════════════════ */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-sm text-gray-600 text-center mb-10 uppercase tracking-widest font-medium"
          >
            Trusted by 700+ leading global merchants &amp; fintechs
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            className="grid grid-cols-3 md:grid-cols-6 gap-6"
          >
            {['Delivery Hero', 'eToro', 'Flix', 'Grover', 'Marley Spoon', 'Kriptomat'].map((client, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.03}
                className="py-6 px-4 bg-white/[0.04] border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/[0.07] transition-colors"
              >
                <span className="text-gray-300 text-sm font-medium">{client}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ METRICS ═══════════════════ */}
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
              { value: '$40B+', label: 'Processed to date' },
              { value: '700+', label: 'Merchants & fintechs' },
              { value: '200+', label: 'Acquirers connected' },
              { value: '300+', label: 'Payment methods' },
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

      {/* ═══════════════════ FIVE PILLARS ═══════════════════ */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Five pillars. <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">One unified platform.</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Everything you need to build, scale, and optimize enterprise payment operations — without managing multiple vendors or disparate data silos.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-5"
          >
            {[
              {
                icon: Brain,
                name: 'Payments Intelligence',
                description: 'AI-powered analytics and optimization powered by Congrify. Real-time insights, fee analysis, and automated reconciliation.',
              },
              {
                icon: Network,
                name: 'Orchestration',
                description: 'Smart routing across 200+ acquirers. Automatic failover, retry logic, and cost-optimized transaction flows.',
              },
              {
                icon: Lock,
                name: 'Tokenization',
                description: 'Merchant-owned universal tokens that work across any PSP. Reduce PCI scope by 90% with full data portability.',
              },
              {
                icon: ShieldCheck,
                name: 'Fraud Management',
                description: 'Configurable risk engine with 3DS authentication, behavioral analysis, and pre-chargeback alerts via Ethoca and Verifi.',
              },
              {
                icon: Globe,
                name: 'Connectors',
                description: '200+ pre-built acquirer adapters and 300+ payment methods. Local acquiring across 40+ countries.',
              },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.05}
                className="group"
              >
                <div className="h-full bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-indigo-500/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5 group-hover:bg-indigo-500/20 transition-colors">
                    <pillar.icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{pillar.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.3}
            className="text-center mt-12"
          >
            <Button href="/products" size="lg">
              Explore all products <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ THREE PILLARS — TABBED ═══════════════════ */}
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
              The full-stack advantage
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Why settle for best-of-breed when you can have a unified platform? Orchestration, tokenization, and AI intelligence — integrated to remove complexity and eliminate data silos.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex gap-1 mb-12 border-b border-white/10">
            {pillars.map((pillar, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 text-sm font-medium transition-colors relative ${
                  activeTab === i ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {pillar.tab}
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
                {pillars[activeTab].headline}
              </h3>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                {pillars[activeTab].description}
              </p>
              <div className="grid grid-cols-3 gap-8">
                {pillars[activeTab].stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {activeTab === 0 && <RoutingFlow />}
              {activeTab === 1 && <OrchestrationVisual />}
              {activeTab === 2 && <LiveDashboard />}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ HOW IT WORKS — ORCHESTRATION FLOW ═══════════════════ */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp} custom={0}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Every transaction, optimized end-to-end
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                From checkout to settlement, IxoPay orchestrates every step. Route to the best-suited provider, retry declined transactions automatically, reconcile across all PSPs in a single dashboard — and analyze it all with AI.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Zap, text: 'Smart routing with automatic failover and retry' },
                  { icon: Lock, text: 'PCI-compliant tokenization at every touchpoint' },
                  { icon: BarChart3, text: 'Consolidated reporting across all providers' },
                  { icon: Globe, text: 'Local acquiring in 40+ countries' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={0.1 + i * 0.05}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-indigo-400" />
                    </div>
                    <span className="text-sm text-gray-400">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Button href="/products" variant="ghost" className="text-indigo-400 hover:text-indigo-300 p-0">
                  Explore the platform <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} custom={0.15}>
              <LiveDashboard />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ AGENTIC COMMERCE CTA ═══════════════════ */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid lg:grid-cols-2 gap-16 items-center lg:[direction:rtl]"
          >
            <motion.div variants={fadeUp} custom={0} className="lg:[direction:ltr]">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                The future is agentic. Are you ready?
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                As commerce shifts from clicks to AI agents, your infrastructure must be protocol-agnostic. IxoPay acts as the neutral trust layer — orchestrating identity and value across the fragmenting landscape of AI agent protocols with merchant-owned tokens that work everywhere.
              </p>
              <Button href="/contact" variant="ghost" className="text-indigo-400 hover:text-indigo-300 p-0">
                Learn about agentic commerce <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} custom={0.15} className="lg:[direction:ltr]">
              <RoutingFlow />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIAL ═══════════════════ */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.blockquote
              variants={fadeUp}
              custom={0}
              className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8"
            >
              &ldquo;Working with AI Payment Intelligence has allowed us to achieve full data control very quickly, without technical effort. It&apos;s a key part of improving our payment management and operations.&rdquo;
            </motion.blockquote>
            <motion.div variants={fadeUp} custom={0.1}>
              <p className="text-sm text-gray-400 font-medium">Dennis Kohler</p>
              <p className="text-sm text-gray-600">Senior Head of Global Payments &amp; Fraud, Flix</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ FINAL CTA ═══════════════════ */}
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
              Join 700+ enterprises using IxoPay to simplify, secure, and scale their global payment operations.
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
                { icon: Shield, text: 'PCI DSS Level 1 certified' },
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
