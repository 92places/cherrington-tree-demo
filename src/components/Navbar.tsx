import React, { useState } from 'react';
import { Phone, Trees, Menu, X, Clock, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenEstimateModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimateModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const phoneNumber = "+1 239-595-2022";
  const telHref = "tel:+12395952022";

  return (
    <>
      {/* Top micro bar for quick business hours & license */}
      <div className="bg-[#143324] text-emerald-100/90 text-xs py-1.5 px-4 sm:px-8 border-b border-emerald-900/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Open Daily from 7:00 AM</span>
            </span>
            <span className="hidden sm:inline-block text-emerald-700">·</span>
            <span className="hidden sm:flex items-center gap-1.5 text-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Licensed &amp; Insured Tree Specialists</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-emerald-300 hidden md:inline">Southwest Florida Service Area</span>
            <a
              href={telHref}
              className="text-white font-semibold hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{phoneNumber}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-20">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#"
              className="flex items-center gap-3 text-stone-900 group whitespace-nowrap shrink-0"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 flex items-center justify-center text-amber-300 shadow-sm group-hover:scale-105 transition-transform">
                <Trees className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-stone-900 leading-tight">
                  Cherrington
                </span>
                <span className="text-xs font-medium text-emerald-800 tracking-wide uppercase">
                  Tree Landscaping &amp; Planting
                </span>
              </div>
            </a>

            {/* Zone 2: Clean Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-stone-700">
              <a
                href="#services"
                className="hover:text-emerald-800 transition-colors whitespace-nowrap"
              >
                Our Services
              </a>
              <a
                href="#reviews"
                className="hover:text-emerald-800 transition-colors whitespace-nowrap"
              >
                5-Star Reviews
              </a>
              <a
                href="#why-us"
                className="hover:text-emerald-800 transition-colors whitespace-nowrap"
              >
                Why Choose Us
              </a>
              <a
                href="#estimate-calculator"
                className="hover:text-emerald-800 transition-colors whitespace-nowrap"
              >
                Free Estimate
              </a>
              <a
                href="#faq"
                className="hover:text-emerald-800 transition-colors whitespace-nowrap"
              >
                FAQ
              </a>
            </nav>

            {/* Zone 3: Primary Action Phone CTA */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href={telHref}
                className="group flex items-center gap-3 bg-emerald-800 hover:bg-emerald-900 text-white px-5 py-2.5 rounded-xl font-semibold shadow-sm hover:shadow transition-all whitespace-nowrap"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-700/80 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-emerald-200 uppercase tracking-wider font-medium leading-none">
                    Direct Line
                  </div>
                  <div className="text-sm font-bold text-white tracking-wide">
                    {phoneNumber}
                  </div>
                </div>
              </a>
            </div>

            {/* Mobile menu toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={telHref}
                className="p-2.5 rounded-lg bg-emerald-800 text-white flex items-center justify-center shadow-xs"
                aria-label="Call +1 239-595-2022"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <nav className="flex flex-col space-y-2 text-base font-medium text-stone-800">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-stone-50"
              >
                Our Services
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-stone-50"
              >
                5-Star Reviews
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-stone-50"
              >
                Why Choose Us
              </a>
              <a
                href="#estimate-calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-stone-50"
              >
                Free Estimate Calculator
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-stone-50"
              >
                Frequently Asked Questions
              </a>
            </nav>
            <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
              <a
                href={telHref}
                className="w-full flex items-center justify-center gap-2 bg-emerald-800 text-white py-3 rounded-xl font-bold shadow-sm"
              >
                <Phone className="w-5 h-5 text-amber-300" />
                <span>Call {phoneNumber}</span>
              </a>
              {onOpenEstimateModal && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEstimateModal();
                  }}
                  className="w-full text-center py-2.5 rounded-xl border border-stone-300 text-stone-800 font-medium hover:bg-stone-50"
                >
                  Request Online Quote
                </button>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
