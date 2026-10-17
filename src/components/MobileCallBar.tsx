import React from 'react';
import { Phone, Clock } from 'lucide-react';

export const MobileCallBar: React.FC = () => {
  const phoneNumber = "+1 239-595-2022";
  const telHref = "tel:+12395952022";

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-stone-950/95 backdrop-blur-md border-t border-stone-800 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={telHref}
          className="flex-1 flex items-center justify-center gap-2.5 bg-amber-500 active:bg-amber-400 text-stone-950 font-bold py-3 px-4 rounded-xl shadow-lg transition-transform active:scale-95 text-center text-sm"
          aria-label="Call +1 239-595-2022 for Free Estimate"
        >
          <Phone className="w-4 h-4 fill-stone-950" />
          <span className="tracking-tight">Call (239) 595-2022 · Free Estimate</span>
        </a>
      </div>
    </div>
  );
};
