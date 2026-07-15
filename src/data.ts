import { MarketingPhase, CampaignWeek, SponsorBenefit } from './types';

export const PHASES: MarketingPhase[] = [
  {
    id: 'fase-1',
    name: 'Fase 1: Lançamento',
    period: '08/07 a 21/07',
    description: 'Anúncio oficial, início das vendas e criação de expectativa inicial sobre a exclusividade do evento.',
    colorClass: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'fase-2',
    name: 'Fase 2: Construção de Desejo',
    period: '22/07 a 04/08',
    description: 'Foco na sofisticação: apresentação de vinhos, harmonizações, cardápio e bastidores da cozinha gourmet.',
    colorClass: 'from-purple-600 to-pink-700'
  },
  {
    id: 'fase-3',
    name: 'Fase 3: Conversão e Alerta',
    period: '05/08 a 18/08',
    description: 'Últimos ingressos, escassez (vagas limitadas) e divulgação crucial de que o restaurante convencional estará fechado.',
    colorClass: 'from-amber-600 to-red-700'
  },
  {
    id: 'fase-4',
    name: 'Dia do Evento',
    period: '19/08/2026',
    description: 'Cobertura em tempo real de altíssima frequência para registrar cada momento e gerar desejo para futuras edições.',
    colorClass: 'from-wine-700 to-wine-950'
  },
  {
    id: 'fase-5',
    name: 'Fase 5: Pós-Evento',
    period: '20/08 a 23/08',
    description: 'Agradecimentos, melhores momentos, fotos profissionais e colheita dos frutos da campanha de branding.',
    colorClass: 'from-emerald-600 to-teal-700'
  }
];

