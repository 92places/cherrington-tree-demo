import React from 'react';
import { ShieldCheck, Trees, Truck, Award, CheckCircle2, Phone, Clock } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const phoneNumber = "+1 239-595-2022";
  const telHref = "tel:+12395952022";

  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-700" />,
      title: "Licensed & Fully Insured",
      description:
        "Comprehensive commercial liability and workers' compensation coverage protects your estate, structures, and valuable landscaping.",
    },
    {
      icon: <Truck className="w-6 h-6 text-emerald-700" />,
      title: "Specialized Palm & Tree Rigging",
      description:
        "Heavy-duty hydraulic cranes, mechanical tree spades, and turf-protection composite mats engineered to move massive palms safely.",
    },
    {
      icon: <Trees className="w-6 h-6 text-emerald-700" />,
      title: "Certified Root-Ball Health Care",
      description:
        "We treat every tree as a living specimen. Proper root pruning, hydration formulas, and soil biome enrichment ensure long-term vitality.",
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-700" />,
      title: "Open Daily from 7:00 AM",
      description:
        "Swift response times across Naples, Bonita Springs, Fort Myers, Cape Coral, and Marco Island with prompt on-site estimates.",
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Architecture Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              The Cherrington Difference
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Why Southwest Florida Entrusts Us With Their Specimen Trees
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              Moving a mature palm or installing large canopy trees is an engineering and horticultural feat. A single mistake can kill a multi-thousand dollar tree or ruin expensive landscape hardscaping.
            </p>
            <p className="text-stone-600 text-base leading-relaxed">
              At Cherrington Tree Landscaping &amp; Tree Planting, our precision equipment, root protection protocols, and decades of regional experience deliver zero property damage and flourishing results.
            </p>

            <div className="pt-2">
              <a
                href={telHref}
                className="inline-flex items-center gap-3 bg-emerald-800 hover:bg-emerald-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-xs hover:shadow transition-all text-sm"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call {phoneNumber} to Consult</span>
              </a>
            </div>
          </div>

          {/* Right 4 Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
