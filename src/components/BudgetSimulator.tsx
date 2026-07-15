import { useState } from 'react';
import { DollarSign, ShieldAlert, Sparkles, Award, Users, TrendingUp, HelpCircle } from 'lucide-react';

export default function BudgetSimulator() {
  const [ticketPrice, setTicketPrice] = useState<number>(195);
  const [ticketsSold, setTicketsSold] = useState<number>(300);
  const [sponsorsCount, setSponsorsCount] = useState<number>(4);

  // Financial structure
  const sponsorCotaValue = 5000;
  
  // Cost estimates:
  const costPerPersonWine = 95; // 150 labels premium imports and nationals!
  const costPerPersonFood = 65; // Artisanal pizza and finger food buffet
  const productionFixedCost = 14000; // Live music, space decoration, printing materials like Riedel glass bag, security, SJC local ads
  
  // Computations
  const ticketRevenue = ticketsSold * ticketPrice;
  const sponsorshipRevenue = sponsorsCount * sponsorCotaValue;
  const totalRevenue = ticketRevenue + sponsorshipRevenue;

  const variableCosts = (costPerPersonWine + costPerPersonFood) * ticketsSold;
  const totalCosts = variableCosts + productionFixedCost;
  const netProfit = totalRevenue - totalCosts;

  // Break-even tickets
  // ticketPrice * X + sponsorship - (variableCostPerPerson * X + fixed) = 0
  // (ticketPrice - variableCost) * X = fixed - sponsorship
  const contributionMargin = ticketPrice - (costPerPersonWine + costPerPersonFood);
  const breakEvenTickets = contributionMargin > 0 
    ? Math.max(0, Math.ceil((productionFixedCost - sponsorshipRevenue) / contributionMargin)) 
    : 500;

  return (
    <div id="revenue-simulator-card" className="bg-[#1a1212] rounded-3xl border border-wine-900 shadow-xl p-6 lg:p-8 space-y-8 text-gold-100">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-wine-950 text-gold-300 text-xs font-semibold rounded-full border border-wine-800 mb-3 uppercase tracking-wider font-mono">
          <TrendingUp className="w-3.5 h-3.5 text-gold-400" />
          Simulador Inteligente de Viabilidade
        </div>
        <h3 className="font-serif text-2xl font-bold text-gold-100 italic">
          Planejamento Faturamento & Metas SJC
        </h3>
        <p className="text-xs text-gold-300 font-sans mt-1">
          Ajuste os preços, as vendas de ingressos e a quantidade de marcas patrocinadoras para calibrar os resultados do festival de 19 de Agosto.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sliders Area (Left) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Slider 1: Ticket Price */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs text-gold-300 font-semibold font-sans">
              <label htmlFor="input-ticket-price" className="flex items-center gap-2">
                <span>Preço Unitário do Ingresso</span>
              </label>
              <span className="font-mono text-xs bg-[#0f0909] text-gold-100 py-1 px-3 rounded-lg border border-wine-900 font-bold">
                R$ {ticketPrice}
              </span>
            </div>
            <input 
              id="input-ticket-price"
              type="range"
              min="100"
              max="500"
              step="5"
              value={ticketPrice}
              onChange={(e) => setTicketPrice(Number(e.target.value))}
              className="w-full h-2 bg-[#0f0909] rounded-lg appearance-none cursor-pointer accent-gold-400 border border-wine-900"
            />
            <div className="flex justify-between text-[10px] text-gold-400/60 font-medium font-mono">
              <span>R$ 100 (Acessível)</span>
              <span>R$ 500 (Gourmet VIP)</span>
            </div>
          </div>

          {/* Slider 2: Tickets Sold */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs text-gold-300 font-semibold font-sans">
              <label htmlFor="input-tickets-sold" className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gold-400" />
                <span>Público Estimado (Ingressos Vendidos)</span>
              </label>
              <span className="font-mono text-xs bg-[#0f0909] text-gold-200 py-1 px-3 rounded-lg border border-wine-900 font-bold">
                {ticketsSold} Ingressos
              </span>
            </div>
            <input 
              id="input-tickets-sold"
              type="range"
              min="50"
              max="500"
              step="10"
              value={ticketsSold}
              onChange={(e) => setTicketsSold(Number(e.target.value))}
              className="w-full h-2 bg-[#0f0909] rounded-lg appearance-none cursor-pointer accent-gold-400 border border-wine-900"
            />
            <div className="flex justify-between text-[10px] text-gold-400/60 font-medium font-mono">
              <span>Lançamento (50)</span>
              <span>Projeção de Vendas (500)</span>
            </div>
          </div>

          {/* Slider 3: Sponsors */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs text-gold-300 font-semibold font-sans">
              <label htmlFor="input-sponsors-count" className="flex items-center gap-2">
                <Award className="w-4 h-4 text-gold-400" />
                <span>Marcas com "Cota Única" (R$ 5.000)</span>
              </label>
              <span className="font-mono text-xs bg-[#0f0909] text-gold-200 py-1 px-3 rounded-lg border border-wine-900 font-bold">
                {sponsorsCount} Patrocinadores
              </span>
            </div>
            <input 
              id="input-sponsors-count"
              type="range"
              min="0"
              max="10"
              step="1"
              value={sponsorsCount}
              onChange={(e) => setSponsorsCount(Number(e.target.value))}
              className="w-full h-2 bg-[#0f0909] rounded-lg appearance-none cursor-pointer accent-gold-400 border border-wine-900"
            />
            <div className="flex justify-between text-[10px] text-gold-400/60 font-medium font-mono">
              <span>Sem marcas (0)</span>
              <span>Limite de Apoio (10)</span>
            </div>
          </div>

          {/* Fixed Metrics Information */}
          <div className="rounded-2xl bg-[#150f0f] p-4 border border-wine-900 space-y-3">
            <h4 className="text-xs font-bold text-gold-300 uppercase tracking-wider font-mono">Parâmetros Operacionais</h4>
            <div className="grid grid-cols-2 gap-3 text-[11px] font-sans">
              <div className="bg-[#0f0909] p-2.5 rounded-xl border border-wine-905">
                <span className="text-gold-400/60 block text-[9px] uppercase font-mono mb-0.5">Insumo Vinho/Pessoa</span>
                <span className="font-mono font-bold text-gold-100">R$ {costPerPersonWine},00</span>
              </div>
              <div className="bg-[#0f0909] p-2.5 rounded-xl border border-wine-905">
                <span className="text-gold-400/60 block text-[9px] uppercase font-mono mb-0.5">Insumo Pizza/Pessoa</span>
                <span className="font-mono font-bold text-gold-100">R$ {costPerPersonFood},00</span>
              </div>
              <div className="bg-[#0f0909] p-2.5 rounded-xl border border-wine-905 col-span-2">
                <span className="text-gold-400/60 block text-[9px] uppercase font-mono mb-0.5">Custo Fixo de Produção</span>
                <span className="font-mono font-bold text-gold-100">R$ {productionFixedCost.toLocaleString('pt-BR')},00 (Atração, Decor, etc)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Financial Report Area (Right) */}
        <div id="financial-report-panel" className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="bg-wine-950/80 border border-wine-900 rounded-2xl p-4 flex flex-col justify-between">
              <span className="text-[9px] font-bold text-gold-300 uppercase tracking-wider block mb-1 font-mono">Receita de Venda</span>
              <span className="text-lg md:text-xl font-bold text-gold-100 font-mono">
                R$ {ticketRevenue.toLocaleString('pt-BR')}
              </span>
              <span className="text-[10px] text-gold-400/50 block mt-1">
                {ticketsSold} un. x R$ {ticketPrice}
              </span>
            </div>

            <div className="bg-wine-950/80 border border-wine-900 rounded-2xl p-4 flex flex-col justify-between">
              <span className="text-[9px] font-bold text-gold-300 uppercase tracking-wider block mb-1 font-mono">Cota Patrocinadores</span>
              <span className="text-lg md:text-xl font-bold text-gold-100 font-mono">
                R$ {sponsorshipRevenue.toLocaleString('pt-BR')}
              </span>
              <span className="text-[10px] text-gold-400/50 block mt-1">
                {sponsorsCount} empresas x R$ 5k
              </span>
            </div>

            <div className="bg-[#150f0f] border border-wine-900 rounded-2xl p-4 flex flex-col justify-between">
              <span className="text-[9px] font-bold text-gold-300 uppercase tracking-wider block mb-1 font-mono">Custos Totais</span>
              <span className="text-lg md:text-xl font-bold text-wine-400 font-mono">
                R$ {totalCosts.toLocaleString('pt-BR')}
              </span>
              <span className="text-[10px] text-gold-400/55 block mt-1">
                Insumos + Logística
              </span>
            </div>

          </div>

          {/* Profit Card Box */}
          <div className={`p-6 rounded-3xl border transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row shadow-lg justify-between items-center gap-4 ${
            netProfit >= 0 
              ? 'bg-gradient-to-br from-emerald-950/40 to-emerald-900/10 border-emerald-900 text-gold-100' 
              : 'bg-gradient-to-br from-wine-950/40 to-wine-900/10 border-wine-900 text-gold-100'
          }`}>
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs uppercase font-bold tracking-wider opacity-85 block font-mono font-bold">Resultado Líquido Projetado</span>
              <h2 className={`font-serif text-3xl md:text-4xl font-bold font-mono tracking-tight ${netProfit >= 0 ? 'text-emerald-400' : 'text-wine-400'}`}>
                {netProfit < 0 ? '-' : ''} R$ {Math.abs(netProfit).toLocaleString('pt-BR')},00
              </h2>
              <p className="text-[11px] text-gold-300 opacity-75 font-medium">
                Sendo {Math.round((sponsorshipRevenue / totalRevenue) * 100) || 0}% subsidiado por cotas comerciais de patrocínio.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-3 rounded-2xl border bg-[#0f0909] border-wine-900">
              <span className="text-[10px] uppercase font-bold tracking-wider opacity-85 block mb-1 font-mono text-gold-400">Ponto de Equilíbrio</span>
              <span className="text-sm font-bold font-mono text-gold-100">
                {breakEvenTickets} Ingressos
              </span>
              <span className="text-[9px] opacity-75 mt-0.5 font-medium text-gold-300">Meta p/ empatar custos</span>
            </div>
          </div>

          {/* Quick feasibility alert */}
          <div className="bg-[#150f0f] border border-wine-900 rounded-2xl p-4.5 space-y-2">
            <h4 className="text-xs font-bold text-gold-200 flex items-center gap-1.5 font-sans uppercase tracking-wider text-gold-100">
              <ShieldAlert className="w-4 h-4 text-gold-400 animate-pulse" />
              Análise de Viabilidade
            </h4>
            <p className="text-xs text-[#e3d7bf]/80 leading-relaxed font-sans font-light">
              Com o restaurante <strong>Armazém da Pizza fechado exclusivamente</strong> no dia 19/08/2026, a receita convencional do jantar é de R$ 0. Assim sendo, captar pelo menos <strong>{sponsorsCount} patrocinadores cota única</strong> reduz a dependência de venda imediata de ingressos VIP, permitindo rentabilizar o evento com facilidade a partir de <strong>{breakEvenTickets} ingressos comercializados</strong>.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