export const WEEKS: CampaignWeek[] = [
  {
    id: 'semana-1',
    phaseId: 'fase-1',
    name: 'Semanas 1 & 2',
    dates: '08 a 21 de Julho',
    title: 'Anúncio Oficial & Conceito',
    objective: 'Oficializar o festival, iniciar vendas de ingressos e iniciar divulgação institucional.',
    posts: [
      {
        type: 'feed',
        title: 'Post Feed (Semana 1): Anúncio Oficial',
        description: 'Arte sofisticada com garrafas e taças de vinho ao convívio da pizza, destacando data (19/08), horário, local do Armazém da Pizza e a exclusividade do evento (restaurante fechado).'
      },
      {
        type: 'stories',
        title: 'Stories (Semana 1): Bastidores',
        description: 'Gravar stories com a gerência do Armazém falando sobre o planejamento inicial e curadoria dos parceiros.'
      },
      {
        type: 'acao',
        title: 'Ação Estratégica (Semana 1)',
        description: 'Alterar o link principal da BIO no Instagram para a página de vendas de ingressos ou formulário de reservas.'
      },
      {
        type: 'feed',
        title: 'Post Feed (Semana 2): O Conceito do Evento',
        description: 'Carrossel detalhando o conceito da 2ª Edição: "Uma noite especial onde reuniremos rótulos selecionados, sabores únicos, música de alta qualidade e parcerias imperdíveis."'
      },
      {
        type: 'stories',
        title: 'Stories (Semana 2): Caixa de Perguntas & Enquetes',
        description: 'Interações divertidas para medir preferências: "Vinho Tinto ou Branco?", "Qual harmonização você prefere?", "Você se considera um sommelier experiente ou um iniciante curioso?"'
      },
      {
        type: 'reels',
        title: 'Reels (Semana 2): O Toque Único do Ambiente',
        description: 'Vídeo dinâmico de 15 segundos mostrando o ambiente do Armazém da Pizza sendo preparado, com uma música envolvente ao fundo e imagens em alta definição de jantares passados.'
      }
    ],
    checklist: [
      'Finalizar arte padrão de lançamento oficial do Wine & Food Festival',
      'Configurar checkout de venda de ingressos',
      'Atualizar link da bio do Instagram com link para reservas',
      'Gravar primeiro vídeo de bastidores com o proprietário/gerente'
    ],
    suggestedCaptions: [
      {
        title: 'Anúncio Oficial (Legenda de Feed)',
        caption: '🍷 SALVE ESTA DATA: O evento mais esperado do ano está de volta! No dia 19 de Agosto de 2026, abriremos as portas para a 2ª Edição do Wine & Food Armazém Festival. \n\nUma experiência gastronômica inédita de imersão no mundo dos vinhos, com mais de 150 rótulos nacionais e importados, deliciosas finger foods e a tradicional pizza do Armazém. \n\n⚠️ INFORMAÇÃO IMPORTANTE: Nesta noite especial, o restaurante estará FECHADO para atendimento convencional, atendendo exclusivamente os participantes com ingressos garantidos. \n"As vagas são limitadíssimas." Garanta sua mesa no link da bio! ✨ #WineAndFood #ArmazemFestival #VinhoEpizza #VinhosSJC'
      },
      {
        title: 'Apresentação do Conceito (Carrossel)',
        caption: 'O que define uma noite inesquecível? 🌟 Para nós, é a união de rótulos rigorosamente selecionados por sommeliers, sabores refinados, música ao vivo sofisticada e a tradicional pizza artesanal do Armazém à vontade! \n\nPrepare-se para degustar vinhos do Velho e Novo Mundo e vivenciar harmonizações incríveis criadas pelos parceiros mais renomados da gastronomia local. \n\n🎫 Ingressos do primeiro lote já estão à venda na Bio. Venha viver essa experiência única! #ArmazemDaPizza #DegustacaoVinhos #EventoExclusivo #GastronomiaSJC'
      }
    ]
  },
  {
    id: 'semana-3',
    phaseId: 'fase-2',
    name: 'Semanas 3 & 4',
    dates: '22 de Julho a 04 de Agosto',
    title: 'Construção de Desejo & Cardápio',
    objective: 'Apresentar as marcas parceiras, as vinícolas convidadas e provocar água na boca demonstrando o cardápio e combinações de pratos e vinhos.',
    posts: [
      {
        type: 'feed',
        title: 'Post Feed (Semana 3): Rótulos e Vinícolas',
        description: 'Carrossel elegante apresentando algumas das principais vinícolas participantes e dando destaque de que haverá mais de 155 rótulos de vinhos nacionais e importados para degustação livre.'
      },
      {
        type: 'stories',
        title: 'Stories (Semana 3): Curiosidades & Sommelier',
        description: 'Vídeos curtos ou slides explicando regras básicas de harmonização: o que combina com queijos maduros, vinhos tintos versus brancos, e caixas de perguntas frequentes para tirar dúvidas.'
      },
      {
        type: 'reels',
        title: 'Reels (Semana 3): O Sommelier Alerta',
        description: 'O Chef executivo ou Sommelier convidado mostra 2 rótulos especiais que estarão presentes e explica por que eles harmonizam perfeitamente com a tradicional pizza de longa fermentação do Armazém.'
      },
      {
        type: 'feed',
        title: 'Post Feed (Semana 4): Cardápio Gourmet',
        description: 'Post detalhando as finger foods dos parceiros renomados e o serviço exclusivo do Armazém (pizzas tradicionais de sucesso servidas à vontade durante a noite).'
      },
      {
        type: 'stories',
        title: 'Stories (Semana 4): Bastidores da Cozinha',
        description: 'Registro em vídeo no estilo POV ("point of view") do pizzaiolo preparando uma massa perfeita e assando no forno à lenha, gerando forte desejo visual.'
      },
      {
        type: 'acao',
        title: 'Ação Estratégica (Semana 4)',
        description: 'Disparo de mensagens de convite VIP para todos os clientes cadastrados na lista do Armazém com cupom ou link de pré-venda privilegiada.'
      }
    ],
    checklist: [
      'Coletar ficha técnica de pelo menos 5 vinícolas parceiras confirmadas',
      'Fotografar ou filmar os pratos/pizzas que serão servidos no dia',
      'Montar o roteiro com o Sommelier para o Reels sobre harmonizações',
      'Subir campanhas de tráfego pago nas redes (meta ads) focando nas cidades de São José dos Campos e Jacareí',
      'Monitorar volume de vendas e responder dúvidas enviadas via direct'
    ],
    suggestedCaptions: [
      {
        title: 'Apresentação de Rótulos (Semana 3)',
        caption: 'Você sabia que mais de 150 rótulos nacionais e importados estarão disponíveis para sua livre escolha? 🌍🍇 \n\nNo Wine & Food Armazém Festival, levamos você a uma viagem pelos principais terroirs do mundo: a potência dos vinhos argentinos, a elegância dos clássicos portugueses, a delicadeza dos brancos chilenos e o frescor das bolhas nacionais. \n\nTodos selecionados para combinar perfeitamente com os fingerfoods da noite. Comente EU QUERO e receba a lista de parceiros no direct!'
      },
      {
        title: 'Divulgação do Cardápio (Semana 4)',
        caption: 'O paladar também é feito de memórias. E nosso cardápio foi desenhado para criar as melhores delas! ✨ \n\nPara esta 2ª edição do Wine & Food, além da tradicional pizza do Armazém (servida quentinha e à vontade no forno à lenha 🍕), convidamos parceiros gastronômicos de renome para servir finger foods surpreendentes ao longo de todo o evento. \n\nTudo isso incluso no valor do seu convite! Uma verdadeira sinfonia de sabores. 🎟️ Vendas aceleradas do 2º lote. Não perca sua taça!'
      }
    ]
  },
  {
    id: 'semana-5',
    phaseId: 'fase-3',
    name: 'Semana 5 (05 a 11/08)',
    dates: '05 a 11 de Agosto',
    title: 'Contagem Regressiva & Alertas',
    objective: 'Criar forte senso de urgência e impulsionar vendas locais para os últimos lotes. Divulgar que as vagas são estritamente limitadas.',
    posts: [
      {
        type: 'feed',
        title: 'Post Feed (Semana 5): Falta 15 Dias!',
        description: 'Arte imponente de contagem regressiva alertando "Faltam apenas 15 dias para uma noite inesquecível". Frases de urgência na legenda destacando a proximidade da mudança de lote.'
      },
      {
        type: 'stories',
        title: 'Stories (Semana 5): Alerta de Ingressos & Prova Social',
        description: 'Sequência de reposts de stories de clientes de edições anteriores marcando o restaurante. Frase clara: "Não espere o lote virar, os convites de patrocinadores e clientes VIP já estão decolando!"'
      },
      {
        type: 'reels',
        title: 'Reels (Semana 5): A Experiência Sensorial',
        description: 'Vídeo em câmera lenta com som estimulante abrindo uma garrafa de vinho, servindo na taça de cristal Riedel, sorrisos dos convidados e o queijo derretendo na pizza do Armazém.'
      },
      {
        type: 'acao',
        title: 'Ação Estratégica (Semana 5)',
        description: 'Lançar impulsionamento pago focado em público local de alto poder aquisitivo amante de vinhos e culinária gourmet em SJC (São José dos Campos).'
      }
    ],
    checklist: [
      'Configurar posts informando sobre quantidade restante de convites',
      'Garantir que a equipe de salão saiba falar do festival para todos os clientes presenciais',
      'Reunir depoimentos curtos escritos por clientes antigos e preparar artes sofisticadas para stories'
    ],
    suggestedCaptions: [
      {
        title: 'Contagem Regressiva (Urgência)',
        caption: '🚨 FALTAM APENAS 15 DIAS! O relógio está correndo e os convites estão se esgotando mais rápido do que o imaginado. \n\nNo dia 19 de Agosto, oferecemos a você um santuário de boa gastronomia e vinhos selecionados com exclusividade. Não haverá venda de ingressos na hora do evento para mantermos o conforto premium dos nossos clientes VIPs. \n\nAproveite os últimos ingressos restantes do lote atual. Clique no link do perfil agora mesmo!'
      }
    ]
  },
  {
    id: 'semana-6',
    phaseId: 'fase-3',
    name: 'Semana 6: Pré-Evento',
    dates: '12 a 18 de Agosto',
    title: 'Informação Crucial & Alertas',
    objective: 'Comunicar clara e formalmente que o restaurante estará fechado no dia 19/08 e realizar a última chamada de vendas.',
    posts: [
      {
        type: 'feed',
        title: 'Post Feed (Segunda-feira 17/08): Últimos Ingressos',
        description: 'Arte de contagem diária: "Faltam apenas 2 dias!". Legenda reforçando as últimas vagas no link da bio e que os convites estão prestes a encerrar.'
      },
      {
        type: 'feed',
        title: 'Post Feed (Terça-feira 18/08): ALERTA FECHAMENTO',
        description: 'TEXTO SOBRE FUNDO LISSO E LIMPRO: "Aviso Importante: Informamos que no dia 19/08 (amanhã) o restaurante estará Fechado para atendimento convencional devido ao Wine & Food Festival. Retornaremos na quinta-feira."'
      },
      {
        type: 'stories',
        title: 'Stories (Segunda e Terça): Contagem regressiva diária',
        description: 'Stories constantes atualizando "Últimas 10 mesas disponíveis", perguntas de última hora de clientes e reforço intenso do aviso de fechamento do restaurante.'
      }
    ],
    checklist: [
      'Postar obrigatoriamente a arte informativa de fechamento no Feed e fixar nas redes',
      'Enviar WhatsApp ou E-mail para clientes frequentes que costumam jantar de quarta-feira alertando sobre o fechamento',
      'Instalar placa informativa física na entrada do Armazém da Pizza alertando sobre o funcionamento no dia 19/08',
      'Alinhar os últimos detalhes da equipe de sommeliers, garçons e fornecedores'
    ],
    suggestedCaptions: [
      {
        title: 'Aviso de Fechamento (Obrigatório)',
        caption: '📢 AVISO IMPORTANTE AOS NOSSOS CLIENTES E AMIGOS: \n\nInformamos que nesta quarta-feira, dia 19/08, nossas portas estarão FECHADAS para o atendimento convencional à la carte. 🚪\n\nIsso acontece por um motivo excelente: realizaremos o exclusivo Wine & Food Festival - 2ª Edição em nosso salão! Estaremos atendendo exclusivamente os participantes portadores de convites garantidos.\n\nRetornaremos ao funcionamento e atendimento tradicional na quinta-feira, 20/08. Agradecemos a compreensão e nos vemos no festival! ❤️🍷'
      }
    ]
  },
  {
    id: 'dia-evento',
    phaseId: 'fase-4',
    name: 'Dia do Evento (19/08)',
    dates: '19 de Agosto de 2026',
    title: 'Cobertura em Tempo Real',
    objective: 'Gerar engajamento imediato, registrar momentos inesquecíveis e gerar desejo em massa nas pessoas que viram de fora.',
    posts: [
      {
        type: 'stories',
        title: 'Stories (Manhã do Evento): A Montagem',
        description: 'Registrar a chegada das caixas de vinhos importados, a arrumação elegante do salão de festas do Armazém, montagem das barricas, baldes de gelo de marcas patrocinadoras.'
      },
      {
        type: 'stories',
        title: 'Stories (Tarde): Preparação da Cozinha',
        description: 'Sequências estéticas do Chef cortando ingredientes para os fingerfoods gourmet, a tradicional pizza do Armazém descansando e os fornos a lenha sendo aquecidos.'
      },
      {
        type: 'stories',
        title: 'Stories (Durante o Evento - a cada 30 min)',
        description: 'Vídeos vivos do público degustando rótulos, sommeliers explicando curiosidades, som de música ao vivo envolpando o salão, closes nos pratos lindos e no sorriso das pessoas.'
      },
      {
        type: 'reels',
        title: 'Reels (Noite): Registro Oficial de Clipes',
        description: 'Gravar clipes curtos e estéticos em alta-definição para preparar o Reels do dia seguinte (Melhores momentos da 2ª Edição).'
      }
    ],
    checklist: [
      'Designar um profissional de Social Media dedicado exclusivamente a captar fotos e postar stories de 30 em 30 minutos',
      'Checar se o Wi-Fi do salão está potente para postagens de vídeos em alta velocidade',
      'Registrar a presença e logotipo de todos os patrocinadores "Cota Única" nos materiais reais (pulseira, taça, pizza boxes, etc.) à câmera',
      'Gravar pequenos depoimentos em vídeo de pelo menos 3 clientes sorridentes elogiando a experiência'
    ],
    suggestedCaptions: [
      {
        title: 'Stories ao Vivo (Durante o Evento)',
        caption: '✨ O Armazém Wine & Food Festival começou! Uma noite espetacular com mais de 150 rótulos do melhor que se produz de vinho no mundo, finger foods quentinhos e uma energia inigualável! Acompanhe nos stories tudo o que está rolando!'
      }
    ]
  },
  {
    id: 'pos-evento',
    phaseId: 'fase-5',
    name: 'Pós-Evento (20 a 23/08)',
    dates: '20 a 23 de Agosto',
    title: 'Melhores Momentos e Próximas Edições',
    objective: 'Agradecer a todos os patrocinadores e participantes, registrar o sucesso do evento nas marcas de SJC e iniciar lista de espera do futuro.',
    posts: [
      {
        type: 'reels',
        title: 'Reels (20/08): Vídeo de Melhores Momentos',
        description: 'Um clipe editado de forma acelerada e com música inspiradora resumindo a noite: o brinde das taças de cristal, a gastronomia farta, a música ao vivo e a atmosfera premium.'
      },
      {
        type: 'feed',
        title: 'Post Feed (21/08): Carrossel de Fotos Oficiais',
        description: 'Uma seleção de fotos tiradas por fotógrafo profissional destacando os convidados, os parceiros sommeliers e a diversidade gastronômica da noite.'
      },
      {
        type: 'stories',
        title: 'Stories (20 a 22/08): Obrigado e Depoimentos',
        description: 'Agradecimento oficial da organização aos fornecedores, parceiros institucionais, patrocinadores e aos convidados. Compartilhar prints de mensagens de agradecimento no WhatsApp e Direct.'
      },
      {
        type: 'feed',
        title: 'Post Feed (Até 23/08): Resultados e Futura Edição',
        description: 'Balanço do sucesso do evento, com convite para que as pessoas já assinem uma lista VIP de interesse para a 3ª edição de vinhos e pizza.'
      }
    ],
    checklist: [
      'Receber do fotógrafo oficial a seleção de fotos editadas tratadas',
      'Postar o reels de Melhores Momentos até o meio-dia do dia seguinte (20/08)',
      'Criar post fixo marcando e agradecendo formalmente cada um dos patrocinadores cota única',
      'Reunir com a equipe para calcular faturamento final e lições aprendidas de logística'
    ],
    suggestedCaptions: [
      {
        title: 'Agradecimento e Sucesso (Pós-Evento)',
        caption: '🍷 OBRIGADO, SÃO JOSÉ DOS CAMPOS! A 2ª Edição do Wine & Food Armazém Festival foi simplesmente histórica! \n\nReunimos apaixonados por vinho e alta culinária em uma noite repleta de sorrisos, brindes épicos com mais de 155 rótulos mundiais, finger foods refinados e nossa tradicional pizza artesanal. \n\nUm agradecimento super especial aos nossos patrocinadores e parceiros por tornarem esse sonho de sofisticação possível. ✨ \n\nFicou com gostinho de quero mais ou perdeu essa oportunidade? Clique no link da bio para se cadastrar na lista de interesse VIP para a próxima edição! 🚀🍇 #ArmazemWineAndFood #FoiHistorico #VinhoSJC #Sommelier'
      }
    ]
  }
];

