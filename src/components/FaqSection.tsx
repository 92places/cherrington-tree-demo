import React, { useState } from 'react';
import { ChevronDown, Phone, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const phoneNumber = "+1 239-595-2022";
  const telHref = "tel:+12395952022";

  const faqs = [
    {
      q: "Can large palm trees be relocated without damaging them or my lawn?",
      a: "Yes! Palmate and pinnate palm trees possess fibrous root systems that regenerate exceptionally well when handled with specialized arborist equipment. We utilize ground-protection composite mats to distribute equipment weight across your turf and pavers, and carefully bundle the fronds to prevent crown stress during transport.",
    },
    {
      q: "What types of palm trees do you move and install?",
      a: "We regularly install and relocate all major Florida palm varieties including Royal Palms, Canary Island Date Palms (Sylvester & Dactylifera), Bismarck Palms, Coconut Palms, Sabal Palms (Cabbage Palms), Foxtail Palms, and Mediterranean Fan Palms.",
    },
    {
      q: "What is included with your tree installation service?",
      a: "Our complete installation includes site excavation, soil conditioning with organic amendments and mycorrhizal inoculants, proper depth placement, triple-point staking for wind stability, a generous clean mulch ring, deep initial hydration, and complete post-planting care instructions.",
    },
    {
      q: "How quickly can you provide an on-site estimate and begin work?",
      a: "We are open daily starting at 7:00 AM. In most cases throughout Naples, Fort Myers, Bonita Springs, and Cape Coral, we can provide same-day or next-day on-site evaluations and schedule service within a few days.",
    },
    {
      q: "Are you licensed and insured?",
      a: "Absolutely. Cherrington Tree Landscaping & Tree Planting carries comprehensive commercial liability insurance and full workers' compensation coverage for your complete peace of mind.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Clear Answers for Tree Owners
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Have questions about palm tree moving, root health, or installation? Call us directly or browse below.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-stone-200 rounded-2xl overflow-hidden transition-all duration-200 bg-stone-50/50"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-stone-900 hover:text-emerald-800 transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-900' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="font-bold text-stone-900">Have a specific tree question not listed here?</div>
            <div className="text-xs text-stone-500">Speak directly with our tree specialists today.</div>
          </div>
          <a
            href={telHref}
            className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white font-bold px-5 py-3 rounded-xl text-sm transition-colors whitespace-nowrap shadow-xs"
          >
            <Phone className="w-4 h-4 text-amber-300" />
            <span>Call {phoneNumber}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
