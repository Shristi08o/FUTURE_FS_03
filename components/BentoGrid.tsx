
import React from 'react';
import { Product } from '../types';

interface BentoGridProps {
  products: Product[];
}

const BentoGrid: React.FC<BentoGridProps> = ({ products }) => {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-4xl font-black italic transform -skew-x-6 tracking-tight mb-2">PRODUCT SHOWCASE</h2>
          <p className="text-slate-400 text-sm">Curated artifacts of the 2026 flow.</p>
        </div>
        <div className="flex gap-2">
            {['All', 'Drinks', 'Gear'].map(cat => (
                <button key={cat} className="px-3 py-1.5 text-[10px] font-bold uppercase glass rounded-lg hover:bg-white/5 transition-colors">
                    {cat}
                </button>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 auto-rows-[180px]">
        {products.map((product) => (
          <div 
            key={product.id} 
            className={`group relative glass rounded-2xl overflow-hidden cursor-pointer transition-all hover:scale-[1.01] ${product.gridSpan || ''}`}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
            
            <div className="absolute bottom-0 left-0 p-4 w-full">
              <div className="flex justify-between items-end">
                <div>
                    <span className="text-[8px] uppercase tracking-widest text-[#FF0033] font-black mb-1 block">
                        {product.category}
                    </span>
                    <h3 className="text-base md:text-lg font-black italic transform -skew-x-3 text-white group-hover:text-[#FF0033] transition-colors leading-tight">
                        {product.name}
                    </h3>
                </div>
                <div className="text-sm font-mono text-slate-400">
                    {product.price}
                </div>
              </div>
            </div>

            <div 
                className="absolute top-3 right-3 w-1 h-1 rounded-full"
                style={{ backgroundColor: product.accentColor, boxShadow: `0 0 8px ${product.accentColor}` }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
