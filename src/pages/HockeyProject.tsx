
import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';
import MetricsCard from '@/components/MetricsCard';
import BenefitsList from '@/components/BenefitsList';
import StrategyFeaturesGrid from '@/components/StrategyFeaturesGrid';
import { TrendingUp, Target, BarChart3, Zap, Users, Globe, Activity, FlaskConical, FileSymlink } from 'lucide-react';

const HockeyProject = () => {
  const metricsData = [
    {
      icon: Target,
      title: "Vendas Acima da Meta",
      value: "7.400",
      description: "Unidades vendidas (+48% sobre meta)",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      textColor: "text-green-800"
    },
    {
      icon: BarChart3,
      title: "Leads B2B Qualificados",
      value: "14.237",
      description: "Score ≥ 80/100 para retail",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      textColor: "text-blue-800"
    },
    {
      icon: Zap,
      title: "Redução de CAC",
      value: "-32%",
      description: "Vs campanhas anteriores",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      textColor: "text-purple-800"
    },
    {
      icon: Activity,
      title: "Receita Incremental",
      value: "R$ 5,8M",
      description: "Em apenas 3 meses",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      textColor: "text-orange-800"
    }
  ];

  const strategyFeatures = [
    {
      icon: TrendingUp,
      title: "Search & Shopping Ads Certeiros",
      description: "Campanhas em Google/Bing com foco em \"patins profissionais\" e \"sensor hóquei\", alcançando CTR de 8,4% e dominando a primeira página."
    },
    {
      icon: Activity,
      title: "Social Ads Multicanal",
      description: "Instagram Reels, TikTok e LinkedIn com desafios #BladeData gerando 12M de views e 45k de UGC espontâneo."
    },
    {
      icon: Globe,
      title: "YouTube Pre-Roll com Dados Reais",
      description: "Highlights de coleta de dados em jogos da NHL, mostrando métricas de elite em tempo real durante partidas oficiais."
    },
    {
      icon: Users,
      title: "Influencers & Pro-Players Autênticos",
      description: "Parcerias estratégicas com atletas profissionais gerando UGC genuíno e prova social inquestionável."
    }
  ];

  const benefits = [
    {
      title: "Consistência de Mensagem Sincronizada",
      description: "8 canais simultâneos entregando a mesma experiência de marca, da timeline do Instagram à arena física."
    },
    {
      title: "Dashboards em Tempo Real",
      description: "Capacidade de pivotar criativos e otimizar budgets em menos de 48 horas baseado em performance real."
    },
    {
      title: "Comunidade Engajada e UGC Espontâneo",
      description: "Economia de mídia estimada em R$ 600k através de conteúdo orgânico gerado pelos próprios usuários."
    },
    {
      title: "Pipeline Robusto para Expansão",
      description: "Share-of-voice social cresceu 120% na vertical hóquei, criando base sólida para novos esportes de gelo."
    }
  ];

  return (
    <ProjectPageLayout
      title="ICE HOCKEY ELITE SKILL TRACKER"
      subtitle="Como uma Campanha Multicanal Transformou Dados em Vendas e Fãs"
      imageUrl="/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png"
      brandName="Da arena à timeline: integração de 8 canais digitais"
      darkMode={false}
    >
      <SEO 
        title="CBAAP - Ice Hockey Elite Skill Tracker - Campanha Multicanal" 
        description="Case study de campanha multicanal que transformou o lançamento do sensor Elite Skill Tracker em sucesso de vendas através de integração estratégica de 8 canais digitais."
        type="article"
      />
      
      <div className="bg-orange-50 p-4 rounded-lg mb-6 flex items-center">
        <FlaskConical className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0" />
        <p className="text-orange-700 font-medium text-sm">Somente 10 Marcas por Trimestre na Nossa Sala de Guerra Multicanal — Próxima Temporada Já Começou</p>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-200">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">E se cada clique no Instagram ecoasse em vendas na loja da arena?</h3>
        <p className="text-gray-800 leading-relaxed">
          Foi assim que conectamos torcedores, atletas e treinadores em uma experiência digital unificada — e o resultado 
          ultrapassou todas as metas. Do gelo para o dashboard: a campanha que transformou cada passada em números que 
          elevam a performance e, principalmente, as vendas.
        </p>
      </div>
      
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Case Study: Ice Hockey Elite Skill Tracker - Power-Play Multicanal</h2>
      
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">Background: Quando Tradição Encontra Inovação</h3>
      <p className="text-gray-700 leading-relaxed mb-8">
        A Mars Blades, autoridade incontestável em lâminas e patins de hóquei, precisava lançar globalmente seu produto 
        mais inovador: o Elite Skill Tracker, um sensor revolucionário que transforma cada movimento no gelo em dados 
        acionáveis. O timing era crucial: plena pré-temporada, com a necessidade de conectar simultaneamente audiências 
        profissionais (times da NHL, KHL, SHL) e entusiastas amadores espalhados entre América do Norte e Europa.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">O Desafio que Exigia um Passe Certeiro ao Funil</h3>
      <p className="text-gray-700 leading-relaxed mb-8">
        **Audiência fragmentada** em dois continentes, **concorrência feroz** com gadgets fitness genéricos e uma 
        **meta agressiva**: 5.000 unidades vendidas em 90 dias + 10.000 leads qualificados para distribuidoras. 
        O maior obstáculo? Provar que um sensor de hóquei não era apenas "mais um wearable", mas sim a evolução 
        definitiva do treinamento de elite. Cada dólar de mídia precisava trabalhar em perfeita sintonia.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">A Estratégia Multicanal que Redefiniu o Jogo</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Desenvolvemos uma **matriz de 8 canais integrados** com mensagem-guia unificada: "Do gelo para o dashboard: 
        transforme cada passada em números que elevam a performance." Cada touchpoint foi sincronizado via UTM tracking, 
        pixel avançado e CRM inteligente, criando uma jornada fluida do primeiro clique à venda final.
      </p>
      
      <StrategyFeaturesGrid features={strategyFeatures} />
      
      <h4 className="text-xl font-semibold mb-4 text-gray-900">Execução de Canais: Cada Jogada Planejada</h4>
      <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
        <li><strong>E-mail ABM Segmentado:</strong> Drip campaigns em 3 fases (teaser, prova social NHL, oferta exclusiva) com 38% de open rate</li>
        <li><strong>Evento "Data on Ice":</strong> 300 coaches presenciais + 15k views no stream, captando 2.120 leads qualificados via QR stand</li>
        <li><strong>LinkedIn B2B Precision:</strong> Whitepaper "Analytics on Ice" com CPL de R$ 28 e ROI 6x para clubes e federações</li>
        <li><strong>Remarketing Dinâmico:</strong> Look-alike audiences e sequências cross-platform com ROAS médio de 9,2</li>
        <li><strong>PR Esportiva Integrada:</strong> Cobertura em tech blogs + mídia esportiva com foco em inovação e performance</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Métricas que Quebram Recordes</h3>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        {metricsData.map((metric, index) => (
          <MetricsCard key={index} {...metric} />
        ))}
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Benefícios que Transformam Marcas em Legends</h3>
      <BenefitsList benefits={benefits} />
      
      <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Próximos Passos: O Futuro é Agora</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Com o sucesso estrondoso da campanha multicanal, já temos **lista de espera de 3.000 pais** aguardando o lançamento 
        do "Skill Tracker Junior" para escolas de hóquei. A expansão para mercados asiáticos (KHL, ligas juniores) está 
        em andamento, junto com integração em plataformas de fantasy game para engajamento data-driven de fãs.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <FileSymlink className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Roadmap de Expansão 2025</h4>
          <ul className="text-gray-700 space-y-2">
            <li>• <strong>Q1:</strong> Lançamento multicanal na Ásia com parceiros KHL</li>
            <li>• <strong>Q2:</strong> Integração com fantasy games para fan engagement 24/7</li>
            <li>• <strong>Q3:</strong> Skill Tracker Junior com campanhas focadas em pais millennials</li>
            <li>• <strong>Q4:</strong> Expansão para outros esportes de inverno (patinação, curling)</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white">
        <p className="text-center text-lg font-semibold mb-2">
          "Pronto para orquestrar sua própria campanha multicanal?"
        </p>
        <p className="text-center text-blue-100 italic mb-4">
          Transforme seguidores em compradores leais através de estratégias que unificam dados, criatividade e 
          performance em uma mesma jogada — antes que o cronômetro zere. Sua audiência não espera.
        </p>
        <p className="text-center text-blue-100 font-medium">
          Converse com nossos especialistas e descubra como elevar sua marca ao próximo nível 
          com campanhas multicanal que realmente convertem.
        </p>
      </div>
    </ProjectPageLayout>
  );
};

export default HockeyProject;
