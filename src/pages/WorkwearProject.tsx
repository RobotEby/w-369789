
import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';
import { Thermometer, ShieldCheck, BarChart3, FileSymlink, Cpu, FlaskConical, TrendingUp, Target, Zap, Activity } from 'lucide-react';

const WorkwearProject = () => {
  return (
    <ProjectPageLayout
      title="WORKWEAR CLIMATE CONTROL"
      subtitle="Inteligência Analítica para Performance em Ambientes Extremos"
      imageUrl="/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"
      brandName="Plataforma de Vestuário Climatizado Inteligente"
      darkMode={false}
    >
      <SEO 
        title="CBAAP - Workwear Climate Control Analytics" 
        description="Plataforma de vestuário climatizado que coleta dados em tempo real e transforma segurança térmica em vantagem operacional para indústrias de ambientes extremos."
        type="article"
      />
      
      <div className="bg-yellow-50 p-4 rounded-lg mb-6 flex items-center">
        <FlaskConical className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
        <p className="text-yellow-700 font-medium text-sm">Projeto em Fase de Prototipagem — Programa Piloto Disponível para Apenas 5 Indústrias Neste Semestre</p>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-200">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">Imagine se cada EPI vestisse também um dashboard vivo, enviando à central métricas de temperatura, gasto de bateria e risco de hipotermia.</h3>
        <p className="text-gray-800 leading-relaxed">
          Essa é a revolução Analytics & Performance que apresentamos a seguir. Transformamos vestuário de segurança 
          em centrais de inteligência operacional que coletam dados em tempo real e convertem cada métrica térmica 
          em vantagem competitiva mensurável.
        </p>
      </div>
      
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Case Study: Workwear Climate Control - Analytics & Performance</h2>
      
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">Contexto e Histórico</h3>
      <p className="text-gray-700 leading-relaxed mb-8">
        Um dos maiores fabricantes têxteis europeus, especializado em EPIs para ambientes extremos, procurou a CBAAP 
        para revolucionar seu portfólio através de inteligência de dados. Com operações que enfrentam desde -35°C no 
        Ártico até proximidade de fornos a +600°C, a necessidade era clara: transformar cada peça de vestuário em um 
        **termostato invisível** capaz de gerar insights acionáveis para gestores de EHS e equipes operacionais.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">O Desafio que Exigia Inteligência em Tempo Real</h3>
      <p className="text-gray-700 leading-relaxed mb-8">
        As soluções tradicionais ofereciam apenas proteção passiva ou sistemas externos volumosos que comprometiam 
        a mobilidade. O grande problema? **Falta total de visibilidade** sobre temperatura corporal, hotspots de risco 
        e consumo energético em tempo real. Cada inverno perdido representava centenas de horas de produção paradas, 
        afastamentos custosos e relatórios de compliance manuais que consumiam recursos preciosos da operação.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">A Solução que Redefine Performance Industrial</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Desenvolvemos uma plataforma integrada que transforma cada trabalhador em um **radar térmico de bolso**, 
        coletando 50 amostras por segundo e convertendo dados brutos em inteligência operacional acionável. 
        Cada peça se torna um centro de comando climático no corpo do colaborador.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex items-start">
          <Thermometer className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900">Elementos Têxteis Ativos de Multizona</h4>
            <p className="text-gray-700">Sistema integrado de aquecimento e resfriamento com controle independente por região corporal, otimizado por algoritmos de machine learning.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex items-start">
          <Cpu className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900">Módulo IoT Edge Inteligente</h4>
            <p className="text-gray-700">Coleta contínua de temperatura interna/externa, umidade e movimento, com processamento local para resposta em milissegundos.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex items-start">
          <BarChart3 className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900">Painel Analytics & Performance Cloud</h4>
            <p className="text-gray-700">Dashboard executivo com KPIs de eficiência energética, tempo em faixa térmica ideal e alertas preditivos configuráveis.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex items-start">
          <Activity className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900">App Mobile Supervisor</h4>
            <p className="text-gray-700">Mapa de calor da equipe em tempo real com notificações push em casos de risco térmico iminente.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Especificações Técnicas Avançadas</h4>
      <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
        <li><strong>Camada de IA/ML:</strong> Aprende padrões individuais de cada trabalhador, prevendo fadiga térmica com 94% de precisão</li>
        <li><strong>Durabilidade extrema:</strong> Mais de 100 lavagens industriais sem perda de desempenho</li>
        <li><strong>Compliance automático:</strong> Relatórios prontos para auditoria em conformidade com EN ISO 11612 e NFPA 2112</li>
        <li><strong>Escalabilidade plug-and-play:</strong> Do colete básico ao macacão full-body integrado</li>
        <li><strong>Autonomia estendida:</strong> Até 12 horas de operação contínua em condições extremas</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Métricas & Insights que Transformam Operações</h3>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <div className="flex items-center mb-3">
            <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
            <h4 className="font-semibold text-green-800">Redução de Pausas Não Programadas</h4>
          </div>
          <p className="text-3xl font-bold text-green-700 mb-1">22%</p>
          <p className="text-green-600 text-sm">Menos interrupções por frio intenso</p>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <div className="flex items-center mb-3">
            <Target className="h-5 w-5 text-blue-600 mr-2" />
            <h4 className="font-semibold text-blue-800">Aumento de Produtividade</h4>
          </div>
          <p className="text-3xl font-bold text-blue-700 mb-1">15%</p>
          <p className="text-blue-600 text-sm">Melhoria média no turno noturno</p>
        </div>
        
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <div className="flex items-center mb-3">
            <Zap className="h-5 w-5 text-purple-600 mr-2" />
            <h4 className="font-semibold text-purple-800">ROI Acelerado</h4>
          </div>
          <p className="text-3xl font-bold text-purple-700 mb-1">&lt; 9</p>
          <p className="text-purple-600 text-sm">Meses para retorno via redução de afastamentos</p>
        </div>
        
        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
          <div className="flex items-center mb-3">
            <ShieldCheck className="h-5 w-5 text-orange-600 mr-2" />
            <h4 className="font-semibold text-orange-800">Precisão de Alertas</h4>
          </div>
          <p className="text-3xl font-bold text-orange-700 mb-1">&lt; 2%</p>
          <p className="text-orange-600 text-sm">Taxa de falso-positivo em alarmes térmicos</p>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Benefícios que Redefinem a Gestão Industrial</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 mt-1 font-bold">✓</div>
          <div>
            <h4 className="font-semibold text-gray-900">Decisões Guiadas por Dados</h4>
            <p className="text-gray-700">Do chão de fábrica ao board executivo, cada métrica térmica se converte em insight estratégico mensurável.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 mt-1 font-bold">✓</div>
          <div>
            <h4 className="font-semibold text-gray-900">Compliance Automático</h4>
            <p className="text-gray-700">Relatórios de conformidade gerados automaticamente, eliminando trabalho manual e garantindo auditoria sem falhas.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 mt-1 font-bold">✓</div>
          <div>
            <h4 className="font-semibold text-gray-900">Escalabilidade Plug-and-Play</h4>
            <p className="text-gray-700">Implementação modular que cresce com sua operação, do piloto local à expansão multinacional.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 mt-1 font-bold">✓</div>
          <div>
            <h4 className="font-semibold text-gray-900">ROI Comprovado e Sustentável</h4>
            <p className="text-gray-700">Retorno mensurável através de redução de afastamentos, aumento de produtividade e otimização energética.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Status Atual e Validação de Mercado</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Nossos protótipos foram testados com sucesso em 3 países nórdicos (Noruega, Canadá e Finlândia), com feedback 
        inicial de uma líder escandinava de mineração indicando "redução perceptível de fadiga térmica" e dashboards 
        que "facilitaram significativamente a justificativa de CAPEX para novos EPIs". As patentes para o módulo de 
        IA térmica estão em processo de aprovação.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <FileSymlink className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Roadmap & Próximos Passos</h4>
          <ul className="text-gray-700 space-y-2">
            <li>• <strong>Q4 2024:</strong> Otimização de algoritmo para +30% de eficiência de bateria</li>
            <li>• <strong>Q1 2025:</strong> Integração de detecção de gases e vibração para safety 360°</li>
            <li>• <strong>Q2 2025:</strong> Pilotos comerciais com indústrias de óleo & gás</li>
            <li>• <strong>Q3 2025:</strong> Lançamento comercial para mercados de mineração e construção</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white">
        <p className="text-center text-lg font-semibold mb-2">
          "Você também quer transformar EPIs em centrais de inteligência operacional?"
        </p>
        <p className="text-center text-blue-100 italic mb-4">
          Fale com nossa equipe e descubra como levar Analytics & Performance para cada colaborador 
          exposto a temperaturas extremas. Cada inverno perdido representa horas de produção que não voltam mais.
        </p>
        <p className="text-center text-blue-100 font-medium">
          Entre em contato hoje mesmo e seja uma das primeiras indústrias a revolucionar 
          a segurança térmica com inteligência de dados em tempo real.
        </p>
      </div>
    </ProjectPageLayout>
  );
};

export default WorkwearProject;
