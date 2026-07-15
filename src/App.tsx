import { useState } from 'react';
import { 
  Wine, 
  Pizza, 
  Music, 
  MapPin, 
  Sparkles, 
  Goal, 
  Instagram, 
  Compass, 
  Video, 
  TrendingUp, 
  CheckCircle2, 
  Phone, 
  BookOpen, 
  DollarSign, 
  AlertTriangle,
  Users,
  ExternalLink,
  Flame
} from 'lucide-react';
import CountdownTimer from './components/CountdownTimer';
import CampaignTimeline from './components/CampaignTimeline';
import BudgetSimulator from './components/BudgetSimulator';
import SponsorBoard from './components/SponsorBoard';
import YoSushiCampaign from './components/YoSushiCampaign';

export default function App() {
  const [activeCampaign, setActiveCampaign] = useState<'armazem' | 'yosushi'>('yosushi');
  const [activeTab, setActiveTab] = useState<'portal' | 'cronograma' | 'comercial' | 'viabilidade'>('cronograma');

  // Interactive Goals tracking
  const [goalsCompleted, setGoalsCompleted] = useState<Record<string, boolean>>({
    goal1: false,
    goal2: false,
    goal3: false,
    goal4: false,
    goal5: false
  });

  const toggleGoal = (id: string) => {
    setGoalsCompleted(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const campainGoals = [
    { id: 'goal1', text: 'Divulgar o festival e fixar o branding da 2ª Edição em SJC.' },
    { id: 'goal2', text: 'Garantir a venda antecipada de reservas de ingressos.' },
    { id: 'goal3', text: 'Informar previamente que o restaurante estará FECHADO no dia 19/08 para atendimento normal.' },
    { id: 'goal4', text: 'Destacar experiências gastronômicas requintadas (cozinha, vinhos e parceiros).' },
    { id: 'goal5', text: 'Captar e registrar o conteúdo profissional para engajamento e branding pós-evento.' },
  ];

  const tabsConfig = [
    { id: 'cronograma', label: '📅 Cronograma de Divulgação', desc: 'Planejamento tático de 6 semanas' },
    { id: 'portal', label: '🍷 Portal do Festival', desc: 'Informações e visual do evento' },
    { id: 'comercial', label: '💼 Plano Comercial (Cota Única)', desc: 'Benefícios para marcas' },
    { id: 'viabilidade', label: '📊 Simulador de Faturamento', desc: 'Preço, ingressos e lucro' },
  ];

  return (
    <div 
      id="armazem-app-root" 
      className={`min-h-screen font-sans antialiased transition-colors duration-300 ${
        activeCampaign === 'yosushi' 
          ? 'bg-neutral-950 text-neutral-100 selection:bg-coral-500 selection:text-neutral-950' 
          : 'bg-wine-950 text-gold-100 selection:bg-wine-700 selection:text-white'
      }`}
    >
      
      {/* Global Project Switcher Bar */}
      <div className="bg-[#0a0a0d] border-b border-neutral-850 py-3.5 px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-coral-500/10 border border-coral-500/30 flex items-center justify-center text-coral-400">
            <Flame className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h1 className="text-xs font-bold uppercase tracking-wider text-neutral-200 font-sans">Apresentações Estratégicas SJC</h1>
            <p className="text-[10px] text-neutral-500 font-light font-sans">Selecione o plano de marketing para visualizar</p>
          </div>
        </div>
        
        <div className="flex bg-neutral-900/90 p-1 rounded-2xl border border-neutral-800">
          <button
            onClick={() => setActiveCampaign('armazem')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
              activeCampaign === 'armazem'
                ? 'bg-wine-800 text-gold-100 shadow-md border border-wine-700/40 font-bold'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            🍷 Wine & Food Festival
          </button>
          <button
            onClick={() => setActiveCampaign('yosushi')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
              activeCampaign === 'yosushi'
                ? 'bg-coral-500 text-neutral-950 shadow-md font-bold'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            🍣 Plano Yo Sushi SJC
          </button>
        </div>
      </div>

      {activeCampaign === 'yosushi' ? (
        <>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <YoSushiCampaign />
          </main>

          {/* Yo Sushi Footer */}
          <footer className="bg-[#0a0a0d] text-neutral-500 py-12 mt-16 border-t border-neutral-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 font-sans">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl">🍣</span>
                <span className="font-serif text-lg text-neutral-200 font-bold tracking-tight">Yo Sushi SJC</span>
              </div>
              <p className="text-xs max-w-md mx-auto leading-relaxed font-sans font-light text-neutral-400">
                Planejamento estratégico integrado para atração corporativa, marketing de influência, vouchers personalizados e mídias regionais em São José dos Campos.
              </p>
              <div className="pt-4 border-t border-neutral-900/40 text-[11px] text-neutral-600 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span>© 2026 Yo Sushi SJC. Todos os direitos reservados.</span>
                <span>Região de Atuação: Aquarius & Centro, SJC</span>
              </div>
            </div>
          </footer>
        </>
      ) : (
        <>
          {/* Top Warning Ribbon - Exclusivity Warning */}
          <div id="restaurante-fechado-alert-ribbon" className="bg-gradient-to-r from-wine-700 via-amber-700 to-wine-800 text-gold-100 text-center py-2 px-4 text-xs font-semibold flex items-center justify-center gap-2 shadow-sm relative z-25 border-b border-gold-500/10">
            <AlertTriangle className="w-4 h-4 text-gold-400 animate-pulse" />
            <span className="uppercase tracking-wider">Aviso Importante: No dia 19/08/2026, o Armazém da Pizza estará FECHADO para atendimento convencional (Exclusivo p/ o festival).</span>
          </div>

          {/* Hero Header Area - Artistic Flair Signature */}
          <header className="relative border-b border-wine-900 p-6 md:p-10 bg-[#0f0909] overflow-hidden">
            {/* Background art circles mimicking wine glasses */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] border border-wine-800 rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
              <div className="absolute top-1/2 left-3/4 w-[600px] h-[600px] border border-gold-500/15 rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-wine-900/45 via-transparent to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
              <div className="space-y-3">
                <p className="text-gold-400 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold leading-none">2ª Edição</p>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif italic leading-none text-gold-100 mt-1">
                  Wine & Food <span className="text-wine-700">Festival</span>
                </h1>
              </div>

              <div className="text-left md:text-right space-y-1.5 flex-shrink-0">
                <p className="text-3xl md:text-5xl font-light tracking-tighter text-gold-200">19.08.2026</p>
                <p className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold">Armazém da Pizza • Fechado Exclusivamente</p>
                <div className="inline-flex items-center gap-1.5 bg-wine-700/35 border border-wine-600/40 text-wine-200 py-1 px-3.5 rounded-full text-xs font-semibold">
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-ping"></span>
                  SJC Premium
                </div>
              </div>
            </div>

            {/* Countdown live space */}
            <div className="max-w-7xl mx-auto pt-8">
              <CountdownTimer />
            </div>
          </header>

          {/* Main Container Area */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            
            {/* Campaign Objectives Banner */}
            <section id="campaign-objectives-section" className="bg-[#1a1212] rounded-3xl p-6 border border-wine-900 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-wine-900 pb-4 mb-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-gold-100 flex items-center gap-2">
                    <Goal className="w-5 h-5 text-gold-400" />
                    Objetivos e Metas de Comunicação
                  </h3>
                  <p className="text-xs text-gold-300 font-sans mt-0.5">
                    Alavanque os resultados monitorando o cumprimento das metas prioritárias em SJC.
                  </p>
                </div>
                <div className="text-[10px] text-gold-400 bg-wine-950 border border-wine-900 py-1 px-3.5 rounded-full font-bold uppercase tracking-wider">
                  Clique nas metas para completar
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {campainGoals.map((g, index) => {
                  const isDone = goalsCompleted[g.id];
                  return (
                    <button
                      key={g.id}
                      id={`goal-checkbox-${g.id}`}
                      onClick={() => toggleGoal(g.id)}
                      className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-all duration-200 outline-none h-full ${
                        isDone 
                          ? 'bg-emerald-950/20 border-emerald-950 text-gold-200/80 shadow-inner' 
                          : 'bg-[#150f0f] border-wine-900 hover:border-gold-400/30 text-gold-100'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold font-mono ${
                          isDone ? 'bg-emerald-800 text-white' : 'bg-wine-900 text-gold-350'
                        }`}>
                          {index + 1}
                        </span>
                        <p className={`text-xs leading-relaxed font-sans ${isDone ? 'line-through text-gold-400/40' : 'font-light'}`}>
                          {g.text}
                        </p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-wine-900 flex items-center justify-between w-full text-[9px] text-gold-400 font-bold uppercase tracking-widest">
                        <span>Meta {index + 1}</span>
                        <span className={isDone ? 'text-emerald-400 font-bold' : 'text-gold-505'}>
                          {isDone ? 'Concluido' : 'Pendente'}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Tab Selection Row */}
            <section id="tabs-navigation-panel" className="bg-[#1a1212] p-2 rounded-3xl border border-wine-900 max-w-full overflow-x-auto shadow-inner">
              <div className="flex flex-nowrap md:flex-wrap items-center gap-1.5">
                {tabsConfig.map((tab) => {
                  const isSelected = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      id={`tab-selector-item-${tab.id}`}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex-1 min-w-[210px] text-left p-3.5 rounded-2xl transition-all duration-200 focus:outline-none ${
                        isSelected 
                          ? 'bg-wine-700 border border-gold-400/20 shadow-md text-gold-100 font-bold' 
                          : 'hover:bg-wine-900/40 text-gold-300 hover:text-gold-100 border border-transparent'
                      }`}
                    >
                      <span className="text-sm block font-serif tracking-wide">{tab.label}</span>
                      <span className="text-[10px] text-gold-300/60 block mt-0.5 font-normal truncate">{tab.desc}</span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Tab Content Rendering area */}
            <section id="main-panel-tabs-content" className="min-h-[400px]">
              
              {/* 1. Cronograma de Divulgação (Timeline) */}
              {activeTab === 'cronograma' && (
                <div className="space-y-4">
                  <div className="bg-[#1a1212] rounded-3xl p-6 border border-wine-900 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-gold-100 font-medium">
                        Cronograma Estratégico de Comunicação • 19 de Agosto
                      </h4>
                      <p className="text-xs text-gold-300 font-sans mt-0.5">
                        Selecione as semanas na barra de navegação à esquerda do painel abaixo para visualizar as ações de lançamento, posts e legendas prontas.
                      </p>
                    </div>
                    <div className="px-4 py-2 bg-wine-700/20 text-gold-350 border border-wine-600/35 font-bold text-xs rounded-xl animate-pulse flex items-center gap-1.5 uppercase tracking-wider font-mono">
                      <span className="w-1.5 h-1.5 bg-gold-400 rounded-full"></span>
                      Ideal para SJC Local
                    </div>
                  </div>
                  <CampaignTimeline />
                </div>
              )}

              {/* 2. Portal do Festival Info cards */}
              {activeTab === 'portal' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  
                  {/* Event Conceptual Presentation */}
                  <div id="conceptual-board" className="md:col-span-8 space-y-6">
                    
                    {/* Visual Banner Concept representing Wine Red and Gold */}
                    <div className="rounded-3xl p-8 bg-gradient-to-br from-wine-900/60 to-wine-950/70 border border-wine-900 shadow-lg text-gold-150 space-y-4 relative overflow-hidden">
                      <div className="absolute right-0 top-0 opacity-5 font-serif text-[180px] select-none font-bold text-white tracking-widest leading-none pointer-events-none transform translate-y-1/2">
                        W&F
                      </div>
                      <span className="text-gold-400 font-mono text-xs uppercase tracking-widest font-semibold block">Apresentação Estratégica</span>
                      <h3 className="font-serif text-2xl md:text-4xl font-bold text-gold-100 italic">
                        2ª Edição Wine & Food Festival SJC
                      </h3>
                      <p className="text-xs md:text-sm text-gold-200/90 leading-relaxed max-w-xl font-sans font-light">
                        Depois do maravilhoso sucesso realizado em Novembro de 2021, estamos preparando a segunda e mais sofisticada edição do Armazém Festival. Uma noite consagrada a reunir pessoas exigentes, sabores únicos e música de altíssima qualidade.
                      </p>
                      <p className="text-xs md:text-sm text-[#e3d7bf]/80 leading-relaxed max-w-xl font-sans font-light">
                        Como o festival ocorre no requintado salão do <strong>Armazém da Pizza</strong>, o restaurante ficará completamente <strong>fechado com exclusividade</strong> para prover o maior conforto aos convidados VIPs.
                      </p>
                      
                      <div className="pt-2 pb-1">
                        <a 
                          id="portal-page-button"
                          href="https://armazen-festival.vercel.app/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-wine-800 to-wine-600 hover:from-wine-700 hover:to-wine-500 text-gold-100 hover:text-white transition-all duration-150 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg border border-wine-500/30 hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <ExternalLink className="w-4 h-4 text-gold-400" />
                          Página
                        </a>
                      </div>
                      
                      <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
                        <div className="bg-wine-950/70 p-3.5 rounded-2xl border border-wine-900 flex items-center gap-2">
                          <Wine className="w-5 h-5 text-gold-400" />
                          <div>
                            <strong className="block text-gold-100 font-medium">Degustação Livre</strong>
                            <span className="text-gold-300 font-mono text-[10px]">+150 Rótulos Importações</span>
                          </div>
                        </div>
                        <div className="bg-wine-950/70 p-3.5 rounded-2xl border border-wine-900 flex items-center gap-2">
                          <Pizza className="w-5 h-5 text-gold-400" />
                          <div>
                            <strong className="block text-gold-100 font-medium">Finger Foods & Pizza</strong>
                            <span className="text-gold-300 font-mono text-[10px]">Tudo À Vontade</span>
                          </div>
                        </div>
                        <div className="bg-wine-950/70 p-3.5 rounded-2xl border border-wine-900 flex items-center gap-2">
                          <Music className="w-5 h-5 text-gold-400" />
                          <div>
                            <strong className="block text-gold-100 font-medium">Música ao Vivo</strong>
                            <span className="text-gold-300 font-mono text-[10px]">Alta Qualidade a Noite Toda</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* About Armazém and Target Public details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      <div className="bg-[#1a1212] rounded-3xl p-6 border border-wine-900 shadow-sm space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400">
                          <Users className="w-5 h-5" />
                        </div>
                        <h4 className="font-serif text-base font-bold text-gold-100">Público Alvo Premium</h4>
                        <p className="text-xs text-gold-300/80 leading-relaxed font-sans font-light">
                          A expectativa de curadoria do festival é reunir <strong>apreciadores fervorosos de vinho e alta gastronomia</strong>, com alto poder aquisitivo de São José dos Campos e região para interagir diretamente com as marcas em um ambiente de pura sofisticação.
                        </p>
                      </div>

                      <div className="bg-[#1a1212] rounded-3xl p-6 border border-wine-900 shadow-sm space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-wine-700/10 border border-wine-700/20 flex items-center justify-center text-wine-400">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <h4 className="font-serif text-base font-bold text-gold-100">O Local do Renome</h4>
                        <p className="text-xs text-gold-300/80 leading-relaxed font-sans font-light">
                          Tradicionalmente, a marca operou edições de prestígio no salão do <strong>Clube de Campo Santa Rita</strong>, contando com total segurança, salão climatizado e estacionamento privado. No dia 19/08/2026, trazemos toda essa expertise e logística premium para o coração do restaurante Armazém da Pizza.
                        </p>
                      </div>

                    </div>

                  </div>
                  
                  {/* Quick Info Sidebar */}
                  <div id="quick-meta-sidebar" className="md:col-span-4 space-y-6">
                    
                    <div className="bg-[#1a1212] rounded-3xl p-6 border border-wine-900 shadow-sm space-y-4">
                      <h4 className="font-serif text-base font-bold text-gold-100 border-b border-wine-900 pb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-gold-400" />
                        Ficha Técnica do Evento
                      </h4>
                      
                      <ul className="space-y-3 text-xs font-sans">
                        <li className="flex justify-between p-2 rounded-xl bg-wine-950/60 border border-wine-900">
                          <strong className="text-gold-300/70">Espaço Exclusivo:</strong>
                          <span className="font-semibold text-gold-100">Armazém da Pizza</span>
                        </li>
                        <li className="flex justify-between p-2 rounded-xl bg-wine-950/60 border border-wine-900">
                          <strong className="text-gold-300/70">Data do Festival:</strong>
                          <span className="font-semibold text-wine-400 font-mono font-bold">19/08/2026 (Quarta)</span>
                        </li>
                        <li className="flex justify-between p-2 rounded-xl bg-wine-950/60 border border-wine-900">
                          <strong className="text-gold-300/70">Público Estimado:</strong>
                          <span className="font-semibold text-gold-100">Convidados VIPs</span>
                        </li>
                        <li className="flex justify-between p-2 rounded-xl bg-wine-950/60 border border-wine-900">
                          <strong className="text-gold-300/70">Rótulos Disponíveis:</strong>
                          <span className="font-semibold text-gold-100">+150 Nacionais & Importados</span>
                        </li>
                        <li className="flex justify-between p-2 rounded-xl bg-wine-950/60 border border-wine-900">
                          <strong className="text-gold-300/70">Atendimento Regular:</strong>
                          <span className="font-bold text-wine-500 uppercase">FECHADO</span>
                        </li>
                      </ul>
                    </div>

                    {/* Wine tip box */}
                    <div className="bg-gradient-to-tr from-[#1a1212] to-wine-950 border border-wine-900 rounded-3xl p-6 text-gold-150 space-y-3">
                      <Wine className="w-8 h-8 text-gold-400 animate-pulse" />
                      <h5 className="font-serif text-sm font-bold text-gold-300">Por que fechar o restaurante?</h5>
                      <p className="text-xs text-gold-300/85 leading-relaxed font-sans font-light">
                        Transformar o Armazém da Pizza em um pavilhão exclusivo de vinhos e pizza "todas as mesas à vontade" por uma noite cria intimidade, reforça o prestígio da marca e confere às marcas parceiras atenção de 100% dos convidados.
                      </p>
                    </div>

                  </div>

                </div>
              )}

              {/* 3. Plano Comercial Sponsor benefits */}
              {activeTab === 'comercial' && (
                <div className="space-y-4">
                  <div className="bg-[#1a1212] rounded-3xl p-6 border border-wine-900 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-gold-100">
                        Oportunidade de Branding Corporativo (Cota Única)
                      </h4>
                      <p className="text-xs text-gold-300 font-sans mt-0.5">
                        Saiba detalhadamente como a marca de cada parceiro é inserida no ecossistema e mídias de entrega de pizzas do Armazém.
                      </p>
                    </div>
                    <span className="bg-wine-900/40 text-gold-300 border border-wine-800/65 py-1.5 px-3 rounded-xl text-xs font-bold font-mono">
                      Incluso 4 Convites VIPs (R$ 1.400 em valor real)
                    </span>
                  </div>
                  <SponsorBoard />
                </div>
              )}

              {/* 4. Simulador de Viabilidade Financial planning */}
              {activeTab === 'viabilidade' && (
                <div className="space-y-4">
                  <div className="bg-[#1a1212] rounded-3xl p-6 border border-wine-900 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-gold-100">
                        Simulador do Planejador Financeiro do Evento
                      </h4>
                      <p className="text-xs text-gold-300 font-sans mt-0.5">
                        Utilize as barras deslizantes para estimar quanto o Armazém fura o break-even e lucros líquidos simulando patrocínios versus preço médio do convite.
                      </p>
                    </div>
                    <span className="bg-[#0f0909] text-gold-300 border border-wine-900 py-1 px-3 rounded-lg text-xs font-mono">
                      Base de Custo Fixo SJC
                    </span>
                  </div>
                  <BudgetSimulator />
                </div>
              )}

            </section>

          </main>

          {/* Aesthetic Footer based on guidelines */}
          <footer id="armazem-festival-main-footer" className="bg-[#150f0f] text-gold-300/60 py-12 mt-16 border-t border-wine-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 font-sans">
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold-400 text-wine-950 flex items-center justify-center border border-gold-300">
                  <Wine className="w-5 h-5 text-wine-950" />
                </div>
                <span className="font-serif text-lg text-gold-100 font-bold tracking-tight">Armazém Festival 2026</span>
              </div>
              <p className="text-xs max-w-md mx-auto leading-relaxed font-sans font-light">
                Solução interativa integral para estruturar, monitorar e faturar no <strong>Wine & Food Premium Festival</strong>. Desenvolvido para SJC de acordo com os detalhes anexados.
              </p>
              <div className="pt-4 border-t border-wine-900/60 text-[11px] text-gold-400/50 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span>© 2026 Armazém da Pizza. Todos os direitos reservados.</span>
                <span>Local: São José dos Campos, SP</span>
              </div>
            </div>
          </footer>
        </>
      )}

    </div>
  );
}
