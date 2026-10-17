import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Star, Award, CheckCircle2, Trees, Calendar } from 'lucide-react';

interface HeroProps {
  onOpenEstimateModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimateModal }) => {
  const phoneNumber = "+1 239-595-2022";
  const telHref = "tel:+12395952022";

  return (
    <section className="relative overflow-hidden bg-[#0d2818] text-white">
      {/* Background Graphic: Majestic Palm Landscape Scenery with Layered Foliage and Golden Atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-45">
        <svg
          className="w-full h-full object-cover preserve-3d"
          viewBox="0 0 1440 820"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#061d12" />
              <stop offset="45%" stopColor="#0b3820" />
              <stop offset="85%" stopColor="#1e5235" />
              <stop offset="100%" stopColor="#306b45" />
            </linearGradient>
            <radialGradient id="sunGlow" cx="78%" cy="28%" r="48%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.45" />
              <stop offset="30%" stopColor="#f59e0b" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#0d2818" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="trunkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#451a03" />
              <stop offset="50%" stopColor="#78350f" />
              <stop offset="100%" stopColor="#361502" />
            </linearGradient>
            <linearGradient id="palmLeaf1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#064e3b" />
            </linearGradient>
            <linearGradient id="palmLawn" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#1e5436" />
              <stop offset="100%" stopColor="#081e13" />
            </linearGradient>
          </defs>

          {/* Sky background and golden sunlight glow */}
          <rect width="1440" height="820" fill="url(#skyGrad)" />
          <rect width="1440" height="820" fill="url(#sunGlow)" />

          {/* Distant estate garden hill contour */}
          <path
            d="M-20 620 Q 380 520, 800 580 T 1460 540 L 1460 820 L -20 820 Z"
            fill="#123824"
            opacity="0.8"
          />
          <path
            d="M-20 680 Q 420 610, 920 660 T 1460 630 L 1460 820 L -20 820 Z"
            fill="url(#palmLawn)"
          />

          {/* Distant palm silhouettes */}
          <g opacity="0.35">
            {/* Distant palm 1 */}
            <path d="M 450 630 Q 460 480, 480 340" stroke="#062215" strokeWidth="8" strokeLinecap="round" />
            <circle cx="480" cy="340" r="14" fill="#062215" />
            <path d="M 480 340 Q 560 320, 600 370" stroke="#062215" strokeWidth="4" fill="none" />
            <path d="M 480 340 Q 530 280, 560 310" stroke="#062215" strokeWidth="4" fill="none" />
            <path d="M 480 340 Q 480 260, 470 280" stroke="#062215" strokeWidth="4" fill="none" />
            <path d="M 480 340 Q 420 280, 400 330" stroke="#062215" strokeWidth="4" fill="none" />
            <path d="M 480 340 Q 410 340, 380 380" stroke="#062215" strokeWidth="4" fill="none" />

            {/* Distant palm 2 */}
            <path d="M 620 640 Q 640 500, 650 380" stroke="#062215" strokeWidth="7" strokeLinecap="round" />
            <path d="M 650 380 Q 720 350, 750 400" stroke="#062215" strokeWidth="3" fill="none" />
            <path d="M 650 380 Q 660 300, 630 330" stroke="#062215" strokeWidth="3" fill="none" />
            <path d="M 650 380 Q 580 330, 560 370" stroke="#062215" strokeWidth="3" fill="none" />
          </g>

          {/* Foreground Right Stately Royal Palm 1 */}
          <g transform="translate(1080, 60)">
            {/* Trunk with ring segments */}
            <path
              d="M 120 760 Q 140 460, 150 180 Q 155 120, 160 80 L 182 80 Q 175 120, 170 180 Q 160 460, 150 760 Z"
              fill="url(#trunkGrad)"
            />
            {/* Palm crown shaft (emerald green neck) */}
            <rect x="157" y="55" width="26" height="35" rx="3" fill="#15803d" />

            {/* Lush arching palm fronds */}
            {/* Right fronds */}
            <path d="M 170 65 Q 260 20, 360 90" stroke="url(#palmLeaf1)" strokeWidth="7" strokeLinecap="round" fill="none" />
            <path d="M 170 65 Q 280 60, 380 150" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M 170 65 Q 270 110, 340 220" stroke="#16a34a" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M 170 65 Q 230 160, 270 280" stroke="#15803d" strokeWidth="5" strokeLinecap="round" fill="none" />

            {/* Top fronds */}
            <path d="M 170 65 Q 180 -40, 210 -10" stroke="#4ade80" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M 170 65 Q 150 -50, 120 -10" stroke="#34d399" strokeWidth="6" strokeLinecap="round" fill="none" />

            {/* Left fronds */}
            <path d="M 170 65 Q 80 10, -30 70" stroke="url(#palmLeaf1)" strokeWidth="7" strokeLinecap="round" fill="none" />
            <path d="M 170 65 Q 60 60, -50 140" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M 170 65 Q 70 120, -10 220" stroke="#16a34a" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M 170 65 Q 100 170, 40 270" stroke="#15803d" strokeWidth="5" strokeLinecap="round" fill="none" />
          </g>

          {/* Stately Canary Date Palm on mid-right */}
          <g transform="translate(860, 140)">
            {/* Diamond pattern pineapple trunk */}
            <path
              d="M 100 680 Q 95 440, 110 220 L 140 220 Q 125 440, 130 680 Z"
              fill="#5c2605"
            />
            {/* Dense crown */}
            <path d="M 125 220 Q 210 160, 290 230" stroke="#22c55e" strokeWidth="6" fill="none" />
            <path d="M 125 220 Q 220 210, 270 300" stroke="#15803d" strokeWidth="6" fill="none" />
            <path d="M 125 220 Q 140 110, 170 120" stroke="#4ade80" strokeWidth="6" fill="none" />
            <path d="M 125 220 Q 70 120, 40 140" stroke="#34d399" strokeWidth="6" fill="none" />
            <path d="M 125 220 Q 30 180, -40 240" stroke="#16a34a" strokeWidth="6" fill="none" />
            <path d="M 125 220 Q 40 240, 0 310" stroke="#15803d" strokeWidth="5" fill="none" />
          </g>
        </svg>

        {/* Ambient Overlay for High Contrast Text Legibility (WCAG 4.5:1 compliant) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071d11] via-[#092215]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071d11] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Left Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Trust Kicker & Google Rating */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-200 text-xs sm:text-sm font-medium backdrop-blur-xs">
              <span className="flex items-center text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
              </span>
              <span className="font-semibold text-white">5.0 Star Rated Local Tree Service</span>
              <span className="text-emerald-400">·</span>
              <span className="text-emerald-300">Open Daily from 7:00 AM</span>
            </div>

            {/* Mandatory Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
              Expert Tree Landscaping &amp; Planting Services
            </h1>

            {/* Mandatory Sub-headline */}
            <p className="text-lg sm:text-xl text-stone-200 max-w-2xl font-normal leading-relaxed">
              Top-rated tree installation, transplanting, and palm tree moving in your area.
            </p>

            {/* Key Trust Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 pb-2 text-sm text-stone-200 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Property Damage Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Heavy Crane &amp; Spade Equipped</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Specimen Root-Ball Health Care</span>
              </div>
            </div>

            {/* Action Buttons & Contact Info */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Mandatory Call-to-Action (CTA) Button 1 */}
              <a
                href={telHref}
                className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-4 rounded-xl text-base sm:text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <Phone className="w-5 h-5 text-stone-950 fill-stone-950" />
                <span>Get a Free Estimate</span>
              </a>

              {/* Secondary button scrolling to interactive calculator */}
              <a
                href="#estimate-calculator"
                className="inline-flex items-center justify-center gap-2 bg-emerald-900/80 hover:bg-emerald-800 text-white font-semibold px-6 py-4 rounded-xl text-base border border-emerald-700/80 hover:border-emerald-500 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Calculate My Estimate</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" />
              </a>
            </div>

            {/* Prominent Contact Info Display */}
            <div className="pt-2 flex items-center gap-3 text-stone-300 text-sm">
              <span className="text-stone-400">Prefer speaking directly?</span>
              <a
                href={telHref}
                className="text-amber-300 hover:text-amber-200 font-bold underline underline-offset-4 decoration-amber-400/50 hover:decoration-amber-300 text-base flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {phoneNumber}</span>
              </a>
            </div>
          </div>

          {/* Right Highlight Card: Quick Booking & Trust Anchor */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-b from-stone-900/90 to-stone-950/95 border border-emerald-800/60 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md space-y-5">
              <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-800/80 flex items-center justify-center text-amber-400">
                    <Trees className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white">Local Tree Authority</h2>
                    <p className="text-xs text-stone-400">Cherrington Landscaping</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold text-amber-400">Rating 5.0</div>
                  <div className="text-[11px] text-stone-400">Google Verified</div>
                </div>
              </div>

              {/* Quick service bullet points */}
              <div className="space-y-3 text-sm text-stone-200">
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-stone-900/60 border border-stone-800">
                  <span className="w-6 h-6 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <span className="font-semibold text-white block">Palm Tree Relocation</span>
                    <span className="text-xs text-stone-400">Canary, Royal, Bismarck &amp; Coconut palms</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-stone-900/60 border border-stone-800">
                  <span className="w-6 h-6 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <span className="font-semibold text-white block">Specimen Tree Planting</span>
                    <span className="text-xs text-stone-400">Proper soil amendment, root-feed &amp; staking</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-stone-900/60 border border-stone-800">
                  <span className="w-6 h-6 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <span className="font-semibold text-white block">Safe Tree Transplanting</span>
                    <span className="text-xs text-stone-400">Estate redesigns &amp; mature tree preservation</span>
                  </div>
                </div>
              </div>

              {/* Urgent Action in Card */}
              <div className="pt-2 border-t border-stone-800/80">
                <a
                  href={telHref}
                  className="w-full flex items-center justify-center gap-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all text-center text-sm"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>Call {phoneNumber}</span>
                </a>
                <p className="text-[11px] text-center text-stone-400 mt-2">
                  Same-day &amp; next-day estimates available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