export const SPONSOR_COTAS: SponsorBenefit[] = [
  {
    name: 'Logotipo na Pulseira Oficial',
    description: 'Inserção da marca em todas as pulseiras de identificação dos convidados VIPs no dia do evento.',
    category: 'visual'
  },
  {
    name: 'Publicidade nas Caixas de Pizza Grandes',
    description: 'Espaço promocional exclusivo estampado nas caixas de pizza grandes durante o período de 1 mês completo nas entregas do Armazém.',
    category: 'visual'
  },
  {
    name: 'Logotipo na Sacola da Taça Riedel',
    description: 'Impressão da logomarca na sacola de luxo oferecida aos convidados para levar sua exclusiva taça de cristal Riedel para casa.',
    category: 'visual'
  },
  {
    name: 'Banner no Site do Clube de Campo',
    description: 'Exposição privilegiada no site do prestigiado Clube de Campo Santa Rita durante as 6 semanas que antecedem o evento.',
    category: 'midia'
  },
  {
    name: 'Website Oficial & Outdoor Digital',
    description: 'Destaque no painel digital de parceiros do site oficial do festival e veiculação em telões e outdoors digitais.',
    category: 'midia'
  },
  {
    name: 'Posts Personalizados e Mailing List',
    description: 'Publicação individualizada no feed/stories do Armazém da Pizza e envio de campanhas de e-mail marketing para mais de 7.000 contatos premium cadastrados.',
    category: 'midia'
  },
  {
    name: 'Direito a 4 Convites VIPs Inclusos',
    description: 'Cortesia de 4 ingressos premium completos (vinhos, finger foods e pizza à vontade) para diretores, clientes especiais ou representantes da empresa.',
    category: 'experiencia'
  },
  {
    name: 'Distribuição de Brindes no Evento',
    description: 'Oportunidade de ofertar flyers, brindes de degustação ou materiais corporativos aos presentes sob consentimento prévio.',
    category: 'experiencia'
  }
];
