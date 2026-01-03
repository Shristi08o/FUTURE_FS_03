
import React from 'react';

const BrandingStrategy: React.FC = () => {
  return (
    <section className="py-12 px-6 relative overflow-hidden">
      <div className="absolute inset-0 liquid-bg opacity-40"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-black italic mb-6 transform -skew-x-6 tracking-tighter">FLUID IDENTITY 2026</h2>
          <div className="space-y-6">
            <div className="neumorphic-inset p-6 rounded-[1.5rem] bg-[#080808]/80 border border-white/5">
              <h3 className="text-[#FF0033] font-black italic mb-2 uppercase tracking-tighter text-sm">Real Magic, Real Time</h3>
              <p className="text-slate-300 leading-relaxed text-sm font-medium">
                Our "Adaptive Refresh" system uses AI to adjust flavor intensity based on your 
                real-time biometric feedback.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 glass rounded-2xl border-l-2 border-l-[#FF0033]">
                <div className="w-10 h-0.5 bg-[#FF0033] mb-3"></div>
                <h4 className="font-black italic text-white text-base">Cyber Red</h4>
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-wider">Energy</p>
              </div>
              <div className="p-4 glass rounded-2xl border-l-2 border-l-[#BCA0DC]">
                <div className="w-10 h-0.5 bg-[#BCA0DC] mb-3"></div>
                <h4 className="font-black italic text-white text-base">Digital Lavender</h4>
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-wider">Clarity</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative group max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF0033]/20 to-[#BCA0DC]/20 rounded-[40px] blur-xl"></div>
            <div className="relative glass rounded-[40px] aspect-square overflow-hidden flex flex-col items-center justify-center p-8 border-white/10">
                <div className="w-32 h-32 mb-4 relative flex items-center justify-center text-6xl">
                   <div className="absolute inset-0 bg-[#FF0033] rounded-full animate-ping opacity-10"></div>
                   🥤
                </div>
                <h3 className="text-xl font-black italic text-white mb-2 transform -skew-x-6">LIQUID GRID</h3>
                <p className="text-slate-400 text-center text-xs font-medium max-w-[200px]">
                    Borderless and responsive refreshment.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingStrategy;
