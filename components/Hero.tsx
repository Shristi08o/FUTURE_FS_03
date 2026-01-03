
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-6 overflow-hidden pt-16">
      {/* Liquid Background Elements - Slightly smaller blur */}
      <div className="absolute top-1/4 -left-20 w-[300px] h-[300px] bg-[#FF0033]/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-[#BCA0DC]/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1 mb-4 glass rounded-full text-[10px] md:text-xs font-bold tracking-widest text-[#FF0033] uppercase">
          Digitally Refreshing Since 1886
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black italic leading-[0.9] mb-6 tracking-tighter transform -skew-x-6">
          DRINK THE <br /> 
          <span className="text-gradient">FUTURE.</span>
        </h1>
        
        <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
          Experience <span className="text-white">Coke Flow 2026</span>—where every drop is data-driven refreshment.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3 bg-[#FF0033] hover:bg-[#CC0029] text-white font-black italic rounded-xl transition-all shadow-[0_0_30px_rgba(255,0,51,0.3)] hover:scale-105 uppercase tracking-widest text-sm">
            Start Your Flow
          </button>
          <button className="px-8 py-3 glass text-white font-bold rounded-xl transition-all hover:bg-white/5 hover:scale-105 border border-white/10 uppercase tracking-widest text-sm">
            Explore Tech
          </button>
        </div>
      </div>

      {/* Floating Elements - Smaller scale */}
      <div className="hidden lg:block absolute left-[5%] top-1/4 w-20 h-40 glass rounded-[24px] animate-float opacity-30 border-red-500/20"></div>
      <div className="hidden lg:block absolute right-[8%] bottom-1/4 w-16 h-32 glass rounded-[20px] animate-float delay-1000 opacity-20 border-purple-500/20"></div>
    </section>
  );
};

export default Hero;
