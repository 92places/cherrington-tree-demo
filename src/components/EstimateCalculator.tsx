import React, { useState } from 'react';
import { Calculator, Phone, CheckCircle2, Trees, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface EstimateCalculatorProps {
  initialService?: string;
}

export const EstimateCalculator: React.FC<EstimateCalculatorProps> = ({ initialService = "Palm Tree Moving" }) => {
  const [service, setService] = useState(initialService);
  const [treeSize, setTreeSize] = useState<string>("medium");
  const [treeCount, setTreeCount] = useState<number>(1);
  const [location, setLocation] = useState<string>("Naples / Fort Myers");
  const [userPhone, setUserPhone] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const phoneNumber = "+1 239-595-2022";
  const telHref = "tel:+12395952022";

  // Approximate ballpark estimates for transparency
  const calculateBallpark = () => {
    let base = 350;
    if (service === "Palm Tree Moving") {
      base = treeSize === "small" ? 450 : treeSize === "medium" ? 850 : 1450;
    } else if (service === "Tree Installation") {
      base = treeSize === "small" ? 300 : treeSize === "medium" ? 600 : 1100;
    } else {
      // Tree Transplanting
      base = treeSize === "small" ? 400 : treeSize === "medium" ? 750 : 1300;
    }
    const totalLow = base * treeCount;
    const totalHigh = Math.round(totalLow * 1.35);
    return { low: totalLow, high: totalHigh };
  };

  const estimate = calculateBallpark();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="estimate-calculator" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Background subtle foliage glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700 text-emerald-300 text-xs font-semibold">
              <Calculator className="w-3.5 h-3.5" />
              <span>Instant Interactive Quote Tool</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Get Your Free Project Estimate in 60 Seconds
            </h2>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              Every tree relocation and installation is unique. Use our instant estimator to check transparent price ranges for your tree size and scope.
            </p>

            <div className="space-y-3.5 pt-2 text-stone-200 text-sm">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Zero Obligation, 100% Free On-Site Survey</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Equipment &amp; Crane Crew Included</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Open Daily from 7:00 AM for Swift Dispatch</span>
              </div>
            </div>

            <div className="pt-4 p-5 rounded-2xl bg-stone-800/80 border border-stone-700">
              <div className="text-xs text-stone-400 uppercase font-semibold">Prefer a Fast Phone Quote?</div>
              <div className="text-sm text-stone-200 mt-1">Our lead arborist is available to give phone estimates right now.</div>
              <a
                href={telHref}
                className="mt-3 inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold text-lg"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>{phoneNumber}</span>
              </a>
            </div>
          </div>

          {/* Right Interactive Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Service Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                      1. Select Your Service
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {["Palm Tree Moving", "Tree Installation", "Tree Transplanting"].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setService(item)}
                          className={`px-3 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left border ${
                            service === item
                              ? "bg-emerald-800 text-white border-emerald-500 shadow-sm"
                              : "bg-stone-900 text-stone-300 border-stone-800 hover:border-stone-700"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Tree Height / Size */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                      2. Tree Height / Caliper Size
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { id: "small", label: "Small (Under 12 ft)" },
                        { id: "medium", label: "Medium (12 – 22 ft)" },
                        { id: "large", label: "Mature (22+ ft Specimen)" },
                      ].map((size) => (
                        <button
                          key={size.id}
                          type="button"
                          onClick={() => setTreeSize(size.id)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-medium transition-all text-center border ${
                            treeSize === size.id
                              ? "bg-emerald-800 text-white border-emerald-500 shadow-sm"
                              : "bg-stone-900 text-stone-300 border-stone-800 hover:border-stone-700"
                          }`}
                        >
                          {size.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Tree Quantity */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                        3. Number of Trees: <span className="text-amber-400 font-bold">{treeCount}</span>
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="8"
                        value={treeCount}
                        onChange={(e) => setTreeCount(parseInt(e.target.value, 10))}
                        className="w-full accent-emerald-500 h-2 bg-stone-800 rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[11px] text-stone-500 mt-1">
                        <span>1 Tree</span>
                        <span>4 Trees</span>
                        <span>8+ Trees</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-2">
                        Area / Location
                      </label>
                      <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-stone-900 border border-stone-800 text-stone-200 text-sm rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-emerald-500"
                      >
                        <option>Naples / Pelican Bay / Port Royal</option>
                        <option>Fort Myers / Fort Myers Beach</option>
                        <option>Bonita Springs / Estero</option>
                        <option>Cape Coral / North Fort Myers</option>
                        <option>Marco Island / Sanibel Island</option>
                        <option>Other Southwest Florida Area</option>
                      </select>
                    </div>
                  </div>

                  {/* Dynamic Estimate Output Box */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950 to-stone-900 border border-emerald-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <div className="text-xs text-emerald-300 font-semibold uppercase">Estimated Investment Range</div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                        ${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}
                      </div>
                      <div className="text-[11px] text-stone-400 mt-0.5">
                        *Includes equipment, root-ball protection, and professional labor.
                      </div>
                    </div>

                    <a
                      href={telHref}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md whitespace-nowrap"
                    >
                      <Phone className="w-4 h-4 fill-stone-950" />
                      <span>Lock In Estimate: Call Now</span>
                    </a>
                  </div>

                  {/* Phone input for quick callback */}
                  <div className="pt-2">
                    <label className="block text-xs font-semibold text-stone-400 mb-1.5">
                      Or request a call back to confirm your date:
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="tel"
                        required
                        placeholder="Your phone number (e.g. 239-555-0199)"
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                        className="flex-1 bg-stone-900 border border-stone-800 text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-emerald-500"
                      />
                      <button
                        type="submit"
                        className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Request Callback
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-900 text-emerald-300 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Callback Request Received!</h3>
                  <p className="text-stone-300 text-sm max-w-md mx-auto">
                    Thank you! Our arborist will call <span className="text-amber-400 font-semibold">{userPhone || "your number"}</span> shortly to review your {service.toLowerCase()} project.
                  </p>
                  <div className="pt-4">
                    <a
                      href={telHref}
                      className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-6 py-3.5 rounded-xl text-base shadow-md"
                    >
                      <Phone className="w-5 h-5 fill-stone-950" />
                      <span>Need Immediate Service? Call {phoneNumber}</span>
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setUserPhone("");
                    }}
                    className="text-xs text-stone-400 hover:text-stone-200 underline pt-2 block mx-auto"
                  >
                    Calculate another estimate
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
