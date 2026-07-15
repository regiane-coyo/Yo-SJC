import { useState } from 'react';
import tvIndoorPricingImg from '../assets/images/tv_indoor_pricing_1784126584062.jpg';
import { 
  Users, 
  MapPin, 
  TrendingUp, 
  Newspaper, 
  Tv, 
  ExternalLink, 
  Sparkles, 
  HelpCircle, 
  Percent, 
  Instagram, 
  DollarSign, 
  CheckCircle,
  Share2,
  Calendar,
  Layers,
  ArrowRight,
  Eye,
  Megaphone
} from 'lucide-react';

function TvIndoorPricingTable() {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-950 font-sans text-[11px] leading-tight select-none shadow-lg">
      <div className="min-w-[720px] grid grid-cols-12 border-collapse text-center">
        {/* Left Column: 3 span */}
        <div className="col-span-3 flex flex-col border-r border-neutral-800 text-center">
          {/* Top Left Cell: REDE TOTAL 07 LOCAIS */}
          <div className="bg-[#0000CC] text-white p-3 py-4 text-center flex flex-col items-center justify-center border-b border-neutral-800 flex-1">
            <span className="font-extrabold text-[12px] tracking-wider block">REDE TOTAL</span>
            <span className="font-extrabold text-[12px] tracking-wider block">07 LOCAIS</span>
          </div>
          
          {/* Middle Left Cell: Preço médio/local/mês */}
          <div className="bg-[#CCFF33] text-black p-2 py-3 text-center flex flex-col items-center justify-center border-b border-neutral-800 flex-1">
            <span className="font-bold block text-[10px] leading-tight">Preço médio/local/mês</span>
            <span className="font-extrabold text-[16px] text-[#FF0000] block mt-1">368,57</span>
          </div>
          
          {/* Bottom Left Cell: Academias list */}
          <div className="bg-[#7F7F7F] text-white p-2.5 py-3 text-[10px] flex flex-col justify-center space-y-1.5 flex-1">
            <div className="flex justify-between items-center px-1">
              <span className="font-medium">Academias</span>
              <span className="font-bold font-mono text-white text-[11px] bg-neutral-800/40 px-1.5 py-0.5 rounded">5</span>
            </div>
            <div className="flex justify-between items-center px-1 border-t border-neutral-400/30 pt-1.5">
              <span className="font-medium">Restaurantes</span>
              <span className="font-bold font-mono text-white text-[11px] bg-neutral-800/40 px-1.5 py-0.5 rounded">0</span>
            </div>
            <div className="flex justify-between items-center px-1 border-t border-neutral-400/30 pt-1.5">
              <span className="font-medium">Salões de Beleza</span>
              <span className="font-bold font-mono text-white text-[11px] bg-neutral-800/40 px-1.5 py-0.5 rounded">2</span>
            </div>
          </div>
        </div>

        {/* Right Columns: 9 span (5 sub-columns of equal width) */}
        <div className="col-span-9 grid grid-cols-5">
          
          {/* Row 1: Períodos de Veiculação */}
          <div className="bg-[#7F7F7F] text-white font-bold p-2.5 py-3.5 flex items-center justify-center border-b border-r border-neutral-800 text-center leading-tight">
            Períodos de Veiculação
          </div>
          <div className="bg-[#7F7F7F] text-[#CCFF33] font-black p-2.5 py-3.5 flex items-center justify-center border-b border-r border-neutral-800 text-center text-[12px] uppercase tracking-wide">
            01 Mês
          </div>
          <div className="bg-[#7F7F7F] text-[#CCFF33] font-black p-2.5 py-3.5 flex items-center justify-center border-b border-r border-neutral-800 text-center text-[12px] uppercase tracking-wide">
            03 Meses
          </div>
          <div className="bg-[#7F7F7F] text-[#CCFF33] font-black p-2.5 py-3.5 flex items-center justify-center border-b border-r border-neutral-800 text-center text-[12px] uppercase tracking-wide">
            06 Meses
          </div>
          <div className="bg-[#7F7F7F] text-[#CCFF33] font-black p-2.5 py-3.5 flex items-center justify-center border-b border-neutral-800 text-center text-[12px] uppercase tracking-wide">
            12 Meses
          </div>

          {/* Row 2: Preço Cheio */}
          <div className="bg-[#0000CC] text-white font-bold p-2 flex items-center justify-center border-b border-r border-neutral-800 text-center">
            Preço Cheio
          </div>
          <div className="bg-[#0000CC] text-white/95 font-bold p-2 flex items-center justify-center border-b border-r border-neutral-800 font-mono text-[12px] line-through decoration-white decoration-2">
            2.579,99
          </div>
          <div className="bg-[#0000CC] text-white/95 font-bold p-2 flex items-center justify-center border-b border-r border-neutral-800 font-mono text-[12px] line-through decoration-white decoration-2">
            2.579,99
          </div>
          <div className="bg-[#0000CC] text-white/95 font-bold p-2 flex items-center justify-center border-b border-r border-neutral-800 font-mono text-[12px] line-through decoration-white decoration-2">
            2.579,99
          </div>
          <div className="bg-[#0000CC] text-white/95 font-bold p-2 flex items-center justify-center border-b border-neutral-800 font-mono text-[12px] line-through decoration-white decoration-2">
            2.579,99
          </div>

          {/* Row 3: Desconto Progressivo */}
          <div className="bg-[#CCFF33] text-black font-extrabold p-2.5 py-3 flex items-center justify-center border-b border-r border-neutral-800 text-center leading-tight">
            Desconto Progressivo
          </div>
          <div className="bg-[#CCFF33] text-black font-black p-2.5 py-3 flex items-center justify-center border-b border-r border-neutral-800 text-[12px]">
            15% OFF
          </div>
          <div className="bg-[#CCFF33] text-black font-black p-2.5 py-3 flex items-center justify-center border-b border-r border-neutral-800 text-[12px]">
            20% OFF
          </div>
          <div className="bg-[#CCFF33] text-black font-black p-2.5 py-3 flex items-center justify-center border-b border-r border-neutral-800 text-[12px]">
            25% OFF
          </div>
          <div className="bg-[#CCFF33] text-black font-black p-2.5 py-3 flex items-center justify-center border-b border-neutral-800 text-[12px]">
            30% OFF
          </div>

          {/* Row 4: $ 07 locais/mês */}
          <div className="bg-[#0000CC] text-white font-bold p-2 flex items-center justify-center border-b border-r border-neutral-800 text-center leading-tight">
            $ 07 locais/mês
          </div>
          <div className="bg-[#0000CC] text-white font-black p-2 flex items-center justify-center border-b border-r border-neutral-800 text-[12px] font-mono whitespace-nowrap">
            2.192,99 /mês
          </div>
          <div className="bg-[#0000CC] text-white font-black p-2 flex items-center justify-center border-b border-r border-neutral-800 text-[12px] font-mono whitespace-nowrap">
            2.063,99 /mês
          </div>
          <div className="bg-[#0000CC] text-white font-black p-2 flex items-center justify-center border-b border-r border-neutral-800 text-[12px] font-mono whitespace-nowrap">
            1.934,99 /mês
          </div>
          <div className="bg-[#0000CC] text-white font-black p-2 flex items-center justify-center border-b border-neutral-800 text-[12px] font-mono whitespace-nowrap">
            1.805,99 /mês
          </div>

          {/* Row 5: $ por local/mês */}
          <div className="bg-[#0000CC] text-[#FF3333] font-bold p-2 flex items-center justify-center border-b border-r border-neutral-800 text-center leading-tight">
            $ por local/mês
          </div>
          <div className="bg-[#0000CC] text-[#FF3333] font-black p-2 flex items-center justify-center border-b border-r border-neutral-800 text-[10px] font-mono whitespace-nowrap">
            R$ 313,28 /local/mês
          </div>
          <div className="bg-[#0000CC] text-[#FF3333] font-black p-2 flex items-center justify-center border-b border-r border-neutral-800 text-[10px] font-mono whitespace-nowrap">
            R$ 294,86 /local/mês
          </div>
          <div className="bg-[#0000CC] text-[#FF3333] font-black p-2 flex items-center justify-center border-b border-r border-neutral-800 text-[10px] font-mono whitespace-nowrap">
            R$ 276,43 /local/mês
          </div>
          <div className="bg-[#0000CC] text-[#FF3333] font-black p-2 flex items-center justify-center border-b border-neutral-800 text-[10px] font-mono whitespace-nowrap">
            R$ 258,00 /local/mês
          </div>

          {/* Row 6: $ por local/dia */}
          <div className="bg-[#0000CC] text-[#CCFF33] font-bold p-2 flex items-center justify-center border-r border-neutral-800 text-center leading-tight">
            $ por local/dia
          </div>
          <div className="bg-[#0000CC] text-[#CCFF33] font-black p-2 flex items-center justify-center border-r border-neutral-800 text-[10px] font-mono whitespace-nowrap">
            R$ 10,44 /local/dia
          </div>
          <div className="bg-[#0000CC] text-[#CCFF33] font-black p-2 flex items-center justify-center border-r border-neutral-800 text-[10px] font-mono whitespace-nowrap">
            R$ 9,83 /local/dia
          </div>
          <div className="bg-[#0000CC] text-[#CCFF33] font-black p-2 flex items-center justify-center border-r border-neutral-800 text-[10px] font-mono whitespace-nowrap">
            R$ 9,21 /local/dia
          </div>
          <div className="bg-[#0000CC] text-[#CCFF33] font-black p-2 flex items-center justify-center text-[10px] font-mono whitespace-nowrap">
            R$ 8,60 /local/dia
          </div>

        </div>
      </div>
    </div>
  );
}

