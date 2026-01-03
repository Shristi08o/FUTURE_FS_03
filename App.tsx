
import React, { useState, useEffect } from 'react';
import { getCampaigns, getProducts } from './services/strapiService';
import { Campaign, Product } from './types';
import Logo from './components/Logo';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import BrandingStrategy from './components/BrandingStrategy';

const App: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [campaignData, productData] = await Promise.all([
          getCampaigns(),
          getProducts()
        ]);
        setCampaigns(campaignData);
        setProducts(productData);
      } catch (err) {
        console.error("Failed to fetch brand data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <div className="relative w-16 h-16 mb-4">
           <div className="absolute inset-0 border-3 border-[#FF0033] border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-[#FF0033] font-black italic text-sm animate-pulse tracking-widest transform -skew-x-12">SYNCHRONIZING...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-slate-50 selection:bg-[#FF0033]/50 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-[1.5rem] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <Logo />
          
          <div className="hidden lg:flex items-center gap-8 font-black italic text-[10px] tracking-widest uppercase">
            <a href="#" className="hover:text-[#FF0033] transition-colors">Drops</a>
            <a href="#" className="hover:text-[#FF0033] transition-colors">Merch</a>
            <a href="#" className="hover:text-[#FF0033] transition-colors">Science</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group cursor-pointer">
               <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF0033] to-[#BCA0DC] flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-[10px] bg-black flex items-center justify-center font-black italic text-[10px]">
                  ID
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        
        {/* Dynamic Campaigns Section - Compressed */}
        <section className="py-12 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
               <h2 className="text-2xl md:text-3xl font-black italic tracking-tighter transform -skew-x-6">TRENDING</h2>
               <div className="flex-1 h-[1px] bg-gradient-to-r from-[#FF0033] to-transparent"></div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              {campaigns.map((camp) => (
                <div key={camp.id} className="flex-1 group relative h-[400px] rounded-[2.5rem] overflow-hidden border border-white/5">
                  <img src={camp.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70" alt={camp.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-8 left-8 right-8">
                    <span className="inline-block px-3 py-1 bg-[#FF0033] rounded-lg text-[8px] font-black uppercase tracking-widest text-white mb-3">
                      {camp.tag}
                    </span>
                    <h3 className="text-3xl font-black italic text-white mb-2 leading-none transform -skew-x-6">{camp.title}</h3>
                    <p className="text-slate-400 text-sm mb-4 max-w-xs font-medium">{camp.description}</p>
                    <button className="flex items-center gap-2 text-white font-black italic text-[10px] tracking-widest uppercase hover:text-[#FF0033] transition-all">
                      Unlock <span>→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <BrandingStrategy />
        <BentoGrid products={products} />

        <footer className="py-12 px-6 border-t border-white/5 bg-black">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <Logo />
            <p className="text-[9px] text-slate-700 font-bold uppercase tracking-widest italic">
              © 2026 COCA-COLA. FLOW SYSTEM V4.2
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
