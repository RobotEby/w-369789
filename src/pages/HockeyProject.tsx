
import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';
import { TrendingUp, Target, BarChart3, Zap, Users, Globe, Activity, FlaskConical, FileSymlink } from 'lucide-react';

const HockeyProject = () => {
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
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex items-start">
          <TrendingUp className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900">Search & Shopping Ads Certeiros</h4>
            <p className="text-gray-700">Campanhas em Google/Bing com foco em "patins profissionais" e "sensor hóquei", alcançando CTR de 8,4% e dominando a primeira página.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex items-start">
          <Activity className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900">Social Ads Multicanal</h4>
            <p className="text-gray-700">Instagram Reels, TikTok e LinkedIn com desafios #BladeData gerando 12M de views e 45k de UGC espontâneo.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex items-start">
          <Globe className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900">YouTube Pre-Roll com Dados Reais</h4>
            <p className="text-gray-700">Highlights de coleta de dados em jogos da NHL, mostrando métricas de elite em tempo real durante partidas oficiais.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex items-start">
          <Users className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900">Influencers & Pro-Players Autênticos</h4>
            <p className="text-gray-700">Parcerias estratégicas com atletas profissionais gerando UGC genuíno e prova social inquestionável.</p>
          </div>
        </div>
      </div>
      
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
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <div className="flex items-center mb-3">
            <Target className="h-5 w-5 text-green-600 mr-2" />
            <h4 className="font-semibold text-green-800">Vendas Acima da Meta</h4>
          </div>
          <p className="text-3xl font-bold text-green-700 mb-1">7.400</p>
          <p className="text-green-600 text-sm">Unidades vendidas (+48% sobre meta)</p>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <div className="flex items-center mb-3">
            <BarChart3 className="h-5 w-5 text-blue-600 mr-2" />
            <h4 className="font-semibold text-blue-800">Leads B2B Qualificados</h4>
          </div>
          <p className="text-3xl font-bold text-blue-700 mb-1">14.237</p>
          <p className="text-blue-600 text-sm">Score ≥ 80/100 para retail</p>
        </div>
        
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <div className="flex items-center mb-3">
            <Zap className="h-5 w-5 text-purple-600 mr-2" />
            <h4 className="font-semibold text-purple-800">Redução de CAC</h4>
          </div>
          <p className="text-3xl font-bold text-purple-700 mb-1">-32%</p>
          <p className="text-purple-600 text-sm">Vs campanhas anteriores</p>
        </div>
        
        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
          <div className="flex items-center mb-3">
            <Activity className="h-5 w-5 text-orange-600 mr-2" />
            <h4 className="font-semibold text-orange-800">Receita Incremental</h4>
          </div>
          <p className="text-3xl font-bold text-orange-700 mb-1">R$ 5,8M</p>
          <p className="text-orange-600 text-sm">Em apenas 3 meses</p>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Benefícios que Transformam Marcas em Legends</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 mt-1 font-bold">✓</div>
          <div>
            <h4 className="font-semibold text-gray-900">Consistência de Mensagem Sincronizada</h4>
            <p className="text-gray-700">8 canais simultâneos entregando a mesma experiência de marca, da timeline do Instagram à arena física.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 mt-1 font-bold">✓</div>
          <div>
            <h4 className="font-semibold text-gray-900">Dashboards em Tempo Real</h4>
            <p className="text-gray-700">Capacidade de pivotar criativos e otimizar budgets em menos de 48 horas baseado em performance real.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 mt-1 font-bold">✓</div>
          <div>
            <h4 className="font-semibold text-gray-900">Comunidade Engajada e UGC Espontâneo</h4>
            <p className="text-gray-700">Economia de mídia estimada em R$ 600k através de conteúdo orgânico gerado pelos próprios usuários.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 mt-1 font-bold">✓</div>
          <div>
            <h4 className="font-semibold text-gray-900">Pipeline Robusto para Expansão</h4>
            <p className="text-gray-700">Share-of-voice social cresceu 120% na vertical hóquei, criando base sólida para novos esportes de gelo.</p>
          </div>
        </div>
      </div>
      
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
