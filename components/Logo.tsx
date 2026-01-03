
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="relative group cursor-pointer flex items-center gap-2">
      <div className="w-10 h-10 md:w-12 md:h-12 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FF0033] to-[#BCA0DC] rounded-xl blur-sm group-hover:blur-md transition-all animate-pulse opacity-60"></div>
        <div className="absolute inset-1 bg-black rounded-lg flex items-center justify-center border border-white/10">
          <span className="text-2xl font-black italic text-[#FF0033] transform -skew-x-12">C</span>
        </div>
      </div>
      <div className="flex flex-col -space-y-1">
        <span className="font-black text-2xl md:text-3xl tracking-tighter italic text-white transform -skew-x-12">
          COKE<span className="text-[#FF0033]">FLOW</span>
        </span>
        <span className="text-[8px] font-bold tracking-[0.3em] text-[#BCA0DC] uppercase pl-1">The Real Magic 2026</span>
      </div>
    </div>
  );
};

export default Logo;