export default function YoSushiCampaign() {
  const [activeSubTab, setActiveSubTab] = useState<'concepto' | 'influencers' | 'parcerias' | 'midia' | 'trafego'>('concepto');
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);

  // Influencer budget choice state
  const [influencerStrategy, setInfluencerStrategy] = useState<'monthly' | 'onetime'>('monthly');

  // Voucher targeting selection state
  const [selectedVoucherTarget, setSelectedVoucherTarget] = useState<'corporate' | 'coworking' | 'vicentina'>('corporate');

  // Paid traffic budget slider state
  const [paidTrafficBudget, setPaidTrafficBudget] = useState<number>(2000);

  // Voucher details based on target
  const voucherDetails = {
    corporate: {
      title: "Voucher Almoço Executivo",
      audience: "Público Corporativo de SJC (Aquarius, Colinas, Esplanada)",
      benefit: "Upgrade de Rodízio Tradicional para Premium no almoço executivo",
      delivery: "Entregue via parcerias diretas com RHs e secretárias de grandes escritórios",
      hook: "Reuniões ou pausas de almoço em equipe com gastronomia de alto padrão",
      mockText: "VOUCHER EXECUTIVO: Ganhe upgrade para o Rodízio Premium apresentando seu crachá corporativo!"
    },
    coworking: {
      title: "Voucher Wellness & Coworking",
      audience: "Frequentadores de Academias Premium & Coworkings locais",
      benefit: "Welcome Drink cortesia ou Porção de Sushi Doce na primeira visita",
      delivery: "Displays físicos nas recepções de coworkings parceiros e academias do Aquarius/Urbanova",
      hook: "Recompensa pós-treino ou happy hour pós-trabalho",
      mockText: "VOUCHER BEM-ESTAR: Apresente este voucher e ganhe um Drink de Boas-vindas ou sobremesa especial!"
    },
    vicentina: {
      title: "Voucher Inverno Vicentina",
      audience: "Frequentadores do Festival de Inverno do Parque Vicentina Aranha",
      benefit: "Desconto exclusivo de 15% ou Cortesia Especial na primeira visita",
      delivery: "Panfleto físico refinado com QR Code distribuído nas imediações do parque durante o festival",
      hook: "Aproveitar o clima aconchegante de inverno de SJC para jantar no Yo Sushi",
      mockText: "VOUCHER FESTIVAL VICENTINA: Apresente e ganhe 15% de desconto no Rodízio Premium!"
    }
  };

  // 3 Mix of Influencers data
  const influencerMixes = [
    {
      name: "Mix 1: Foodies & Gastronomia (Foco em Conversão Direct)",
      description: "Perfis focados estritamente em resenhas de restaurantes e dicas gourmet de SJC.",
      profiles: ["@ondecomersjc", "@dicasgourmetsjc", "@sjcfoodies"],
      strength: "Altíssima conversão de público pronto para consumir; seguidores confiam na indicação de sabor.",
      relevance: "Foco absoluto em mostrar a qualidade do salmão, variedade do rodízio e custo-benefício premium."
    },
    {
      name: "Mix 2: Lifestyle & Público Classe A (Foco em Desejo e Status)",
      description: "Influenciadores de estilo de vida de bairros nobres como Aquarius, Urbanova e Esplanada.",
      profiles: ["@valelifestyle", "@aquariusdicas", "@sjcpremium.style"],
      strength: "Gera desejo aspiracional e posiciona o Yo Sushi como o 'place to be' para encontros e datas comemorativas.",
      relevance: "Destacar o ambiente instagramável da loja física, apresentação impecável dos pratos e drinks autorais."
    },
    {
      name: "Mix 3: Conectores & Corporativos (Foco em Almoço e Networking)",
      description: "Profissionais, empresários locais ou perfis de networking corporativo influentes na região.",
      profiles: ["@sjctrabalho", "@mulheresdenegociossjc", "@networkingvale"],
      strength: "Atrai o público de negócios para reuniões de trabalho e almoço executivo.",
      relevance: "Divulgar a agilidade do atendimento, ambiente tranquilo com Wi-Fi e qualidade nutricional do almoço."
    }
  ];

  // Simulator values based on budget
  const calculateMetrics = (budget: number) => {
    // Current base: R$ 1,000 gives ~30,000 Reach and ~300 clicks in an awareness campaign
    const reachFactor = 32; // 32,000 reach per R$ 1,000
    const clickFactor = 340; // 340 menu clicks per R$ 1,000
    const estimatedReach = Math.round((budget / 1000) * reachFactor * 1000);
    const estimatedClicks = Math.round((budget / 1000) * clickFactor);
    const estimatedConversions = Math.round(estimatedClicks * 0.12); // 12% reserve rate from clicks

    return {
      reach: estimatedReach.toLocaleString('pt-BR'),
      clicks: estimatedClicks.toLocaleString('pt-BR'),
      conversions: estimatedConversions.toLocaleString('pt-BR'),
      cpc: (budget / estimatedClicks).toFixed(2)
    };
  };

  const currentMetrics = calculateMetrics(paidTrafficBudget);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Campaign Intro Hero */}
      <div className="bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-12 -translate-y-12">
          <span className="text-[200px] font-bold text-coral-500 font-mono">🍣</span>
        </div>
        
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-coral-500/10 border border-coral-500/30 rounded-full text-coral-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Campanha de Posicionamento & Captação SJC
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-[#f3ece6]">
                Plano de Atração <span className="text-coral-500">Yo Sushi SJC</span>
              </h2>
              <p className="text-xs md:text-sm text-neutral-400 font-sans max-w-3xl leading-relaxed">
                Planejamento estratégico de marketing integrado para fortalecer a marca do Yo Sushi em São José dos Campos. Foco em tráfego segmentado, marketing de influência diluído, parcerias locais com vouchers personalizados e mídia indoor nos principais eixos de consumo da cidade.
              </p>
            </div>
            
            <div className="bg-neutral-900/90 border border-neutral-800 p-4 rounded-2xl flex flex-col items-center justify-center text-center min-w-[160px] self-start md:self-center shadow-lg">
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Localidade Principal</span>
              <span className="text-lg font-bold text-coral-400 mt-1">São José dos Campos</span>
              <span className="text-[10px] text-emerald-400 font-mono mt-0.5 font-bold">Foco em Aquarius & Centro</span>
            </div>
          </div>
        </div>
      </div>

      {/* Yo Sushi Horizontal Sub Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-neutral-800 pb-2">
        <button
          onClick={() => setActiveSubTab('concepto')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-150 ${
            activeSubTab === 'concepto' 
              ? 'bg-coral-500 text-neutral-950 shadow-md' 
              : 'hover:bg-neutral-900 text-neutral-400 hover:text-neutral-200'
          }`}
        >
          💡 Conceito & Conteúdo
        </button>
        <button
          onClick={() => setActiveSubTab('influencers')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-150 ${
            activeSubTab === 'influencers' 
              ? 'bg-coral-500 text-neutral-950 shadow-md' 
              : 'hover:bg-neutral-900 text-neutral-400 hover:text-neutral-200'
          }`}
        >
          👥 Influenciadores SJC
        </button>
        <button
          onClick={() => setActiveSubTab('parcerias')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-150 ${
            activeSubTab === 'parcerias' 
              ? 'bg-coral-500 text-neutral-950 shadow-md' 
              : 'hover:bg-neutral-900 text-neutral-400 hover:text-neutral-200'
          }`}
        >
          🤝 Parcerias & Vouchers
        </button>
        <button
          onClick={() => setActiveSubTab('midia')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-150 ${
            activeSubTab === 'midia' 
              ? 'bg-coral-500 text-neutral-950 shadow-md' 
              : 'hover:bg-neutral-900 text-neutral-400 hover:text-neutral-200'
          }`}
        >
          📣 Prova Social & Mídia Indoor
        </button>
        <button
          onClick={() => setActiveSubTab('trafego')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-150 ${
            activeSubTab === 'trafego' 
              ? 'bg-coral-500 text-neutral-950 shadow-md' 
              : 'hover:bg-neutral-900 text-neutral-400 hover:text-neutral-200'
          }`}
        >
          🎯 Tráfego Pago SJC
        </button>
      </div>

      {/* Sub Tab Contents */}
      <div className="min-h-[300px]">

        {/* 1. Conceito e Captação de Conteúdo */}
        {activeSubTab === 'concepto' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 space-y-6">
              <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-3xl space-y-4">
                <div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
                  <div className="w-10 h-10 rounded-xl bg-coral-500/10 flex items-center justify-center text-coral-500">
                    <Megaphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#f3ece6]">Produção & Atração de Clientes</h3>
                    <p className="text-xs text-neutral-400">Desenvolvimento de linhas editoriais para o tráfego pago e orgânico local.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-850 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] bg-coral-500/10 text-coral-400 px-2 py-0.5 rounded-md font-bold font-mono">TRÁFEGO PAGO</span>
                      <span className="text-xs text-neutral-500">Foco SJC</span>
                    </div>
                    <h4 className="font-semibold text-xs text-[#f3ece6]">Criativos Focados em Desejo</h4>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      Criação de vídeos curtos em altíssima definição (estilo ASMR e Slow Motion) destacando o brilho das fatias de salmão, montagem do combinado premium e barulhos sutis da preparação. O objetivo é impactar o usuário no horário pré-almoço e pré-jantar no raio de 5km da loja.
                    </p>
                  </div>

                  <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-850 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-md font-bold font-mono">ORGÂNICO</span>
                      <span className="text-xs text-neutral-500">Foco Engajamento</span>
                    </div>
                    <h4 className="font-semibold text-xs text-[#f3ece6]">Bastidores & Curiosidades</h4>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      Vídeos descontraídos mostrando a rotina do sushiman, a seleção dos peixes frescos que chegam à loja, preparação dos molhos artesanais e os pratos preferidos da equipe. Isso gera conexão genuína e humaniza a marca localmente.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-amber-500/5 border border-amber-500/15 rounded-2xl space-y-2">
                  <h4 className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Diretriz de Conteúdo Local:
                  </h4>
                  <p className="text-xs text-neutral-300/90 font-light leading-relaxed">
                    Sendo São José dos Campos uma cidade de alto poder de consumo de serviços de qualidade, toda a comunicação deve evitar ofertas apelativas que barateiem a marca. O foco deve ser na **qualidade intransigente das peças, frescor absoluto do peixe e a sofisticação do atendimento**.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 space-y-6">
              <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-3xl space-y-4 h-full">
                <h4 className="font-serif text-base font-bold text-[#f3ece6] border-b border-neutral-800 pb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-coral-400" />
                  Metas de Captação
                </h4>
                
                <ul className="space-y-3.5 text-xs">
                  <li className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">1</div>
                    <div>
                      <strong className="block text-neutral-200">Reconhecimento SJC</strong>
                      <span className="text-neutral-400 font-light text-[11px]">Fixar o Yo Sushi como referência de rodízio premium no bairro Jardim Aquarius e eixos principais.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">2</div>
                    <div>
                      <strong className="block text-neutral-200">Preenchimento de Almoço</strong>
                      <span className="text-neutral-400 font-light text-[11px]">Aumentar a demanda corporativa executiva de segunda a sexta-feira aproveitando o perfil executivo da cidade.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">3</div>
                    <div>
                      <strong className="block text-neutral-200">Base de Retenção</strong>
                      <span className="text-neutral-400 font-light text-[11px]">Converter a primeira visita do cliente local em fidelidade através da entrega de vouchers exclusivos e atendimento impecável.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 2. Contratação de Influenciadores */}
        {activeSubTab === 'influencers' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Left Main Box: Mix recommendations and Links */}
              <div className="md:col-span-8 space-y-6">
                <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-3xl space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-coral-500/10 flex items-center justify-center text-coral-500">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-[#f3ece6]">Marketing de Influência SJC</h3>
                        <p className="text-xs text-neutral-400">Mapeamento, orçamentos e tática de diluição de conteúdo.</p>
                      </div>
                    </div>
                    
                    <a 
                      href="https://influencers-yo-sushi.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-coral-500 text-neutral-950 hover:bg-coral-400 transition-all duration-150 rounded-xl text-xs font-bold shadow-md hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Ver Painel de Sugestões Yo Sushi
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-xs text-neutral-300 font-light">
                    Já realizamos o levantamento de valores e definimos perfis estratégicos da região de SJC. Abaixo estão os **3 Mix de Influenciadores recomendados** para cobrir múltiplos nichos de público:
                  </p>

                  <div className="grid grid-cols-1 gap-4">
                    {influencerMixes.map((mix, idx) => (
                      <div key={idx} className="bg-neutral-950 p-4 rounded-2xl border border-neutral-850 space-y-2.5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <h4 className="text-xs font-bold text-coral-400 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-coral-500"></span>
                            {mix.name}
                          </h4>
                          <div className="flex gap-1.5">
                            {mix.profiles.map(p => (
                              <span key={p} className="text-[9px] bg-neutral-900 border border-neutral-800 text-neutral-400 px-2 py-0.5 rounded-md font-mono">{p}</span>
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-neutral-300/90 font-light">{mix.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-[11px] border-t border-neutral-900">
                          <div>
                            <strong className="text-neutral-400 block font-normal">Poder de Alcance:</strong>
                            <span className="text-neutral-300">{mix.strength}</span>
                          </div>
                          <div>
                            <strong className="text-neutral-400 block font-normal">Objetivo no Yo Sushi:</strong>
                            <span className="text-[#e3d7bf]/80">{mix.relevance}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sidebar: Strategic budget question */}
              <div className="md:col-span-4 space-y-6">
                <div className="bg-[#181111] border border-coral-950 rounded-3xl p-6 space-y-4 shadow-xl">
                  <div className="flex items-center gap-2 border-b border-neutral-800 pb-3">
                    <HelpCircle className="w-5 h-5 text-coral-400 animate-pulse" />
                    <h4 className="font-serif text-sm font-bold text-[#f3ece6]">Dilema Estratégico de Verba</h4>
                  </div>
                  
                  <p className="text-xs text-neutral-300 leading-relaxed font-light">
                    <strong>Orçamento disponível de R$ 4K:</strong> É disponibilizado mensalmente ou somente uma vez? 
                  </p>

                  <div className="space-y-3">
                    <button 
                      onClick={() => setInfluencerStrategy('monthly')}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-200 outline-none ${
                        influencerStrategy === 'monthly'
                          ? 'bg-coral-950/20 border-coral-500 text-coral-300'
                          : 'bg-neutral-950 border-neutral-850 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <strong className="text-xs block font-bold">Diluição em 3 meses</strong>
                        <span className="text-[9px] bg-coral-500/10 text-coral-400 px-2 py-0.5 rounded-md font-bold uppercase tracking-wider font-mono">RECOMENDADO</span>
                      </div>
                      <span className="text-[11px] font-light block mt-1 leading-relaxed opacity-90">
                        Diluir a ida dos influenciadores (R$ 1.333/mês). Mantém um fluxo contínuo de conteúdos novos rodando na cidade por muito mais tempo, fixando o nome da marca na mente do consumidor.
                      </span>
                    </button>

                    <button 
                      onClick={() => setInfluencerStrategy('onetime')}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-200 outline-none ${
                        influencerStrategy === 'onetime'
                          ? 'bg-coral-950/20 border-coral-500 text-coral-300'
                          : 'bg-neutral-950 border-neutral-850 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <strong className="text-xs block font-bold">Investimento Único (Dose Única)</strong>
                      <span className="text-[11px] font-light block mt-1 leading-relaxed opacity-90">
                        Concentrar os R$ 4.000 em um único mês de lançamento/ativação pesada. Gera um pico imediato enorme de alcance e engajamento, mas a marca esfria nas semanas seguintes se não houver recorrência.
                      </span>
                    </button>
                  </div>

                  <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-850 text-[10px] text-neutral-400">
                    <span className="font-bold text-neutral-300 block mb-0.5">Última comunicação de alinhamento:</span>
                    <span>Mensagem enviada sobre os perfis em 27/05/2026.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 3. Parcerias Locais & Vouchers Segmentados */}
        {activeSubTab === 'parcerias' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 space-y-6">
              <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-3xl space-y-4">
                <div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
                  <div className="w-10 h-10 rounded-xl bg-coral-500/10 flex items-center justify-center text-coral-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#f3ece6]">Parcerias Locais & Ação Corporativa</h3>
                    <p className="text-xs text-neutral-400">Aproveitando o altíssimo fluxo empresarial de São José dos Campos.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-850 space-y-2">
                    <h4 className="text-xs font-bold text-[#f3ece6]">Almoço Executivo Corporativo</h4>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      SJC abriga grandes polos tecnológicos, multinacionais, escritórios de advocacia de alto nível e clínicas médicas de ponta. A meta é propor parcerias comerciais onde empresas credenciadas ganham benefícios no almoço executivo do Yo Sushi, aumentando o ticket e garantindo ocupação física nos horários comerciais do restaurante.
                    </p>
                  </div>

                  <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-850 space-y-2">
                    <h4 className="text-xs font-bold text-[#f3ece6]">Alianças de Proximidade (Eixo Aquarius e Centro)</h4>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      Ativação de parcerias com coworkings modernos (frequência diária de empreendedores), academias boutique (público fitness premium), cinemas e shoppings próximos na região do Colinas/Aquarius.
                    </p>
                  </div>

                  <div className="p-4 bg-coral-500/5 border border-coral-500/15 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-xs font-bold text-coral-400 flex items-center gap-1.5">
                        <Instagram className="w-4 h-4" />
                        Festival de Inverno Vicentina Aranha
                      </h4>
                      <p className="text-[11px] text-neutral-300 font-light mt-0.5 max-w-md">
                        Ação com panfleto/voucher físico ultra sofisticado com QR Code direcionado para o público do icônico festival do Parque Vicentina Aranha.
                      </p>
                    </div>
                    <a 
                      href="https://www.instagram.com/p/DaVTiRqIAIQ/?img_index=1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 bg-neutral-950 hover:bg-neutral-900 text-coral-400 border border-neutral-800 transition-all duration-150 rounded-xl text-xs font-bold flex items-center gap-1 shrink-0"
                    >
                      Ver Referência
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Voucher Designer Block */}
            <div className="md:col-span-5 space-y-6">
              <div className="bg-[#12131a] border border-neutral-800 rounded-3xl p-6 space-y-4 shadow-xl">
                <div>
                  <h4 className="font-serif text-base font-bold text-[#f3ece6]">Visualizador de Vouchers Segmentados</h4>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Cada público recebe uma recompensa de atração calibrada de forma exclusiva.</p>
                </div>

                <div className="flex gap-1.5 border-b border-neutral-850 pb-3">
                  <button
                    onClick={() => setSelectedVoucherTarget('corporate')}
                    className={`flex-1 text-center py-2 rounded-xl text-[10px] font-bold transition-all ${
                      selectedVoucherTarget === 'corporate' 
                        ? 'bg-coral-500 text-neutral-950' 
                        : 'bg-neutral-950 text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    💼 Corporativo
                  </button>
                  <button
                    onClick={() => setSelectedVoucherTarget('coworking')}
                    className={`flex-1 text-center py-2 rounded-xl text-[10px] font-bold transition-all ${
                      selectedVoucherTarget === 'coworking' 
                        ? 'bg-coral-500 text-neutral-950' 
                        : 'bg-neutral-950 text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    💪 Fitness/Coworking
                  </button>
                  <button
                    onClick={() => setSelectedVoucherTarget('vicentina')}
                    className={`flex-1 text-center py-2 rounded-xl text-[10px] font-bold transition-all ${
                      selectedVoucherTarget === 'vicentina' 
                        ? 'bg-coral-500 text-neutral-950' 
                        : 'bg-neutral-950 text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    ❄️ Vicentina Aranha
                  </button>
                </div>

                {/* Voucher Mockup Render */}
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-5 rounded-2xl border border-dashed border-coral-500/40 relative overflow-hidden space-y-3 shadow-inner">
                  <div className="absolute right-0 bottom-0 text-[100px] leading-none opacity-5 pointer-events-none transform translate-x-4 translate-y-4 select-none font-bold">
                    %
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] bg-coral-500/10 text-coral-400 border border-coral-500/20 px-2 py-0.5 rounded font-mono font-bold tracking-wider uppercase">
                      BENEFÍCIO PRIMEIRA VISITA
                    </span>
                    <span className="text-[10px] text-neutral-500 font-mono">Cód: SJC-VCR</span>
                  </div>

                  <h5 className="font-serif text-md font-bold text-gold-200">
                    {voucherDetails[selectedVoucherTarget].title}
                  </h5>

                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {voucherDetails[selectedVoucherTarget].mockText}
                  </p>

                  <div className="pt-2 border-t border-neutral-850 space-y-1.5 text-[10px] text-neutral-400">
                    <div>
                      <strong className="text-neutral-300 font-normal">Público Alvo:</strong> {voucherDetails[selectedVoucherTarget].audience}
                    </div>
                    <div>
                      <strong className="text-neutral-300 font-normal">Forma de Distribuição:</strong> {voucherDetails[selectedVoucherTarget].delivery}
                    </div>
                    <div>
                      <strong className="text-neutral-300 font-normal">Objetivo Estratégico:</strong> {voucherDetails[selectedVoucherTarget].hook}
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-850 text-[10px] text-neutral-400 leading-relaxed italic">
                  *Observação: Ativar cupons segmentados evita que a promoção geral deprecie o valor do rodízio regular no ambiente digital, direcionando incentivos específicos a cada público da região de SJC.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. Prova Social e Mídia Indoor */}
        {activeSubTab === 'midia' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Left Column: Local Portals Social Proof */}
              <div className="md:col-span-6 space-y-6">
                <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-3xl space-y-4 h-full">
                  <div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
                    <div className="w-10 h-10 rounded-xl bg-coral-500/10 flex items-center justify-center text-coral-500">
                      <Newspaper className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#f3ece6]">Portais Regionais & Prova Social</h3>
                      <p className="text-xs text-neutral-400">Inserção em blogs e perfis jornalísticos influentes de SJC.</p>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-300 font-light">
                    Para conferir autoridade e chancelar o Yo Sushi perante a comunidade local de SJC, planeja-se a publicação de matérias de indicação gastronômica nos seguintes canais:
                  </p>

                  <div className="space-y-3.5">
                    <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-850 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <strong className="text-sm text-neutral-200">Notícias SJC</strong>
                          <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-md font-mono font-bold">INVESTIMENTO FIXO</span>
                        </div>
                        <p className="text-xs text-neutral-400 font-light leading-relaxed">
                          Publicação em formato Feed + Stories por um custo extremamente acessível de **R$ 249,90** por inserção, com excelente engajamento local.
                        </p>
                      </div>
                      <a 
                        href="https://www.instagram.com/noticias.sjcampos/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-coral-400 border border-neutral-800 transition-all duration-150 rounded-xl text-xs font-bold flex items-center gap-1 shrink-0"
                      >
                        Ir para Perfil
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-850 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <strong className="text-sm text-neutral-200">Aqui Vale Oficial</strong>
                          <span className="text-[9px] bg-coral-500/10 text-coral-400 px-2 py-0.5 rounded-md font-mono font-bold">RECOMENDADO</span>
                        </div>
                        <p className="text-xs text-neutral-400 font-light leading-relaxed">
                          Perfil tradicional focado nas melhores dicas comerciais, gastronômicas e novidades de São José dos Campos e região do Vale do Paraíba.
                        </p>
                      </div>
                      <a 
                        href="https://www.instagram.com/aquivaleoficial/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-coral-400 border border-neutral-800 transition-all duration-150 rounded-xl text-xs font-bold flex items-center gap-1 shrink-0"
                      >
                        Ir para Perfil
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Outdoor & Indoor media links */}
              <div className="md:col-span-6 space-y-6">
                <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-3xl space-y-4 h-full">
                  <div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
                    <div className="w-10 h-10 rounded-xl bg-coral-500/10 flex items-center justify-center text-coral-500">
                      <Tv className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#f3ece6]">Mídia Indoor & Painéis de Led</h3>
                      <p className="text-xs text-neutral-400">Ativação física nos principais pontos de interesse do público premium SJC.</p>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-300 font-light">
                    Orçamento solicitado para a parceira **Make Live** para garantir veiculação estratégica nos seguintes canais:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-850 space-y-3.5 flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <strong className="text-xs text-neutral-200 block font-bold">TV Indoor em Academias e Salões</strong>
                        <p className="text-[11px] text-neutral-400 leading-relaxed font-light">
                          Veiculação mínima em **TRÊS locais** estratégicos dos bairros mais valorizados da cidade (**Aquarius, Colinas e Urbanova**). Impacta pessoas em momento de lazer e autocuidado.
                        </p>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[10px] text-neutral-400">
                          <span>Tabela de Preços e Prazos:</span>
                          <button 
                            type="button"
                            onClick={() => setIsImgModalOpen(true)}
                            className="text-coral-400 hover:text-coral-300 flex items-center gap-1 transition-colors font-medium"
                          >
                            <Eye className="w-3 h-3" /> Ampliar Tabela
                          </button>
                        </div>
                        <div 
                          className="relative group cursor-pointer overflow-hidden rounded-xl border border-neutral-800 p-0.5 transition-all duration-200 hover:border-coral-500/30" 
                          onClick={() => setIsImgModalOpen(true)}
                        >
                          <TvIndoorPricingTable />
                          <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/40 transition-colors duration-200 pointer-events-none" />
                        </div>
                      </div>

                      <a 
                        href="https://drive.google.com/file/d/1LeAh9W3aBDq_8jO-S7LKgNxk2_E0d5gY/view" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full text-center py-2 bg-neutral-900 hover:bg-neutral-850 text-neutral-300 border border-neutral-800 rounded-xl text-xs font-bold transition-all duration-150 inline-flex items-center justify-center gap-1.5"
                      >
                        Visualizar Orçamento TV
                        <ExternalLink className="w-3 h-3 text-coral-400" />
                      </a>
                    </div>

                    <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-850 space-y-3.5 flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <strong className="text-xs text-neutral-200 block font-bold">Painéis de Led de Alto Fluxo</strong>
                        <p className="text-[11px] text-neutral-400 leading-relaxed font-light">
                          Inserção de artes e pequenos vídeos do Yo Sushi nos painéis localizados nos cruzamentos estratégicos de bairros de altíssima movimentação: **Jardim São Dimas** e **Jardim Esplanada**.
                        </p>
                      </div>
                      <a 
                        href="https://drive.google.com/file/d/1dQrICgp4dz5fqmmnmyXpmIK0pR_94hQq/view" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full text-center py-2 bg-neutral-900 hover:bg-neutral-850 text-neutral-300 border border-neutral-800 rounded-xl text-xs font-bold transition-all duration-150 inline-flex items-center justify-center gap-1.5"
                      >
                        Visualizar Orçamento Painel
                        <ExternalLink className="w-3 h-3 text-coral-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 5. Tráfego Pago SJC */}
        {activeSubTab === 'trafego' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 space-y-6">
              <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-3xl space-y-4">
                <div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
                  <div className="w-10 h-10 rounded-xl bg-coral-500/10 flex items-center justify-center text-coral-500">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#f3ece6]">Otimização de Campanhas Meta Ads</h3>
                    <p className="text-xs text-neutral-400">Intensificação estratégica de verba e transição de objetivos em SJC.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-850 space-y-2">
                    <div className="flex items-center justify-between">
                      <strong className="text-xs text-[#f3ece6]">Situação Atual (Verba de R$ 1.000/mês)</strong>
                      <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-md font-mono">ESTÁGIO ATUAL</span>
                    </div>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      Atualmente, a conta opera campanhas prioritárias de **Alcance local**. Esse objetivo é excelente para fortalecer e fixar o branding da marca em São José dos Campos, garantindo que o Yo Sushi seja visto repetidamente pelo público regional.
                    </p>
                  </div>

                  <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-850 space-y-2">
                    <div className="flex items-center justify-between">
                      <strong className="text-xs text-[#f3ece6]">Estratégia Recomendada: Aumento Gradual de Verba</strong>
                      <span className="text-[10px] bg-coral-500/10 text-coral-400 px-2 py-0.5 rounded-md font-mono">RECOMENDADO</span>
                    </div>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      Propomos **intensificar e aumentar a verba** de tráfego pago. Além de manter a base de alcance de marca (branding), será possível alocar uma parcela em **campanhas de Engajamento e Tráfego para o WhatsApp/Link de Reservas**, gerando conversões de mesas e pedidos de delivery diretos no curto prazo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Paid Traffic Budget Simulator */}
            <div className="md:col-span-5 space-y-6">
              <div className="bg-[#12131a] border border-neutral-800 rounded-3xl p-6 space-y-4 shadow-xl">
                <div>
                  <h4 className="font-serif text-base font-bold text-[#f3ece6]">Simulador de Projeção Meta Ads SJC</h4>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Ajuste o orçamento mensal simulado e estime o retorno de visibilidade local.</p>
                </div>

                {/* Slider bar */}
                <div className="space-y-2 py-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-neutral-400">Verba Mensal Simulada:</span>
                    <strong className="text-coral-400 font-mono text-sm">R$ {paidTrafficBudget.toLocaleString('pt-BR')}</strong>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="5000" 
                    step="500"
                    value={paidTrafficBudget} 
                    onChange={(e) => setPaidTrafficBudget(Number(e.target.value))}
                    className="w-full accent-coral-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                    <span>R$ 1.000 (Atual)</span>
                    <span>R$ 3.000</span>
                    <span>R$ 5.000</span>
                  </div>
                </div>

                {/* Simulated ROI metrics block */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-neutral-950 p-3 rounded-xl border border-neutral-850 text-center">
                    <span className="text-[9px] text-neutral-500 uppercase tracking-wider block font-bold">Alcance Estimado</span>
                    <strong className="text-[#f3ece6] text-sm font-mono mt-0.5 block">{currentMetrics.reach} pessoas</strong>
                    <span className="text-[8px] text-neutral-500">Visualizações na região</span>
                  </div>

                  <div className="bg-neutral-950 p-3 rounded-xl border border-neutral-850 text-center">
                    <span className="text-[9px] text-neutral-500 uppercase tracking-wider block font-bold">Cliques no Cardápio</span>
                    <strong className="text-[#f3ece6] text-sm font-mono mt-0.5 block">{currentMetrics.clicks} acessos</strong>
                    <span className="text-[8px] text-neutral-500">Visitantes interessados</span>
                  </div>

                  <div className="bg-neutral-950 p-3 rounded-xl border border-neutral-850 text-center col-span-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] text-neutral-400 uppercase tracking-wider block font-bold text-left">Reserva / Conversões Estimadas</span>
                      <span className="text-[8px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded font-mono">~12% taxa</span>
                    </div>
                    <strong className="text-emerald-400 text-lg font-mono mt-1 block text-left">~{currentMetrics.conversions} clientes novos/mês</strong>
                    <span className="text-[8px] text-neutral-500 text-left block mt-0.5">Estima-se um custo por clique médio de R$ {currentMetrics.cpc}</span>
                  </div>
                </div>

                <div className="text-[9px] text-neutral-500 leading-relaxed font-sans italic p-2 border-t border-neutral-850">
                  *Projeções baseadas no custo por mil impressões (CPM) médio do público de gastronomia de São José dos Campos. Resultados reais podem flutuar conforme criativos e sazonalidade do mercado.
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Lightbox Modal for pricing image */}
      {isImgModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-200"
          onClick={() => setIsImgModalOpen(false)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center bg-neutral-900 border border-neutral-850 rounded-2xl p-6 md:p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-neutral-400 hover:text-coral-400 font-bold text-sm bg-neutral-955 hover:bg-neutral-800 p-2 px-3 rounded-xl border border-neutral-800 flex items-center gap-1.5 transition-colors"
              onClick={() => setIsImgModalOpen(false)}
            >
              Fechar ✕
            </button>
            <h4 className="text-sm font-serif font-bold text-[#f3ece6] mb-4 text-left w-full flex items-center gap-2">
              <Tv className="w-4 h-4 text-coral-400" /> Tabela de Preços e Prazos — Mídia Indoor (Academias e Salões)
            </h4>
            
            <div className="w-full overflow-hidden rounded-xl border border-neutral-800">
              <TvIndoorPricingTable />
            </div>

            <p className="text-xs text-neutral-400 mt-4 text-center max-w-xl">
              Tabela original sem alterações: desconto progressivo de até 30% para inserções diárias de anúncios em 7 pontos estratégicos das maiores academias e salões de SJC.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
