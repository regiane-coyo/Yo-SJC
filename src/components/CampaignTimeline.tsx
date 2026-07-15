import { useState, useEffect } from 'react';
import { WEEKS, PHASES } from '../data';
import { CampaignWeek, PostItem } from '../types';
import { 
  Calendar, 
  CheckSquare, 
  Square, 
  Copy, 
  Check, 
  Instagram, 
  Flame, 
  Bell, 
  Users,
  Video, 
  ChevronRight,
  TrendingUp, 
  Compass, 
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CampaignTimeline() {
  const [selectedWeekId, setSelectedWeekId] = useState<string>('semana-1');
  const [checklistStates, setChecklistStates] = useState<Record<string, boolean>>({});
  const [copiedCaptionId, setCopiedCaptionId] = useState<string | null>(null);

  // Load checklist state from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('armazem_marketing_checklist');
      if (stored) {
        setChecklistStates(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load checklist states', e);
    }
  }, []);

  const toggleChecklistItem = (key: string) => {
    const updated = {
      ...checklistStates,
      [key]: !checklistStates[key]
    };
    setChecklistStates(updated);
    try {
      localStorage.setItem('armazem_marketing_checklist', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save checklist state', e);
    }
  };

  const selectedWeek = WEEKS.find(w => w.id === selectedWeekId) || WEEKS[0];
  const associatedPhase = PHASES.find(p => p.id === selectedWeek.phaseId);

  const handleCopyCaption = (text: string, indexStr: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCaptionId(indexStr);
    setTimeout(() => {
      setCopiedCaptionId(null);
    }, 2000);
  };

  const getPostIcon = (type: PostItem['type']) => {
    switch (type) {
      case 'feed':
        return <Instagram className="w-5 h-5 text-indigo-500" />;
      case 'stories':
        return <Compass className="w-5 h-5 text-pink-500" />;
      case 'reels':
        return <Video className="w-5 h-5 text-red-500" />;
      case 'acao':
        return <TrendingUp className="w-5 h-5 text-emerald-500" />;
    }
  };

  const getPostBadgeColor = (type: PostItem['type']) => {
    switch (type) {
      case 'feed':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'stories':
        return 'bg-pink-50 text-pink-700 border-pink-200';
      case 'reels':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'acao':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    }
  };

  // Pre-calculate statistics
  const totalTasks = WEEKS.reduce((acc, curr) => acc + curr.checklist.length, 0);
  const completedTasks = Object.entries(checklistStates).filter(([key, val]) => {
    // make sure the key exists in one of the active checklist configurations
    if (!val) return false;
    return WEEKS.some(w => w.checklist.some(c => `${w.id}-${c}` === key));
  }).length;

  const totalProgressPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div id="marketing-campaign-timeline" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      {/* LEFT COLUMN: Week selection with overall statistics */}
      <div className="lg:col-span-4 flex flex-col gap-6">
        <div className="bg-[#1a1212] rounded-3xl p-6 border border-wine-900 shadow-xl">
          <h3 className="font-serif text-lg font-bold text-gold-100 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-gold-400" />
            Progresso da Campanha
          </h3>
          <div className="flex justify-between text-sm text-gold-200 mb-2 font-medium font-sans">
            <span>Ações Executadas</span>
            <span className="font-mono text-wine-300 font-bold">{completedTasks} de {totalTasks} ({totalProgressPercentage}%)</span>
          </div>
          <div className="w-full bg-[#0f0909] rounded-full h-2.5 overflow-hidden border border-wine-900">
            <motion.div 
              className="bg-gradient-to-r from-wine-700 to-gold-450 h-2.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${totalProgressPercentage}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
          <p className="text-[10px] text-gold-400/60 mt-2 italic font-mono">
            *As ações de progresso são salvas automaticamente no navegador.
          </p>
        </div>
 
        {/* List of weeks */}
        <div id="week-selector-sidebar" className="bg-[#1a1212] rounded-3xl border border-wine-900 p-4 shadow-xl flex flex-col gap-1.5">
          <p className="text-xs font-bold text-gold-400 px-3 uppercase tracking-wider mb-2 font-mono">Cronograma de 6 Semanas</p>
          
          {WEEKS.map((week) => {
            const isSelected = week.id === selectedWeekId;
            const weekCompletedCount = week.checklist.filter(item => checklistStates[`${week.id}-${item}`]).length;
            const weekTotalCount = week.checklist.length;
            const isWeekFullyChecked = weekCompletedCount === weekTotalCount && weekTotalCount > 0;
 
            let phaseBadgeColor = "text-gold-205";
            if (week.id.includes('semana-1')) phaseBadgeColor = "bg-blue-950/60 text-blue-300 border border-blue-900/60";
            else if (week.id.includes('semana-3')) phaseBadgeColor = "bg-purple-950/60 text-purple-300 border border-purple-900/60";
            else if (week.id.includes('semana-5')) phaseBadgeColor = "bg-amber-950/60 text-amber-300 border border-amber-900/60";
            else if (week.id.includes('semana-6')) phaseBadgeColor = "bg-red-950/60 text-red-300 border border-red-900/60";
            else if (week.id.includes('dia-evento')) phaseBadgeColor = "bg-wine-950/60 text-wine-300 border border-wine-800/60";
            else phaseBadgeColor = "bg-emerald-950/60 text-emerald-300 border border-emerald-900/60";
 
            return (
              <button
                key={week.id}
                id={`btn-select-week-${week.id}`}
                onClick={() => setSelectedWeekId(week.id)}
                className={`w-full flex items-center justify-between text-left p-3.5 rounded-2xl transition-all duration-150 outline-none ${
                  isSelected 
                    ? 'bg-wine-700 border border-gold-400/20 text-gold-100 shadow-md animate-pulse' 
                    : 'hover:bg-wine-900/20 border border-transparent text-gold-300 hover:text-gold-100'
                }`}
              >
                <div className="flex-1 min-w-0 pr-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[9px] font-bold uppercase py-0.5 px-2 rounded-full font-mono ${
                      isSelected ? 'bg-white/10 text-gold-200' : phaseBadgeColor
                    }`}>
                      {week.name}
                    </span>
                    <span className={`text-[9px] font-mono ${isSelected ? 'text-wine-100' : 'text-gold-400/60'}`}>
                      {week.dates}
                    </span>
                  </div>
                  <h4 className={`font-serif text-sm font-semibold truncate ${isSelected ? 'text-gold-100' : 'text-gold-200'}`}>
                    {week.title}
                  </h4>
                </div>
 
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  {isWeekFullyChecked ? (
                    <CheckCircle2 className={`w-5 h-5 ${isSelected ? 'text-gold-350' : 'text-emerald-500'}`} />
                  ) : (
                    weekTotalCount > 0 && (
                      <span className={`text-[10px] font-bold font-mono py-0.5 px-1.5 rounded-md ${
                        isSelected ? 'bg-[#0f0909]/40 text-gold-250' : 'bg-[#0f0909] text-gold-300/80'
                      }`}>
                        {weekCompletedCount}/{weekTotalCount}
                      </span>
                    )
                  )}
                  <ChevronRight className={`w-4 h-4 opacity-50 ${isSelected ? 'text-gold-300' : 'text-gold-500'}`} />
                </div>
              </button>
            );
          })}
        </div>
      </div>
 
      {/* RIGHT COLUMN: Active week dashboard */}
      <div id="week-detail-panel" className="lg:col-span-8 space-y-6">
        
        {/* Phase Header Card */}
        <div className="rounded-3xl p-6 text-gold-100 bg-gradient-to-tr from-wine-900 to-wine-950 shadow-xl border border-wine-800 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-y-1/4 translate-x-1/8">
            <Instagram className="w-64 h-64 text-white" />
          </div>
          
          <div className="relative z-10">
            <span className="text-gold-300 font-mono uppercase text-[9px] font-bold tracking-widest bg-wine-950 border border-wine-900 px-3 py-1 rounded-full">
              {associatedPhase?.name}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mt-3 text-gold-100 italic">
              {selectedWeek.title}
            </h2>
            <p className="text-gold-250 font-light text-sm font-sans mt-2 leading-relaxed">
              {associatedPhase?.description}
            </p>
            <div className="mt-4 pt-4 border-t border-wine-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs md:text-sm">
              <span className="flex items-center gap-2 font-mono text-gold-400">
                <Calendar className="w-4 h-4" />
                Período: {selectedWeek.dates}
              </span>
              <span className="flex items-center gap-2 text-wine-300 font-sans">
                <Clock className="w-4 h-4" />
                Meta: {selectedWeek.objective}
              </span>
            </div>
          </div>
        </div>

        {/* Checklist of deliverables for this week */}
        <div id="week-checklist-box" className="bg-[#1a1212] rounded-3xl p-6 border border-wine-900 shadow-xl">
          <h3 className="font-serif text-lg font-bold text-gold-100 mb-4 flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-gold-400" />
            Checklist de Operações e Redes Sociais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {selectedWeek.checklist.map((item) => {
              const itemKey = `${selectedWeek.id}-${item}`;
              const isChecked = checklistStates[itemKey] || false;
              return (
                <div
                  key={item}
                  onClick={() => toggleChecklistItem(itemKey)}
                  className={`flex flex-col justify-between text-left p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer outline-none ${
                    isChecked 
                      ? 'bg-emerald-950/20 border-emerald-900/60 text-gold-300/60' 
                      : 'bg-[#150f0f] hover:bg-wine-950/40 border-wine-900 text-[#e4dbd4] hover:text-[#f8f5f2]'
                  }`}
                >
                  <div className="flex items-start">
                    <span className="mr-3 flex-shrink-0 mt-0.5">
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Square className="w-5 h-5 text-wine-700" />
                      )}
                    </span>
                    <span className={`text-xs font-semibold leading-relaxed font-sans ${isChecked ? 'line-through opacity-70' : ''}`}>
                      {item}
                    </span>
                  </div>
                  {item === 'Configurar checkout de venda de ingressos' && (
                    <div className="pl-8 pt-3" onClick={(e) => e.stopPropagation()}>
                      <a 
                        href="https://ticketeer.vercel.app/event/21d6009ac4c1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-wine-800 to-wine-600 hover:from-wine-700 hover:to-wine-500 text-gold-100 hover:text-white transition-all duration-150 rounded-xl text-xs font-bold font-mono tracking-wider shadow-lg border border-wine-500/40 hover:scale-[1.03] active:scale-[1.01]"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                        NOVA
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Deliverables / Social media specific plans */}
        <div id="posts-configuration-box" className="space-y-4">
          <h3 className="font-serif text-lg font-bold text-gold-100 flex items-center gap-2 px-1">
            <Instagram className="w-5 h-5 text-gold-400" />
            Cronograma de Postagens Programadas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedWeek.posts.map((post, i) => (
              <div 
                key={i} 
                className="bg-[#1a1212] rounded-2xl border border-wine-900 hover:border-wine-800 p-5 shadow-xl space-y-3 flex flex-col justify-between transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[9px] font-mono uppercase font-bold py-1 px-2.5 rounded-full border ${getPostBadgeColor(post.type)}`}>
                      {post.type}
                    </span>
                    {getPostIcon(post.type)}
                  </div>
                  <h4 className="font-serif text-sm font-semibold text-gold-100">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gold-300 leading-relaxed font-sans font-light mt-2">
                    {post.description}
                  </p>
                </div>
                {post.type === 'acao' && (
                  <div className="mt-2 pt-2 border-t border-wine-900 bg-gold-400/5 p-2.5 rounded-xl text-[10px] text-gold-300 font-mono font-bold flex items-center gap-1.5 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
                    Ação prioritária da semana!
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Captions Assistant */}
        {selectedWeek.suggestedCaptions.length > 0 && (
          <div id="suggested-captions-box" className="bg-[#150f0f] text-gold-200 rounded-3xl p-6 border border-wine-900 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-gold-100 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-gold-400" />
                  Assistente de Copywriting (Redes Sociais)
                </h3>
                <p className="text-[11px] text-gold-300 font-sans mt-1 leading-relaxed">
                  Legendas persuasivas prontas para copiar de acordo com o plano estratégico desta semana.
                </p>
              </div>
              <span className="hidden sm:inline-block bg-wine-900/40 text-gold-300 text-[9px] font-mono border border-wine-800 rounded-full px-3 py-1 font-semibold uppercase tracking-wider">
                Pronto P/ Usar
              </span>
            </div>

            <div className="space-y-4">
              {selectedWeek.suggestedCaptions.map((item, index) => {
                const uniqueId = `${selectedWeek.id}-caption-${index}`;
                const isCopied = copiedCaptionId === uniqueId;

                return (
                  <div key={index} className="bg-wine-950/60 rounded-2xl p-4 border border-wine-900 space-y-2 relative">
                    <div className="flex items-center justify-between pb-2 border-b border-wine-900/60">
                      <span className="text-xs font-serif font-semibold text-gold-150 flex items-center gap-1.5">
                        <Instagram className="w-3.5 h-3.5 text-pink-400" />
                        {item.title}
                      </span>
                      <button
                        onClick={() => handleCopyCaption(item.caption, uniqueId)}
                        className={`text-xs px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all duration-150 outline-none font-mono ${
                          isCopied 
                            ? 'bg-emerald-700 text-white border border-emerald-600' 
                            : 'bg-wine-900/40 hover:bg-wine-800/60 text-gold-100 border border-wine-800'
                        }`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            Copiado!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-gold-300" />
                            Copiar Legenda
                          </>
                        )}
                      </button>
                    </div>
                    
                    <p className="text-xs text-[#e3d7bf]/80 font-sans leading-relaxed whitespace-pre-line pt-1">
                      {item.caption}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
