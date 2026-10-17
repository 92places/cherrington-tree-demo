import React from 'react';
import { Phone, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const phoneNumber = "+1 239-595-2022";
  const telHref = "tel:+12395952022";

  const services = [
    {
      id: "palm-moving",
      title: "Palm Tree Moving",
      // Exact prompt text:
      description: "Safe, efficient, and professional palm tree relocation without damaging your property.",
      badge: "Signature Specialty",
      keyPoints: [
        "Specialized crane rigging & hydraulic equipment",
        "Ground protection mats prevent lawn damage",
        "Canary, Royal, Coconut & Sabal palm relocation",
        "Estate redesigns & utility-clearance moves",
      ],
      idealFor: "Homeowners repositioning prized palms, pool installations, and architectural landscape redesigns.",
      actionLabel: "Call for Palm Tree Moving",
      // Custom SVG Visual Scene for Palm Moving
      illustration: (
        <svg className="w-full h-48 rounded-xl object-cover" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="palmMoveBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0d331f" />
              <stop offset="100%" stopColor="#1a4c33" />
            </linearGradient>
            <linearGradient id="craneArm" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#palmMoveBg)" />
          {/* Lawn bottom */}
          <path d="M0 170 Q 200 160 400 170 L 400 220 L 0 220 Z" fill="#0b2416" />

          {/* Crane Arm / Rigging */}
          <path d="M 40 200 L 160 40 L 220 50" stroke="url(#craneArm)" strokeWidth="9" strokeLinecap="round" />
          <line x1="80" y1="150" x2="160" y2="40" stroke="#b45309" strokeWidth="4" />
          <line x1="160" y1="40" x2="220" y2="90" stroke="#fef08a" strokeWidth="2.5" strokeDasharray="4 2" />
          <circle cx="220" cy="90" r="5" fill="#f59e0b" />

          {/* Relocated Palm with Burlap Root Ball */}
          <g transform="translate(220, 90)">
            {/* Rigging harness straps */}
            <path d="M 0 0 L -8 30 M 0 0 L 8 30" stroke="#f59e0b" strokeWidth="2" />
            {/* Trunk */}
            <path d="M -7 25 Q -3 60, -5 95 L 5 95 Q 3 60, 7 25 Z" fill="#78350f" stroke="#451a03" strokeWidth="1" />
            {/* Wrapped root ball */}
            <ellipse cx="0" cy="98" rx="26" ry="16" fill="#92400e" stroke="#b45309" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M -20 98 Q 0 110, 20 98" stroke="#451a03" strokeWidth="1.5" fill="none" />
            {/* Lush crown */}
            <path d="M 0 25 Q 35 5, 65 25" stroke="#34d399" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            <path d="M 0 25 Q 40 30, 60 55" stroke="#10b981" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M 0 25 Q -35 5, -65 25" stroke="#34d399" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            <path d="M 0 25 Q -40 30, -60 55" stroke="#10b981" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M 0 25 Q 0 -15, 10 -5" stroke="#4ade80" strokeWidth="4" strokeLinecap="round" fill="none" />
          </g>

          {/* Precision landing site marker */}
          <ellipse cx="320" cy="180" rx="35" ry="12" fill="#081e13" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 2" />
          <text x="320" y="184" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="600" fontFamily="sans-serif">New Prepared Bed</text>
        </svg>
      ),
    },
    {
      id: "tree-installation",
      title: "Tree Installation",
      // Exact prompt text:
      description: "Enhance your landscape with our expert tree planting and installation services.",
      badge: "Growth Guaranteed",
      keyPoints: [
        "Hand-selected, climate-acclimated specimen trees",
        "Nutrient-rich organic compost & soil conditioning",
        "Heavy-duty arbor-tie staking & wind protection",
        "Deep-root hydration & starter biome injection",
      ],
      idealFor: "New estate development, privacy hedge barriers, shade canopy creation, and tropical garden upgrades.",
      actionLabel: "Call for Tree Installation",
      // Custom SVG Visual Scene for Tree Installation
      illustration: (
        <svg className="w-full h-48 rounded-xl object-cover" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="installBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#143522" />
              <stop offset="100%" stopColor="#215238" />
            </linearGradient>
            <linearGradient id="foliageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="50%" stopColor="#16a34a" />
              <stop offset="100%" stopColor="#14532d" />
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#installBg)" />
          {/* Garden landscape ground */}
          <path d="M0 165 Q 200 155 400 165 L 400 220 L 0 220 Z" fill="#0d2618" />

          {/* Prepared circular mulch bed */}
          <ellipse cx="200" cy="180" rx="90" ry="24" fill="#3f2314" stroke="#5c2605" strokeWidth="2" />
          <ellipse cx="200" cy="180" rx="45" ry="12" fill="#29160c" />

          {/* Staking supports */}
          <line x1="145" y1="185" x2="190" y2="120" stroke="#b45309" strokeWidth="4" strokeLinecap="round" />
          <line x1="255" y1="185" x2="210" y2="120" stroke="#b45309" strokeWidth="4" strokeLinecap="round" />
          <line x1="188" y1="120" x2="212" y2="120" stroke="#f59e0b" strokeWidth="2.5" />

          {/* Specimen Tree Canopy and Trunk */}
          <path d="M 194 180 L 196 110 L 204 110 L 206 180 Z" fill="#78350f" />
          {/* Canopy blobs */}
          <circle cx="200" cy="85" r="46" fill="url(#foliageGrad)" />
          <circle cx="170" cy="90" r="34" fill="#15803d" />
          <circle cx="230" cy="90" r="34" fill="#22c55e" />
          <circle cx="200" cy="55" r="32" fill="#4ade80" />

          {/* Fresh planting indicator */}
          <g transform="translate(20, 25)">
            <rect x="0" y="0" width="130" height="28" rx="6" fill="#0d2818" opacity="0.9" stroke="#16a34a" strokeWidth="1" />
            <text x="65" y="18" textAnchor="middle" fill="#86efac" fontSize="11" fontWeight="600" fontFamily="sans-serif">Root Fed &amp; Staked</text>
          </g>
        </svg>
      ),
    },
    {
      id: "tree-transplanting",
      title: "Tree Transplanting",
      // Exact prompt text:
      description: "Careful extraction and replanting to preserve tree health and beauty.",
      badge: "Root-Ball Preservation",
      keyPoints: [
        "Precision circular root-trenching & hydraulic lifting",
        "Moisture retention wrapping & anti-desiccant spray",
        "Pre-transplant canopy thinning to reduce stress",
        "Custom acclimation & monitoring protocol",
      ],
      idealFor: "Preserving heritage trees during construction, moving oversized specimens, and property re-grading.",
      actionLabel: "Call for Tree Transplanting",
      // Custom SVG Visual Scene for Tree Transplanting
      illustration: (
        <svg className="w-full h-48 rounded-xl object-cover" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="transBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#102e1d" />
              <stop offset="100%" stopColor="#1a462d" />
            </linearGradient>
            <linearGradient id="heartRoot" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a16207" />
              <stop offset="100%" stopColor="#713f12" />
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#transBg)" />
          {/* Excavated trench graphic */}
          <path d="M0 160 L 130 160 L 160 195 L 240 195 L 270 160 L 400 160 L 400 220 L 0 220 Z" fill="#0b2114" />
          <path d="M 160 195 Q 200 215 240 195" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />

          {/* Carefully balled tree with mesh */}
          <g transform="translate(200, 150)">
            {/* Root ball */}
            <ellipse cx="0" cy="20" rx="36" ry="24" fill="url(#heartRoot)" stroke="#eab308" strokeWidth="2" strokeDasharray="4 2" />
            <path d="M -30 20 Q 0 40 30 20" stroke="#5c2605" strokeWidth="1.5" fill="none" />
            <path d="M -20 10 Q 0 32 20 10" stroke="#5c2605" strokeWidth="1.5" fill="none" />
            {/* Trunk */}
            <path d="M -6 10 L -4 -65 L 4 -65 L 6 10 Z" fill="#78350f" />
            {/* Balanced pruned transplant canopy */}
            <circle cx="0" cy="-85" r="38" fill="#15803d" />
            <circle cx="-20" cy="-80" r="26" fill="#16a34a" />
            <circle cx="20" cy="-80" r="26" fill="#22c55e" />
            <circle cx="0" cy="-105" r="24" fill="#4ade80" />
          </g>

          {/* Extraction arrow & health indicator */}
          <g transform="translate(20, 25)">
            <rect x="0" y="0" width="145" height="28" rx="6" fill="#0d2818" opacity="0.9" stroke="#eab308" strokeWidth="1" />
            <text x="72" y="18" textAnchor="middle" fill="#fde047" fontSize="11" fontWeight="600" fontFamily="sans-serif">98.4% Survival Rate</text>
          </g>
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Comprehensive Tree Care &amp; Relocation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            Our Professional Services
          </h2>
          <p className="text-base sm:text-lg text-stone-600">
            Backed by specialized heavy machinery, certified arborists, and deep Florida horticultural expertise.
          </p>
        </div>

        {/* 3 Grid Layout for the Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
            >
              {/* Card Visual Illustration Banner */}
              <div className="relative p-3 bg-stone-50 border-b border-stone-100">
                {service.illustration}
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-stone-900/85 backdrop-blur-md text-amber-300 text-xs font-semibold shadow-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{service.badge}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded">
                      0{index + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Exact prompt text description */}
                  <p className="text-stone-700 font-medium leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2 border-t border-stone-100">
                    <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2.5">
                      Service Standards:
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                      {service.keyPoints.map((point, ptIdx) => (
                        <li key={ptIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons (Clickable to tel and mobile tap friendly) */}
                <div className="space-y-2 pt-2 border-t border-stone-100">
                  <a
                    href={telHref}
                    className="w-full flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-xs hover:shadow transition-all text-sm cursor-pointer whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4 text-amber-300" />
                    <span>{service.actionLabel}</span>
                  </a>

                  {onSelectService && (
                    <button
                      type="button"
                      onClick={() => onSelectService(service.title)}
                      className="w-full text-center text-xs font-semibold text-stone-500 hover:text-emerald-800 py-1.5 transition-colors"
                    >
                      Calculate Cost Online →
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Equipment & Protection Callout Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-emerald-950 text-white border border-emerald-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-emerald-800/80 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Full Property Protection Guarantee</h4>
              <p className="text-sm text-emerald-200/90 max-w-xl">
                We utilize heavy-duty synthetic ground protection mats, specialized crane outrigger pads, and precision rigging to protect your irrigation, pavers, and existing turf.
              </p>
            </div>
          </div>
          <a
            href={telHref}
            className="shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md whitespace-nowrap"
          >
            <Phone className="w-4 h-4 fill-stone-950" />
            <span>Call {phoneNumber}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
