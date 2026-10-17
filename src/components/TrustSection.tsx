import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Phone, Quote } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const phoneNumber = "+1 239-595-2022";
  const telHref = "tel:+12395952022";

  const reviews = [
    {
      author: "Robert Montgomery",
      location: "Naples, FL",
      tag: "Palm Relocation",
      time: "2 weeks ago",
      highlightPhrase: "attention to detail",
      reviewText:
        "Cherrington moved two massive 25-foot royal palms for our backyard pool renovation. Their attention to detail was truly remarkable—every step was measured, ground protection mats saved our turf, and not a single paver was disturbed.",
      initials: "RM",
      bgColor: "bg-emerald-900",
    },
    {
      author: "Sarah & Mark Jenkins",
      location: "Bonita Springs, FL",
      tag: "Tree Installation",
      time: "1 month ago",
      highlightPhrase: "smooth process",
      reviewText:
        "From our initial phone estimate to the final inspection, it was such a smooth process. The crew arrived promptly with heavy crane equipment and completed installation of our specimen privacy palms in just a few hours.",
      initials: "SJ",
      bgColor: "bg-amber-900",
    },
    {
      author: "David Linfield",
      location: "Cape Coral, FL",
      tag: "Tree Transplanting",
      time: "3 weeks ago",
      highlightPhrase: "knowledgeable staff",
      reviewText:
        "We needed to save three mature native shade trees during our property expansion. Truly knowledgeable staff who carefully preserved the root ball and explained post-care watering. The trees are thriving!",
      initials: "DL",
      bgColor: "bg-emerald-800",
    },
  ];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Big Google Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Verified Local Customer Feedback
          </div>

          {/* Big Highlight Badge as requested: "Proudly Rated 5.0 Stars on Google!" */}
          <div className="inline-block p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-950 to-stone-950 text-white shadow-xl border border-emerald-700/50">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {/* Google stylized G */}
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-md shrink-0">
                <svg className="w-9 h-9" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
              </div>

              <div className="text-center sm:text-left space-y-1">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
                  <Star className="w-6 h-6 fill-amber-400" />
                  <Star className="w-6 h-6 fill-amber-400" />
                  <Star className="w-6 h-6 fill-amber-400" />
                  <Star className="w-6 h-6 fill-amber-400" />
                  <Star className="w-6 h-6 fill-amber-400" />
                  <span className="ml-2 font-black text-xl text-white">5.0</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Proudly Rated 5.0 Stars on Google!
                </h3>
                <p className="text-xs sm:text-sm text-emerald-200">
                  Based on authentic verified Southwest Florida customer reviews
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-stone-50 rounded-2xl border border-stone-200/90 p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative"
            >
              <div className="space-y-4">
                {/* Review Header with Stars & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-4 h-4 fill-amber-500" />
                    <Star className="w-4 h-4 fill-amber-500" />
                    <Star className="w-4 h-4 fill-amber-500" />
                    <Star className="w-4 h-4 fill-amber-500" />
                    <Star className="w-4 h-4 fill-amber-500" />
                  </div>
                  <span className="text-xs font-semibold text-stone-500">
                    {rev.time}
                  </span>
                </div>

                {/* Highlight Mention Tag */}
                <div className="text-xs font-bold text-emerald-800 bg-emerald-100/70 inline-block px-2.5 py-1 rounded">
                  Highlighted: "{rev.highlightPhrase}"
                </div>

                {/* Review Body */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic">
                  "{rev.reviewText}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-stone-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${rev.bgColor} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs`}
                  >
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 leading-none">
                      {rev.author}
                    </h4>
                    <p className="text-xs text-stone-500 mt-1">{rev.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Review Proof Bar */}
        <div className="mt-12 text-center">
          <p className="text-sm text-stone-600 mb-4">
            Join hundreds of satisfied Florida homeowners and estate managers.
          </p>
          <a
            href={telHref}
            className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl text-sm transition-colors shadow-xs"
          >
            <Phone className="w-4 h-4 text-amber-300" />
            <span>Call {phoneNumber} for Reference Inquiries</span>
          </a>
        </div>
      </div>
    </section>
  );
};
