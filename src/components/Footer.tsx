import React from 'react';
import { Phone, Clock, Trees, MapPin, ShieldCheck, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const phoneNumber = "+1 239-595-2022";
  const telHref = "tel:+12395952022";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-24 md:pb-16 border-t border-stone-800">
      {/* High-Impact Pre-Footer Call to Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-950 to-stone-900 border border-emerald-700/60 p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-amber-300 text-xs font-bold tracking-wider uppercase">
              Ready to Upgrade Your Landscape?
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Let's Bring Your Specimen Trees &amp; Palms to Life
            </h2>

            <p className="text-stone-200 text-base sm:text-lg max-w-2xl mx-auto">
              Get an instant free estimate for palm tree moving, professional planting, or careful tree transplanting. Open daily from 7:00 AM.
            </p>

            {/* Final big CTA button: "Call Us Now" linked to the phone number */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={telHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-lg sm:text-xl px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <Phone className="w-6 h-6 fill-stone-950" />
                <span>Call Us Now</span>
              </a>

              <a
                href="#estimate-calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-100 font-bold text-base px-8 py-5 rounded-2xl border border-emerald-700 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Free Online Estimator</span>
              </a>
            </div>

            <div className="text-sm font-semibold text-stone-300">
              Direct Phone:{" "}
              <a href={telHref} className="text-amber-400 hover:underline">
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Information Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Column 1: Business Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-amber-300">
                <Trees className="w-5 h-5" />
              </div>
              <div className="text-lg font-bold text-white leading-tight">
                Cherrington
                <span className="block text-xs font-normal text-emerald-400 uppercase tracking-wide">
                  Tree Landscaping &amp; Planting
                </span>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Premier tree relocation, specimen palm planting, and delicate tree transplanting services for Southwest Florida estates and residences.
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Licensed, Bonded &amp; Fully Insured</span>
            </div>
          </div>

          {/* Column 2: Direct Contact & Business Hours (Mandatory) */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Direct Contact &amp; Hours
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <div className="text-xs text-stone-400">Business Name:</div>
                <div className="font-semibold text-white">
                  Cherrington Tree Landscaping &amp; Tree Planting
                </div>
              </li>
              <li>
                <div className="text-xs text-stone-400">Phone Number:</div>
                <a
                  href={telHref}
                  className="font-bold text-amber-400 hover:text-amber-300 text-base flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{phoneNumber}</span>
                </a>
              </li>
              <li>
                <div className="text-xs text-stone-400">Business Hours:</div>
                <div className="flex items-center gap-2 text-white font-medium">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Open Daily from 7:00 AM</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Services &amp; Navigation
            </h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Palm Tree Moving
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Tree Installation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Tree Transplanting
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-emerald-400 transition-colors">
                  Google 5.0 Star Reviews
                </a>
              </li>
              <li>
                <a href="#estimate-calculator" className="hover:text-emerald-400 transition-colors">
                  Free Estimate Calculator
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Territory in SW Florida */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Service Areas
            </h3>
            <p className="text-xs text-stone-400">
              Proudly dispatching heavy crane and planting crews daily across:
            </p>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {[
                "Naples",
                "Fort Myers",
                "Bonita Springs",
                "Cape Coral",
                "Estero",
                "Marco Island",
                "Sanibel Island",
                "Pelican Bay",
                "North Fort Myers",
              ].map((area) => (
                <span
                  key={area}
                  className="px-2.5 py-1 rounded bg-stone-900 border border-stone-800 text-stone-300"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="pt-2">
              <a
                href={telHref}
                className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold underline"
              >
                Inquire about your neighborhood →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Cherrington Tree Landscaping &amp; Tree Planting. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href={telHref} className="hover:text-stone-300 transition-colors">
              Call {phoneNumber}
            </a>
            <span>·</span>
            <span>Open Daily from 7:00 AM</span>
            <span>·</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-emerald-400 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
