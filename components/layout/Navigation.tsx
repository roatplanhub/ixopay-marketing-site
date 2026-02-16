'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = {
    solutions: [
      { name: 'By Industry', href: '/solutions#industry' },
      { name: 'By Customer Type', href: '/solutions#customer-type' },
      { name: 'By Use Case', href: '/solutions#use-case' },
    ],
    products: [
      { name: 'Payments Intelligence', href: '/products#intelligence' },
      { name: 'Orchestration', href: '/products#orchestration' },
      { name: 'Tokenization', href: '/products#tokenization' },
      { name: 'Fraud Management', href: '/products#fraud' },
      { name: 'Connectors', href: '/products#connectors' },
    ],
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0a1a]/85 backdrop-blur-lg border-b border-purple-500/8'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl font-bold text-white">
              IxoPay
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Solutions Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-sm">
                <span>Solutions</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-[#181432] rounded-lg border border-purple-500/15 overflow-hidden shadow-2xl"
                  >
                    {navigation.solutions.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-gray-400 hover:bg-purple-500/10 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-sm">
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-[#181432] rounded-lg border border-purple-500/15 overflow-hidden shadow-2xl"
                  >
                    {navigation.products.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-gray-400 hover:bg-purple-500/10 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/docs"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Docs
            </Link>

            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Contact Sales
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0c0a1a]/95 backdrop-blur-lg border-t border-purple-500/8"
          >
            <div className="px-4 py-6 space-y-4">
              <div>
                <div className="font-medium text-white text-sm mb-2">Solutions</div>
                <div className="pl-4 space-y-2">
                  {navigation.solutions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-sm text-gray-400 hover:text-white"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-medium text-white text-sm mb-2">Products</div>
                <div className="pl-4 space-y-2">
                  {navigation.products.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-sm text-gray-400 hover:text-white"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/docs"
                className="block text-sm text-gray-400 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Docs
              </Link>

              <Link
                href="/contact"
                className="block w-full text-center px-4 py-3 rounded-lg bg-white text-black text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
