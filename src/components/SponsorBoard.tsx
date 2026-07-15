import { useState } from 'react';
import { SPONSOR_COTAS } from '../data';
import { Award, Compass, Heart, Share2, HelpCircle } from 'lucide-react';

export default function SponsorBoard() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'visual' | 'midia' | 'experiencia'>('all');

  const filteredBenefits = activeFilter === 'all' 
    ? SPONSOR_COTAS 
    : SPONSOR_COTAS.filter(item => item.category === activeFilter);

  const filterTabs = [
    { id: 'all', label: 'Todos os Benefícios' },
    { id: 'visual', label: 'Identidade e Peças Reais' },
    { id: 'midia', label: 'Mídias e Comunicação' },
    { id: 'experiencia', label: 'Experiência & VIP' },
  ];

  return (
    <div id="sponsor-board-box" className="bg-gradient-to-br from-wine-900 to-wine-950 text-white rounded-3xl p-6 lg:p-8 shadow-xl border border-wine-800 space-y-6 relative overflow-hidden">
      
      {/* Decorative background vectors */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-400/5 rounded-full filter blur-3xl -mr-40 -mt-40 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-wine-800 pb-6">
        <div>
          <span className="text-gold-300 font-mono text-xs uppercase tracking-widest font-semibold block mb-1">
            Parceria Comercial Privilegiada
          </span>
          <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white">
            Cota Única de Patrocínio
          </h3>
          <p className="text-xs text-wine-200 mt-1 max-w-xl font-sans">
            Insira sua marca nos principais canais de contato com um público altamente qualificado de 450 formadores de opinião.
          </p>
        </div>

        <div className="bg-[#0f0909] border border-gold-400/20 p-4 md:p-6 rounded-2xl flex flex-col items-center justify-center text-center self-start md:self-auto shadow-inner">
          <span className="text-[9px] text-gold-300 uppercase font-bold tracking-widest font-mono">Valor de Investimento</span>
          <span className="text-2xl md:text-3xl font-bold font-mono text-gold-100 mt-1">R$ 5.000,00</span>
          <span className="text-[10px] text-gold-300 mt-1 font-sans">Garantia de 4 Convites Core VIPs</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 relative z-10">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            id={`btn-sponsor-filter-${tab.id}`}
            onClick={() => setActiveFilter(tab.id as any)}
            className={`text-xs px-3.5 py-2 rounded-xl transition-all duration-150 outline-none font-medium border font-sans ${
              activeFilter === tab.id 
                ? 'bg-gold-400 border-gold-300 text-wine-950 font-bold shadow-lg' 
                : 'bg-[#150f0f] hover:bg-wine-900/30 border-wine-900 text-gold-300 hover:text-gold-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Material checklist layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredBenefits.map((benefit, index) => (
          <div 
            key={benefit.name}
            id={`sponsor-benefit-card-${index}`} 
            className="bg-wine-950/40 hover:bg-wine-950/70 border border-wine-800/60 rounded-2xl p-4.5 transition-all duration-200 flex items-start gap-3.5"
          >
            <div className="bg-gold-500/10 p-2.5 rounded-xl border border-gold-400/20 text-gold-300 flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            
            <div className="space-y-1">
              <h4 className="font-serif text-sm font-semibold text-gold-100 flex items-center gap-2">
                {benefit.name}
              </h4>
              <p className="text-xs text-wine-200 font-sans leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer message */}
      <div className="relative z-10 pt-4 border-t border-wine-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-wine-300 gap-4">
        <p className="italic">
          *Envio da comunicação do evento pela organização. Não inclui o fornecimento do banco de dados direto.
        </p>
        <span className="flex items-center gap-1.5 bg-gold-500/10 text-gold-300 border border-gold-400/20 px-3 py-1.5 rounded-xl font-semibold">
          <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
          Sugestão Comercial de Altíssimo Impacto
        </span>
      </div>

    </div>
  );
}
