'use client';

import { motion } from 'framer-motion';
import { BookOpen, FileText, Video, Users, Calculator } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function Resources() {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: 'Blog',
      description: 'Technical articles, industry insights, and product updates from the IxoPay team.',
      count: '50+ articles',
      href: '/resources/blog',
    },
    {
      icon: FileText,
      title: 'Case Studies',
      description: 'Real customer success stories with quantified outcomes and implementation details.',
      count: '15+ case studies',
      href: '/resources/case-studies',
    },
    {
      icon: BookOpen,
      title: 'Guides & Whitepapers',
      description: 'In-depth guides on payment orchestration, tokenization, and AI-driven optimization.',
      count: '10+ guides',
      href: '/resources/guides',
    },
    {
      icon: Video,
      title: 'Webinars',
      description: 'On-demand webinars covering payment trends, technical deep-dives, and best practices.',
      count: '20+ webinars',
      href: '/resources/webinars',
    },
    {
      icon: Users,
      title: 'Developer Resources',
      description: 'Integration guides, SDK documentation, code samples, and API changelog.',
      count: '100+ resources',
      href: '/resources/developers',
    },
    {
      icon: Calculator,
      title: 'ROI Calculator',
      description: 'Calculate your potential savings and revenue impact from switching to IxoPay.',
      count: 'Free tool',
      href: '/resources/roi-calculator',
    },
  ];

  const featuredContent = [
    {
      category: 'Whitepaper',
      title: 'Breaking PSP Lock-in: A Merchant\'s Guide',
      description: 'Learn how merchant-owned tokenization gives you true payment independence.',
      readTime: '12 min read',
    },
    {
      category: 'Case Study',
      title: 'How Platform X Recovered 14% of Failed Payments',
      description: 'Real results from implementing intelligent retry logic and account updater.',
      readTime: '8 min read',
    },
    {
      category: 'Blog',
      title: 'Agentic Commerce: Preparing for AI-Driven Transactions',
      description: 'Future-proof your payment stack for the age of autonomous AI agents.',
      readTime: '10 min read',
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
              Knowledge Center
            </h1>
            <p className="text-xl text-white/90">
              Everything you need to master payment orchestration, from technical guides to customer success stories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <Card key={index}>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--deep-purple)] to-[var(--royal-blue)] flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                  {category.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--text-tertiary)]">{category.count}</span>
                  <Button href={category.href} variant="ghost" className="text-sm">
                    Browse →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8 text-center">
            Featured Content
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <Card key={index}>
                <div className="text-sm text-[var(--deep-purple)] font-medium mb-2">
                  {content.category}
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  {content.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  {content.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--text-tertiary)]">{content.readTime}</span>
                  <Button variant="ghost" className="text-sm">
                    Read More →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
            Can't find what you're looking for?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Our team is here to help answer your questions.
          </p>
          <Button href="/contact" size="lg">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}
